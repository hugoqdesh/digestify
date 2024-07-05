'use client'

import { useEffect, useState } from 'react'
import OutputWrapper from '@/components/output-wrapper'
import { generateRandomSecret } from '@/helpers/crypto'
import { cn } from '@/lib/utils'

export default function SecretGenerator() {
  const [secret32, setSecret32] = useState('')
  const [secret64, setSecret64] = useState('')

  useEffect(() => {
    setSecret32(generateRandomSecret(32))
    setSecret64(generateRandomSecret(64))
  }, [])

  return (
    <main className="flex-1 flex flex-col items-center">
      <span className="flex items-center gap-2 text-3xl mt-12 text-center px-4">
        Your randomly generated Secrets.
      </span>
      <section className="flex flex-col items-start justify-center w-full gap-4 my-12 px-4 sm:px-12 max-w-xs sm:max-w-sm md:max-w-5xl">
        <div className="flex flex-col gap-2 items-center w-full">
          <label
            className="text-lg font-semibold w-full"
            htmlFor="keygen-secret-32"
          >
            Secret 32 characters
          </label>
          <OutputWrapper
            className={cn('code w-full', !secret32 && 'text-transparent')}
            type="code"
            buttonPosition="outside"
          >
            {secret32 ? secret32 : '.'.repeat(32)}
          </OutputWrapper>
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <label
            className="text-lg font-semibold w-full"
            htmlFor="keygen-secret-64"
          >
            Secret 64 characters
          </label>
          <OutputWrapper
            className={cn(
              'code w-full max-w-xs sm:max-w-sm md:max-w-full',
              !secret64 && 'text-transparent'
            )}
            type="code"
            buttonPosition="outside"
          >
            {secret64 ? secret64 : '.'.repeat(64)}
          </OutputWrapper>
        </div>
      </section>
    </main>
  )
}
