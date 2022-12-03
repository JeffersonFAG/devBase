import Layout from "../../components/layout";
import { useRouter } from "next/router";
import User from "../../components/user";

export default function Person() {
  //* Route /user/[userName]
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Layout btnBack={true}>
      <User userName={userName} />
    </Layout>
  );
}
