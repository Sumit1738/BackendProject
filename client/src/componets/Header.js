import React from 'react'
import { Link } from "react-router-dom";
import { authActions } from "../store";
import {
    AppBar, Typography,Toolbar, Box,  Button, Tabs, Tab,
  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

const Header = () => {
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [value, setValue] = useState();

  return <AppBar 
  position='sticky'
  sx={{ background: 
  "linear-gradient(90deg, rgba(9,113,2,1) 3%, rgba(205,110,231,1) 100%)" }}>
      
      <Toolbar>
          <Typography variant='h4'>
              Blood Bank
          </Typography>
         { isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="aqua"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                //className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="Blood Available"
              />
              <Tab
                //className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Donation"
              />
              <Tab
                //className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Donate"
              />
            </Tabs>
          </Box>}
          <Box display="flex" marginLeft="auto">
              {!isLoggedIn && (
             <> <Button
              LinkComponent={Link}
              to="login/"
              sx={{ margin: 1, fontWeight : 'bold' ,fontSize:'19px', color:"orange" , borderRadius: 10 }}
              >
                  Login/signup
              </Button>
              </>
              )}

              {isLoggedIn && (
            <Button
          onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
          </Box>
      </Toolbar>
  </AppBar>
}

export default Header