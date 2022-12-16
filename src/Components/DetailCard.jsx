import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Provider/MyProvider";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";

const DetailCard = () => {
  
  const {getDentist, dentist} = useContext(MyContext);
  
  const { nome , sobrenome, usuario} = dentist;

  
  
  const { id } = useParams();

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    getDentist(id);
  }, []);

  


  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist: {nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {nome}</li>
              <li className="list-group-item">
                Sobrenome: {sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {usuario?.username}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
