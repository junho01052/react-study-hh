import GoogleSignin from "../components/GoogleSignin";
import KakaoSignin from "../components/KakaoSignin";
import NaverSignin from "../components/NaverSignin";
import { styled } from "styled-components";

const Home = () => {
  if (localStorage.getItem("token")) {
    window.location.replace("/signinsucess");
  }
  return (
    <StHome>
      <GoogleSignin />
      <KakaoSignin />
      <NaverSignin />
    </StHome>
  );
};

export default Home;

const StHome = styled.div`
  display: flex;
  flex-direction: column;
`;
