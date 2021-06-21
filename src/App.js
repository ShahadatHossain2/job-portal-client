import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Shared/Login/Login';
import UserType from './Components/Users/UserType/UserType';
import Employer from './Components/Users/Employer/Employer';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';
import EmployerProfile from './Components/Users/Employer/EmployerProfile';
import PendingPost from './Components/Home/JobPost/PendingPost/PendingPost';
import JobSeeker from './Components/Users/JobSeeker/JobSeeker';
import JobSeekerProfile from './Components/Users/JobSeeker/JobSeekerProfile';
import Application from './Components/Home/Application/Application';
export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/userType">
            <UserType></UserType>
          </Route>
          <PrivateRoute path="/pendingPost">
            <PendingPost></PendingPost>
          </PrivateRoute>
          <PrivateRoute path="/employer">
            <Employer></Employer>
          </PrivateRoute>
          <PrivateRoute path="/employerProfile">
            <EmployerProfile></EmployerProfile>
          </PrivateRoute>
          <PrivateRoute path="/jobSeeker">
            <JobSeeker></JobSeeker>
          </PrivateRoute>
          <PrivateRoute path="/jobSeekerProfile">
            <JobSeekerProfile></JobSeekerProfile>
          </PrivateRoute>
          <PrivateRoute path="/apply/:jobId">
            <Application></Application>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
