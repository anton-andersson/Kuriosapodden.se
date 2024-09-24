import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "./data/db.json";

const EpisodeList = (props) => {
  const episodes = db.episodes;
  const [currentCategory, setCategory] = useState(props.category);

  //Runs on the first render
  //And any time any dependency value changes
  useEffect(() => {
    //Update category state when prop updates
    setCategory(props.category);
  }, [props.category]);

  if (!episodes) {
    return <div>Loading...</div>;
  }

  const amount = props.amount == null ? episodes.length : props.amount;

  // Sort episodes by id in descending order and slice to get the desired amount
  const sortedEpisodes = episodes.sort((a, b) => b.id - a.id).slice(0, amount);

  // Filter episodes by category if category prop is set
  const filteredEpisodes =
    currentCategory !== "all"
      ? sortedEpisodes.filter((episode) =>
          new Set(episode.category).has(currentCategory)
        )
      : sortedEpisodes;

  return (
    <div className="episode-list">
      {filteredEpisodes.map((episode) => (
        <div className="episode-preview" key={episode.id} >
          <Link to={`/episodes/${episode.id}`} style={{textDecoration: "none", padding: "0"}}>
            <img src={"/src/" + episode.image} alt="episode picture"/>
            <div className="episode-preview-text">
              <h2 style={{fontSize: "1.5em"}}>{episode.title}</h2>
              <p>{episode.intro}</p>
              <p>{episode.date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
