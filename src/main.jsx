import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_KEY}
        appearance={{
            baseTheme: dark,
        }}
    >
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </ClerkProvider>
);
