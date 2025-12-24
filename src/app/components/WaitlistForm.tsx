'use client'

import { useState, FormEvent } from 'react'

export default function WaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mdanvwao', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) onSuccess()
      else setError(true)
    } catch {
      setError(true)
    }
  }

  return (
    <div className="glass p-10 md:p-12 glow relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 text-center">
        <h2 id="waitlist-heading" className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Be First in Line
        </h2>
        <p className="text-white/50 mb-8">
          Join the waitlist and get notified when Scholar AI launches.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="input"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="input flex-1"
              />
              <button type="submit" className="btn-primary">Join Waitlist</button>
            </div>
          </div>
          {error && (
            <p className="text-red-400 text-sm" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
