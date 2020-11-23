import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  current: [],
  all_subjects: [
    'Literature',
    'Speech',
    'Writing',
    'Algebra',
    'Geometry',
    'Statistics',
    'Chemisrty',
    'Biology',
    'Physics',
    'Economics',
    'Geography',
    'History',
  ],
};
 
const subjectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
        case 'ADD_SUBJECT':
          
          // copy the state 
          const { current,  all_subjects,} = state;
     
          // put subject in current array
          all_subjects.push(action.payload);
     
          // update the redux state to reflect the change
          const newState = { current, all_subjects };
           
          //return new state
          return newState;
     
        default:
          return state
      }
};
 
export default combineReducers({
  subjects: subjectsReducer
});