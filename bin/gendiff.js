#!/usr/bin/env node

import { program } from 'commander';
import parse from '../src/parse.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const obj1 = parse(filepath1);
    console.log(obj1);
    const obj2 = parse(filepath2);
    console.log(obj2);
  });

program.parse();
