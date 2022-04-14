import { React, useState } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import moviesData from "../../common/moviesData.js";
import ImageListComponent from "./ImageListComponent";
import ReleasedMovieList from "./ReleasedMovieList";
import MovieFilter, { userSelection } from "./MovieFilter";
import genres from "./genre";
import artists from "./artists";

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: moviesData,
//             genres: genres,
//             artists: artists,
//             userSelection: moviesData,
//         };
//     }


function Home() {
    const [homeState, setHomeState] = useState({
        data: moviesData,
        genres: genres,
        artists: artists,
        userSelection: moviesData,
    });

    const [movieState, setMovieState] = useState(moviesData);

    // -------- Handler Function for filter------//

    filterHandler = () => {
        if (
            userSelection.name === "" &&
            userSelection.releaseDateStart === "" &&
            userSelection.releaseDateEnd === "" &&
            userSelection.genres.length === 0 &&
            userSelection.artists.length === 0
        ) {
            const state = this.state;
            state.userSelection = moviesData;
            this.setState(state);
            return moviesData;
        } else {
            const filteredMovies = movieState.filter((movie) => {
                if (
                    movie.title.toLowerCase() === userSelection.name.toLowerCase() ||
                    movie.genres.some((genre) => userSelection.genres.includes(genre)) ||
                    // parseInt(new Date(movie.release_date).getTime()) <=
                    // parseInt(new Date(userSelection.releaseDateEnd).getTime()) ||
                    // parseInt(new Date(movie.release_date).getTime()) >=
                    // parseInt(new Date(userSelection.releaseDateStart).getTime()) ||
                    (parseInt(new Date(movie.release_date).getTime(), 10) <=
                        parseInt(new Date(userSelection.releaseDateEnd).getTime(), 10) &&
                        parseInt(new Date(movie.release_date).getTime(), 10) >=
                        parseInt(
                            new Date(userSelection.releaseDateStart).getTime(),
                            10
                        )) ||
                    movie.artists.some((artist) =>
                        userSelection.artists.includes(
                            `${artist.first_name} ${artist.last_name}`
                        )
                    )
                ) {
                    return movie;
                }
                return null;
            });
            const newState = filteredMovies;
            setMovieState(newState);
        }
    };

    // -------Returning Components of Home Page-----//
    // render() {
    return (
        <div>
            <Header headerBtnType="loginBtn" buttonName="LOGIN" headerBtnType2="hiddenbtn" buttonName2="hidden" headerBtnType3="logoutbtn" variant="contained" buttonName3="LOGOUT" />
            <div className="upcomingMovieHeadingDiv">
                <span className="upcomingMovieHeading">Upcoming Movies</span>
            </div>
            <div className="ImageListDiv">
                <ImageListComponent moviesData={homeState.data} />
            </div>
            <div className="flex-container">
                <div className="left">
                    <ReleasedMovieList moviesData={movieState} />
                </div>
                <div className="right">
                    <MovieFilter filterHandler={filterHandler} />
                </div>
            </div>
        </div>
    );
}
export default Home;


// return (
//     <div>
//         <Header
//             headerBtnType="loginbtn"
//             buttonName="LOGIN"
//             headerBtnType2="hiddenbtn"
//             variant="contained"
//             buttonName2="hidden"
//             headerBtnType3="logoutbtn"
//             buttonName3="LOGOUT"
//         />
//         <span className="heading">Upcoming movies</span>
//         <SingleLineImageList moviesData={homeState.data} />
//         <div className="flex-container">
//             <div className="homeImages">
//                 <TitlebarImageList moviesData={movieState} />
//             </div>
//             <div className="movieFilter">
//                 <MovieFilter
//                     genres={homeState.genres}
//                     artists={homeState.artists}
//                     filterHandler={filterHandler}
//                 />
//             </div>
//         </div>

//     </div>
// );
// }
