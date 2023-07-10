import { useState, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import { getApi } from "./api/getApi";

const Item = ({ e }) => {
  return (
    <ItemStyle>
      <img src={`${e.thumbnail}`} />
      <div>
        <span className="item-title">{e.title}</span>
        <span>{e.authors[0]}</span>
      </div>
    </ItemStyle>
  );
};

const Option = ({ e, setSearchBookName }) => {
  const onClickOption = (event) => {
    // console.log(event.target.innerText);
    setSearchBookName(event.target.innerText);
  };

  return (
    <OptionStyle>
      <div onClick={onClickOption}>{e}</div>
    </OptionStyle>
  );
};

const App = () => {
  const [searchBookName, setSearchBookName] = useState("");
  const [book, setBook] = useState([]);
  // const [reFetch, setReFetch] = useState(false);
  const [option, setOption] = useState("");
  // const enterRef = useRef(null);

  // const data = book.map((e) => e.title);
  // console.log(data);

  // const onChangeSearchBookName = (e) => {
  //   setSearchBookName(e.target.value);
  // };

  // const handleOnKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     setBook([...book]);
  //     setReFetch(!reFetch);
  //   }
  // };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      getApi();
    }
  };

  getApi();

  const { isLoading, isError, data } = useQuery("getApi", getApi());

  if (isLoading) {
    return <h1>로딩 중</h1>;
  }
  if (isError) {
    return <h1>오류 발생</h1>;
  }

  console.log(data);

  // useEffect(() => {
  //   const getApi = async () => {
  //     try {
  //       const response = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
  //         headers: {
  //           Authorization: `KakaoAK ${import.meta.env.VITE_API_KEY}`,
  //         },
  //         params: {
  //           sort: "accurancy",
  //           // page: 1,
  //           size: 10,
  //           query: searchBookName,
  //           // target: "title", //제목으로만 검색할 수 있게 함
  //         },
  //       });
  //       // console.log(response);
  //       setBook([...response.data.documents]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   if (searchBookName.length > 0) {
  //     getApi();
  //   }
  // }, [reFetch]);

  useEffect(() => {
    const getBookTitle = async () => {
      try {
        const response = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_API_KEY}`,
          },
          params: {
            sort: "accurancy",
            // page: 1,
            size: 10,
            query: searchBookName,
            target: "title", //제목으로만 검색할 수 있게 함
          },
        });
        // console.log(response);
        setOption([...response.data.documents.map((e) => e.title)]);
      } catch (err) {
        console.log(err);
      }
    };
    if (searchBookName.length > 0) {
      getBookTitle();
    }
  }, [searchBookName]);

  // console.log(option);

  return (
    <AppStyle>
      <section>
        <header>
          <h1>Quick Search for Books</h1>
          <input
            placeholder="Search..."
            value={searchBookName}
            onChange={onChangeSearchBookName}
            onKeyPress={handleOnKeyPress}
          />
          <div className="option-style">
            {option.length > 1 &&
              option.map((e, i) => {
                return <Option key={i} e={e} searchBookName={searchBookName} setSearchBookName={setSearchBookName} />;
              })}
          </div>
        </header>
        <div className="itemList-style">
          {data &&
            data.map((e) => {
              return <Item key={e.isbn} e={e} />;
            })}
        </div>
      </section>
    </AppStyle>
  );
};

export default App;

const AppStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  input {
    width: 520px;
    border: none;
    height: 30px;
    border-radius: 2rem;
    padding-left: 15px;
  }

  .itemList-style {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
  }
`;

const OptionStyle = styled.div`
  width: 510px;
  margin-left: 10px;
  padding-left: 10px;
  padding-bottom: 3px;
  background-color: white;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  img {
    width: 200px;
  }
  span {
    font-size: 15px;
    margin-left: 20px;
  }
  .item-title {
    font-size: 15px;
    font-weight: 800;
  }
`;
