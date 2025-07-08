import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  paragraph: string
  style?: React.CSSProperties
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ title, paragraph, style, ...props }, ref) => (
  <div
    ref={ref}
    className="inline-block font-mono bg-green-50 rounded shadow-md will-change-transform p-8 w-[300px] h-[400px] flex-col items-center justify-center border border-gray-200"
    style={style}
    {...props}
  >
    <h2 className="text-2xl mb-8 text-neutral-900">{title}</h2>
    <p className="text-base text-neutral-900">{paragraph}</p>
  </div>
))

Card.displayName = 'Card'

export default Card 