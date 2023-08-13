import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

import "./App.css";
import { InlineStyles } from "./components/InlineStyles";
import { Users } from "./components/state/Users";
import { Counter } from "./components/state/Counter";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/RandomNumber";
import { TemplateLiterals } from "./components/TemplateLiterals";
import { CustomButton } from "./components/CustomButton";
import { CustomInput } from "./components/CustomInput";
import { Text } from "./components/polymorphic/Text";

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
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked");
          console.log("Event", event);
          console.log("ID", id);
        }}
      />
      <Input value="" handleInputChange={(e) => console.log("event", e)} />
      <InlineStyles
        styles={{ border: "2px solid white", padding: "1rem", color: "wheat" }}
      />
      <Users />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List items={["A", "B", "C"]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            one: "one",
            two: "two",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={2} isPositive />
      <TemplateLiterals position="center" />
      <CustomButton variant="primary" onClick={() => console.log("primary")}>
        Primary
      </CustomButton>
      <CustomButton
        variant="secondary"
        onClick={() => console.log("secondary")}
      >
        Secondary
      </CustomButton>
      <CustomInput onChange={() => console.log("Hello")} />
      <Text as="h1" size="lg" color="primary">
        Heading
      </Text>
      <Text as="p" size="md" color="primary">
        Paragraph
      </Text>
      <Text as="label" htmlFor="id" size="sm" color="secondary">
        Label
      </Text>
    </>
  );
}

export default App;
