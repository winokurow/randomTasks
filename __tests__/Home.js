import React from 'react';
import { act, create, renderer } from 'react-test-renderer';
import Home from '../components/Home';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)
jest.mock('@react-navigation/native');

describe('Home Component', () => {
  subjects = {
    'all_subjects':[{'taskName':'test', 'taskWeight':134}]
  }
  const initialState = {'subjects': subjects}
  const mockStore = configureStore()

  xit('App renders without crashing', async () => {
    store = mockStore(initialState)
    let tree
    await act(async () => {



      tree = create(<Provider store={store}><Home></Home></Provider>);
    })
    await act(async () => {
      expect(tree.toJSON()).toMatchSnapshot();

      console.log('*************' + tree);
      expect(tree).toBeTruthy();
    })
})
})