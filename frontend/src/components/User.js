import React from "react";
import {Route, Switch, NavLink, useRouteMatch} from "react-router-dom";
import TextBox from './Textbox';
import SignUp from './Signup';
import Login from './Login';
import '../styles/buttonbox.scss';
import '../styles/user.scss';
import Clock from '../assets/clock-illustration.png';
import Graduate from '../assets/graduate-illustration.png';

function UserCredentials() {
    let { path, url } = useRouteMatch();
    return (
      <div className="fp-container">
        <div className="row fw-row col-2-2-1">
          <div className="col-1">
            <TextBox  
              preHeading="Bienvenue à"
              heading="Emploi DU Temps"
              text="Cette application peut être utilisée pour générer un horaire programmé automatiquement.
               Maintenant, débarrassez-vous de tout le travail manuel de la méthode de frappe et d'essai pour générer un tableau de temps"
            />
            <Switch>
                <Route 
                    path={`${path}/signup`} 
                    render={()=> 
                        <img 
                            src={Clock} 
                            className="form-image" 
                            alt="TimeTable" 
                        />} 
                />
                <Route 
                    path={`${path}/login`} 
                    render={()=> 
                        <img 
                            src={Graduate} 
                            alt="TimeTable"
                            className="form-image"
                        />} 
                />
            </Switch>
            <div className="buttonbox">
                <NavLink 
                    to={`${url}/signup`} 
                    className="buttonbox__button" 
                    activeClassName="buttonbox__button--active"
                >Inscription</NavLink>
                <NavLink 
                    to={`${url}/login`} 
                    className="buttonbox__button" 
                    activeClassName="buttonbox__button--active"
                >Connexion</NavLink>
            </div>
          </div>
          <div className="col-2">
          <Switch>
            <Route path={`${path}/signup`} component={SignUp} />
            <Route path={`${path}/login`} component={Login} />
            <Route path={`${path}/`} exact/>
          </Switch>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserCredentials;
