// Copyright (c) Microsoft Corporation.
// Use of this source code is governed by the MIT license in the LICENSE file.

const { getHeapStatistics } = require('node:v8');

process.parentPort.postMessage(getHeapStatistics().heap_size_limit);
process.parentPort.once('message', () => {
  const allocations = [];
  while (true) {
    allocations.push(new Array(128 * 1024).fill(allocations.length));
  }
});
