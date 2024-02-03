#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

function print(): void {
  console.log('Hello World from Commander')
}

const program = new commander.Command()
program.version(version).action(print)

program.parse(process.argv)
