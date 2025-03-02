import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

// Store

// Slice 1
type CounterState = {
  value: number;
};

// Slice 2
type UserState = {
  isSignedIn: boolean;
};

// Actions
const increment = {
  type: "INCREMENT",
  payload: 1,
};

const decrement = {
  type: "DECREMENT ",
  payload: 1,
};

// Reducers - take state, make a copy, modify the copy and overwrite the original

function App() {
  return (
    <>
      <h2>Redux</h2>
      <Counter />
    </>
  );
}

export default App;
