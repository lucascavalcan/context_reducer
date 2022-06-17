import { useContext } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {SignUp} from "./pages/SignUp";
import {ShowData} from "./pages/ShowData";

import {Context} from "./contexts/Context";

const App = () => {

  const {state, dispatch} = useContext(Context);

  function handleSwitchTheme() {
    if (state.theme.status === "light") {
      dispatch ({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
          color: "light"
        }
      });
    } else {
      dispatch ({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
          color: "dark"
        }
      });
    }
  };


  return (
    <BrowserRouter>
      <div style={{
        backgroundColor: state.theme.status === "light" ? "#FFF" : "#000",
        color: state.theme.color === "light" ? "#fff" : "#000"
      }}>
        <h1>Título da página</h1>
        Tema: {state.theme.status}
        <button onClick={handleSwitchTheme}>Switch Theme</button>
        <hr/>
        <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/exibir" element={<ShowData/>}/>
        </Routes>
      </div>
  </BrowserRouter>

  );
}

export default App;