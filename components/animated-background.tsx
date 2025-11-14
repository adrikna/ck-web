'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse" />
    </div>
  )
}
