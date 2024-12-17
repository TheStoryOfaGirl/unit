import "./App.css";
import { browserHistory } from "@utils";
import { Route, Routes } from "react-router-dom";
import { URLS } from "./const";
import { Main } from "@pages/Main/Main";
import { HistoryRouter } from "@components";

function App() {
  return (
    <>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={URLS.MAIN} element={<Main />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
