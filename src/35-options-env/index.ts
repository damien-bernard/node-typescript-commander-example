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
    new commander.Option('-p, --port <port>', 'port number').env('PORT'),
  )
  .action(print)

program.parse(process.argv)
