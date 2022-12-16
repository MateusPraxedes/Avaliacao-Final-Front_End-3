import { useEffect, useContext } from "react";
import { MyContext } from "../Provider/MyProvider"
import Card from "../Components/Card";

const Home = () => {

const {getDentists} = useContext(MyContext);



  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentists();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        <Card />
      </div>
    </>
  );
};

export default Home;
