'use client'

import React from 'react'

import Image from 'next/image'

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  quality = 100,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  quality?: number
}) {
  const base64 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGNgYGBg+H9rgd//J6ujQWww+H9pefv/UzO2IQS+vUv7cud4JogDAMgDEhA+9jbyAAAAAElFTkSuQmCC'

  return (
    <Image
      src={src}
      width={width}
      height={height}
      blurDataURL={base64}
      placeholder='blur'
      alt={alt}
      className={`${className}`}
      quality={quality}
      unoptimized
      // style={{ objectFit: 'contain' }}
    />
  )
}

export default BlurImage
