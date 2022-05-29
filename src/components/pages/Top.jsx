import styled from "styled-components";
import { Footer } from "../atoms/layout/Footer";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
export const Top = () => {
  const navigate = useNavigate();
  const onClickAdmin = () => navigate("/users", { status: { isAdmin: true } });
  const onClickGeneral = () =>
    navigate("/users", { status: { isAdmin: false } });
  return (
    <>
      <SContainer>
        <h2>TOP</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
      <Footer />
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
