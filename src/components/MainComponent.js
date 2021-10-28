import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import LandingPage from './LandingPage';
import LoginForm from './AdminLoginComponent';
import { Route, Switch, Redirect } from 'react-router';
import SLoginForm from './StudentLoginComponent';
import StudentRegisterComponent from './StudentRegisterComponent';
import RankPredictForm from './RankPredictForm';

const MainComponent = () => {
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
                <LoginForm/>
            </div>
            <Footer/>
            </Route>
            <Route path='/studentLogin'>
                <Header/>
            <div style={{paddingTop:'7vh',paddingBottom:'7vh',background: 'rgba(229, 241, 234, 0.76)'}}>
                <SLoginForm/>
            </div>
            <Footer/>
            </Route>
            <Route path='/studentRegister'>
                <Header/>
            <div style={{paddingTop:'7vh',paddingBottom:'7vh',background: 'rgba(229, 241, 234, 0.76)'}}>
                <StudentRegisterComponent/>
            </div>
            <Footer/>
            </Route>
            <Route path='/rankPrediction'>
                <RankPredictForm/>
                <Footer/>
            </Route>
            </Switch>
        </div>
    );
};

export default MainComponent;