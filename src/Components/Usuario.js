import React, { useState } from "react";
import axios from "axios";

export const Usuario = (props) => {
  const [email, setEmail] = useState("");

  const pegarUsuarioPorId = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.id}`,
        {
          headers: {
            authorization: "veloso-ammal",
          },
        }
      )
      .then((response) => {
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  pegarUsuarioPorId();

  return (
    <>
      <h1>{props.nome}</h1>
      <p>{email}</p>
    </>
  );
};
