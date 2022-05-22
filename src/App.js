import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Error from "./Pages/Error/Error";
import { PrivetRoutes } from "./Routes/PrivetRouts";
import { PublicRoutes } from "./Routes/PublicRoutes";
import "react-toastify/dist/ReactToastify.css";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";

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
              element={
                <RequiredAuth>
                  <Component></Component>
                </RequiredAuth>
              }
            ></Route>
          ))}
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>

        <Footer></Footer>
      </Header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
