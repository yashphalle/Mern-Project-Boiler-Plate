import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth.js";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home"}>
      
      
    </Layout>
  );
};

export default HomePage;
