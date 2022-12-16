import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import api from "../Service/api";




export const MyContext = createContext({});




const Provider = ({ children }) => {


  const [darkMode, setDarkMode] = useState("dark");
  const [dentists, setDentists] = useState([]);
  const [dentist, setDentist] = useState([]);
  const [patients, setPatients] = useState([]);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [ login, setLogin ] = useState({
    username: "",
    password: ""
  });

  const [consultation, setConsultation] = useState({
      paciente: [],
      dentista: [],
      dataHoraAgendamento: "",
  });


  const getDentists = async () => {


    const response = await api.get("/dentista");
    const data = response.data;
    setDentists(data);
    console.log(data);

  };

  const getDentist = async (matricula) => {


    const response = await api.get(`/dentista?matricula${matricula}`);
    const data = response.data;
    setDentist(data);
    console.log(data);

  };


  const getPatients = async () => {


    const response = await api.get(`/paciente`);
    const data = response.data;
    setPatients(data.body);
    console.log(data.body);

  };

  const intoLogin = async () => {
    try{ 
    const response = await api.post("/auth", login);
    const data = response.data;
    setToken(data.token);
    localStorage.setItem("token", token);
    setUser(login)
    console.log(data);
  }
    catch(error){
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT
      });
      console.log(error);

      return;
    }
   }

   const postConsultation = async () => {

    console.log(`  token:  ${localStorage.getItem("token")}`)
    const body =  {
      paciente: {
        matricula: consultation.paciente.matricula,
      },
      dentista: {
        matricula: consultation.dentista.matricula,
      },
      dataHoraAgendamento: consultation.dataHoraAgendamento,
    };

    const headers = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
    };



    try{
    const response = await api.post("/consulta", body,headers
  //     {
  //       dentista: {
  //           matricula: consultation.dentista.matricula
  //       },
  //       paciente: {
  //           matricula: consultation.paciente.matricula
  //       },
  //       dataHoraAgendamento: consultation.dataHoraAgendamento
  //   }, 
  //  { headers:{
  //     'Authorization': `Bearer ${localStorage.getItem("token")}`,
  //     'Content-Type': 'application/json'

  //   }}
    );
    const data = response.data;
    console.log(data);
    // toast.success("Consulta marcada com sucesso!", {
    // }) 
   }
    catch(error){
      console.log(error.response.data);
      console.log(error);
      toast.error(error.response.data, { 
        position: toast.POSITION.TOP_RIGHT
      });

      return;
    }
    }



  const toggleDarkMode = () => {

    darkMode === "dark" ? setDarkMode("light") : setDarkMode("dark");
  }
  return (


    <MyContext.Provider value={{ darkMode, toggleDarkMode, dentists, setDentists, token, setToken, user, setUser, getDentists, getDentist, dentist, patients, getPatients, login, setLogin, intoLogin, postConsultation, setConsultation, consultation }}>
      {children}
    </MyContext.Provider>


  );
}

export default Provider;

