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
  console.log(props);
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
      {/* app.js의 추가하기,삭제하기 */}
    </button>
  );
}
export default CustomButton;
