import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
import { EyeDropperIcon } from "@heroicons/react/24/solid";
import { Children } from "react";

function CharacterItem({
  character,
  isLoading,
  onSelectCharacter,
  selectedId,
}) {
  return (
    <div className="character-item">
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          character.map((item) => (
            <Character key={item.id} item={item}>
              <button
                className="icon red"
                onClick={() => onSelectCharacter(item.id)}
              >
                {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            </Character>
          ))
        )}
      </div>
    </div>
  );
}

export default CharacterItem;

export function Character({ item, children }) {
  // console.log(item);
  return (
    <div className="list-item">
      <img src={item.image} alt={item.name} />
      <CharacterName item={item} />
      <Info item={item} />
      {children}
    </div>
  );
}
//just for concept of prop drilling
function CharacterName({ item }) {
  return (
    <h3 className="name">
      <span> {item.gender === "Male" ? "👨‍🦰" : "👩‍🦰"} </span>
      <span> {item.name} </span>
    </h3>
  );
}

//just for concept of prop drilling
function Info({ item }) {
  return (
    <div className="list-item__info .info">
      <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
      <span> {item.status} </span>
      <span> - {item.species} </span>
    </div>
  );
}
