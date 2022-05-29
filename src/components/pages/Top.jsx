import styled from "styled-components";
import { Footer } from "../atoms/layout/Footer";
export const Top = () => {
  return (
    <>
      <SContainer>
        <h2>TOP</h2>
      </SContainer>
      <Footer />
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
