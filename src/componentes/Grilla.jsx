import CardPizza from './CardPizza';
import pizzas from '../assets/pizzas';
const Grilla = () => {
  return (
    <div className="container productos">
      <div className="row ms-auto">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
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
