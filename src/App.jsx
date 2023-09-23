import { Route, Routes } from "react-router-dom";
import "./App.css";

// All Pages Import
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhatsThis from "./components/whatIsThis";
import Loader from "./pages/loader";
import PageNotFound from "./pages/pageNotFound";
import RegisterSeed from "./pages/registerSeed";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import Vault from "./pages/vault";
import VerifySeed from "./pages/verifySeed";

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
                        <WhatsThis />
                        <HowItWorks />
                    </>
                }
            />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            <Route
                path="/voice-auth/register"
                element={
                    <>
                        <SignedIn>
                            <RegisterSeed />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />
            <Route
                path="/voice-auth/verify"
                element={
                    <>
                        <SignedIn>
                            <VerifySeed />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />

            <Route
                path="/user/vault"
                element={
                    <>
                        <SignedIn>
                            <Navbar />
                            <Vault />
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
