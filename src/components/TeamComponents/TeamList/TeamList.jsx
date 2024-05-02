import useTeam from "@/src/Hooks/useTeam";
import TeamListCard from "../TeamListCard/TeamListCard";

const TeamList = () => {
  const { teamsData } = useTeam();

  return (
    <section className="grid md:grid-cols-2 gap-4">
      {teamsData?.map((team) => {
        return <TeamListCard key={team?._id} team={team} />;
      })}
    </section>
  );
};

export default TeamList;
