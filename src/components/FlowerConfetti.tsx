import { motion } from "framer-motion";

interface FlowerConfettiProps {
  onComplete?: () => void;
}

const FlowerConfetti = ({ onComplete }: FlowerConfettiProps) => {
  const colors = [
    "#FF69B4", // Pink
    "#FF1493", // Deep Pink
    "#32CD32", // Lime Green
    "#00FF00", // Bright Green
    "#FF0000", // Red
    "#1E90FF", // Dodger Blue
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(100)].map((_, i) => {
        const x = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const size = Math.random() * 8 + 4; // 4-12px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isSquare = Math.random() > 0.3; // 70% rectangles, 30% squares

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: isSquare ? size : size * 2,
              height: size,
              backgroundColor: color,
              borderRadius: "1px",
            }}
            initial={{
              top: "-5%",
              left: `${x}vw`,
              opacity: 1,
              rotate: Math.random() * 360,
            }}
            animate={{
              top: ["0%", "100%"],
              left: [`${x}vw`, `${x + (Math.random() * 20 - 10)}vw`],
              opacity: [1, 1, 0],
              rotate: [
                `${Math.random() * 360}deg`,
                `${Math.random() * 720}deg`,
              ],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              delay,
              ease: [0.4, 0, 0.6, 1],
              onComplete: i === 0 ? onComplete : undefined,
            }}
          />
        );
      })}
    </div>
  );
};

export default FlowerConfetti;
