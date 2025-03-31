import { Route, Routes } from "react-router-dom";
import LandingPage from "./home/LandingPage";
import UserRegistration from "./home/Components/UserRegistration";
import Login from "./home/Components/Login";
import { useEffect, useState } from "react";
import PageNotFound from "./Errors/PageNotFound";
import Logout from "./home/Components/Logout";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const record = localStorage.getItem("current_login");
    if (record) {
      setLoginStatus(true);
    }
  }, []);

  return (
    <Routes>
      {/* Always accessible */}
      <Route path="/" element={<LandingPage />} />

      {loginStatus ? (
        <>
          {/* Show if user is logged in */}
          <Route path="/logout" element={<Logout />} />
        </>
      ) : (
        <>
          {/* Show if user is NOT logged in */}
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
        </>
      )}

      {/* 404 - Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
