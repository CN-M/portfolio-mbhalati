export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
      </span>
      Available for hire
    </div>
  )
}

