import { useState } from "react";
import "./App.css";

function App() {
  const [cats, setCats] = useState<any[]>([]);

  const getAllCats = async () => {
    const res = await fetch("/api/cats");
    const cats = await res.json();
    setCats(cats);
  };

  return (
    <>
      <button onClick={getAllCats}>Get All Cats!</button>
      {cats.map((cat) => (
        <p key={cat._id}>{cat.name}</p>
      ))}
    </>
  );
}

export default App;
