import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const DynamicDashboardLayout = dynamic(
  () => import("@/src/layouts/DashboardLayout"),
  {
    ssr: false,
  }
);
const DynamicTeamDetails = dynamic(
  () => import("@/src/components/TeamComponents/TeamDetails/TeamDetails"),
  {
    ssr: false,
  }
);
const TeamDetailsPage = () => {
  const router = useRouter();
  const { teamId } = router.query;

  return (
    <DynamicDashboardLayout>
      <section>
        <DynamicTeamDetails teamId={teamId} />
      </section>
    </DynamicDashboardLayout>
  );
};

export default TeamDetailsPage;
