#!/usr/bin/env node
// SPDX-FileCopyrightText: 2025-present A2A Net <hello@a2anet.com>
//
// SPDX-License-Identifier: Apache-2.0

import { VERSION } from "./index.js";

const HELP = `a2a — CLI for the Agent2Agent (A2A) protocol

Usage:
  a2a [command] [options]

Options:
  -h, --help     Show help
  -v, --version  Show version
`;

function main(argv: string[]): number {
    const args = argv.slice(2);

    if (args.includes("-v") || args.includes("--version")) {
        process.stdout.write(`${VERSION}\n`);
        return 0;
    }

    if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
        process.stdout.write(HELP);
        return 0;
    }

    process.stderr.write(`Unknown command: ${args.join(" ")}\n\n${HELP}`);
    return 1;
}

process.exit(main(process.argv));
