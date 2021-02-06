import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter> /* Нужен для работы роутинга */
            <div className="app-wrapper">
                <Header/>
                <NavigationContainer />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
