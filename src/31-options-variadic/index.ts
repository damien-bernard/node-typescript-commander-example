#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

interface Options {
  value: string
  values: string[]
}

function print(options: Options): void {
  console.log(`value is '%s' and values is '%s'`, options.value, options.values)
}

const program = new commander.Command()
program
  .version(version)
  .option('--value <value>', 'value')
  .option('--values <values...>', 'arrays of values')
  .action(print)

program.parse(process.argv)
