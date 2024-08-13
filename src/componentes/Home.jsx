import Grilla from './Grilla';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header
        titulo="Pizzería Mamma Mia"
        descripcion="Tenemos las mejores pizzas que podrás encontrar"
      />
      <Grilla />
    </>
  );
};
export default Home;
