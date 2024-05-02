import create from 'zustand';

const useTasksStore = create((set) => ({
  tasks: [],

  setTasks: (newTasks) => set({ tasks: newTasks }),

  updateTaskStatus: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      ),
    })),
}));

export default useTasksStore;
