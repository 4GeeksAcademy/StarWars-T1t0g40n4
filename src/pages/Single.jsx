import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();

  const person = Array.isArray(store.people)
    ? store.people.find(p => String(p.uid) === String(uid))
    : null;
  const planet = Array.isArray(store.planets)
    ? store.planets.find(p => String(p.uid) === String(uid))
    : null;
  const starship = Array.isArray(store.starships)
    ? store.starships.find(s => String(s.uid) === String(uid))
    : null;

  if (person) {
    return (
      <div className="container text-center">
        <h1 className="display-4">{person.name}</h1>
        <hr className="my-4" />
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
          alt={person.name}
          style={{ maxWidth: "300px" }}
          onError={e => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"}
        />
        <p> Films: {person.films}</p>
        <p>Homeworld: {person.homeworld}</p>
        <p>Starships: {person.starships}</p>
        <p>URL: {person.url}</p>
        <Link to="/" className="btn btn-primary btn-lg">Back home</Link>
      </div>
    );
  }

  if (planet) {
    return (
      <div className="container text-center">
        <h1 className="display-4">{planet.name}</h1>
        <hr className="my-4" />
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
          alt={planet.name}
          style={{ maxWidth: "300px" }}
          onError={e => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"}
        />
        <p>Clima: {planet.climate}</p>
        <p>Terreno: {planet.terrain}</p>
        <p>Población: {planet.population}</p>
        <p>Diámetro: {planet.diameter}</p>
        <Link to="/" className="btn btn-primary btn-lg">Back home</Link>
      </div>
    );
  }

  if (starship) {
    return (
      <div className="container text-center">
        <h1 className="display-4">{starship.name}</h1>
        <hr className="my-4" />
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
          alt={starship.name}
          style={{ maxWidth: "300px" }}
          onError={e => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"}
        />
        <p>Modelo: {starship.model}</p>
        <p>Fabricante: {starship.manufacturer}</p>
        <p>Costo en créditos: {starship.cost_in_credits}</p>
        <p>Pasajeros: {starship.passengers}</p>
        <Link to="/" className="btn btn-primary btn-lg">Back home</Link>
      </div>
    );
  }
  return (
    <div className="container text-center">
      <h1>Elemento no encontrado o cargando...</h1>
      <Link to="/" className="btn btn-primary btn-lg">Back home</Link>
    </div>
  );
};