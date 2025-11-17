import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// Components
import MainHeader from "./Components/MainHeader";
import SecondaryHeader from "./Components/SecondaryHeader";
import Footer from "./Components/Footer";

// Pages
import Home from "./Components/Home";
import AddMovie from "./Components/AddMovie";
import EditMovie from "./Components/EditMovie";
import BookingPage from "./Components/BookingPage";
import MyBookings from "./Components/MyBookings";
import Movies from "./Components/Movies";
import MovieDetails from "./Components/MovieDetails";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const App = () => {
  const location = useLocation();
  const hideSecondaryHeaderRoutes = ["/signin", "/signup"];
  const showSecondaryHeader = !hideSecondaryHeaderRoutes.includes(location.pathname);

  return (
    <>
      <MainHeader />
      {showSecondaryHeader && <SecondaryHeader />}

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/edit-movie/:id" element={<EditMovie />} /> 
          <Route path="/book/:id" element={<BookingPage />} />    
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />  
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
