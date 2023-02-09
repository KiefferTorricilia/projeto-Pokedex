import GlobalState from "./contexts/GlobalState";
import Router from "./routes/Router";
import axios from "axios";
import { useEffect } from "react";




function App() {
  
  return (
    <GlobalState>
    <Router />
    </GlobalState>
  );
}

export default App;
