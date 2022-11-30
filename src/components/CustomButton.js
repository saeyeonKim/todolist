function CustomButton(props) {
  const {
    onClick,
    children,
    backgroundColor,
    border,
    width,
    color,
    textAlign,
    margin,
  } = props;
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        border: border,
        width: width,
        height: "40px",
        borderRadius: "10px",
        color: color,
        textAlign: textAlign,
        margin: margin,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default CustomButton;
