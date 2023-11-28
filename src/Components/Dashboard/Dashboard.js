import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup, ViewIcon } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Admindashboard from "../Admin/Admindashboard";
import Fest from "../Fests/Fest";
import { Box } from "@chakra-ui/react";


const Dashboard = () => {
  const history = useHistory();

  
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, admin, setAdmin } =
    useAuth();

  const handleClick = () => {
    setIsLoggedIn(false);
    setAuthUser(null);
    setAdmin(false);
    history.push("/");
  };

  

  if (isLoggedIn && authUser) {
    return (
      <>
        <Tabs>
          <TabList>
            <Tab>Student</Tab>
            
            {admin ? <Tab>Admin</Tab> : null}
            <Button colorScheme="teal" variant="ghost" onClick={handleClick}>
              Logout
            </Button>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box bg="teal" w="100%" p={4} color="white" borderRadius={15}>
                Hey {authUser.Name}!
              </Box>

              <Fest />
            </TabPanel>

            {/* Admin Part Display */}
            <TabPanel>
              {/* <p>Welcome !</p> */}
              <Admindashboard />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <div>Dashboard</div> */}
      </>
    );
  } else {
    return (
    <>
    <div className="Loggedout">
    <Box bg="teal" w="95%" p={4} color="white" borderRadius={45} margin={15}>
             Oops You are Logged Out !
    </Box>
    <Button colorScheme="teal" variant="ghost" onClick={() => history.push('/')}>
              Log Me In
            </Button>

    </div>
  </>
    )
  }
};

export default Dashboard;
