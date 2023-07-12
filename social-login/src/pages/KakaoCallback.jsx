import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  //   console.log(location.search.split("=")[1]);
  const KAKAO_REST_API = process.env.REACT_APP_KAKAO_REST_API;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  if (localStorage.getItem("token")) {
    window.location.replace("/signinsucess");
  }

  const getKakaoToken = async () => {
    await axios({
      url: "https://kauth.kakao.com/oauth/token",
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" },
      data: {
        grant_type: "authorization_code",
        client_id: `${KAKAO_REST_API}`,
        redirect_uri: `${KAKAO_REDIRECT_URI}`,
        code: KAKAO_CODE,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.access_token);
          navigate("/signinsucess");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>카카오 인가 코드 받기 성공</h1>
      <button onClick={getKakaoToken}>토큰 받아오기</button>
    </>
  );
};

export default KakaoCallback;
