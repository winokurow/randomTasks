import React from 'react';
import { act, create, renderer } from 'react-test-renderer';
import App from '../App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)
jest.mock('@react-navigation/native');
jest.mock('redux-persist-expo-filesystem');
jest.mock('redux-persist');
jest.mock("@react-navigation/drawer", () => {
  return {
    createDrawerNavigator: jest.fn().mockImplementation(nav => {
      return {};
    })
  }
});

describe('App Component', () => {
  subjects = {
    'all_subjects':[{'taskName':'test', 'taskWeight':134}]
  }
  const initialState = {'subjects': subjects}
  const mockStore = configureStore()

  it('App renders without crashing', async () => {
    store = mockStore(initialState)
    let tree
    await act(async () => {



      tree = create(<Provider store={store}><App></App></Provider>);
    })
    await act(async () => {
      expect(tree.toJSON()).toMatchSnapshot();

      console.log('*************' + tree);
      expect(tree).toBeTruthy();
    })
})
})