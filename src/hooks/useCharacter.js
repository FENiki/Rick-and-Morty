import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useCharacter(url,query) {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();

    const controller = new AbortController();
    const signal = controller.signal;
    async function fectData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${url}${query}`,
          // { cancelToken: source.token }
          { signal }
        );
        console.log(data.error);
        setCharacter(data.results.slice(0, 10));
      } catch (error) {
        if (!axios.isCancel()) {
          // console.log(error.name);
        }
        setCharacter([]);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    // if (character.length < 3) {
    //   setCharacter([]);
    //   return;
    // }

    fectData();
    return () => {
      // source.cancel();
      controller.abort();
    };
  }, [query]);

  return { isLoading, character };
}
