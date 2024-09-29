import { describe, expect, it, vi } from 'vitest'

import { hello } from '@/index'

describe('hello function', () => {
  it('should log "Hello, world!" to the console', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    hello()
    expect(consoleSpy).toHaveBeenCalledWith('Hello, world!')
    consoleSpy.mockRestore()
  })
})
