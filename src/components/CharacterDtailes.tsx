import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";

function CharacterDetailes({ selectedId, onAddFavorires, isAddToFavorites }) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
      
        setCharacter(data);

        const episodesId = data.episode.map((item) => item.split("/").at(-1));
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodeData].flat());
      } catch (error) {
        
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedId) fetchData();
  }, [selectedId]);

  if (isLoading)
    return (
      <div style={{ flex: 1 }}>
        <Loader />
      </div>
    );

  if (!character || !selectedId)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)", margin: "1rem" }}>
        Please select a character to show the deatails...
      </div>
    );

  return (
    <div style={{ flex: 1 }}>
      <CharacterSubInfo
        character={character}
        isAddToFavorites={isAddToFavorites}
        onAddFavorires={onAddFavorires}
      />
      <EpisodesList episodes={episodes} />
    </div>
  );
}

export default CharacterDetailes;

function CharacterSubInfo({ character, onAddFavorires, isAddToFavorites }) {
  return (
    <div className="character-detail">
      <img
        className="character-detail-img"
        src={character.image}
        alt={character.name}
      />
      <div className="character-detail-info">
        <h3 className="name">
          <span>&nbsp;{character.gender == "Male" ? "👨" : "👩"} </span>
          <span>&nbsp;{character.name} </span>
        </h3>
        <div className="info">
          <span
            className={`status ${character.status === "Dead" ? "red" : ""}`}
          ></span>
          <span>{character.status}</span>
          <span> - &nbsp;{character.species}</span>
        </div>
        <div className="location info">
          <p>last known location:</p>
          <p>{character.location.name}</p>
        </div>
        <div className="action">
          {isAddToFavorites ? (
            <p style={{ color: "var(--rose-500)" }}>
              <HeartIcon className="icon" />
            </p>
          ) : (
            <button
              onClick={() => onAddFavorires(character)}
              className="btn--primary"
            >
              Add to Favorite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function EpisodesList({ episodes }) {
  const [sortBy, setSortBy] = useState(true);  

  let sortedEpisodes;

  if (sortBy) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }

  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes</h2>
        <button onClick={() => setSortBy((is) => !is)}>
          <ArrowUpCircleIcon
            className="icon"
            style={{
              rotate: sortBy ? "0deg" : "180deg",
              backgroundColor: "transparent",
            }}
          />
        </button>
      </div>
      <ul>
        {sortedEpisodes.map(
          (
            item: { id: any; episode: any; name: any; air_date: any },
            index: number
          ) => (
            <li key={item.id}>
              <div>
                {String(index + 1).padStart(2, "0")} {item.episode} :
                <strong> {item.name} </strong>
              </div>
              <div className="badge--secondary">{item.air_date}</div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
