import { Routes, Route } from "react-router-dom";
import MovieManagement from "./Components/MovieManagement";
import Movies from "./Components/Movies";
import Directors from "./Components/Directors";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MovieManagement />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;