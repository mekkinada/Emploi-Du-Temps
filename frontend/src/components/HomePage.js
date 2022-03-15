import React from "react";
import auth from "../utils/auth";
import "../styles/homepage.scss";
import OperateManual from "./OperateManual";

class HomePage extends React.Component{
    constructor(){
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const token = auth.getAuthToken();
        if(token){
            window.location.href = "/dashboard";
        }
    }

    render(){
        return(
            <div>
                <section className="header">
                    <div className="home-nav">
                        <div className="home-row ">
                            <h2 className="home-logo">Emploi DU Temps</h2>
                            <ul className="home-menu">
                                <li className="home-menu__li"><a className="home-menu__link home-menu__link--simple" href="/user/login">Se connecter</a></li>
                                <li className="home-menu__li"><a className="home-menu__link home-menu__link--btn" href="/user/signup">S'inscrire</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="home-row fw-row col-2-1-2">
                        <div className="col">
                            <div className="textbox--home">
                                <h2 className="textbox__preHeading--blue">Bienvenue à</h2>
                                
                                <h1 className="textbox__heading--dark">Emploi DU Temps</h1>
                                
                                <p>Cette application peut être utilisée pour générer un horaire programmé automatiquement. 
                                   Maintenant, débarrassez-vous de tout le travail manuel de la méthode de frappe et d'essai pour générer un tableau de temps</p>
                                <a href="./about" className="about-btn">À propos</a>
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </section>
                <section className="manual">
                    <div className="home-row fw-row col-2-1-2">
                        <div className="col">
                            <div className="textbox--guide">
                                <h2 className="textbox__preHeading--blue">Guide de l'utilisateur</h2>
                                <h1 className="textbox__heading--dark">Suivez les étapes décrites</h1>
                            </div>
                    
                        </div>
                        <div className="col">
                            <OperateManual/>
                        </div>
    
                    </div>                
                </section>
            </div>
        )
    }
}

export default HomePage;