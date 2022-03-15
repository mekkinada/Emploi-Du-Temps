import React from "react";
import axios from "axios";
import auth from "../utils/auth";
import "../styles/addform.scss";

class AddSubject extends React.Component {
  constructor() {
    super();
    this.handleAddSubject = this.handleAddSubject.bind(this);
  }
  async handleAddSubject(e){
    e.preventDefault();
    e.persist();
    const subjectCode = e.target.elements.subjectCode.value;
    const subjectName = e.target.elements.subjectName.value;
    const creditHours = e.target.elements.creditHours.value;
    const contactHours = e.target.elements.contactHours.value;
    const labs = e.target.elements.labs.value;

    const subject = {
      subjectCode,
      subjectName,
      creditHours,
      contactHours,
      labs
    }
    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const body = JSON.stringify(subject);
      const res = await axios.post('/api/subject', body, config);
      console.log(res);

      e.target.elements.subjectCode.value = '';
      e.target.elements.subjectName.value = '';
      e.target.elements.creditHours.value = '';
      e.target.elements.contactHours.value = '';
      e.target.elements.labs.value = '';

    } catch(err){
      console.log(err);
    }
    
  }
  render() {
    return (
      <div class="addform">
        <form onSubmit={this.handleAddSubject}>
          <h1 className="addform__heading"> Ajouter un matière </h1>
          <input
            className="addform__input addform__input--full"
            type="text"
            placeholder="ID de la matière "
            name="subjectCode"
          />
          <input
            className="addform__input  addform__input--full"
            type="text"
            placeholder="nom de la matière"
            name="subjectName"
          />
          <input
            className="addform__input addform__input--half addform__input--left"
            type="number"
            placeholder="Heures de crédit"
            name="creditHours"
          />
          <input
            className="addform__input addform__input--half addform__input--right"
            type="number"
            placeholder="Heures de contact"
            name="contactHours"
          />
          <input
            className="addform__input  addform__input--full"
            type="number"
            placeholder="laboratoires"
            name="labs"
          />
          <input
            className="addform__btn"
            type="submit"
            name="submit"
            value="ADD SUBJECT"
          />
        </form>
      </div>
    );
  }
}

export default AddSubject;
