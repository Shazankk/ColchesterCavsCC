import { SectionWrapper } from "../hoc";

const Sponsors = () => {
  console.log("Rendering Sponsors Page");
  return (
    <div id="sponsors">
      <h1>Sponsors Page</h1>
      <p>This is the Sponsors page of the website.</p>
    </div>
  );
};

const WrappedSponsors = SectionWrapper(Sponsors, "Sponsors");
export default WrappedSponsors;
