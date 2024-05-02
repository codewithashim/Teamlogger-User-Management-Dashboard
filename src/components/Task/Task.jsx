/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Input, Button } from "antd";
import AddTaskModal from "../TaskComponents/AddTaskModal/AddTaskModal";
import useTask from "@/src/Hooks/useTask";
import Link from "next/link";

const { Search } = Input;

const AddTask = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const { tasksData, handelTaskDelete } = useTask();

  const [searchQuery, setSearchQuery] = useState("");

  // Filter tasks based on the search query
  const filteredTasks = tasksData.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <section className="w-[90%] mx-auto">
      <div className="top-bar flex gap-4 items-center md:flex-row flex-col my-4">
        <button className="common-btn" onClick={() => setTaskOpen(true)}>
          Add New Task
        </button>
        <div>
          <Search
            placeholder="Search tasks"
            allowClear
            onSearch={handleSearch}
            style={{ width: 500}}
            className="p-4" 
          />
        </div>
      </div>

      <div className="divider"></div>

      <div className="task-component-container grid md:grid-cols-3 gap-6">
        <div className="task-conents">
          <div className="task-conents__header">
            <h3 className="text-2xl text-red-400">Pending</h3>
            <hr className="my-4" />
          </div>
          <div className="task-content-card flex flex-col gap-6">
            {tasksData &&
              tasksData
                .filter((task) => task?.status[0] === "pending")
                .map((task, index) => {
                  return (
                    <div
                      className="card w-70 p-4 border bg-base-100 shadow-xl"
                      key={index}
                    >
                      <div className="card-body">
                        <h2 className="card-title">{task?.title}</h2>
                        <p>{task?.description.slice(0, 150)}</p>

                        <div>
                          <span className="badge badge-primary">
                            {task?.status}
                          </span>
                          <span className="badge badge-primary mx-4">
                            {task?.priorityLevel}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-center items-center gap-2 flex-col ">
                          <Link
                            href={`/dashboard/task/${task?._id}`}
                            className="common-btn w-full "
                          >
                            Details
                          </Link>
                          <button
                            onClick={() => handelTaskDelete(task?._id)}
                            className="common-btn flex items-center gap-4 w-full"
                          >
                            Delete Task <FaTrash />
                          </button>
                        </div>
                      </div>

                      <div className="assign-to-user flex justify-center items-center gap-2 my-4">
                        {task.assignTo?.map((user, index) => {
                          console.log(user, "+++  ");
                          return (
                            <div className="user" key={index}>
                              <img
                                src={user?.profilePicture}
                                alt="user"
                                className="user-img w-10 h-10 rounded-full"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="task-conents">
          <div className="task-conents__header">
            <h3 className="text-2xl text-yellow-400">Progress</h3>
            <hr className="my-4" />
          </div>
          <div className="task-content-card flex flex-col gap-6">
            {tasksData &&
              tasksData
                .filter((task) => task?.status[0] === "progress")
                .map((task, index) => {
                  return (
                    <div
                      className="card w-70 p-4 border bg-base-100 shadow-xl"
                      key={index}
                    >
                      <div className="card-body">
                        <h2 className="card-title">{task?.title}</h2>
                        <p>{task?.description.slice(0, 150)}</p>

                        <div>
                          <span className="badge badge-primary">
                            {task?.status}
                          </span>
                          <span className="badge badge-primary mx-4">
                            {task?.priorityLevel}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-center items-center gap-2 flex-col ">
                          <Link
                            href={`/dashboard/task/${task?._id}`}
                            className="common-btn w-full "
                          >
                            Details
                          </Link>
                          <button
                            onClick={() => handelTaskDelete(task?._id)}
                            className="common-btn flex items-center gap-4 w-full"
                          >
                            Delete Task <FaTrash />
                          </button>
                        </div>
                      </div>

                      <div className="assign-to-user flex justify-center items-center gap-2 my-4">
                        {task.assignTo?.map((user, index) => {
                          console.log(user, "+++  ");
                          return (
                            <div className="user" key={index}>
                              <img
                                src={user?.profilePicture}
                                alt="user"
                                className="user-img w-10 h-10 rounded-full"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="task-conents">
          <div className="task-conents__header">
            <h3 className="text-2xl text-green-400">Completed</h3>
            <hr className="my-4" />
          </div>
          <div className="task-content-card flex flex-col gap-6">
            {tasksData &&
              tasksData
                .filter((task) => task?.status[0] === "completed")
                .map((task, index) => {
                  return (
                    <div
                      className="card p-4 border w-70 bg-base-100 shadow-xl"
                      key={index}
                    >
                      <div className="card-body">
                        <h2 className="card-title">{task?.title}</h2>
                        <p>{task?.description.slice(0, 150)}</p>

                        <div>
                          <span className="badge badge-primary">
                            {task?.status}
                          </span>
                          <span className="badge badge-primary mx-4">
                            {task?.priorityLevel}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-center items-center gap-2 flex-col ">
                          <Link
                            href={`/dashboard/task/${task?._id}`}
                            className="common-btn w-full "
                          >
                            Details
                          </Link>
                          <button
                            onClick={() => handelTaskDelete(task?._id)}
                            className="common-btn flex items-center gap-4 w-full"
                          >
                            Delete Task <FaTrash />
                          </button>
                        </div>
                      </div>

                      <div className="assign-to-user flex justify-center items-center gap-2 my-4">
                        {task.assignTo?.map((user, index) => {
                          console.log(user, "+++  ");
                          return (
                            <div className="user" key={index}>
                              <img
                                src={user?.profilePicture}
                                alt="user"
                                className="user-img w-10 h-10 rounded-full"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      {/* ==== modal ====== */}

      <AddTaskModal taskOpen={taskOpen} setTaskOpen={setTaskOpen} />
    </section>
  );
};

export default AddTask;
