import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Adminverification = (props) => {
  const payee = props.payee;
  const email = payee.Email;
  const isVerified = payee.Verified;
  const [status, setStatus] = useState("false");

  const verifyUser = async (email) => {
    console.log("clicked for the emailid:", email);
    setStatus(!status);
    let response = await axios.post("http://localhost:9000/verified", {
      email,
    });
    console.log(response.data.body);
  };

  return (
    <>
      <tr key={payee.Email}>
        <td>{payee.Name}</td>
        <td>{payee.Email}</td>
        <td>{payee.TransactionId}</td>
        <td>
          {status && isVerified == "false" ? (
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => verifyUser(email)}
            >
              Verify
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              //onClick={() => verifyUser(email)}

              size="sm"
            >
              Verified
            </Button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Adminverification;
