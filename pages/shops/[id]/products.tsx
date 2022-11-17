import { getAccessToken } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import NewProduct from "../../../components/NewProduct";

export default function ProductsPage(props: any) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <NewProduct shopId={id} accessToken={props.accessToken} />
    </>
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
