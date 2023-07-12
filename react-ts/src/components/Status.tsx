type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  const checkStatus = () => {
    switch (props.status) {
      case "loading":
        return "Loading";
      case "success":
        return "Data fetched successfully!";
      case "error":
        return "Error fetching data";
      default:
        return;
    }
  };

  return <div>Status {checkStatus()}</div>;
};
