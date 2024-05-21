import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Resources from "./components/Ressources";
import Forum from "./components/Forum";
import SignIn from "./components/Signin";
import NewAccount from "./components/NewAccount";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Benefits />
              <Collaboration />
              <Services />
            </>
          }
        />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newaccount" element={<NewAccount />} />
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;
