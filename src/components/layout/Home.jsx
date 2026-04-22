import { motion } from "framer-motion";

function Home({ onEnter }) {
  return (
    <div
      className="
        relative w-full min-h-screen overflow-y-auto text-white
        bg-[url('/jungla.webp')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* OVERLAY CORREGIDO */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* CONTENIDO */}
      <div
        className="
          relative z-10 px-6 py-10
          min-h-screen
          flex flex-col justify-start md:justify-center
        "
      >
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* IZQUIERDA */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
              <img
                src="/foto.jpeg"
                alt="Tu foto"
                className="w-full h-full object-cover object-top scale-80"
              />
            </div>

            <motion.div
              className="w-28 md:w-40 opacity-80"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/dino.png"
                alt="Dino"
                className="w-full object-contain drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]"
              />
            </motion.div>
          </div>

          {/* DERECHA */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl font-bold text-green-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                Hola, soy Ignacio Gonzalez 🦖
              </h1>

              <p className="text-gray-200 mt-2">
                Analista de sistemas
              </p>
            </div>

            <div>
              <h2 className="text-xl text-green-300 font-semibold mb-2">
                Quién soy
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                Soy desarrollador enfocado en backend y algo de frontend.
                <br />
                <br />
                Actualmente curso la carrera Analista en Sistemas en el Instituto Leibnitz.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-green-300 font-semibold mb-2">
                Intereses
              </h2>

              <ul className="text-gray-300 text-sm list-disc ml-5 space-y-1 text-left">
                <li>Programación</li>
                <li>Videojuegos</li>
                <li>Backend</li>
              </ul>
            </div>

            <motion.button
              onClick={onEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold w-fit mx-auto md:mx-0"
            >
              Explorar isla
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;