import React from "react";
import "../styles/operatemanual.scss";
import Step from "./Step"

const OperateManual = (props)=>{
    return(
        <div className="operateManual"  style={{marginTop:30}}>
            <Step 
                number="1" 
                heading="Ajouter des classes"
                instruction="Ajoutez toutes les salles de classe disponibles dans votre département et attribuez une classe à chaque section de chaque session."    
            />
            <Step 
                number="2"
                heading="Ajouter des enseignants"
                instruction="Ajoutez les enseignants pour les matières. Vous pouvez avoir plusieurs professeurs pour chaque matière. Mais gardez à l'esprit que vous devrez ajouter des enseignants pour les laboratoires séparément."    
            />
            <Step 
                number="3" 
                heading="Ajouter des matières"
                instruction="Ajoutez tous  des matières que vous proposez. Il n'est pas nécessaire d'ajouter un sujet distinct pour Lab"    
            />
            <Step 
                number="4"
                heading="Ajouter les heures"
                instruction="Ici, il vous sera demandé de fournir un créneau pour chaque conférence. Moyens d'affecter un enseignant à une matière qui enseignera une section spécifique d'une session"    
            />
            <Step 
                number="5" 
                heading="Générer"
                instruction="Et enfin, cliquez sur générer et bang. Vous avez créé votre emploi du temps avec succès"    
                extraClass="step--last"
            />
        </div>
    )
}

export default OperateManual;