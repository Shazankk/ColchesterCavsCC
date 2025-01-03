import { SectionWrapper } from "../hoc";

const MatchResults = () => {
  console.log("Rendering MatchResults Page");
  return (
    <div id="match-results">
      <h1>Match Results Page</h1>
      <p>This is the Match Results page of the website.</p>
    </div>
  );
};

const WrappedMR = SectionWrapper(MatchResults, "MatchResults");
export default WrappedMR;
