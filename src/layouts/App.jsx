import { Outlet } from "react-router-dom";
import Navbar from "../componests/shared/navbar/Navbar";
import Footer from "../componests/shared/footer/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />

      <div className="min-h-[calc(100vh-160px)]">
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
