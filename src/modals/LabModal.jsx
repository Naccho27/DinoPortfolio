import Modal from "../ui/Modal";
import EggCanvas from "../canvas/EggCanvas";
import ProjectModal from "../modals/ProjectModal";
import { useState } from "react";
import { motion } from "framer-motion";

function LabModal({ isOpen, onClose }) {
  const [index, setIndex] = useState(0);
  const [openProject, setOpenProject] = useState(false);
  const projects = [
    {
      title: "Sistema de pedidos",
      desc: "Backend para gestión de pedidos tipo fast food con personalización de productos.",
      tech: "Node.js - Express - PostgreSQL",
      github: "https://github.com/Naccho27/sistema-pedidos",
      color: "#4ecf20",
      glow: "rgba(0,255,100,0.4)",
    },
    {
      title: "Casino",
      desc: "Maquina tragamonedas(slots) simple.",
      tech: "Node.js - React - Express",
      github: "https://github.com/Naccho27/Casino.git",
      color: "#00cfff",
      glow: "rgba(0,200,255,0.4)",
    },
  ];
  const project = projects[index];
  return (
    <>
      {" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        {" "}
        <div className="w-full h-[80vh] flex flex-col items-center justify-center relative">
          {" "}
          {/* HUEVO */}{" "}
          <motion.div
            onClick={() => setOpenProject(true)}
            whileHover={{
              filter: "drop-shadow(0 0 25px rgba(150,255,100,0.9))",
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            {" "}
            <EggCanvas color={project.color} cracks={project.cracks} />{" "}
          </motion.div>{" "}
          {/* CAMBIAR PROYECTO */}{" "}
          <div className="absolute bottom-10 flex gap-6">
            {" "}
            <button
              onClick={() =>
                setIndex((i) => (i === 0 ? projects.length - 1 : i - 1))
              }
              className="text-green-300 text-3xl hover:scale-125"
            >
              {" "}
              ←{" "}
            </button>{" "}
            <button
              onClick={() => setIndex((i) => (i + 1) % projects.length)}
              className="text-green-300 text-3xl hover:scale-125"
            >
              {" "}
              →{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </Modal>{" "}
      <ProjectModal
        isOpen={openProject}
        onClose={() => setOpenProject(false)}
        project={project}
      />{" "}
    </>
  );
}
export default LabModal;
