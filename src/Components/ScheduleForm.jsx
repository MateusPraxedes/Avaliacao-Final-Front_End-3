import { useContext, useEffect} from "react";
import { ToastContainer} from 'react-toastify';
import {MyContext} from '../Provider/MyProvider'

import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {


  const {dentists, getDentists, patients, getPatients, setConsultation, postConsultation, consultation, darkMode } = useContext(MyContext)

  


  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
    getDentists();
    getPatients();

  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    event.preventDefault();
    postConsultation();
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container    ${darkMode}}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>

              
        
              <select onChange={
                  (e) =>{   setConsultation({...consultation, dentista: JSON.parse(e.target.value)})
                  console.log(e.target.value)
                  console.log(consultation)}
              }  className="form-select" name="dentist" id="dentist">
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {dentists.map((dentist) => (
                <option  key={dentist.matricula} value={JSON.stringify(dentist)}>
                  {dentist.nome + ' ' + dentist.sobrenome}
                </option>
              ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select onChange={
                  (e) =>{   setConsultation({...consultation, paciente: JSON.parse(e.target.value)})
                  console.log(e.target.value)
                  console.log(consultation)}
              }
                className="form-select" name="patient" id="patient">
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {patients.map((patient) => (
                <option key={patient.matricula} value={JSON.stringify(patient)}>
                  {patient.nome + ' ' + patient.sobrenome}
                </option>))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input onChange={
                  (e) =>{   setConsultation({...consultation, dataHoraAgendamento: e.target.value}) 
                console.log(consultation)}}
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button onClick={handleSubmit}
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
