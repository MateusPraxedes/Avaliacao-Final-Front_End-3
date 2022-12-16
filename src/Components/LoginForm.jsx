import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Provider/MyProvider"
import { ToastContainer} from 'react-toastify';
import styles from "./Form.module.css";

const LoginForm = () => {

  const navigate = useNavigate();

const {darkMode, setLogin, intoLogin, login, token} = useContext(MyContext);

  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    e.preventDefault();
    intoLogin(login);

    if (token){
      console.log(token)
      navigate("/home");

    }
  
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card-${darkMode} container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              value={login.username}
              onChange={(e) => 
                setLogin({...login, username: e.target.value})}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              value={login.password}
              onChange={(e) => setLogin({...login, password: e.target.value})}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Send
            </button>
           <ToastContainer />

          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
