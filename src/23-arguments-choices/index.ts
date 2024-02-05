#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

function print(port: number): void {
  console.log(`port is '%s'`, port)
}

const program = new commander.Command()
program
  .version(version)
  .addArgument(
    new commander.Argument('<port>', 'port number').choices([
      '80',
      '443',
      '8080',
      '8433',
    ]),
  )
  .action(print)

program.parse(process.argv)
