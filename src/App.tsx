import React from "react";
import CatsList from "./CatsList";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <>
      <header className="main-header">
        <h1>Exercici Sessió 5</h1>
      </header>
      <main className="main-content">
        <h2>LListat de gats fullwidth</h2>
        <CatsList />
      </main>
      <footer className="main-footer">Exercisis curs bonÀrea</footer>
    </>
  );
};

export default App;
