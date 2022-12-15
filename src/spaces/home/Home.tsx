import React, { useState } from "react";

const Home = () => {
  const [state, setState] = useState(0);

  return (
    <section>
      <h1>hello {state}</h1>
      <button onClick={() => setState(state + 1)}>Click me</button>
    </section>
  );
};

export default Home;
