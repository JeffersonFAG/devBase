import Layout from "../../components/layout";
import { useRouter } from "next/router";
import RenderUsers from "../../components/renderUsers";

export default function Person() {
  //* Route /user/[userName]
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Layout btnBack={true}>
      <RenderUsers userName={userName} />
    </Layout>
  );
}
