import { useParams } from "react-router-dom";
import db from "./data/db.json";

const EpisodeDetails = () => {
  const { id } = useParams();
  const episode = db.episodes.find((episode) => episode.id === parseInt(id));

  return (
    <section id="episode-background" style={{ 
    backgroundImage:`url(${require("" + episode.image)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    color: "white",
    padding: "60px 20px",
    marginBottom: "20px",
    }}>
      <div className="episode-details" style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        padding: "20px", 
        borderRadius: "10px",
        }}>
        <h2 style={{color: "white"}}>{episode.title}</h2>
        <p style={{color: "white"
        }}>{episode.intro}</p>
        {episode.text && episode.text.map(
          (text, i) => 
          <p key={i} style={{color: "white"}}>{text}</p>)}
        <h3 style={{color: "white"}}>Lyssna!</h3>
        <h3 style={{color: "white"}}>Källor</h3>
        
        <ul >
          {episode.sources && episode.sources.map(
            (sources, i) =>
            <li key={i} style={{color: "white"}}>Källa {i + 1}: <a href={sources.url} target="_blank" style={{color: "white"}}>{sources.title}</a></li>
            )}

        </ul>
        <h3 style={{color: "white"}}>Ljud och musik</h3>
        <ul>
          {episode.sounds && episode.sounds.map(
            (sounds, i) =>
            <li key={i} style={{color: "white"}}><a href={sounds.url} target="_blank"><b style={{color: "white"}}>{sounds.title}</b></a>{sounds.description && <p style={{color: "white"}}>{sounds.description}</p>} {sounds.license && <i style={{color: "white"}}>{sounds.license}</i>}</li>
          )}
        </ul>
        <p style={{color: "white"}}>{episode.date}</p>
      </div>
    </section>
  );
};

export default EpisodeDetails;
