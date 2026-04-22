import Modal from "../ui/Modal";

function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {" "}
      <div className="text-white space-y-4">
        {" "}
        <h2 className="text-2xl text-green-300">{project.title}</h2>{" "}
        <p>{project.desc}</p>{" "}
        <p className="text-green-400 text-sm">{project.tech}</p>{" "}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 border border-green-400 rounded hover:bg-green-400/20 transition"
        >
          {" "}
          Ver en GitHub{" "}
        </a>{" "}
      </div>{" "}
    </Modal>
  );
}
export default ProjectModal;
