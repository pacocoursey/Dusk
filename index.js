#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const prompts = require('prompts');
const { promisify } = require('util');
const { convertFile } = require('convert-svg-to-png');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

function fail(msg) {
  console.log(`✖ ${msg}`);
}

function succeed(msg) {
  console.log(`✔ ${msg}`);
}

function hexMatch(str) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(str);
}

async function convert(inputPath, outputPath) {
  const doesExist = await fs.pathExists(inputPath);

  if (!doesExist) {
    return false;
  }

  const output = await convertFile(inputPath, {
    height: 512,
    width: 512,
    outputFilePath: outputPath,
  });

  return output;
}

async function convertIcons(options) {
  const {
    output,
    fg,
    fg2,
    bg,
    icons,
  } = options;

  /* eslint-disable */
  for (icon of icons) {
    try {
      icon = icon.replace(' ', '_');
      const outputPath = path.resolve(output, `${icon}.png`);
      const inputPath = path.join(__dirname, `svg/${icon}.svg`);

      // Read the original svg file
      let tmpFile = await readFile(inputPath, 'utf-8');

      // Replace with specified colors
      tmpFile = tmpFile
        .replace(/{{bg}}/g, bg)
        .replace(/{{fg}}/g, fg)
        .replace(/{{fg2}}/g, fg2);

      // Write the temporary svg file
      const tmpFilePath = path.resolve(output, `${icon}-tmp.svg`);
      await writeFile(tmpFilePath, tmpFile, 'utf-8');

      // Pass the temporary svg file to convert it
      const file = await convert(tmpFilePath, outputPath);

      // Check if conversion was successful
      if (!file) {
        fail(`Icon ${icon} does not exist.`);
      } else {
        succeed(`Generated ${icon} icon at ${file}`);
      }

      // Remove the generated temporary file
      await fs.remove(tmpFilePath);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
  /* eslint-enable */
}

async function convertAll(response) {
  const {
    output,
    fg,
    fg2,
    bg,
  } = response;

  // Get a list of all icons in the svg folder.
  // Filter out dotfiles, remove the .svg extension
  const icons = fs.readdirSync(path.join(__dirname, 'svg/'))
    .filter(icon => icon.endsWith('.svg'))
    .map(icon => icon.slice(0, -4));

  convertIcons({
    output,
    fg,
    fg2,
    bg,
    icons,
  });
}

async function start() {
  const questions = [
    {
      type: 'text',
      name: 'output',
      message: 'Output directory:',
      initial: '.',
    },
    {
      type: 'text',
      name: 'fg',
      message: 'Primary foreground color:',
      initial: '#ffffff',
      validate: value => (!hexMatch(value) ? 'Please enter a valid hex code.' : true),
    },
    {
      type: 'text',
      name: 'fg2',
      message: 'Secondary foreground color:',
      initial: '#efefef',
      validate: value => (!hexMatch(value) ? 'Please enter a valid hex code.' : true),
    },
    {
      type: 'text',
      name: 'bg',
      message: 'Background color:',
      initial: '#1e1e1e',
      validate: value => (!hexMatch(value) ? 'Please enter a valid hex code.' : true),
    },
    {
      type: 'list',
      name: 'icons',
      message: 'Enter icons to generate:',
      initial: 'all',
      separator: ',',
    },
  ];

  try {
    const response = await prompts(questions, {
      onCancel: () => {
        fail('Cancelled dusk-icons.');
        process.exit(1);
      },
    });

    const { icons } = response;

    if (icons.includes('all')) {
      try {
        await convertAll(response);
      } catch (err) {
        console.log(err);
        process.exit(1);
      }
    } else {
      convertIcons(response);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
