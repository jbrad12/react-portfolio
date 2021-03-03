import {
  
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

  import Bio from "./Bio"
  import Contact from "./Contact"
  import ProjectList from "./ProjectList"



export default function Header() {
    return (
        <div className="header">
            
            <nav className="nav">
                {/* <NavLink to='/'>Home </NavLink> */}
                <NavLink className="navItem" to='/'>ABOUT </NavLink>
                <NavLink className="navItem" to='/projects'>PROJECTS </NavLink>
                <NavLink className="navItem" to='/contact'>CONTACT </NavLink>
                <h3 className="name">Jacob Bradshaw</h3>
             </nav>

           

             <Switch>
                <Route exact path='/'>
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