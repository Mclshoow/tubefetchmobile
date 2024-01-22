// UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://localhost:5001/v1/todos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados da API", error);
      });
  }, []);

  return (
    <div>
      <h1>Dados da API:</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default UserList;
