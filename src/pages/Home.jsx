import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const get_people = async () => {
			const loadPeopleData = await fetch('https://www.swapi.tech/api/people/', {
				method:'GET'
			})
			const reponsePeople = await loadPeopleData.json();
			dispatch ({
				type:'set-people',
				payload: {
					people : reponsePeople
				}
			})
		}
		const get_planets = async () =>{
			const loadPlanetsData = await fetch ('https://www.swapi.tech/api/planets/',{
				method:'GET'
			})
			const reponsePlanet = await loadPlanetsData.json();
			dispatch({
				type:'set-planets',
				payload : reponsePlanet
			})
		const get_starShips = async () =>{
			const loadShipsData = await fetch ('https://www.swapi.tech/api/starships/',{
				method:'GET'
			})
			const reponseShips = await loadShipsData.json();
			dispatch({
				type:'set-starships',
				payload : reponseShips
			})
		}

		get_people();
		get_planets();
		get_starShips();
	}, [])


	return (
		<div className="text-center mt-5">


		</div>
	);
}; 