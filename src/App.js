import "./App.css";
import Main from "./pages/MainPage";
import { getImages } from "./db/images";
import { useEffect, useState } from "react";
import { getTags } from "./db/tags";

function App() {
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div style={{ marginTop: 25, marginBottom: 55 }}>
      <Main />
    </div>
  );
}

export default App;
