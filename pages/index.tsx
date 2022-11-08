import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql, useQuery, ApolloProvider } from "@apollo/client";

const GET_SHOP = gql`
  query {
    findShopByID(id: "347738030414496340") {
      _id
      description
      name
      ownerId
      products {
        _id
      }
    }
  }
`;
const Home = () => {
  const { data } = useQuery(GET_SHOP);
  console.log(data);
  return <div></div>;
};

export default Home;
