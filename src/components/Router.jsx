import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Article, NotFound, ArticleList } from "../pages";
import { Footer, Header } from ".";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/list/*" element={<ArticleList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
