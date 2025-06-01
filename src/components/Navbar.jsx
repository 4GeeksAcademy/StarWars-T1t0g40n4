import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	  const removeFavorites =(favorite) =>{
        dispatch({
            type: 'remove-favorite',
            payload: {
                uid: favorite.uid,
                type: favorite.type,
            }
        });
    }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {
								store.favorites.length
							}
						</a>

						<ul className="dropdown-menu">
							{
								store.favorites.map(favorite => (
									<li key={favorite.uid + favorite.type}>
										{
											favorite.name
										}
										<i onClick={() => removeFavorites(favorite)
										}

											className="fa-solid fa-trash"></i>
									</li>
								)

								)
							}



						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};