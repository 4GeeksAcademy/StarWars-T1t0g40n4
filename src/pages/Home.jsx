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
			dispatch({
				type: 'set-people',
				payload: {
					people: reponsePeople.results
				}
			})

		}
		const get_planets = async () => {
			const loadPlanetsData = await fetch('https://www.swapi.tech/api/planets/', {
				method: 'GET'
			})
			const reponsePlanet = await loadPlanetsData.json();
			dispatch({
				type: 'set-planets',
				payload: {
					planets : reponsePlanet.results
				}
			})
		};
		const get_starShips = async () => {
			const loadShipsData = await fetch('https://www.swapi.tech/api/starships/', {
				method: 'GET'
			})
			const reponseShips = await loadShipsData.json();
			dispatch({
				type: 'set-starships',
				payload: {
					starships: reponseShips.results
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
		<div className="text-center mt-5">
			{Array.isArray(store.people) && store.people.length>0?(
				store.people.map(person => (
					<div className="" key={person.uid}>
						<People person={person}/>
					</div>
				))
			) : (
				null
			)}
		</div>
	);
}; 