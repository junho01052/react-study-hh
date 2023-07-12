import kakaoButton from "../png/kakao_login_large_wide.png";

const KakaoSignin = () => {
  const KAKAO_REST_API = process.env.REACT_APP_KAKAO_REST_API;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  return (
    <>
      <img src={kakaoButton} alt="kakao" width="370" onClick={() => (window.location.href = kakaoURL)} />
    </>
  );
};

export default KakaoSignin;
