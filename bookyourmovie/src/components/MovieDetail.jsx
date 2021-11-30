import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const [data, setData] = useState([]);

  // const {id} = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`http://localhost:3002/movies`);

    setData(res.data);
  };

  const handleClick = () =>{
      
  }
  return (
    <div>
      {data.map((e,i) => {
        return (
          <div
            style={{
              border: "4px solid black",
              fontSize: "24px",
              fontWeight: "700",
              backgroundColor: "tomato",
              margin: "8px",
              borderRadius: "8px",
            }}
           key ={i}>
            <p>{e.name}</p>
            <p>{e.release}</p>
            <p>{e.ticketprice}</p>
            <button style={{padding:"7px",fontWeight: "700",fontSize:"24px"}} onClick={handleClick}>Book</button>
          </div>
        );
      })}
    </div>
  );
};
