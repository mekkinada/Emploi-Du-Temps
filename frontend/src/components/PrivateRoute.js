import React from 'react';
import {Route} from 'react-router-dom';
import auth from '../utils/auth';

function PrivateRoute({ children, ...rest }) {

    const handleRedirectLogin = () => {
        window.location.href="/login";
    }
    const handleRedirectSignup = () => {
        window.location.href="/signup";
    }

    return (
      <Route
        {...rest}
        render={() =>
          auth.isAuthenticated() ? (
            children
          ) : (
            <div>
                <p className="text">Utilisateur non authentifié. Veuillez vous inscrire ou vous connecter pour accéder à cette page</p>
                <button onClick={handleRedirectLogin}>Connexion</button>
                <button onClick={handleRedirectSignup}>Inscription</button>
            </div>
          )
        }
      />
    );
  }
  export default PrivateRoute;