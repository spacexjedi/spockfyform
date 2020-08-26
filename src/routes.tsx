import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import CadastroPage from "./pages/Cadastro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/cadastro" component={CadastroPage} />
    </BrowserRouter>
  );
}
