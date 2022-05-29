import { Header } from "../atoms/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index />
          </Route>
        </Routes>
      </BrowserRouter>
      {children}
    </>
  );
};
