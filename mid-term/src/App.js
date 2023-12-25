import "./App.css";
import {AppNavbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home";

function App() {
    return (
        <div className="App">
            <AppNavbar/>
            <Home/>
        </div>
    );
}

export default App;
