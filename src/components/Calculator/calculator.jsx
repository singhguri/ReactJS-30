import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [Nums, setNums] = useState("");
  const [Error, setError] = useState({
    show: false,
    msg: "",
  });

  const addVal = (value) => {
    let val = value.target.innerHTML;
    let num = Nums;
    setNums((num += val));
    setError({
      show: false,
      msg: "",
    });
  };

  const Clear = () => {
    setNums("");
    setError({
      show: false,
      msg: "",
    });
  };

  const calculate = () => {
    try {
      if (Nums.length > 0) setNums(eval(Nums));
    } catch (error) {
      setError({
        show: true,
        msg: "Invalid Expression...",
      });
    }
  };

  const resetErr = () => {
    setError({ show: false, msg: "" });
  };

  const ErrorDiv = () => {
    return (
      <div className="error-div">
        <div className="error-msg">{Error.msg}</div>
        <button className="clickable" onClick={resetErr}>
          Okay
        </button>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="container ">
        <div className="display" name="display">
          {Nums}
        </div>
        <div className="clear clickable" onClick={Clear}>
          C
        </div>
        <div className="divide clickable" onClick={addVal}>
          /
        </div>
        <div className="multiply clickable" onClick={addVal}>
          *
        </div>
        <div className="subtract clickable" onClick={addVal}>
          -
        </div>
        <div className="seven clickable" onClick={addVal}>
          7
        </div>
        <div className="eight clickable" onClick={addVal}>
          8
        </div>
        <div className="nine clickable" onClick={addVal}>
          9
        </div>
        <div className="plus clickable" onClick={addVal}>
          +
        </div>
        <div className="four clickable" onClick={addVal}>
          4
        </div>
        <div className="five clickable" onClick={addVal}>
          5
        </div>
        <div className="six clickable" onClick={addVal}>
          6
        </div>
        <div className="one clickable" onClick={addVal}>
          1
        </div>
        <div className="two clickable" onClick={addVal}>
          2
        </div>
        <div className="three clickable" onClick={addVal}>
          3
        </div>
        <div className="equal clickable" onClick={calculate}>
          =
        </div>
        <div className="zero clickable" onClick={addVal}>
          0
        </div>
        <div className="dot clickable" onClick={addVal}>
          .
        </div>
      </div>
      {Error.show ? <ErrorDiv /> : null}
    </div>
  );
};

export default Calculator;
