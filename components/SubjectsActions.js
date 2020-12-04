export const addSubject = subjectsIndex => (
    {
      type: 'ADD_SUBJECT',
      payload: subjectsIndex,
    }
  );

export const deleteSubject = subjectsIndex => (
  {
    type: 'DELETE_SUBJECT',
    payload: subjectsIndex,
  }
);

export const importTasks = tasks => (
  {
    type: 'IMPORT_TASKS',
    payload: tasks,
  }
);