import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((name) => (
        <div key={name.first}>
          {name.first} {name.last}
        </div>
      ))}
    </>
  );
};
