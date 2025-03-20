import { useState } from "react";

export default function ChatbotWithCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Medical Shop Chatbot & Calculator</h1>

      <div style={{ width: "100%", height: "700px", marginBottom: "50px" }}>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/uhVFj_0F3YIvLXEnjsf5D"
          width="100%"
          style={{ height: "100%", border: "1px solid #ccc", borderRadius: "10px" }}
          frameBorder="0"
        ></iframe>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div
          style={{
            width: "300px",
            margin: "auto",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "24px",
            textAlign: "right",
          }}
        >
          {input || "0"}
        </div>
        <div
          style={{
            width: "300px",
            margin: "auto",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "24px",
            textAlign: "right",
            marginTop: "5px",
          }}
        >
          {result && `= ${result}`}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "5px",
            width: "300px",
            margin: "20px auto",
          }}
        >
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              style={{
                padding: "15px",
                fontSize: "20px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button
            style={{
              gridColumn: "span 2",
              padding: "15px",
              fontSize: "20px",
              backgroundColor: "#DC3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={clearInput}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
