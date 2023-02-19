import "./Skills.scss";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import java from "../../assets/java.png";
import springboot from "../../assets/springboot.png";
import Heading from "../../components/Heading/Heading";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Heading text="Skills" />
      <div className="skills-container">
        <img src={git} alt="Git" className="skills__img" />
        <img src={html} alt="HTML" className="skills__img" />
        <img src={css} alt="CSS" className="skills__img" />
        <img src={sass} alt="SASS" className="skills__img" />
        <img src={javascript} alt="JavaScript" className="skills__img" />
        <img src={react} alt="React" className="skills__img" />
        <img src={java} alt="Java" className="skills__img" />
        <img src={springboot} alt="SpringBoot" className="skills__img" />
      </div>
    </section>
  );
};
export default Skills;
