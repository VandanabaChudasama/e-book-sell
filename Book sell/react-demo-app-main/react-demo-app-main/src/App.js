import "./App.css";
import "./index.js";
import { Route, Routes, NavLink } from "react-router-dom";
import Register from "./components/Register";
import { CssBaseline, useTheme } from "@material-ui/core";
import Home from "./components/Home";
import { purple } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/auth";
import { CartProvider } from "./contexts/cartContext";
import EditBook from "./components/EditBook";
import ProductPage from "./components/ProductPage";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      light: "#bbe1fa",
      main: "#0f4c75",
      dark: "#1b262c",
      contrastText: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#0f4c75",
    },
  },
  typography: {
    fontFamily: "Fira Sans",
    fontSize: 15,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color: "#ff4081 !important",
    },
  },
});

function App() {
  // const theme=useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Header />
          <ToastContainer />
          <CssBaseline />
          <Routes path="/">
            <Route index element={<Home />} />
            {/* <Route path='/welcome' element={<Welcome />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editBook/:id" element={<EditBook />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/add-book" element={<EditBook />} />
            <Route path="/users" element={<Users />} />
            <Route path="/editUser/:id" element={<EditUser />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
