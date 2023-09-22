import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhyVoice from "./components/whyVoice";
import Loader from "./pages/loader";
function App() {
    return (
        <>
            <Loader />
            <Navbar />
            <Hero />
            <WhyVoice />
        </>
    );
}

export default App;
