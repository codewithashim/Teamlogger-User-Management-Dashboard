import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const DynamicDashboardLayout = dynamic(
  () => import("@/src/layouts/DashboardLayout"),
  {
    ssr: false,
  }
);
const DynamicUserDetails = dynamic(
  () => import("@/src/components/UserComponents/UserDetails/UserDetails"),
  {
    ssr: false,
  }
);
const UserDetailsPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <DynamicDashboardLayout>
      <section>
        <DynamicUserDetails userId={userId} />
      </section>
    </DynamicDashboardLayout>
  );
};

export default UserDetailsPage;
