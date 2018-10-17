#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const prompts = require('prompts');
const { convertFile } = require('convert-svg-to-png');

function fail(msg) {
  console.log(`✖ ${msg}`);
}

function succeed(msg) {
  console.log(`✔ ${msg}`);
}

async function convert(outputPath, icon) {
  const input = path.join(__dirname, `svg/${icon}.svg`);
  const doesExist = await fs.pathExists(input);

  if (!doesExist) {
    return false;
  }

  const output = await convertFile(input, {
    height: 512,
    width: 512,
    outputFilePath: outputPath,
  });

  return output;
}

async function convertAll(outputDir) {
  const icons = fs.readdirSync(path.join(__dirname, 'svg/'))
    .filter(icon => icon.endsWith('.svg'))
    .map(icon => icon.slice(0, -4));

  /* eslint-disable */
  for (icon of icons) {
    const outputPath = path.resolve(outputDir, `${icon}.png`);
    const file = await convert(outputPath, icon);

    if (!file) {
      fail(`A problem occured while generating the ${icon} icon.`);
    } else {
      succeed(`Generated ${icon} icon at ${file}`);
    }
  }
  /* eslint-enable */
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
      name: 'primary',
      message: 'Primary foreground color:',
      initial: '#ffffff',
    },
    {
      type: 'text',
      name: 'secondary',
      message: 'Secondary foreground color:',
      initial: '#efefef',
    },
    {
      type: 'text',
      name: 'bg',
      message: 'Background color:',
      initial: '#1e1e1e',
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

    const { output, icons } = response;

    if (icons.includes('all')) {
      await convertAll(output);
    } else {
      /* eslint-disable */
      for (icon of icons) {
        icon = icon.replace(' ', '_');
        const outputPath = path.resolve(output, `${icon}.png`);
        const file = await convert(outputPath, icon);

        if (!file) {
          fail(`Icon ${icon} does not exist.`);
        } else {
          succeed(`Generated ${icon} icon at ${file}`);
        }
      }
      /* eslint-enable */
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
