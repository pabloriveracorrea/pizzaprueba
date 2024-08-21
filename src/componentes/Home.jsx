import Grilla from './Grilla';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header
        titulo="Pizzería Mamma Mia"
        descripcion="Tenemos las mejores pizzas"
      />
      <Grilla />
    </>
  );
};
export default Home;
