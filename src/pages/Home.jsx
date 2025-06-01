import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { People } from "./People.jsx";

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

		getPeople();


	}, [])

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