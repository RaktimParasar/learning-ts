type HorizontalPosition = "left" | "right" | "center";

type VerticalPosition = "top" | "bottom" | "center";

type TemplateLiteralsProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const TemplateLiterals = ({ position }: TemplateLiteralsProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
