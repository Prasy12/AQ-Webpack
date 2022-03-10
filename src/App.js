import React from "react";

const App = () => {
   console.log("ENV", `${process.env.REACT_APP_ENDPOINT_URL}`);
   return <div>Agnostiq!</div>;
};

export default App;