#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

interface Options {
  port: number
  http: boolean
}

function print(options: Options): void {
  console.log(`port is '%s' and http '%s'`, options.port, options.http)
}

const program = new commander.Command()
program
  .version(version)
  .addOption(new commander.Option('-p, --port <port>', 'port number'))
  .addOption(
    new commander.Option('--http', 'http port number')
      .default(false)
      .conflicts('port'),
  )
  .action(print)

program.parse(process.argv)
