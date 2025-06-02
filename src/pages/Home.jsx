import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { People } from "./People.jsx";
import { Planet } from "./Planet.jsx";
import { Starship } from "./Starships.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const getPeople = async () => {
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
		const getPlanets = async () => {
			const loadPlanetData = await fetch('https://www.swapi.tech/api/planets/', {
				method: 'GET'
			})
			const reponsePlanet = await loadPlanetData.json();

			const detailedPlanet = await Promise.all(
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
					planets: detailedPlanet
				}
			});

		};

		const getStarships = async () =>{
			const loadStarshipData = await fetch(`https://www.swapi.tech/api/starships/`,{
				method:'GET'
			})
			const reponseStarship = await loadStarshipData.json();
			const detailedStarship = await Promise.all(
				reponseStarship.results.map(async (starship) =>{
					const res = await fetch(starship.url);
					const data = await res.json();
					return {
						...starship,
						...data.result.properties
					}
					}
				)
			)
			dispatch({
				type:'set-starships',
				payload:{
					starships: detailedStarship
				}
			})

		}
		getPeople();
		getPlanets();
		getStarships();

	}, [])

	return (
		<div className="container">
			<h2 className="mt-2 text-dark-emphasis">Characters</h2>
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
			<h2 className="mt-2 text-dark-emphasis">Planets</h2>
			<div className="d-flex flex-row gap-3 overflow-x-auto py-3">
				{Array.isArray(store.planets) && store.planets.length > 0 ? (
					store.planets.map(planet => (
						<div className="" key={planet.uid}>
							<Planet planet={planet} />
						</div>
					))
				) : (
					null
				)}
			</div>
			<h2 className="mt-2 text-dark-emphasis">Starships</h2>
			<div className="d-flex flex-row gap-3 overflow-x-auto py-3">
				{Array.isArray(store.starships) && store.starships.length > 0 ? (
					store.starships.map(starship => (
						<div className="" key={starship.uid}>
							<Starship starship={starship} />
						</div>
					))
				) : (
					null
				)}
			</div>
		</div>
	);
}; 