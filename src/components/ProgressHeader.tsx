import React from "react";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

interface ProgressHeaderProps {
  currentStep?: number;
  totalSteps?: number;
  message?: string;
}

const messages = [
  "Let's get started!",
  "Great progress!",
  "Keep going!",
  "You're doing great!",
  "Halfway there!",
  "Almost done!",
  "Final stretch!",
  "So close!",
  "One more to go!",
  "Congratulations!",
];

const ProgressHeader = ({
  currentStep = 0,
  totalSteps = 10,
  message = messages[0],
}: ProgressHeaderProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-background border-b z-50 p-4 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              Progress: {currentStep}/{totalSteps}
            </span>
            <motion.span
              key={message}
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {message}
            </motion.span>
          </div>

          <Progress value={progress} className="h-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressHeader;
