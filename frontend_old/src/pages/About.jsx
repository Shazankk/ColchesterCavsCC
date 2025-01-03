import { SectionWrapper } from "../hoc";

const About = () => {
  console.log("Rendering About Page");
  return (
    <section id="about" className="section-about">
      <h1>About Page</h1>
      <p>This is the About page of the website.</p>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, "About");
export default WrappedAbout;
