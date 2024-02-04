#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

function print(value: string, values: string[]): void {
  if (values.length > 0) {
    console.log(`value is '%s' and values is '%s'`, value, values)
  } else {
    console.log(`value is '%s'`, value)
  }
}

const program = new commander.Command()
program
  .version(version)
  .argument('<value>', 'value') // <value> is required
  .argument('[values...]', 'arrays of values') // [values...] is optional
  .action(print)

program.parse(process.argv)
