import {
  
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

  import Bio from "./Bio"
  import Contact from "./Contact"
  import ProjectList from "./ProjectList"
  import App from "../App"


export default function Header() {
    return (
        <div className="header">
            
            <nav className="nav">
                {/* <NavLink to='/'>Home </NavLink> */}
                <NavLink className="navItem" to='/bio'>BIO </NavLink>
                <NavLink className="navItem" to='/contact'>CONTACT </NavLink>
                <NavLink className="navItem" to='/projects'>PROJECTS </NavLink>
                <h3 className="name">Jacob Bradshaw</h3>
             </nav>

           

             <Switch>
                <Route path='/bio'>
                    <Bio />
                </Route>
                <Route path='/projects'>
                    <ProjectList />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                {/* <Route exact path='/'>
                    <App />
                </Route> */}
              </Switch>
        </div>
    )
}