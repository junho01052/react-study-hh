import axios from "axios";

const loadDogs = async (page) => {
  const response = await axios.get(import.meta.env.VITE_API_URL, {
    headers: {
      "x-api-key": `${import.meta.env.VITE_API_KEY}`,
    },
    params: {
      limit: 6,
      has_breeds: true,
    },
  });
  // .then(({ data }) => {
  //   //   console.log(data);
  //   const newDog = [];
  //   data.forEach((dog) => newDog.push(dog));
  //   setDogs((prevDog) => {
  //     return [...prevDog, ...newDog];
  //   });
  //   //   console.log(newDog);
  // });
  return response.data;
};

export { loadDogs };
