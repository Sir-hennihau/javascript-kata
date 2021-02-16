import React, { useState } from "react";
import { AppContainer } from "./Components/appContainer";
import { Literature } from "./Components/Literature/literature";
import { SearchBar } from "./Components/searchBar";

import { useCSVLiterature } from "./Utils/hooks";

const App = () => {
  // --- STATE ---

  const [search, setSearch] = useState();
  const books = useCSVLiterature("books.csv", search);
  const magazines = useCSVLiterature("magazines.csv", search);

  // --- CALLBACKS ---

  const onSearchChange = (event) => {
    event.preventDefault();

    setSearch(event.target.value);
  };

  return (
    <AppContainer>
      <h1>Digitalte Bibliothek</h1>

      <SearchBar
        onChange={onSearchChange}
        placeholder="Suche nach ISBN oder der E-Mail des Authors"
      />

      <h2>Bücher</h2>

      {books?.map((book, index) => (
        <Literature literature={book} key={index} />
      ))}

      <h2>Magazine</h2>

      {magazines?.map((magazine, index) => (
        <Literature literature={magazine} key={index} />
      ))}
    </AppContainer>
  );
};

export default App;
