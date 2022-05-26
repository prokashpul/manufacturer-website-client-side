import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Error from "./Pages/Error/Error";
import { PrivetRoutes } from "./Routes/PrivetRouts";
import { PublicRoutes } from "./Routes/PublicRoutes";
import "react-toastify/dist/ReactToastify.css";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Purchase from "./Pages/Purchase/Purchase";
import useAdmin from "./Hooks/useAdmin";
import { AdminRoutes } from "./Routes/AdminRouter";
import EditProfile from "./Pages/Dashboard/EditeProfile/EditeProfile";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import RequireAdmin from "./Utilities/AdminUtils/AdminUtils";
import GetPayment from "./Pages/Dashboard/GetPayment/GetPayment";

function App() {
  const [admin] = useAdmin();
  // console.log(admin);
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
          <Route
            path="dashboard"
            element={
              <RequiredAuth>
                <Dashboard></Dashboard>
              </RequiredAuth>
            }
          >
            {PrivetRoutes.map(({ path, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <RequiredAuth>
                    {!admin && <Component></Component>}
                  </RequiredAuth>
                }
              ></Route>
            ))}
            {AdminRoutes.map(({ path, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <RequiredAuth>
                    <RequireAdmin>
                      {admin && <Component></Component>}
                    </RequireAdmin>
                  </RequiredAuth>
                }
              ></Route>
            ))}
            <Route
              path="/dashboard/edit-profile"
              element={<EditProfile></EditProfile>}
            ></Route>
            <Route
              path="/dashboard/payment/:id"
              element={<GetPayment />}
            ></Route>

            <Route
              path="/dashboard/my-profile"
              element={<MyProfile></MyProfile>}
            ></Route>
            <Route path="/dashboard" element={<MyProfile></MyProfile>}></Route>
          </Route>
          <Route
            path="/purchase/:id"
            element={
              <RequiredAuth>
                <Purchase></Purchase>
              </RequiredAuth>
            }
          ></Route>

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
