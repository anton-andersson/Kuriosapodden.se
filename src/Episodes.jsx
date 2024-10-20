import { useState } from "react";
import EpisodeList from "./EpisodeList";

const Episodes = () => {
  const [currentCategory, setCategory] = useState("all");

  return (
    <div className="episodes-page">
      <h2>Avsnitt av kuriosa!</h2>
      <p>
        Samtliga avsnitt finns där poddar finns! Nedan följer
        avsnittsbeskrivning, indexering, källhänvisning osv.!
      </p>
      <h2>Kategorier</h2>
      <div className="category-buttons">
        <button
          onClick={() => {
            setCategory("all");
          }}
        >
          Allt
        </button>
        <button
          onClick={() => {
            setCategory("psychology");
          }}
        >
          Psykologi
        </button>
        <button
          onClick={() => {
            setCategory("conspiracy");
          }}
        >
          Konspirationer
        </button>
        <button
          onClick={() => {
            setCategory("culture");
          }}
        >
          Kultur
        </button>
        <button
          onClick={() => {
            setCategory("history");
          }}
        >
          Historia
        </button>
        <button
          onClick={() => {
            setCategory("science");
          }}
        >
          Vetenskap
        </button>
      </div>
      <h2>Avsnitt</h2>
      <div className="episode-grid">
        <EpisodeList category={currentCategory} />
      </div>
    </div>
  );
};

export default Episodes;
