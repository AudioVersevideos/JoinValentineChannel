import React from "react";
import { Button } from "@/components/ui/button";
import { Lock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface TelegramUnlockProps {
  isUnlocked?: boolean;
  telegramLink?: string;
  onTelegramClick?: () => void;
}

const TelegramUnlock = ({
  isUnlocked = false,
  telegramLink = "https://t.me/yourchannel",
  onTelegramClick = () => {},
}: TelegramUnlockProps) => {
  return (
    <div className="w-full min-h-[100px] bg-gradient-to-r from-pink-100 to-red-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: isUnlocked ? [1, 1.1, 1] : 1,
          transition: { duration: 0.5 },
        }}
      >
        <Button
          size="lg"
          className={`w-full md:w-auto min-w-[200px] text-lg gap-2 transition-all duration-500 ${isUnlocked ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
          onClick={isUnlocked ? onTelegramClick : undefined}
          disabled={!isUnlocked}
        >
          {isUnlocked ? (
            <>
              <ExternalLink className="w-5 h-5" />
              Join Telegram
            </>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              Complete Ads to Unlock
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default TelegramUnlock;
