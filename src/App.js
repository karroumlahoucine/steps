import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((cuuSp) => cuuSp - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((cuuSp) => cuuSp + 1);
    }
  }
  function handleClose() {
    setIsopen((is) => !is);
  }
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            <p>{messages[step - 1]}</p>
          </StepMessage>
          <div className="buttons">
            <Button background="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span>
              Previous
            </Button>
            <Button background="#7950f2" color="#fff" onClick={handleNext}>
              <span>👉</span>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h1>step {step} :</h1>
      {children}
    </div>
  );
}

function Button({ background, color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: background, color: color }}
    >
      {children}
    </button>
  );
}
