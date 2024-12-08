import { createContext, useEffect, useState } from "react";

import "./App.css";
import NavBar, { Favorites, Search, SearchResult } from "./components/NavBar";
import useCharacter from "./hooks/useCharacter";
import CharacterItem from "./components/CharacterItem";
import CharacterDetailes from "./components/CharacterDtailes";
import useLocalStorage from "./hooks/useLocalStorage";
import { Toaster, toast } from "react-hot-toast";

import { Practic1 } from "./Practices/Practic1";
import { Practic2 } from "./Practices/Practic2";
import Video from "./Practices/Video";
import Reducer from "./Practices/Reducer";
import Post from "./Practices/ReducerFetch";
import ReducerFetch from "./Practices/ReducerFetch";
import Form from "./Practices/Context/Form";
function App() {
  const ThemeContex = createContext()
  const [query, setQuery] = useState("");
  const { isLoading, character } = useCharacter(
    "https://rickandmortyapi.com/api/character?name=",
    query
  );
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useLocalStorage("FAVORITES", []) ; //key , initialState
  // const [addFavorites, setAddFavorites] = useState(
  //   () => JSON.parse(localStorage.getItem("FAVORITES")) || [] //if there wasn't favorites returns empty array
  // );
  // useEffect(() => {
  //   localStorage.setItem("FAVORITES", JSON.stringify(addFavorites));
  // }, [addFavorites]);


  function handleSelectCharacter(id) {
    setSelectedId(id);
  }
  const handleAddFavorites = (character) => {
    setFavorites((prevCharactor) => [...prevCharactor, character]);
  };
  const isAddToFavorites = favorites
    .map((fav) => fav.id)
    .includes(selectedId); //to prevent adding same id in the array

  const onDeleteFavorites = (id) => {
    setFavorites((prevFav) => prevFav.filter((fav) => fav.id !== id));
  };

  //Async Await Sample with fetch
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch(
  //         "https://rickandmortyapi.com/api/character"
  //       );
  //       if (!response.ok) throw new Error("disaster happend ...");
  //       console.log(response);
  //       const data = await response.json();
  //       setCharacter(data.results);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }finally{
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData();
  // }, []);

  //Then Catch Sample with fetch
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => {
  //       console.log(res)
  //       if (!res.ok) throw new Error("somthing went wrong!!");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCharacter(data.results);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      <div>
        {/* <Practic1/>
        <Practic2/>
        <Video/> */}
        {/* <Reducer/> */}
        {/* <ReducerFetch/> */}
        {/* <Form/> */}
        <Toaster />
        <NavBar>
          <Search query={query} setQuery={setQuery} />
          <SearchResult numOfResult={character.length} />
          <Favorites
            favorites={favorites}
            onDeleteFavorite={onDeleteFavorites}
          />
        </NavBar>
      </div>
      <div className="main">
        <Main>
          <CharacterItem
            selectedId={selectedId}
            character={character}
            isLoading={isLoading}
            onSelectCharacter={handleSelectCharacter}
          />
          <CharacterDetailes
            selectedId={selectedId}
            onAddFavorires={handleAddFavorites}
            isAddToFavorites={isAddToFavorites}
          />
        </Main>
      </div>
    </>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
