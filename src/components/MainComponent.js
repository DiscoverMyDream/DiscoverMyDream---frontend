import React ,{useState,useEffect} from 'react';
import Header from "./Header";
import Footer from './Footer';
import LandingPage from './LandingPage';
import LoginForm from './AdminLoginComponent';
//import { Route, Switch, Redirect } from 'react-router';
import SLoginForm from './StudentLoginComponent';
import StudentRegisterComponent from './StudentRegisterComponent';
import RankPredictForm from './RankPredictForm';
import CollegePrediction from './CollegePrediction';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import{getMainsPrediction,getAdvancedPrediction,getSatCollegePrediction,registerUser,loginUser,fetchSCollege,updateSCollege,deleteSCollege,postSCollege,logoutUser, convertGrade} from '../redux/actionCreators';

import  RouteGuard from './RouteGuard'
const mapDispatchToProps = (dispatch) => ({

    getMainsPrediction: (info) => dispatch(getMainsPrediction(info)),
    getAdvancedPrediction: (info) => dispatch(getAdvancedPrediction(info)),
    getSatCollegePrediction: (info) => dispatch(getSatCollegePrediction(info)),
    convertGrade: (cgpa) => dispatch(convertGrade(cgpa)),
    fetchSCollege: () => dispatch(fetchSCollege()),
    postSCollege: (clg) => dispatch(postSCollege(clg)),
    updateSCollege: (clg) => dispatch(updateSCollege(clg)),
    deleteSCollege: (clgId) => dispatch(deleteSCollege(clgId)),
    registerUser: (creds) => dispatch(registerUser(creds)),
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
})

const mapStateToProps = (state) => {
    return {
        register: state.register,
        satColleges: state.satColleges,
        satPrediction: state.satPrediction,
        mainsPrediction: state.mainsPrediction,
        advancedPrediction: state.advancedPrediction,
        gradeConversion: state.gradeConversion,
        auth: state.auth,
    }
}

const MainComponent = (props) => {
    useEffect( ()=>{
        fetchSCollege();
    }
    );
    return (
        <div className="container-full-bg">
            <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path='/home'>
                    <Header/>
                     <LandingPage/>
                
                    <Footer/>
                    </Route>
            <Route path='/adminLogin'>
                <Header/>
            <div style={{paddingTop:'7vh',paddingBottom:'7vh',background: 'rgba(229, 241, 234, 0.76)'}}>
                <LoginForm auth={props.auth.isAuthenticated} loginUser={props.loginUser}/>
            </div>
            <Footer/>
            </Route>
            {/*<RouteGuard
                        exact
                        path='/admin'
                        isAuthenticated={props.auth.isAuthenticated}
                        isAdmin={props.auth.admin}
                        redPath='/adminLogin'
                        component={AdminComponent}
                        />
            */}
            <Route path='/studentLogin'>
                <Header/>
            <div style={{paddingTop:'7vh',paddingBottom:'7vh',background: 'rgba(229, 241, 234, 0.76)'}}>
                <SLoginForm auth={props.auth.isAuthenticated} loginUser={props.loginUser}/>
            </div>
            <Footer/>
            </Route>
            <Route path='/studentRegister'>
                <Header/>
            <div style={{paddingTop:'7vh',paddingBottom:'7vh',background: 'rgba(229, 241, 234, 0.76)'}}>
                <StudentRegisterComponent registerUser={props.registerUser}/>
            </div>
            <Footer/>
            </Route>
            <RouteGuard
                        exact
                        path='/rankPrediction'
                        isAuthenticated={props.auth.isAuthenticated}
                        isAdmin={true}
                        redPath='/studentLogin'
                        component={()=> <RankPredictForm auth={props.auth.isAuthenticated} mainsPrediction={props.mainsPrediction} advancedPrediction={props.advancedPrediction} getMainsPrediction={props.getMainsPrediction} getAdvancedPrediction={props.getAdvancedPrediction}/>}
                        />
            
            <RouteGuard
                        exact
                        path='/collegePrediction'
                        isAuthenticated={props.auth.isAuthenticated}
                        isAdmin={true}
                        redPath='/studentLogin'
                        component={()=> <CollegePrediction auth={props.auth.isAuthenticated} satColleges={props.satColleges} satPrediction={props.satPrediction} gradeConversion={props.gradeConversion} getSatCollegePrediction={props.getSatCollegePrediction} convertGrade={props.convertGrade}/>}
                        />
            </Switch>
        </div>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));