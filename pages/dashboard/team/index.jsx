import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicDashboardLayout = dynamic(() => import('@/src/layouts/DashboardLayout'), {
    ssr: false,
  });

  const DynamicTeamList = dynamic(() => import('@/src/components/TeamComponents/TeamList/TeamList'), {
    ssr: false,
  });

  const DynamicUserList = dynamic(() => import('@/src/components/UserComponents/UserList/UserList'), {
    ssr: false,
  });
  
  const DynamicTeamModal = dynamic(() => import('@/src/components/TeamComponents/AddTeamModal/AddTeamModal'), {
    ssr: false,
  });
  
const Team = () => {
  const [open, setOpen] = useState(false);

  return (
    <DynamicDashboardLayout>
    <section className="w-[90%] mx-auto">
      <div className="top-bar">
        <button className="common-btn" onClick={() => setOpen(true)}>
          Create Team
        </button>
      </div>
      <div className="divider"></div>

      <section className="my-4 flex md:flex-row flex-col justify-between gap-4">

        <div className="team-list">
          <h1 className="text-center text-2xl font-bold my-4">Team List</h1>
          <DynamicTeamList />
        </div>
        
        <div className="user-list border w-[20%]">
          <h1 className="text-center text-2xl font-bold my-4">Total Users</h1>
         <DynamicUserList />
        </div>
      </section>

      {/* ==== modal ====== */}

      <DynamicTeamModal open={open} setOpen={setOpen} />
    </section>
    </DynamicDashboardLayout>
  );
};

export default Team;
