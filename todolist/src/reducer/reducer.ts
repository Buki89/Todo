export type Task = {
  id: string;
  taskName: string;
  createdAt?: string;
  deadline: string;
  completed: boolean;
  priority: number;
  category: string;
};

export type State = {
  tasks: Task[];
  uid: string;
};

export enum Type {
  addTask = "ADD_TASK",
}

export type Actions = {
  type: Type.addTask;
  payload: Task;
};
//   | {
//       type: Type.deleteTask;
//       payload: string;
//     }
//   | {
//       type: Type.setTasks;
//       payload: Task[];
//     }
//   | {
//       type: Type.setUid;
//       payload: string;
//     }
//   | {
//       type: Type.editTaskName;
//       payload: {
//         id: string;
//         taskName: string;
//       };
//     }
//   | {
//       type: Type.editCompleted;
//       payload: {
//         id: string;
//         completed: boolean;
//       };
//     }
//   | {
//       type: Type.setTask;
//       payload: {
//         task: Task;
//       };
//     };

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case Type.addTask:
      const newState = [...state.tasks];
      newState.push(action.payload);
      return {
        tasks: newState,
        uid: state.uid,
      };
    default:
      return state;
  }
};

export default reducer;
