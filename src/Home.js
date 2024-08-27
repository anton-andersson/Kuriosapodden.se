import EpisodeList from "./EpisodeList";

const  Home= () => {

    return ( 
        <div className="home">
            <h2>Senaste avsnitten!</h2>
            <EpisodeList amount={3}/>
        </div>
    );
}
 
export default Home;