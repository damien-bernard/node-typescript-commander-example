#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

interface Options {
  port: number
}

function print(options: Options): void {
  console.log(`port is '%s'`, options.port)
}

const program = new commander.Command()
program
  .version(version)
  .addOption(
    new commander.Option('-p, --port <port>', 'port number').choices([
      '80',
      '443',
      '8080',
      '8433',
    ]),
  )
  .action(print)

program.parse(process.argv)
