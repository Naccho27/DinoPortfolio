import { motion } from "framer-motion";

/*
  Este componente representa el dinosaurio del home.
  Usamos framer-motion para animarlo.
*/

function Dino({ onClick }) {
  return (
    <motion.img
      src="/dino.png" 
      alt="Dinosaurio"
      /*
        initial: estado inicial al renderizar
        animate: animación constante
      */
      animate={{
        y: [-8, 8],
        rotate: [-1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      /*
        transición:
        duration: cuánto dura
        repeat: infinito
      */
    
      /*
        mientras pasás el mouse
      */
      whileHover={{
        scale: 1.1,
        rotate: 2,
      }}
      /*
        al hacer click
      */
      whileTap={{
        scale: 0.95,
      }}
      /*
        evento click
      */
      onClick={onClick}
      /*
        clases de Tailwind
      */
      className="w-72 cursor-pointer select-none drop-shadow-[0_0_20px_rgba(0,255,100,0.3)]"
      
    />
  );
}

export default Dino;
