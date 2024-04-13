// TopBar.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./styles.css";
// import { useLocation } from "react-router-dom";
// import models from "../../modelData/models";
export default function TopBar() {
  //   const [context, setContext] = useState("");
  //   const location = useLocation();
  //   const pathname = location.pathname;
  //   if (pathname.includes("/user")) {
  //     const user = getUserById(pathname.split("/").at(-1));
  //     const newContext = user.first_name + " " + user.last_name;
  //     setContext((context) => {
  //       if (context != newContext) context = newContext;
  //     });
  //   } else if (pathname.includes("photos")) {
  //     const user = getUserById(pathname.split("/").at(-1));
  //     const newContext = "Photos of " + user.first_name + " " + user.last_name;
  //     setContext((context) => {
  //       if (context != newContext) context = newcontext;
  //     });
  //   }
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="toolbar-container">
        <Typography variant="h5" color="inherit">
          Lương Minh Tú
        </Typography>
        <Typography variant="h6" color="inherit">
          context
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

// function getUserById(id) {
//   return models.userModel(id);
// }
