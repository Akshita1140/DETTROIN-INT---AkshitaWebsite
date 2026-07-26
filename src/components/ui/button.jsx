import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-label-md text-label-md rounded transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-aligarh-red text-white hover:brightness-110 shadow-sm',
        secondary:
          'border border-excellence-gold text-aligarh-red hover:bg-heritage-cream',
        gold: 'bg-excellence-gold text-ink-black hover:brightness-105',
        outlineWhite: 'border border-white/30 text-white hover:bg-white/10',
        ghost: 'text-aligarh-red hover:bg-heritage-cream',
      },
      size: {
        default: 'px-8 py-3',
        sm: 'px-4 py-2',
        lg: 'px-10 py-4',
        icon: 'p-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export const Button = React.forwardRef(
  ({ className, variant, size, as: Comp = 'button', ...props }, ref) => {
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
