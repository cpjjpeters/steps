import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  // const step = 3;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  console.log(step);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);

    // alert("handlePrevious");
    // `${step === 3 ? (step = 2) : step}`;
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setTest({ name: "Fred" });
    // step = step + 1;
    // alert("handleNext");
    // `${step === 1 ? (step = 2) : step}`;
  }
  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}> 1</div>
            <div className={`${step === 2 ? "active" : ""}`}> 2</div>
            <div className={`${step === 3 ? "active" : ""}`}> 3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name}{" "} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("TEST")}
            >
              Prev
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// export default App;
