import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClickSignout = async () => {
    await axios({
      url: "https://kapi.kakao.com/v1/user/unlink",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        window.location.replace("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => onClickSignout()}>로그아웃</button>
    </>
  );
};

export default SignOut;
