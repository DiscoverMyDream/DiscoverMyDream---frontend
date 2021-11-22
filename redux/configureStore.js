import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AdvancedPrediction } from './advancedPrediction';
import { Auth, userDetailsReducer } from './auth';
import { GmatColleges } from './gmatColleges';
import { GmatPrediction } from './gmatPrediction';
import { GradeConvertor } from './gradeConversion';
import { MainsPrediction } from './mainsPrediction';
import { Register } from './register';
import { SatColleges } from './satColleges';
import { SatPrediction } from './satPrediction';
import { userUpdateProfileReducer } from './updateprofile';
import { userDeleteReducer, userListReducer, userUpdateReducer } from './userupdate';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            register: Register,
            userdetails: userDetailsReducer,
            userlist: userListReducer,
            userdelete: userDeleteReducer,
            userupdate: userUpdateReducer,
            userupdateprofile: userUpdateProfileReducer,
            satColleges: SatColleges,
            satPrediction: SatPrediction,
            //gmatColleges: GmatColleges,
            //gmatPrediction:GmatPrediction,
            mainsPrediction: MainsPrediction,
            advancedPrediction: AdvancedPrediction,
            gradeConversion: GradeConvertor,
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}