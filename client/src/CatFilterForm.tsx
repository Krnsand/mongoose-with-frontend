import { useState } from 'react';

interface Props {
  onSubmit: (minAge: number, maxAge: number, patterns: string[]) => void;
}

export default function CatFilterForm(props: Props) {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(20);
  const [patterns, setPatterns] = useState<string[]>([]);

  const handlePatternsSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPatterns([...patterns, e.target.name]);
    } else {
      setPatterns(patterns.filter((p) => p !== e.target.name));
    }
  };

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(minAge, maxAge, patterns);
  };

  return (
    <form onSubmit={handelSubmit}>
      <section>
        <h2>Select patterns</h2>
        <label htmlFor="striped">Striped</label>
        <input
          name="color"
          type="checkbox"
          checked={patterns.includes('striped')}
          onChange={handlePatternsSelect}
        />
        <label htmlFor="spotty">Spotty</label>
        <input
          name="spotty"
          type="checkbox"
          checked={patterns.includes('spotty')}
          onChange={handlePatternsSelect}
        />
        <label htmlFor="bi-chrome">Bi-Chrome</label>
        <input
          name="bi-chrome"
          type="checkbox"
          checked={patterns.includes('bi-chrome')}
          onChange={handlePatternsSelect}
        />
        <label htmlFor="uni-chrome">Uni-Chrome</label>
        <input
          name="uni-chrome"
          type="checkbox"
          checked={patterns.includes('uni-chrome')}
          onChange={handlePatternsSelect}
        />
      </section>

      <section>
        <h2>Select age span</h2>
        <input
          name="minAge"
          type="number"
          placeholder="Min Age"
          value={minAge}
          onChange={(e) => setMinAge(Number(e.target.value))}
        />
        <input
          name="maxAge"
          type="number"
          placeholder="Max Age"
          value={maxAge}
          onChange={(e) => setMaxAge(Number(e.target.value))}
        />
      </section>
      <button>Search</button>
    </form>
  );
}
