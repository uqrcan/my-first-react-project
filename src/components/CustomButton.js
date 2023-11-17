const CustomButton = (props) => {
  const { onClick, children } = props;

  const test = {
    height: "150px",
    margin: "10px",
    borderRadius: "10px",
    color: "#fcfafa",
    backgroundColor: "#ff6b6b",
    cursor: "pointer",
    padding: "10px",
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: "2px",
    border: "none",
  };

  return (
    <button style={test} onClick={onClick} className="column-40 Buton">
      {children}
    </button>
  );
};

export default CustomButton;
