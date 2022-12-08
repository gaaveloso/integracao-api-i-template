import React, { useEffect, useState } from "react";
import axios from "axios";
import { Usuario } from "./Components/Usuario";

const usuariosLocal = [
  {
    id: 1,
    name: "Muri",
  },
  {
    id: 2,
    name: "Paulinha",
  },
  {
    id: 3,
    name: "Marcelo",
  },
  {
    id: 4,
    name: "Rodrigo",
  },
];
function App() {
  const input = {
    headers: {
      authorization: "veloso-ammal",
    },
  };

  const pegarUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        input
      )
      .then((response) => {
        console.log("deu certo");
        console.log(response);
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log("deu erro");
        console.log(error);
      });
  };

  useEffect(() => {
    pegarUsuarios();
  }, []);

  const novoUsuario = () => {
    const body = {
      name: inputNome,
      email: inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        input
      )
      .then((resp) => {
        console.log(resp);
        pegarUsuarios();
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const [usuarios, setUsuarios] = useState(usuariosLocal);
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  return (
    <>
      <input
        value={inputNome}
        onChange={(e) => {
          setInputNome(e.target.value);
        }}
      />
      <input
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
      />
      <button onClick={novoUsuario}>CRIA USUARIO</button>
      <p>
        Para esta aula usaremos a{" "}
        <a
          href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro"
          target="_blank"
          rel="noreferrer"
        >
          API Labenusers
        </a>
      </p>
      {usuarios.map((usuario) => {
        return <Usuario nome={usuario.name} id={usuario.id} />;
      })}
    </>
  );
}

export default App;
