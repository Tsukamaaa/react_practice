import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `aaa_${val}`,
    image: "https://source.unsplash.com/rQsYZnCRU00",
    email: "aaa@example.com",
    phone: "000-1234-5678",
    company: {
      name: "ウルトラ株式会社"
    },
    website: "https://google.com"
  };
});
export const Users = () => {
  const [state, setState] = useState();
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
