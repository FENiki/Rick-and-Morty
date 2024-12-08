import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = { loading: true, data: null, error: false };

function fetchReducer(state, { type, payload }) {
  switch (type) {
    case "PENDING":
      return { loading: true, data: null, error: false };
    case "SUCCESS":
      return { loading: false, data: payload, error: false };
    case "REJEC":
      return { loading: false, data: null, error: true };

    default:
      return state;
  }
}

export default function Post() {
  const [state, dispatchFetch] = useReducer(fetchReducer, initialState);
  const { loading, data, error } = state;

  // useEffect(() => {
  //   dispatchFetch({
  //     type: "PENDING",
  //    payload: "Pending"
  //   });
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       dispatchFetch({ type: "SUCCESS", payload: response });
  //     })
  //     .catch((error) =>
  //       dispatchFetch({ type: "REJEC", payload: error.data.message })
  //     );
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
     
      try {
         dispatchFetch({ type: "PENDING" });

      const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
      dispatchFetch({type:"SUCCESS", payload: data})
      } catch (error) {
        dispatchFetch({type:"REJECT" , payload: "somthing went wrong!"})
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{ color: "#fff" }}>
      {loading ? (
        <p>Data is Loading ...</p>
      ) : (
        <>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </>
      )}
      {error && <p>An Error occured</p>}
    </div>
  );
}
