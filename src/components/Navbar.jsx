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
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://www.citypng.com/public/uploads/preview/hd-white-star-wars-logo-png-701751694787021te08lp5kwd.png" alt="Star Wars" style={{ height: "50px" }} /></span>
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