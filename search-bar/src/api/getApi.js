import axios from "axios";

const getApi = async () => {
  const response = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_API_KEY}`,
    },
    params: {
      sort: "accurancy",
      // page: 1,
      size: 10,
      query: searchBookName,
      // target: "title", //제목으로만 검색할 수 있게 함
    },
  });
  // console.log(response);
  // setBook([...response.data.documents]);
  return response.data.documents;
};

export { getApi };
