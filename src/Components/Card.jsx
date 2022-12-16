import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Provider/MyProvider"
import styles from "./Card.module.css";

const Card = () => {
  
  const {dentists, darkMode} = useContext(MyContext);
  


  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}

    
    {dentists.map((dentist) => 
      <div key={dentist.matricula} className={`   ${ darkMode === 'dark' ? 'card Card_cardDark__Bw' : 'card'  }         ${darkMode}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />

        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <div>
          <Link to={`/dentist/matricula=${dentist.matricula}`}><h5 className={`card-title ${styles.title}`}>{dentist.nome} {dentist.sobrenome}</h5></Link>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Card;
