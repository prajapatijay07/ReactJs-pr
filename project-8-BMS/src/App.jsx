import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetail from "./Pages/MovieDetail";
import AddMovie from "./Pages/AddMovie";
import FeaturedMovies from "./Pages/FeaturedMovies";
import EditMovieForm from "./Pages/EditMovieForm";
import Cart from "./Components/Cart";
import CustomNavbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import MovieDetailsCard from "./Pages/MovieDetailsCard";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <CustomNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Dynamic movies (from localStorage) */}
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/:id/edit" element={<EditMovieForm />} />

            {/* Featured static movies (from Home page) */}
            <Route path="/featured/:id" element={<MovieDetailsCard />} />

            <Route path="/cinemas" element={<FeaturedMovies />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
