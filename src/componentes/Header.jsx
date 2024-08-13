const Header = ({ titulo, descripcion }) => {
  return (
    <div className="header text-center text-white">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};
export default Header;
