import {} from "@heroicons/react/outline";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterItem";

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />

      {children}
    </nav>
  );
}

export default NavBar;

function Logo() {
  return <span className="nav-bar-logo">Logo⚜ </span>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      className="text-field"
      type="text"
      value={query}
      placeholder="search..."
      onChange={(event) => setQuery(event.target.value)}
    ></input>
  );
}

export function SearchResult({ numOfResult }) {
  return (
    <>
      <p style={{ display: "inline-block", color: "#94a3b8" }}>
        Found {numOfResult} result
      </p>
    </>
  );
}

export function Favorites({ favorites, onDeleteFavorite }) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
     <Modal title="Your Favorites" isOpen={isOpen} onOpen={setIsOpen}  >

      
      {favorites.length != 0 ? favorites.map((fav)=> <Character key={fav.id} item={fav}>
        <button onClick={()=>onDeleteFavorite(fav.id)} className="icon red">
          <TrashIcon/>
        </button>
      </Character>) : <p>You have not chosen your favorite character</p>  }
     </Modal>
      <button onClick={() => setIsOpen((is) => !is)} className="heart">
        <HeartIcon className="icon" />

        <span className="badge">{favorites.length}</span>
      </button>
    </>
  );
}
