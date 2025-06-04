import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  try {
    createRoot(root).render(<App />);
  } catch (error) {
    console.error("React render error:", error);
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Stacked Profits - Development Mode</h1>
        <p>React configuration error detected. Please check console for details.</p>
        <p>Production site available at: stackedprofits.com</p>
      </div>
    `;
  }
}
