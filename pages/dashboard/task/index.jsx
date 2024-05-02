import dynamic from 'next/dynamic';
import React from 'react';
const DynamicDashboardLayout = dynamic(() => import('@/src/layouts/DashboardLayout'), {
    ssr: false,
  });
  
const DynamicTask = dynamic(() => import('@/src/components/Task/Task'), {
    ssr: false,
  });
  
const TaskPage = () => {
    return (
        <DynamicDashboardLayout>
           <section>
            <DynamicTask/>
           </section>
        </DynamicDashboardLayout>
    );
};

export default TaskPage;