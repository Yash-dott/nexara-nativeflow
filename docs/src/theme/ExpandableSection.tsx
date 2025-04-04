import React, { useState, type JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function ExpandableSection({
  title,
  children,
  defaultExpanded = false,
}: ExpandableSectionProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="expandable-section">
      <button
        className="expandable-section-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="expandable-section-content"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 