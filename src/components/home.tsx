import React, { useState, useCallback } from "react";
import ProgressHeader from "./ProgressHeader";
import AdClickSection from "./AdClickSection";
import TelegramUnlock from "./TelegramUnlock";
import { motion, AnimatePresence } from "framer-motion";
import Celebration from "./Celebration";
import FlowerConfetti from "./FlowerConfetti";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const totalSteps = 10;

  const adLinks = [
    "https://eavesdroppingfurniture.com/n3w285ip5?key=34a463f932839bc449167806f4122c4c",
    "https://eavesdroppingfurniture.com/rfrr9cu15?key=b21e1cea863eba63ddfe855c86f18220",
    "https://eavesdroppingfurniture.com/cx007hhn?key=ce85bb68288c01592b2c833a0a072905",
    "https://eavesdroppingfurniture.com/fdm975p3cd?key=8e93c4d68a8b3bce91c56d935de7db32",
    "https://eavesdroppingfurniture.com/ug8dynxccg?key=91d51c15939aba07282ba4c35b1f49e2",
    "https://eavesdroppingfurniture.com/eybajmqy?key=cbed1354125eff04a90502acec0c9637",
    "https://eavesdroppingfurniture.com/hfgc9r5njb?key=e43e6e73e0b820b04e1bdc36ef0c3867",
    "https://eavesdroppingfurniture.com/w3ppaqaz?key=99b22d3a027e27321ede632052e07c4e",
    "https://eavesdroppingfurniture.com/g3rp5c4p5?key=b1a741136d527e12714f4dba63eb33f4",
    "https://eavesdroppingfurniture.com/af7cvkener?key=6fb8b394c75691cad59e0e197f213b5d",
  ];

  const handleAdClick = useCallback(() => {
    window.open(adLinks[currentStep], "_blank");
    setIsTimerActive(true);
  }, [currentStep]);

  const [showCelebration, setShowCelebration] = useState(false);
  const [showFlowerConfetti, setShowFlowerConfetti] = useState(false);

  const handleTelegramClick = useCallback(() => {
    window.open("https://t.me/+u8Vp4_BvrtxlOGU1", "_blank");
  }, []);

  const handleTimerComplete = useCallback(() => {
    setIsTimerActive(false);
    const newStep = Math.min(currentStep + 1, totalSteps);
    setCurrentStep(newStep);
    setShowFlowerConfetti(true);
    if (newStep === totalSteps) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [currentStep, totalSteps]);

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl font-bold shadow-lg">
        2025 වැලන්ටයින් ලීක් ❤️🍆💦
      </div>

      <div className="text-center py-2 bg-gradient-to-r from-pink-400 to-red-400 text-white shadow-md">
        පහල බටන් ඒක් 10 පාරක් එබුවට පස්සෙ Unlock උනාම Join වෙන්න පුලුවන්.
      </div>

      <ProgressHeader
        currentStep={currentStep}
        totalSteps={totalSteps}
        message={currentStep === totalSteps ? "Congratulations!" : undefined}
      />

      <div className="pt-[80px]">
        <AdClickSection
          currentAd={currentStep + 1}
          onAdClick={handleAdClick}
          isTimerActive={isTimerActive}
          onTimerComplete={handleTimerComplete}
        />

        <TelegramUnlock
          isUnlocked={currentStep === totalSteps}
          onTelegramClick={handleTelegramClick}
        />

        <div className="text-center p-4 text-sm text-gray-600">
          Unlock Button එබුවට පස්සේ වෙන තැනකට යනවා. ඊටපස්සේ තප්පර 5 ගියාම Back
          කරලා නැවත Unlock Button එක ඔබන්න.
        </div>
      </div>
      <AnimatePresence>
        {showCelebration && <Celebration />}
        {showFlowerConfetti && (
          <FlowerConfetti onComplete={() => setShowFlowerConfetti(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
