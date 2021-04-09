import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Forum from "./pages/forum"
import Login from "./pages/login";
import Profile   from "./pages/profile";
import Signup from "./pages/signup";
// import Cats from "./pages/cats"
import Post from "./pages/post";
import Overwatch from "./pages/cats/overwatch";
import R6 from "./pages/cats/R6";
import Hardware from "./pages/cats/Hardware";
import Valorant from "./pages/cats/Valorant";
import Minecraft from "./pages/cats/Minecraft";
import Apex from "./pages/cats/Apex";
import Software from "./pages/cats/Software";
import Help from "./pages/cats/Help";
import Viewpost from "./pages/Viewpost";
function App() {


    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route path="/home" excat component={Home}/>
                    <Route path="/forum/Overwatch"  component={Overwatch}/>
                    <Route path="/forum/Apex Legends"  component={Apex}/>
                    <Route path="/forum/Minecraft"  component={Minecraft}/>
                    <Route path="/forum/R6S"  component={R6}/>
                    <Route path="/forum/Valorant"  component={Valorant}/>
                    <Route path="/forum/Hardware"  component={Hardware}/>
                    <Route path="/forum/Software"  component={Software}/>
                    <Route path="/forum/Help!!!!"  component={Help}/>
                    <Route path="/view"  component={Viewpost}/>




                    <Route path="/forum" exact component={Forum}/>

                    <Route path="/create-post"  exact component={Post}/>


                    <Route path="/login" excat component={Login}/>
                    <Route path="/signup" excat component={Signup}/>
                    <Route path="/profile" excat component={Profile}/>
                    <Route path="/" component={Home}/>
                    {/*<Route path="/" excat component={Home}/>*/}
                </Switch>
            </Router>
        </div>
    );

}

export default App;

