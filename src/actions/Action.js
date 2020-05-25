export const ADDTASK = "ADDTASK";
export const EDITTASK = "EDITTASK";
export const DELETETASK = "DELETETASK";
// action creater

export function addTask(payload) {
  return { type: ADDTASK, payload };
}

export function editTask(payload) {
  return { type: EDITTASK, payload };
}

export function deleteTask(payload) {
  return { type: DELETETASK, payload };
}
