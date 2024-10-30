import React from 'react'

interface LogoProps {
  src: string
  alt: string
  className?: string
}

export function Logo({ src, alt, className = "h-16 w-auto" }: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  )
}