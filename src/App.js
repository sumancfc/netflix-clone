import React from "react";
import { FaqsContainer } from "./containers/Faq";
import FooterContainer from "./containers/Footer";
import JumbotronContainer from "./containers/Jumbotron";

const App = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default App;
