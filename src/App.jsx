import "./App.scss";
import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Contact from "./containers/Contact/Contact";
import Projects from "./containers/Projects/Projects.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
