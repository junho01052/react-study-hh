import Item from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";
// import { loadDogs } from "../api/dogs";
// import { useQuery } from "react-query";

const ItemList = () => {
  const [dogs, setDogs] = useState([]);

  //리액트 쿼리
  //   const [isLoading, isError, data] = useQuery("dogs", loadDogs);

  const loadDogs = async () => {
    await axios
      .get(`https://api.thedogapi.com/v1/images/search`, {
        headers: {
          "x-api-key": `${import.meta.env.VITE_API_KEY}`,
        },
        params: {
          limit: 10,
          has_breeds: true,
        },
      })
      .then(({ data }) => {
        //   console.log(data);
        const newDog = [];
        data.forEach((dog) => newDog.push(dog));
        setDogs((prevDog) => {
          return [...prevDog, ...newDog];
        });
        //   console.log(newDog);
      });
  };

  //리액트 쿼리
  //   if (isLoading) {
  //     return <h1>로딩중입니다</h1>;
  //   }
  //   if (isError) {
  //     return <h1>오류가 발생했습니다</h1>;
  //   }

  const infiniteScroll = (e) => {
    // console.log(e.target.documentElement.scrollTop);
    // console.log(e.target.documentElement.scrollHeight);
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      loadDogs();
    }
  };

  useEffect(() => {
    loadDogs();
    window.addEventListener("scroll", infiniteScroll);
  }, []);

  const set = new Set(dogs);
  const filterDogs = [...set];
  //   console.log(filterDogs);

  //리액트 쿼리
  //   const set = new Set(data);
  //   const filterDogs = [...set];
  //   console.log(filterDogs);

  return (
    <>
      {filterDogs &&
        filterDogs.map((dog) => {
          return <Item key={dog.id} dog={dog} />;
        })}
    </>
  );
};

export default ItemList;
