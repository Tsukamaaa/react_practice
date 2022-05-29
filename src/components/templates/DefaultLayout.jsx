import { Header } from "../atoms/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../atoms/layout/Footer";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Top />}></Route>
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {children}
      <Footer />
    </>
  );
};
