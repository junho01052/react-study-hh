import SignOut from "../components/Signout";

const SigninSucess = () => {
  if (!localStorage.getItem("token")) {
    window.location.replace("/");
  }
  return (
    <>
      <h1>로그인 성공!</h1>
      <SignOut></SignOut>
    </>
  );
};

export default SigninSucess;
