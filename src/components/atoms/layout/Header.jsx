import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <SHeader>
        <SNavLink to="/">HOME</SNavLink>
        <SNavLink to="/users">USERS</SNavLink>
      </SHeader>
      <Outlet />
    </>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SNavLink = styled(NavLink)`
  margin: 0 8px;
`;
