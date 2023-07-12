type Greetprops = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: Greetprops) => {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          Hello , {props.name}! You have {props.messageCount} unread messages.
        </div>
      ) : (
        <div>Welcome, Guest</div>
      )}
    </>
  );
};
