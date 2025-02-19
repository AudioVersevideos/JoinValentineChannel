import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { ExternalLink, Timer } from "lucide-react";
import { motion } from "framer-motion";

interface AdClickSectionProps {
  currentAd?: number;
  onAdClick?: () => void;
  isTimerActive?: boolean;
  onTimerComplete?: () => void;
}

const AdClickSection = ({
  currentAd = 1,
  onAdClick = () => {},
  isTimerActive = false,
  onTimerComplete = () => {},
}: AdClickSectionProps) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      onTimerComplete();
      setTimeLeft(5);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft, onTimerComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-gradient-to-r from-pink-100 to-red-100 p-4">
      <Card className="w-full max-w-md p-6 space-y-6 border-2 border-pink-200 shadow-lg bg-white/80 backdrop-blur-sm">
        {isTimerActive ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <Timer className="w-12 h-12 text-blue-500" />
            <h2 className="text-2xl font-bold text-center">
              Returning in {timeLeft} seconds...
            </h2>
            <Progress value={(timeLeft / 5) * 100} className="w-full" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">
              2025 වැලන්ටයින් ලීක් ❤️🍆💦 #{currentAd}
            </h2>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="w-full max-w-sm h-16 text-lg font-semibold"
                onClick={onAdClick}
              >
                <ExternalLink className="w-6 h-6 mr-2" />
                Click to Unlock
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Click the button above to continue your progress
            </p>
          </motion.div>
        )}
      </Card>
    </div>
  );
};

export default AdClickSection;
