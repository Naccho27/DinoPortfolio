import { useState } from "react";
import Home from "./components/layout/Home.jsx";
import Island from "./components/layout/Island.jsx";
import AdnModal from "./modals/adnModal.jsx";
import LabModal from "./modals/LabModal.jsx";
import CampfireModal from "./modals/CampfireModal.jsx";
function App() {
  const [screen, setScreen] = useState("home");
  const [section, setSection] = useState(null);
  return (
    <>
      {" "}
      {screen === "home" && <Home onEnter={() => setScreen("island")} />}{" "}
      {screen === "island" && (
        <Island
          onBack={() => setScreen("home")}
          onSelect={(sec) => setSection(sec)}
        />
      )}{" "}
      {/* ADN */}{" "}
      <AdnModal isOpen={section === "dna"} onClose={() => setSection(null)} />{" "}
      {/* LAB */}{" "}
      <LabModal isOpen={section === "lab"} onClose={() => setSection(null)} />{" "}
      {/* FOGATA */}{" "}
      <CampfireModal
        isOpen={section === "contact"}
        onClose={() => setSection(null)}
      />{" "}
    </>
  );
}
export default App;
