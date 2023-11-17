import { useState } from "react";
import CustomButton from "./CustomButton";
const Counter = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("0");
  //normal arttırma azaltma
  const handleIncrease = () => {
    setNumber(number + Number(inputValue));
    setInputValue("0");
  };

  const handleDiscrease = () => {
    setNumber(number - inputValue);
    setInputValue("0");
  };
  //2 arttır 2 azalt
  //   const handle2Increase = () => {
  //     setNumber(number + 2);
  //   };

  //   const handle2Discrease = () => {
  //     setNumber(number - 2);
  //   };
  //2x çarp böl
  const handle2xIncrease = () => {
    setNumber(number * inputValue);
    setInputValue("0");
  };

  const handle2xDiscrease = () => {
    setNumber(number / inputValue);
    setInputValue("0");
  };

  return (
    <div className="İçApp column-100">
      <div className="column-50">
        <span className="Sayı">{Math.round(number)}</span>
      </div>
      <div className="column-50 Button">
        <div className="column-100">
          <input
            type="number"
            className="Input column-100"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />{" "}
          <CustomButton onClick={handleIncrease}>
            {inputValue} Arttır
          </CustomButton>
          <CustomButton onClick={handleDiscrease}>
            {inputValue} Azalt
          </CustomButton>
          <CustomButton onClick={handle2xIncrease}>
            {inputValue} Çarp
          </CustomButton>
          <CustomButton onClick={handle2xDiscrease}>
            {inputValue} Böl
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Counter;
