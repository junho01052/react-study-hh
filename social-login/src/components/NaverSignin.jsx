import naverButton from "../png/btnG_official.png";

const NaverSignin = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=test&redirect_uri=http://localhost:3000/naver/callback`;
  return (
    <>
      <img src={naverButton} alt="naver" width="370" onClick={() => (window.location.href = naverURL)} />
    </>
  );
};

export default NaverSignin;
