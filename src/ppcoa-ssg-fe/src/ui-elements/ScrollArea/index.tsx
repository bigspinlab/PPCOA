'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../Button';

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  showArrowButtons?: boolean;
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ showArrowButtons = false, className, children, ...props }, ref) => {
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = (scrollOffset: number) => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      }
    };

    return (
      <ScrollAreaPrimitive.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
        {showArrowButtons ? (
          <div className="hidden pb-9 md:pr-20 md:flex md:gap-8 lg:pr-32 justify-end">
            <Button variant="ghost" className="disabled:opacity-25 bg-transparent" onClick={() => handleScroll(-1000)}>
              <Image className="h-8 w-8" alt="arrow-left" src="/arrow-left.svg" width={34} height={34} unoptimized />
            </Button>
            <Button variant="ghost" className="disabled:opacity-25 bg-transparent" onClick={() => handleScroll(1000)}>
              <Image className="h-8 w-8" alt="arrow-right" src="/arrow-right.svg" width={34} height={34} unoptimized />
            </Button>
          </div>
        ) : null}
        <ScrollAreaPrimitive.Viewport ref={scrollAreaRef} className="h-full w-full rounded-[inherit]">
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  }
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
