import { SectionWrapper } from "../hoc";

const Fixtures = () => {
  console.log("Rendering Fixtures Page");
  return (
    <div id="fixtures">
      <h1>Fixtures Page</h1>
      <p>This is the Fixtures page of the website.</p>
    </div>
  );
};

const WrappedFixtures = SectionWrapper(Fixtures, "Fixtures");
export default WrappedFixtures;
