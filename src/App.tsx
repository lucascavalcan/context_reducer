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
          status: "dark"
        }
      });
    } else {
      dispatch ({
        type: "CHANGE_STATUS",
        payload: {
          status: "light"
        }
      });
    }
  }

  return (
    <BrowserRouter>
      <div style={{
        backgroundColor: state.theme.status === "light" ? "#FFF" : "#000",
        color: state.theme.status === "light" ? "000" : "#FFF"
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