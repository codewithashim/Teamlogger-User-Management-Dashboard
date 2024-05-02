import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicDashboardLayout = dynamic(() => import('@/src/layouts/DashboardLayout'), {
    ssr: false,
  });
  const DynamicUserList = dynamic(() => import('@/src/components/Users/Users'), {
    ssr: false,
  });
const UserPage = () => {
    return (
        <DynamicDashboardLayout>
            <section>
                <DynamicUserList/>
            </section>
        </DynamicDashboardLayout>
    );
};

export default UserPage;