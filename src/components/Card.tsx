import { motion } from "framer-motion";
import { useState } from "react";

export default function Card({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-64 h-40 cursor-pointer relative"
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute w-full h-full flex items-center justify-center rounded-2xl shadow-xl bg-white dark:bg-gray-800 p-4 text-xl font-bold"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: "hidden", position: "absolute" }}
      >
        {front}
      </motion.div>
      <motion.div
        className="absolute w-full h-full flex items-center justify-center rounded-2xl shadow-xl bg-indigo-500 text-white p-4 text-xl font-bold"
        animate={{ rotateY: flipped ? 0 : -180 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: "hidden", position: "absolute" }}
      >
        {back}
      </motion.div>
    </motion.div>
  );
}

