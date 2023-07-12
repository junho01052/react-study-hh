import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleCallback from "../pages/GoogleCallback";
import Home from "../pages/Home";
import KakaoCallback from "../pages/KakaoCallback";
import Main from "../pages/Main";
import NaverCallback from "../pages/NaverCallback";
import SigninSucess from "../pages/SigninSucess";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/google/callback" element={<GoogleCallback />} />
        <Route path="/kakao/callback" element={<KakaoCallback />} />
        <Route path="/naver/callback" element={<NaverCallback />} />
        <Route path="/signinsucess" element={<SigninSucess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
