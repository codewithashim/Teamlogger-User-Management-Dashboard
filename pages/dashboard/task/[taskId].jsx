import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
const DynamicDashboardLayout = dynamic(() => import('@/src/layouts/DashboardLayout'), {
    ssr: false,
  });

  const DynamicTaskDetails = dynamic(() => import('@/src/components/TaskComponents/TaskDetails/TaskDetails'), {
    ssr: false,
  });
  
const TaskDetailPage = () => {
    const router = useRouter();
    const { taskId } = router.query;


    return (
        <DynamicDashboardLayout>
            <section>
               <DynamicTaskDetails taskId={taskId}/> 
            </section>
        </DynamicDashboardLayout>
    );
};

export default TaskDetailPage;