import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios"
import AddClass from "./AddClass";
import AddSubject from "./AddSubject";
import AddTeacher from "./AddTeacher";
import AddSlots from "./AddSlots";
import ClassList from "./ClassList";
import SubjectList from "./SubjectList";
import TeacherList from "./TeacherList";
import SlotList from "./SlotList";
import TimeTable from "./TimeTable";
import OperateManual from "./OperateManual";
import "../styles/dashboard.scss";
import Logo from "../logo.svg";
import auth from "../utils/auth";

function Dashboard(props) {
  let {  url } = useRouteMatch();

  const handleLogout = async ()=>{

    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const body = JSON.stringify({});
      const res = await axios.post('/api/user/logout',body, config);
      console.log(res);
      if(res.status === 200){
        auth.removeAuthToken(authToken);
        window.location.href = '/';
      }
      
    } catch(err){
      console.log(err);
    }

  }
  
  return (
    <BrowserRouter>
      <div className="dashboard row-2-1-5">
        <div className="sidebar">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="menu">
            <li className="menu__li menu__li--class">
              <NavLink
                className="menu__link menu__link--top"
                to={`${url}/classes/add`}
              >
                Des classes
              </NavLink>
              <ul className="submenu submenu--class">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/classes/add`}
                  >
                  Ajouter une classe
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/classes/view`}
                  >
                 liste des classes
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li menu__li--subject">
              <NavLink className="menu__link" to={`${url}/subjects/add`}>
             Des Matières 
              </NavLink>
              <ul className="submenu submenu--subject">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/subjects/add`}
                  >
                 Ajouter un matière 
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/subjects/view`}
                  >
                 liste des Matières
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li menu__li--teacher">
              <NavLink className="menu__link" to={`${url}/teachers/add`}>
              les enseignants
              </NavLink>
              <ul className="submenu submenu--teacher">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/teachers/add`}
                  >
                 Ajouter un enseignant
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/teachers/view`}
                  >
                  liste les enseignants
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li menu__li--slot">
              <NavLink className="menu__link" to={`${url}/slots/add`}>
              Heure 
              </NavLink>
              <ul className="submenu submenu--slot">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/slots/add`}
                  >
                  Ajouter un heure 
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/slots/view`}
                  >
                  Liste des heures 
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li">
              <NavLink to={`${url}/timetable`} className="menu__btn">
                Générer
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <div className="secondary-menubar">
            <ul className="secondary-menu">
              <li>
                <button onClick={handleLogout} className="secondary-menu__btn">Déconnexion</button>
              </li>
            </ul>
          </div>
          <div className="component-container">
            <Switch>
              <Route path={`${url}/classes/add`}>
                <AddClass/>
              </Route>
              <Route path={`${url}/subjects/add`}>
                <AddSubject/>
              </Route>
              <Route path={`${url}/teachers/add`}>
                <AddTeacher/>
              </Route>
              <Route path={`${url}/slots/add`}>
                <AddSlots/>
              </Route>
              <Route path={`${url}/classes/view`}>
                <ClassList/>
              </Route>
              <Route path={`${url}/subjects/view`}>
                <SubjectList/>
              </Route>
              <Route path={`${url}/teachers/view`}>
                <TeacherList/>
              </Route>
              <Route path={`${url}/slots/view`}>
                <SlotList />
              </Route>
              <Route path={`${url}/timetable`}>
                <TimeTable />
              </Route>
              <Route path={`${url}/`}>
                <OperateManual />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;