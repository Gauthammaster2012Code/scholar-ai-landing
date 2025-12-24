'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ThankYou from './components/ThankYou'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="mesh-gradient min-h-screen">
        <main id="main">
          <Hero />
          <HowItWorks />
          <ValueProps />
          <Suspense fallback={<WaitlistForm />}>
            <Waitlist />
          </Suspense>
          <Footer />
        </main>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pulse-glow" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="fade-up mb-8">
          <div className="inline-flex p-4 rounded-3xl glass glow float">
            <Image src="/scholar-ai-graduation-cap.svg" alt="Scholar AI logo" width={64} height={64} priority />
          </div>
        </div>

        {/* Badge */}
        <div className="fade-up delay-100 mb-6">
          <span className="badge">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Coming 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Study Smarter</span>
          <br />
          <span className="gradient-text-primary">Not Harder</span>
        </h1>

        {/* Subhead */}
        <p className="fade-up delay-300 text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Scholar AI will be your AI-powered study companion, helping you understand 
          any subject with clear, step-by-step explanations.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#waitlist" className="btn-primary">
            Join the Waitlist
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#how-it-works" className="btn-secondary">Learn More</a>
        </div>
      </div>

    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Ask Anything', desc: 'Type your question or upload a problem you need help understanding.', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { num: '02', title: 'Get Clarity', desc: 'Receive clear, step-by-step explanations tailored to your level.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { num: '03', title: 'Master It', desc: 'Build real understanding and apply your knowledge with confidence.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
  ]

  return (
    <section id="how-it-works" className="section" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Simple Process</p>
          <h2 id="how-heading" className="text-4xl md:text-5xl font-bold gradient-text">
            How Scholar AI Will Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <article key={step.num} className="glass glass-hover p-8 group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-white/10 group-hover:text-primary/30 transition-colors">{step.num}</span>
                <div className="icon-box bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueProps() {
  const values = [
    { title: 'Built for Understanding', desc: 'Explanations designed to teach concepts, not just provide answers.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'primary' },
    { title: 'Always Available', desc: 'Study help whenever you need it—morning, noon, or midnight.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'violet' },
    { title: 'For Every Student', desc: 'From middle school to university, across every subject.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'accent' },
  ]

  const colors: Record<string, string> = {
    primary: 'bg-primary/10 text-primary',
    violet: 'bg-violet-500/10 text-violet-400',
    accent: 'bg-accent/10 text-accent',
  }

  return (
    <section className="section" aria-labelledby="value-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3">Why Scholar AI?</p>
          <h2 id="value-heading" className="text-4xl md:text-5xl font-bold gradient-text">
            Learning, Reimagined
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass glass-hover p-8 text-center border-gradient">
              <div className={`icon-box ${colors[v.color]} mx-auto mb-6`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-white/50 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Waitlist() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success') === 'true'

  return (
    <section id="waitlist" className="section" aria-labelledby="waitlist-heading">
      <div className="max-w-2xl mx-auto">
        {success ? <ThankYou /> : <WaitlistForm />}
      </div>
    </section>
  )
}

function WaitlistForm() {
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

        <form action="https://formspree.io/f/mdanvwao" method="POST" className="space-y-4">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="input flex-1"
            />
            <button type="submit" className="btn-primary">
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/scholar-ai-graduation-cap.svg" alt="" width={32} height={32} aria-hidden="true" />
            <span className="font-semibold">Scholar AI</span>
          </div>
          
          <p className="text-white/40 text-sm text-center">
            An upcoming AI study assistant. Currently in development.
          </p>
          
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Scholar AI
          </p>
        </div>
      </div>
    </footer>
  )
}
