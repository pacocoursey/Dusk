#!/usr/bin/env node

const ora = require('ora');
const fs = require('fs-extra');
const svgexport = require('svgexport');

/**
 * Use svgexport to convert an svg to a png of size 512 px.
 */

async function convert(inputPath, icon, spinner) {
  await svgexport.render({
    input: inputPath,
    output: `${icon}.png 512:512`,
  }, (err) => {
    if (err) {
      spinner.fail(err);
    } else {
      spinner.succeed(`Generated ${icon}.png!`);
    }
  });
}

// Exit if no icons specified
if (process.argv.length <= 2) {
  console.error('No icon specified.');
  process.exit();
}

// Get a list of icons
const icons = [...process.argv.slice(2)];

// Generate each specified icon if there exists an svg for it.
icons.forEach(async (icon) => {
  const path = `./svg/${icon}.svg`;
  const fn = await fs.pathExists(path);
  const spinner = ora(`Generating the ${icon} icon...`).start();
  if (fn) {
    await convert(path, icon, spinner);
  } else {
    spinner.fail(`Dusk does not include a ${icon} icon.`);
  }
});
