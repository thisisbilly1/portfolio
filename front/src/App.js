import { Container } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import GameDev from "./pages/GameDev";

import overlay from "./assets/overlay.png"

function App() {
  return (
    <div>
      <NavBar />
      <Container className="content">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/web"} element={<WebDev />} />
          <Route exact path={"/game"} element={<GameDev />} />
          <Route exact path={"/contact"} element={<Contact />} />
        </Routes>
      </Container>

      <div style={{
        backgroundImage: `url(${overlay})`,
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0.5,
        pointerEvents: "none"
      }} />
    </div>
  );
}

export default App;
