import NewShopForm from "../components/NewShopForm";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { gql, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import ShopsList from "../components/shopList";

const GET_SHOPS_BY_OWNER = gql`
  query getShopsByOwnerID($ownerID: String!) {
    getShopsByOwnerID(ownerID: $ownerID) {
      data {
        _id
        name
        description
      }
    }
  }
`;

export default function ManageShops(props: any) {
  const { user } = useUser();
  const { data } = useQuery(GET_SHOPS_BY_OWNER, {
    variables: { ownerID: user?.sub },
  });
  console.log(data);
  return (
    <div>
      <NewShopForm accessToken={props.accessToken} />;
      {data ? (
        <ShopsList shops={data.getShopsByOwnerID.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const { accessToken } = await getAccessToken(ctx.req, ctx.res);

  return {
    props: {
      accessToken,
    },
  };
}
