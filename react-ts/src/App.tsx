import { Greet } from "./components/Greet";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
    </>
  );
}

export default App;
