import EpisodeList from "./EpisodeList";
import MediaQuery, { useMediaQuery } from "react-responsive";

const  Home= () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return ( 
    <div className="home">
      <h2>Om podcasten</h2>
      <p>Kuriosa är en podcast som behandlar allt ifrån Konspirationsteorier, samhällsfenomen och psykologi till exoplaneter, historia och geografi!</p>
      <p>Nya avsnitt varannan måndag! Lyssna där podcast finns eller följ vår feed!</p>
      <div className="home-overlay" style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        padding: "20px", 
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0"
        }}>
        <div className="overlayText">
          <h2 style={{color: "white",}}>Lyssna!</h2>
          <p style={{color: "white",}}>Podden distribueras av ACAST! Än så länge är det brist på sociala medier...</p>
          <p style={{color: "white",}}>Lyssna på oss i någon av tjänsterna nedan:</p>
          <a href="https://shows.acast.com/kuriosa" target="_blank" className="social-icon">
          <i className="fa-solid fa-a"></i>
          </a>
          <a href="https://open.spotify.com/show/1FHMXyjuTJDPNwWgAh4MvM" target="_blank" className="social-icon">
              <i className="fab fa-spotify"></i>
          </a>
          <a href="https://www.deezer.com/us/show/1001144521" target="_blank" className="social-icon">
              <i className="fab fa-deezer"></i>
          </a>
          <p style={{color: "white",}}> Eller följ våran feed:</p>
          <a href="https://feeds.acast.com/public/shows/66b63f9d5f2de2802ac88892" target="_blank" className="social-icon">
          <i className="fa-solid fa-rss"></i></a>
        </div>
        {!isMobile && <img src="/src/images/Logo_400x400.png" alt="kuriosa_logo" />}
      </div>
      <h2>Senaste avsnitten!</h2>
      <div className={isMobile ? "episode-grid": "landing-episodes"} style={isMobile ? {maxWidth: "700px"}: {}}>
        <EpisodeList amount={3} category="all"/>
      </div>
      <h2>Lyssna nu!</h2>
      <iframe src="https://embed.acast.com/66b63f9d5f2de2802ac88892?episode-order=desc&feed=true" frameBorder="0" width="100%" height="380px"></iframe>
    </div>
  );
}
 
export default Home;