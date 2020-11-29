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
  
      // update the redux state to reflect the change
      const newStateAfterAdd = { current, all_subjects };
      console.log(newStateAfterAdd)
      //return new state
      return newStateAfterAdd
        

    default:
      return state
  }
};
 
export default combineReducers({
  subjects: subjectsReducer
});