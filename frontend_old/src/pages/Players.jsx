import { SectionWrapper } from "../hoc";

const Players = () => {
  console.log("Rendering Players Page");
  return (
    <div id="players">
      <h1>Players Page</h1>
      <p>This is the Players page of the website.</p>
    </div>
  );
};

const WrappedPlayers = SectionWrapper(Players, "players");
export default WrappedPlayers;
