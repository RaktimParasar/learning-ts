type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
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
