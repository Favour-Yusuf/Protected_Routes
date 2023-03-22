import React from "react";
import DashBoardRoutes from "./Components/AllRoutes/DashBoardRoutes";
// import HomeRoutes from "./Components/AllRoutes/HomeRoutes";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import Settings from "./Components/Profile/Settings";

const App = () => {
  return (
    <div>
      {/* <HomeRoutes /> */}

      <PrivateRoutes>
        <Settings />
      </PrivateRoutes>
    </div>
  );
};

export default App;
