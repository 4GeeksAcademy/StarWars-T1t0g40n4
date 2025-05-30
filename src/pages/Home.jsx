import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { People } from "./People.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const get_people = async () => {
			const loadPeopleData = await fetch('https://www.swapi.tech/api/people/', {
				method: 'GET'
			})
			const reponsePeople = await loadPeopleData.json();

			const detailedPeople = await Promise.all(
				reponsePeople.results.map(async (person) => {
					const res = await fetch(person.url);
					const data = await res.json();
					return {
						...person,
						...data.result.properties
					};
				})
			)
			dispatch({
				type: 'set-people',
				payload: {
					people: detailedPeople
				}
			});

		};
		const get_planets = async () => {
			const loadPlanetsData = await fetch('https://www.swapi.tech/api/planets/', {
				method: 'GET'
			})
			const reponsePlanet = await loadPlanetsData.json();
			const detailedPlanets = await Promise.all(
				reponsePlanet.results.map(async (planet) => {
					const res = await fetch(planet.url);
					const data = await res.json();
					return {
						...planet,
						...data.result.properties

					};
				})
			)
			dispatch({
				type: 'set-planets',
				payload: {
					planets: detailedPlanets
				}
			});
		};
		const get_starShips = async () => {
			const loadShipsData = await fetch('https://www.swapi.tech/api/starships/', {
				method: 'GET'
			})
			const reponseShips = await loadShipsData.json();
			const detailedShips = Promise.all(
				reponseShips.results.map(async (ship) => {
					const res = await fetch(ship.url);
					const data = await res.json();
					return {
						...ship,
						...data.result.properties
					}
				})

			)
			dispatch({
				type: 'set-starships',
				payload: {
					starships: detailedShips
				}
			})
		};

		get_people();
		get_planets();
		get_starShips();


	}, [])

	console.log(store.people);
	console.log(store.planets);
	console.log(store.starships);

	return (
		<div className="container">
			<div className="d-flex flex-row gap-3 overflow-x-auto py-3">
				{Array.isArray(store.people) && store.people.length > 0 ? (
					store.people.map(person => (
						<div className="" key={person.uid}>
							<People person={person} />
						</div>
					))
				) : (
					null
				)}
			</div>
		</div>
	);
}; 