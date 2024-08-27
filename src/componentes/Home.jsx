import Grilla from './Grilla';
import Header from './Header';
import { useState, useEffect } from 'react';

const Home = () => {
  const [pizza, setPizza] = useState('');

  //Consumo de API
  const urlPizza = 'http://localhost:5000/api/pizzas/';

  const getData = async () => {
    const response = await fetch(urlPizza);
    const dataPizzas = await response.json();

    console.log('dataPizzas', dataPizzas); // console.log para ver los datos en consola
    setPizza(dataPizzas);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header titulo="Mamma Mia" descripcion="Tenemos las mejores pizzas " />
      <Grilla pizza={pizza} />
    </>
  );
};
export default Home;
