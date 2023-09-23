import { Route, Routes } from "react-router-dom";
import "./App.css";

// All Pages Import
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Loader from "./pages/loader";
import PageNotFound from "./pages/pageNotFound";
import Record from "./pages/recordVoice";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";

// All Clerks Import
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Loader />
                        <Navbar />
                        <Hero />
                    </>
                }
            />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            <Route
                path="/voice-auth"
                element={
                    <>
                        <SignedIn>
                            <Record />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
