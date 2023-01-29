import React from "react";
import { Toolbar, Typography, AppBar, IconButton } from "@mui/material";
import { Box, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { store } from "../Store/Store";
import { useSelector } from "react-redux/es/exports";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar() {
  let akbar = useSelector((stor) => {
    return stor.loginUser;
  });
  console.log(akbar);
  return (
    <>
      <div>
        <AppBar
          position="static"
          sx={{ backgroundColor: "secondary.main", color: "white" }}
        >
          <Toolbar>
            <Grid container>
              <Grid items md={6} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ margin: "0px 23px" }}
                >
                  sneakers
                </Typography>
                <Typography sx={{ margin: "0px 23px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </Typography>
                {akbar === false ? (
                  <>
                    <Typography sx={{ margin: "0px 20px" }}>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/Login"
                      >
                        {" "}
                        Log In{" "}
                      </Link>
                    </Typography>
                    <Typography sx={{ margin: "0px 20px" }}>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/Signup"
                      >
                        {" "}
                        Sign Up{" "}
                      </Link>
                    </Typography>
                  </>
                ) : null}
              </Grid>
              {akbar === true ? (
                <Grid md={6} sx={{ textAlign: "right" }}>
                  <Link to="/addtocart">
                    <IconButton sx={{ color: "white" }}>
                      <ShoppingCartIcon />
                    </IconButton>{" "}
                  </Link>
                  <IconButton
                    onClick={() => {
                      store.dispatch({ type: "logout", val: "" });
                    }}
                    sx={{ color: "white" }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Grid>
              ) : null}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <div></div>
    </>
  );
}
