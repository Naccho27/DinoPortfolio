import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Island({ onBack, onSelect }) {
  const debug = false;

  const imgRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        setHeight(imgRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-screen h-screen overflow-auto bg-black">

      {/* CONTENEDOR AJUSTADO A LA IMAGEN */}
      <div
        className="relative w-full"
        style={{ height: height || "auto" }}
      >

        {/* IMAGEN */}
        <img
          ref={imgRef}
          src="/isla.png"
          alt="Isla"
          className="w-full h-auto object-contain select-none pointer-events-none"
        />

        {/* BOTÓN */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-50 bg-black/60 text-white px-4 py-2 rounded-lg border border-green-400 backdrop-blur"
        >
          ← Volver
        </button>

        {/* ADN */}
        <motion.div
          onClick={() => onSelect("dna")}
          className={`absolute top-[20%] left-[13%] w-[21%] h-[13%] cursor-pointer z-40 ${
            debug ? "bg-green-500/40 border-2 border-green-300" : ""
          }`}
        />

        {/* LAB */}
        <motion.div
          onClick={() => onSelect("lab")}
          className={`absolute top-[31%] left-[61%] w-[31%] h-[12%] cursor-pointer z-40 ${
            debug ? "bg-blue-500/40 border-2 border-blue-300" : ""
          }`}
        />

        {/* FOGATA */}
        <motion.div
          onClick={() => onSelect("contact")}
          className={`absolute top-[7%] left-[59%] w-[16%] h-[10%] cursor-pointer z-40 ${
            debug ? "bg-orange-500/40 border-2 border-orange-300" : ""
          }`}
        />

      </div>
    </div>
  );
}

export default Island;