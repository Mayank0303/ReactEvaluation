import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:3002/movies");

    setState(res.data);
  };
  return(
      <>
      {state.map((e,i)=>{
        return  <p key={i}>
           Movies Name <Link to={`/movie/${e.id}`}>{e.name}</Link>
        </p>
      })}
      </>
  )
  
};
