import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authreducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authreducer,
  form: reduxForm,
  surveys: surveysReducer,
});
