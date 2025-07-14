import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

function App() {
  const getAllUsers = async () => {
    // GET: VERİ ALMAK İÇİN
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   console.log(response.data);
  // };

  const createUser = async (newUser) => {
    // POST:VERİ EKLEMEK İÇİN
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response:", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    // PUT:VERİ GÜNCELLEMEK İÇİN
    const response = await axios.put(
      `${BASE_URL}/users/${userId}`,
      updatedUser
    );
    console.log(response.data);
  };

  const deleteUserById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getPostById = async (postId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(2);
    // const newUser = {
    //   username: "Bilal",
    //   password: 3636,
    // };
    // createUser(newUser);
    // const updatedUser = {
    //   username: "sudesu",
    //   password: 5050,
    // };
    // updateUser("72ff", updatedUser);
    // deleteUserById("72ff");
    getPost();
  }, []);

  return <div>Gizem</div>;
}

export default App;
