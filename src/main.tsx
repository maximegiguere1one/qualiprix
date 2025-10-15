import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { reportWebVitals, preloadCriticalImages } from "./utils/webVitals";

createRoot(document.getElementById("root")!).render(<App />);

// Initialize Web Vitals monitoring
reportWebVitals();

// Preload critical images for better LCP
preloadCriticalImages();
