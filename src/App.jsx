import DisplaySection from "./compenents/DisplaySection";
import Jumbotron from "./compenents/Jumbotron";
import Nav from "./compenents/Nav";
import SoundSection from "./compenents/SoundSection";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
    </div>
  );
}

export default App;
