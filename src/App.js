
import './App.css';
import Coins from './components/Coins';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      
      {/* <div style={{ margin: "10vh 29vw" }}>
        <div>
          <textarea name="text" id="textarea" style={{ margin: "auto", padding: "1vh 0", height: "5vh", width: "40vw", textAlign: "center" }}>Hello
          </textarea>
        </div>
        <button style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "vw", overflow: "hidden" }}>Search</button>
      </div> */}
      <Coins/>
    </>
  );
}

export default App;
