import { ADDTASK, EDITTASK, DELETETASK } from "../actions/Action";

const initialState = {
  whatWentWell: {
    title: "What went well",
    data: [{ id: 1, content: "this is test data" }],
    count: 1,
  },
  whatCanBeImproved: { title: "What can be improved", data: [], count: 0 },
  startDoing: { title: "Start doing", data: [], count: 0 },
  actionItems: { title: "Action items", data: [], count: 0 },
};

const mainReducer = function(state = initialState, { type, payload }) {
  const newState = { ...state };
  switch (type) {
    case ADDTASK: {
      const { content, taskType } = payload;
      newState[taskType].data.push({ content, id: ++newState[taskType].count });
      ++newState[taskType].count;

      return newState;
    }
    case EDITTASK: {
      const { content, taskType, id } = payload;
      const data = newState[taskType].data.find(task => task.id === id);
      data.content = content;

      return newState;
    }
    case DELETETASK: {
      const { taskType, id } = payload;
      if (id) {
        const data = newState[taskType].data.filter(task => task.id !== id);
        newState[taskType].data = data;
        --newState[taskType].count;
      }

      return newState;
    }
    default:
      return state;
  }
};

export default mainReducer;
