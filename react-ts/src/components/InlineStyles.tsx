type InlineStylesProps = {
  styles: React.CSSProperties;
};

export const InlineStyles = ({ styles }: InlineStylesProps) => {
  return <div style={styles}>Text content goes here</div>;
};
