import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark, shadesOfPurple } from "@clerk/themes";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* npm i @clerk/clerk-react */}
    {/* npm i @clerk/themes */}
    
    {/* <ClerkProvider 
    appearance={
    { 
    baseTheme: shadesOfPurple,
     }} 
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/" >
        <App /> 
    </ClerkProvider> */}
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3b82f6", // bright blue accent
          colorBackground: "#0a0f24", // deep navy background
          colorText: "#e0e7ff", // soft bluish-white text
          colorInputBackground: "#111936", // darker blue for inputs
          colorInputText: "#ffffff",
          colorAlphaShade: "#1e3a8a", // overlay tint for hover/focus
          colorDanger: "#ef4444", // red for errors
          borderRadius: "0.75rem",
          fontFamily: "Poppins, sans-serif",
        },
        elements: {
          card: {
            backgroundColor: "rgba(10, 15, 36, 0.6)", // frosted blue glass
            backdropFilter: "blur(14px)",
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)", // blue glow
            border: "1px solid rgba(59, 130, 246, 0.4)",
          },
          formButtonPrimary: {
            backgroundColor: "#3b82f6",
            ":hover": { backgroundColor: "#2563eb" },
            ":active": { backgroundColor: "#1d4ed8" },
          },
          headerTitle: { color: "#93c5fd" },
          headerSubtitle: { color: "#60a5fa" },
          footerActionText: { color: "#93c5fd" },
        },
      }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
