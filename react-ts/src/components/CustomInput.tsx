type CustomInputProps = React.ComponentProps<"input">;

export const CustomInput = ({ ...rest }: CustomInputProps) => {
  return <input type="text" {...rest} />;
};
