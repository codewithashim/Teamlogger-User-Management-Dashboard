import React from "react";
import dynamic from 'next/dynamic';


const DynamicTaskSummary = dynamic(() => import('@/src/components/TaskSumary/TaskSumary'), {
  ssr: false,
});


const DynamicDashboardLayout = dynamic(() => import('@/src/layouts/DashboardLayout'), {
  ssr: false,
});


const DashboardPage = () => {
  return (
    <DynamicDashboardLayout>
      <section>
        <DynamicTaskSummary/>
      </section>
    </DynamicDashboardLayout>
  );
};

export default DashboardPage;