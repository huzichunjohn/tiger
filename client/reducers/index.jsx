import { combineReducers } from 'redux';
import AuthReducer from './auth';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    gifs: GifsReducer,
    modal: ModalReducer,
    form: FormReducer,
    auth: AuthReducer
});

export default rootReducer;
