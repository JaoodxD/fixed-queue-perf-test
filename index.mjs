import { group, bench, run } from 'mitata'

import PiscinaQueue from './node-fixed-queue.mjs'
import NodeQueue from './piscina-fixed-queue.mjs'

const queues = [PiscinaQueue, NodeQueue]
const kSize = 2048


group('max_size', () => {
  for (const QueueClass of queues) {
    bench(QueueClass.name, () => {
      const queue = new QueueClass()
      for (let i = 0; i < kSize - 1; i++) {
        queue.push(i)
      }
      for (let i = 0; i < kSize - 1; i++) {
        queue.shift()
      }
    })
  }
})

group('max_size + 1', () => {
  for (const QueueClass of queues) {
    bench(QueueClass.name, () => {
      const queue = new QueueClass()
      for (let i = 0; i < kSize; i++) {
        queue.push(i)
      }
      for (let i = 0; i < kSize; i++) {
        queue.shift()
      }
    })
  }
})

group('max_size * 2 + 1', () => {
  for (const QueueClass of queues) {
    bench(QueueClass.name, () => {
      const queue = new QueueClass()
      for (let i = 0; i < kSize * 2; i++) {
        queue.push(i)
      }
      for (let i = 0; i < kSize * 2; i++) {
        queue.shift()
      }
    })
  }
})

group('max_size * 64 + 1', () => {
  for (const QueueClass of queues) {
    bench(QueueClass.name, () => {
      const queue = new QueueClass()
      for (let i = 0; i < kSize * 64; i++) {
        queue.push(i)
      }
      for (let i = 0; i < kSize * 64; i++) {
        queue.shift()
      }
    })
  }
})

group('max_size * 1024 + 1', () => {
  for (const QueueClass of queues) {
    bench(QueueClass.name, () => {
      const queue = new QueueClass()
      for (let i = 0; i < kSize * 1024; i++) {
        queue.push(i)
      }
      for (let i = 0; i < kSize * 1024; i++) {
        queue.shift()
      }
    })
  }
})

await run()
