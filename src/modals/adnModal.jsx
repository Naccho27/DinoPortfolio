import Modal from "../ui/Modal";
import { motion } from "framer-motion";

function AdnModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* CONTENEDOR RELATIVO */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
        {/* VIDEO */}
        <video
          src="/adn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* CONTENEDOR DE TECNOLOGÍAS */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* LADO IZQUIERDO */}
          <div className="absolute left-[10%] flex flex-col gap-16 items-end">
            {["Node.js", "Express"].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.4,
                  duration: 0.6,
                }}
                className="text-green-300 text-sm bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* LADO DERECHO */}
          <div className="absolute right-[10%] flex flex-col gap-16 items-start">
            {["React", "MySQL"].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.4 + 0.3,
                  duration: 0.6,
                }}
                className="text-green-300 text-sm bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AdnModal;
