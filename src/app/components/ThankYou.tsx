'use client'

export default function ThankYou() {
  return (
    <div className="glass p-10 md:p-12 glow text-center" role="status" aria-live="polite">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-2">You&apos;re on the list!</h2>
      <p className="text-white/50">
        Thanks for joining the Scholar AI waitlist.<br />
        We&apos;ll notify you when the project is ready.
      </p>
    </div>
  )
}
