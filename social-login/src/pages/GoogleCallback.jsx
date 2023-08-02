import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const GOOGLE_CODE = location.search.split("=")[1].slice(0, -6);
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;

  //   if (localStorage.getItem("token")) {
  //     window.location.replace("/signinsucess");
  //   }

  const getGoogleToken = async () => {
    await axios({
      url: "https://nid.naver.com/oauth2.0/token",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded;charset=utf-8" },
      data: {
        grant_type: "authorization_code",
        client_id: `${GOOGLE_CLIENT_ID}`,
        client_secret: `${GOOGLE_CLIENT_SECRET}`,
        code: GOOGLE_CODE,
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
      <h1>구글 인가 코드 받기 성공</h1>
      <button onClick={getGoogleToken}>토큰 받아오기</button>
    </>
  );
};

export default GoogleCallback;
