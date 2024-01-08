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
import CreateEvent from "./app/createEvent";
import { Toaster } from "react-hot-toast";
import ManageEvents from "./app/manageEvents";
import AdminEventDetail from "./app/adminEventDetails";
import Profile from "./app/profile";

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
        <Route path="/manage/events/create" exact element={<CreateEvent />} />
        <Route path="/manage/events" exact element={<ManageEvents />} />
        <Route path="/manage/events/:id" exact element={<AdminEventDetail />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route exact path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
