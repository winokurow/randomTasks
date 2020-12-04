import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  current: [],
  all_subjects: [],
};
 
const subjectsReducer = (state = INITIAL_STATE, action) => {
  // copy the state 
  const { current,  all_subjects,} = state;
  
  switch (action.type) {
    
    case 'DELETE_SUBJECT':

      // delete element
      all_subjects.splice(action.payload, 1);
      // update the redux state to reflect the change
      const newStateAfterDelete = { current, all_subjects };
        
      //return new state
      return newStateAfterDelete;

    case 'ADD_SUBJECT': 
      // put subject in current array
      const all_subjects_new = all_subjects.push(action.payload);
      console.log('before'+ all_subjects);
      // update the redux state to reflect the change
      const newStateAfterAdd = { current, all_subjects };
      console.log(newStateAfterAdd)
      //return new state
      return newStateAfterAdd

    case 'IMPORT_TASKS': 
       // update the redux state to reflect the change 
       console.log('before'+ all_subjects.length);
       console.log(action.payload);
       all_subjects.length=0
       for (var i = 0; i < action.payload.length; i++){
        all_subjects.push(action.payload[i])
      }
       console.log('after'+ all_subjects[0].length);
       console.log(Array.isArray(all_subjects));
       const newStateAfterImport = { current, all_subjects };
       console.log(newStateAfterImport);
      //return new state
      return newStateAfterImport

    default:
      return state
  }
};
 
export default combineReducers({
  subjects: subjectsReducer
});