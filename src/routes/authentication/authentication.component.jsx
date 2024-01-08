import { useEffect, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { useNavigate } from "react-router-dom";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Footer from "../../components/footer/footer.component";

import "./authentication.styles.scss";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) navigate("/");
  }, [currentUser]);

  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default Authentication;
