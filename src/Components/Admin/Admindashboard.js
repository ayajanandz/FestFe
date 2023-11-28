import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import Verification from "../Admin/Adminverification";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Admindashboard = () => {
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    admin,
    setAdmin,
    OTP,
    setOTP,
  } = useAuth();

  useEffect(() => {
    if (admin) {
      axios
        .get("http://localhost:9000/admin?category=amuraPayee")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
      console.log(data.Name);
      setOTP(data.OTPgenerated);
      console.log(OTP);
    }
  }, []);

  if (isLoggedIn && admin) {
    return (
      <>
        <input
          type="text"
          placeholder="Search..."
          style={{
            marginTop: 50,
            marginBottom: 20,
            width: "40%",
            height: 30,
            fontSize: 20,
            borderRadius: 15,
          }}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <TableContainer>
          <Table size="md">
            <Thead bg={"teal"}>
              <Tr alignContent={"center"}>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Transaction ID</Th>
                <Th>Verification</Th>
              </Tr>
            </Thead>
            <Tbody align="left">
              {data
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.TransactionId.toLowerCase().includes(
                      searchTerm.toLowerCase()
                    )
                  ) {
                    return val;
                  }
                })
                .map((payee) => {
                  return <Verification key={payee.Email} payee={payee} />;
                })}
            </Tbody>
            <Tfoot>
              <Tr></Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default Admindashboard;
