import { useState } from 'react';
const EpisodeList = (props) => {
    
    const [episodes, setEpisodes] = useState([
        { id: 1, title: "Avsnitt 1: Sentinelesöarna", intro: "I poddens pilotavsnitt behandlar vi norra sentinelesöns urbefolkning och deras historiska kontakter med övriga världen!", date: "2019-09-01" },
        { id: 2, title: "Avsnitt 2: Humarpatologi och miasmateori", intro: "I det andra avsnittet, som kom 5 år efter pilotavsnittet, pratar vi om forna medicinska teorier!", date: "2024-07-29" },
        { id: 3, title: "Avsnitt 3: UFO-incidenter", intro: "Efter att kommit igång igen efter 5 års vila följer här ett avsnitt om olika incidenter folk har haft med påstådda UFOn!", date: "2024-08-12"},
        { id: 4, title: "Avsnitt 4: Masshysteri", intro: "I pddens fjärde avsnitt, andra efter namnbytet till kuriosa, behandlar Tim och Anton masshysteri genom historien", date: "2024-08-26"},
    ]);

    const amount = props.amount == null ? episodes.length : props.amount;

    // Sort episodes by id in descending order and slice to get the desired amount
    const sortedEpisodes = episodes.sort((a, b) => b.id - a.id).slice(0, amount);

    return ( 
        // Gets the amount of episodes to display from the amount prop.
        <div className="episode-list">
            {sortedEpisodes.map(episode => (
                <div className="episode-preview" key={episode.id}>
                    <h2>{ episode.title }</h2>
                    <p>{ episode.intro }...</p>
                    <p>{ episode.date }</p>
                </div>
            ))}
        </div>
     );
}
 
export default EpisodeList;