import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/store";
import Container from "react-bootstrap/Container";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Container fluid>
        <main className="my-4">
          <Outlet />
        </main>
      </Container>
    </Provider>
  );
};
export default RootLayout;