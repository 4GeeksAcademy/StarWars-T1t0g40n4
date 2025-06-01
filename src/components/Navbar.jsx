import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						{
							store.favorites && store.favorites.length > 0 ? (
								<span className="badge bg-secondary">
									{store.favorites.length} Favorites
								</span>
							) : (
								<span className="badge bg-secondary">No Favorites</span>
							)
						}
					</Link>
				</div>
			</div>
		</nav>
	);
};