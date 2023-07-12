import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import "./App.css";

const PERSON_NAME = {
  first: "Bruce",
  last: "Wayne",
};

const PERSON_LIST = [
  { first: "Princess", last: "Diana" },
  { first: "Bruce", last: "Wayne" },
  { first: "Clark", last: "Kent" },
];

function App() {
  return (
    <>
      <Greet name="Raktim" messageCount={10} isLoggedIn={true} />
      <Person name={PERSON_NAME} />
      <PersonList names={PERSON_LIST} />
      <Status status="success" />
      <Oscar>
        <Heading>Passing a children prop</Heading>
      </Oscar>
    </>
  );
}

export default App;
