import './App.css';
import React, {useEffect }  from 'react';
import { Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Certificate from './Certificate';
import Contactus from './Contactus';
import WebCard from './WebCard';
import Programming from './Programming';
import Programming2 from './Programming2';
import Home from './Home';
import Footer from './Footer';
import Slider from './Slider';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
      toast("CreatedBy Muhammad Azeem!");
  },[])
  return (
    <>
    <Loader/>
    <div className="hel">
    <NavBar />
    <ToastContainer />
    <Slider />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/certificate" component={Certificate} />
    <Route exact path="/contactus" component={Contactus} />
    <Route exact path="/web" component={WebCard} />
    <Route exact path="/programming" component={Programming} />
    <Route exact path="/programming2" component={Programming2} />
    <Route exact path="/2020_Portfolio_Update_into_React/" component={Home} />
    <Route exact path="/2020_Portfolio_Update_into_React/certificate" component={Certificate} />
    <Route exact path="/2020_Portfolio_Update_into_React/contactus" component={Contactus} />
    <Route exact path="/2020_Portfolio_Update_into_React/web" component={WebCard} />
    <Route exact path="/2020_Portfolio_Update_into_React/programming" component={Programming} />
    <Route exact path="/2020_Portfolio_Update_into_React/programming2" component={Programming2} />
    </Switch>
    <Footer />
    </div>
    </>
  );
}



export default App;

