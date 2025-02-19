import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Celebration = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-pink-500/80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center text-white"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 10 }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.2, 1, 1.2, 1],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
        <div className="flex justify-center gap-4 mb-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              }}
            >
              <Heart className="w-12 h-12 fill-white" />
            </motion.div>
          ))}
        </div>
        <p className="text-xl">Your Telegram channel is now unlocked! 💘</p>
      </motion.div>
    </motion.div>
  );
};

export default Celebration;
