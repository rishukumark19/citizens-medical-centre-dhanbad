import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollReveal – wraps any content with a smooth entrance animation
 * triggered when the element enters the viewport.
 *
 * Props:
 *  children      – content to reveal
 *  delay         – animation delay in seconds (default 0)
 *  direction     – 'up' | 'down' | 'left' | 'right' | 'scale' | 'none' (default 'up')
 *  duration      – animation duration in seconds (default 0.7)
 *  className     – extra classes on the wrapper
 *  once          – only animate once (default true)
 *  amount        – how much of element must be in view (default 0.15)
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.15,
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  const variants = {
    hidden: {
      opacity: 0,
      y:    direction === 'up'    ?  28 : direction === 'down'  ? -28 : 0,
      x:    direction === 'left'  ?  28 : direction === 'right' ? -28 : 0,
      scale: direction === 'scale' ? 0.92 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
