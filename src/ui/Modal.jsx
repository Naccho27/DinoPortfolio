import { motion } from "framer-motion";

/* Modal reutilizable */ function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {" "}
      {/* FONDO OSCURO */}{" "}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />{" "}
      {/* CONTENIDO */}{" "}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative bg-[#0b1f0b] border border-green-500 rounded-xl p-6 w-[90%] max-w-xl text-white shadow-2xl"
      >
        {" "}
        {/* BOTÓN CERRAR */}{" "}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          {" "}
          ✖{" "}
        </button>{" "}
        {/* CONTENIDO DINÁMICO */} {children}{" "}
      </motion.div>{" "}
    </div>
  );
}
export default Modal;
