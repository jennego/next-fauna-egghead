import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql, useQuery, ApolloProvider } from "@apollo/client";
import ProductList from "../components/productList";

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

const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      data {
        name
        price
        _id
        description
        shop {
          _id
        }
      }
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_ALL_PRODUCTS);
  console.log(data);
  return (
    <div>
      <ProductList products={data.getAllProducts.data} />
    </div>
  );
};

export default Home;
