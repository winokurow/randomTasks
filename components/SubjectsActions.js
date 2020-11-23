export const addSubject = subjectsIndex => (
    {
      type: 'SELECT_SUBJECT',
      payload: subjectsIndex,
    }
  );