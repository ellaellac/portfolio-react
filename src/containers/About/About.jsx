import "./About.scss";
import Heading from "../../components/Heading/Heading";

const About = () => {
  return (
    <section id="about" className="about">
      <Heading text="About me" />
      <p className="about__text">
        Hello! Welcome to my page. I am a Junior Software Engineer based in the
        UK. Recently, I completed a full-stack course in _nology, which helped
        me gain technical skills as well as communication and problem-solving
        skills. This is the start of my digital career. I chose a career in
        technology because it gives me freedom to design and build my own
        applications in many ways. I admire its logic and creativity in creating
        such a cool thing. Seeing my projects from start to finish is really
        rewarding. More projects will follow in the future. Stay tuned.
      </p>
    </section>
  );
};
export default About;
