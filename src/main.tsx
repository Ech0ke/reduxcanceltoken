import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Posts from "./components/Posts.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <span> </span>
          <NavLink to={"/about"}>About</NavLink>
          <span> </span>
          <NavLink to={"/posts"}>Posts</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
