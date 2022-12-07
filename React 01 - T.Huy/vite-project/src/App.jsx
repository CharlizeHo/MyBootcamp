import NavbarSample from "./components/NavbarSample";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardSample from "./components/CardSample";

const App = () => {
  return <div className="h-[300vh] bg-white">
    <NavbarSample/>
    <hr/>
    <Navbar/>
    <hr/>
    <Card/>
    <hr/>
    <CardSample/>
  </div>;
};

export default App;
