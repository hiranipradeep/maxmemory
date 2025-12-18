import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.2, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once 
  });
  
  return { ref, isInView };
};
