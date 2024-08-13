import CardPizza from './CardPizza';
import pizzas from '../assets/pizzas';
const Grilla = () => {
  return (
    <div className="container productos">
      <div className="row ms-auto">
        {pizzas.map((pizza, index) => (
          <div className="col-md-4" key={index}>
            <CardPizza
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredientes={pizza.ingredientes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grilla;
