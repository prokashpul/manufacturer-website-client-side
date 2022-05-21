import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Error from "./Pages/Error/Error";
import { PrivetRoutes } from "./Routes/PrivetRouts";
import { PublicRoutes } from "./Routes/PublicRoutes";

function App() {
  return (
    <>
      <Header>
        <Routes>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Component></Component>}
            ></Route>
          ))}
          {PrivetRoutes.map(({ path, Component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Component></Component>}
            ></Route>
          ))}
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>

        <Footer></Footer>
      </Header>
    </>
  );
}

export default App;
