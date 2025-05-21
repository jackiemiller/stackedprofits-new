import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./mobile.css"; // Import mobile-specific styles
import "./mobile-fix.js"; // Import mobile fixes that run on load

createRoot(document.getElementById("root")!).render(<App />);
