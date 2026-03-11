import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./pages/Home";

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(104,199,255,0.16),_transparent_28%),linear-gradient(180deg,_#06131f_0%,_#091c2c_48%,_#07131d_100%)] text-slate-100">
      <Navbar />
      <main className="mx-auto w-full max-w-[900px] px-4 pb-24 pt-24 sm:px-6 sm:pt-28 xl:max-w-[1080px] xl:px-10">
        <Home />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
    </div>
  );
}

export default App;
