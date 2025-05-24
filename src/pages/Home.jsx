import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		const get_people = async () => {
			const loadPeopleData = await fetch('https://www.swapi.tech/api/people/', {
				method:'GET'
			})
			const responsePeople = await loadPeopleData.json();
			dispatch ({
				type:'set-people',
				payload: responsePeople
			})
		}
		const responsePeople = asyn () =>{
			
		}

	}, [])


	return (
		<div className="text-center mt-5">

		</div>
	);
}; 