import React, {Component} from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import NavigationContainer from "./components/Navigation/NavigationContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {compose} from "redux";
import LazySuspense from "./hoc/lazySuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavigationContainer/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={LazySuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={LazySuspense(ProfileContainer)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter> {/* Нужен для работы роутинга */}
            <Provider store={store}> {/* Нужен для доступности стора в любой компоненте с помощью функции connect() */}
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
};
export default MainApp;
