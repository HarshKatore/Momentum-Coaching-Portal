import { motion } from "framer-motion";
import ParticlesBackground from "../effects/ParticlesBackground";
import TypedText from "../effects/TypedText";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  typedStrings?: string[];
}

export default function PageHeader({
  title,
  subtitle,
  typedStrings,
}: PageHeaderProps) {
  // Split title into words for staggered animation
  const titleWords = title.split(" ");

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-950">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-3xl opacity-50 mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Accent gradient orb */}
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-accent/20 blur-3xl opacity-50 mix-blend-screen"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated title with word-by-word reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="inline-block mr-3 last:mr-0"
                style={{
                  transformOrigin: "bottom center",
                  perspective: "1000px",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Animated subtitle */}
        {(subtitle || typedStrings) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
          >
            {typedStrings ? (
              <div className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto h-16 flex items-center justify-center">
                <TypedText
                  strings={typedStrings}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop={true}
                  className="text-center"
                />
              </div>
            ) : (
              <motion.p
                className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, #e2e8f0, #cbd5e1, #94a3b8, #cbd5e1, #e2e8f0)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Animated underline */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "center" }}
            />
          </motion.div>
        )}

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1,
            type: "spring",
            stiffness: 200,
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Animated bottom wave - Removed due to background conflicts */}
    </section>
  );
}
