import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Template from './components/Template';
import Home from './components/Home';
import Error from "./components/Error";
import Done from "./components/Done";
import Builder from "./components/Builder";
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Box style={{background:'#c0c0c0'}}>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/template' element={<Template/> } />
        <Route path='/builder' element={<Builder/> } />
        <Route path='/downloaded' element={<Done/> } />
        <Route path='*' element={<Error/> } />        
      </Routes>
    <Footer/>
    </Router>
    <br></br><br></br><br></br><br></br>
    </Box>
  );
}

export default App;
