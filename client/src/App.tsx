import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';

async function getAllVisits() {
  const res = await fetch('/api/visits');
  return res.json();
}

function App() {
  const [cats, setCats] = useState<any[]>([]);
  const visits = useQuery({ queryKey: ['visits'], queryFn: getAllVisits });

  const getAllCats = async () => {
    const res = await fetch('/api/cats');
    const cats = await res.json();
    setCats(cats);
  };

  return (
    <>
      <button onClick={getAllCats}>Get All Cats!</button>
      {cats.map((cat) => (
        <p key={cat._id}>{cat.name}</p>
      ))}

      <h2>VISITS</h2>
      {visits.data?.map((visit: any) => (
        <p key={visit._id}>
          {visit.name} - {visit.cat.name}
        </p>
      ))}
    </>
  );
}

export default App;
