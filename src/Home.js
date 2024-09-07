import EpisodeList from "./EpisodeList";

const  Home= () => {

    return ( 
        <div className="home">
            <h2>Om podcasten</h2>
            <p>Kuriosa är en podcast som behandlar allt ifrån Konspirationsteorier, samhällsfenomen och psykologi till exoplaneter, historia och geografi!</p>
            <div className="home-overlay">
                
            </div>
            <h2>Senaste avsnitten!</h2>
            <EpisodeList amount={3} category="all"/>
        </div>
    );
}
 
export default Home;