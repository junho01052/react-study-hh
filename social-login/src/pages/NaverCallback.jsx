import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NaverCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let newStr = location.search.split("=")[1].slice(0, -6);
  const NAVER_CODE = newStr;
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;

  //   if (localStorage.getItem("token")) {
  //     window.location.replace("/signinsucess");
  //   }

  const getNaverToken = async () => {
    await axios({
      url: "https://nid.naver.com/oauth2.0/token",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded;charset=utf-8" },
      data: {
        grant_type: "authorization_code",
        client_id: `${NAVER_CLIENT_ID}`,
        client_secret: `${NAVER_CLIENT_SECRET}`,
        code: NAVER_CODE,
        state: "test",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>네이버 인가 코드 받기 성공</h1>
      <button onClick={getNaverToken}>토큰 받아오기</button>
    </>
  );
};

export default NaverCallback;
