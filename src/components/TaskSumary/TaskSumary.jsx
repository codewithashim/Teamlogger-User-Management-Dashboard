import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaUsers,FaTasks,FaSync, FaRegCheckCircle, FaRegChartBar } from "react-icons/fa";
import useUsers from "@/src/Hooks/useUsers";
import useTeam from "@/src/Hooks/useTeam";
import useTask from "@/src/Hooks/useTask";

const TaskSumary = () => {
  const { usersData } = useUsers();
  const { teamsData } = useTeam();
  const { tasksData } = useTask();

  return (
    <section>
      <div className="grid p-6 md:grid-cols-3 gap-4">
        <Card
          bordered={false}
          
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <UserOutlined className="text-[2rem]" />
            <p>Total User {usersData?.length} </p>
          </div>
        </Card>

        <Card
          bordered={false}
           
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaUsers className="text-[2rem]" />
            <p>Total Team {teamsData?.length} </p>
          </div>
        </Card>

        <Card
          bordered={false}
          
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaTasks className="text-[2rem]" />
            <p>Total Task {tasksData?.length} </p>
          </div>
        </Card>

        <Card
          bordered={false}
           
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaSync className="text-[2rem]" />
            <p>
              Total Panding Task{" "}
              {tasksData?.filter((task) => task?.status[0] === "pending").length}{" "}
            </p>
          </div>
        </Card>

        <Card
          bordered={false}
          
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaRegChartBar className="text-[2rem]" />
            <p>
              Total Progress Task{" "}
              {tasksData?.filter((task) => task?.status[0] === "progress").length}{" "}
            </p>
          </div>
        </Card>

        <Card
          bordered={false}
         
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaRegCheckCircle className="text-[2rem]" />
            <p>
              Total Completed Task{" "}
              {tasksData?.filter((task) => task?.status[0] === "completed").length}{" "}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TaskSumary;
