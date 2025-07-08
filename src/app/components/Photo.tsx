import { forwardRef } from 'react'
import Image from 'next/image'

interface PhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  style?: React.CSSProperties
}

const Photo = forwardRef<HTMLDivElement, PhotoProps>(({ src, style, ...props }, ref) => {
  return (
    <div 
      ref={ref}
      className="touch-none bg-white rounded-[1px] shadow-white/50 shadow-md drop-shadow-md will-change-transform inline-block"
      style={style}
      {...props}
    >
      <img
        src={src}
        alt=""
        width={400}
        height={400}
        className="object-contain pointer-events-none touch-none w-auto h-auto max-w-[400px] max-h-[400px] p-1"
      />
    </div>
  )
})

Photo.displayName = 'Photo'

export default Photo