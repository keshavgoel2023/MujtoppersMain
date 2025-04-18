import { motion } from "framer-motion";

const AnimatedHeadingLandingPage = () => {
  const text = "More Than Just Notes – MUJ Life, Sorted!";
  // Split text into words instead of letters
  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="font-bold tracking-tight text-black
         text-2xl sm:text-4xl md:text-5xl 
         flex flex-wrap justify-center 
         w-full max-w-[90%] mx-auto text-center mt-10"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              rotate: -10,
              filter: "blur(5px)",
            },
            visible: {
              opacity: 1,
              y: [20, -10, 0],
              rotate: [0, 5, -5, 0],
              filter: ["blur(5px)", "blur(0px)"],
              textShadow: [
                "0px 0px 10px rgba(255, 189, 89, 0.8)",
                "0px 0px 5px rgba(255, 189, 89, 0.5)",
                "none",
              ],
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1, // Slightly longer delay between words
              },
            },
          }}
          className="inline-block mx-1 my-1" // Add margin between words and vertical spacing
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeadingLandingPage;
