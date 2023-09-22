import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Loader from "./pages/loader";
function App() {
    return (
        <>
            <Loader />
            <Navbar />
            <Hero />
        </>
    );
}

export default App;
