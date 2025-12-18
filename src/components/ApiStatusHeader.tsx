import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export const ApiStatusHeader = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-20 right-4 z-40 glass rounded-full px-4 py-2 flex items-center gap-2"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
      />
      <div className="flex items-center gap-2 text-xs">
        <Activity className="w-3 h-3 text-muted-foreground" />
        <span className="text-muted-foreground">API Status:</span>
        <span className="text-green-500 font-medium">Operational</span>
      </div>
    </motion.div>
  );
};
