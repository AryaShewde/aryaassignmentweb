import Header from "./components/header";
import Home from "./components/home";
import Licourse from "./components/licourse";
import Joincourse from "./components/joincourse";
import Requirements from "./components/requirements";
import Trainer from "./components/trainer";
import Review from "./components/review";
import Questions from "./components/questions";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Licourse/>
      <Joincourse/>
      <Requirements/>
      <Trainer/>
      <Review/>
      <Questions/>
      <Footer/>
    </div>
  );
}

export default App;
