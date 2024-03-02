import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./app/home";
import About from "./app/about";
import Terms from "./app/terms";
import Register from "./app/auth/register";
import Login from "./app/auth/login";
import Events from "./app/events";
import EventDetails from "./app/eventDetails";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "./authWrapper";
import { authRoutes } from "./authRoutes";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/terms" exact element={<Terms />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/events" exact element={<Events />} />
        <Route path="/events/:id" exact element={<EventDetails />} />
        <Route element={<AuthWrapper />}>
          {authRoutes.map((auth, idx) => (
            <Route path={auth.path} element={auth.element} key={idx} exact />
          ))}
        </Route>
        <Route exact path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
