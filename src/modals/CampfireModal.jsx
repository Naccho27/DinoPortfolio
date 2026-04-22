import Modal from "../ui/Modal";
import { motion } from "framer-motion";

function CampfireModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl text-white">
        {/* FONDO */}
        <img
          src="/campamento.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/*GLOW FOGATA */}
        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-orange-400/30 blur-3xl rounded-full" />

        {/* CHISPAS */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -120 - Math.random() * 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random(),
            }}
            className="absolute w-1 h-1 bg-orange-300 rounded-full"
            style={{
              left: `${48 + Math.random() * 6}%`,
              bottom: "35%",
            }}
          />
        ))}

        <motion.a
          href="mailto:https://mail.google.com/mail/u/0/?hl=es-419#inbox"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="absolute bottom-[50%] left-[13%] z-30"
        >
          <img
            src="/gmail.png"
            className="w-16 drop-shadow-[0_0_8px_rgba(255,120,0,0.8)]"
          />
        </motion.a>

        <motion.a
          href="https://wa.me/5493534404801"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="absolute bottom-[30%] left-[85%] z-20"
        >
          <img
            src="/whatsapp.png"
            className="w-20 drop-shadow-[0_0_8px_rgba(0,255,100,0.8)]"
          />
        </motion.a>
        <motion.a
          href="https://github.com/Naccho27"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="absolute bottom-[12%] left-[44%] z-30"
        >
          <img
            src="/github.png"
            className="w-20 drop-shadow-[0_0_8px_rgba(255,120,0,0.8)]"
          />
        </motion.a>

        {/* TEXTO */}
        <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 text-center text-sm opacity-90">
          Tocá el logo para contactarme
        </div>
      </div>
    </Modal>
  );
}

export default CampfireModal;
