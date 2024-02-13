import "./CatsList.scss";

const CatsList = (): React.ReactElement => {
  return (
    <>
      <ul className="cats">
        <li className="cat">
          <h3>Simba</h3>
          <img src="https://cataas.com/cat" alt="Simba" />
        </li>
        <li className="cat">
          <h3>Lola</h3>
          <img src="https://cataas.com/cat" alt="Lola" />
        </li>
        <li className="cat">
          <h3>Lluna</h3>
          <img src="https://cataas.com/cat" alt="Lluna" />
        </li>
        <li className="cat">
          <h3>Misha</h3>
          <img src="https://cataas.com/cat" alt="Misha" />
        </li>
        <li className="cat">
          <h3>Garfield</h3>
          <img src="https://cataas.com/cat" alt="Garfield" />
        </li>
      </ul>
    </>
  );
};

export default CatsList;
