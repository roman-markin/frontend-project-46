#!/usr/bin/env node

import { program } from 'commander';
import parse from '../src/parse.js';
import gendiff from '../src/gendiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const parsedObj1 = parse(filepath1);
    const parsedObj2 = parse(filepath2);
    const result = gendiff(parsedObj1, parsedObj2);
    console.log(result);
  });

program.parse();
