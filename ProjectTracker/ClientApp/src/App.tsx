import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import LoginComponent from './components/UserComponents/LoginComponent';
import RegisterComponent from './components/UserComponents/RegisterComponent';
import AccountSettingsComponent from './components/UserComponents/AccountSettingsComponent';
import ProjectDashboardComponent from './components/ProjectComponents/ProjectDashboardComponent';
import ProjectBugsDashboard from './components/ProjectComponents/ProjectBugsDashboard';
import ProjectCalendarComponent from './components/ProjectComponents/ProjectCalendarComponent';
import ProjectDocumentsDashboard from './components/ProjectComponents/ProjectDocumentsDashboard';
import ProjectReportsDashboard from './components/ProjectComponents/ProjectReportsComponent';


import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/login' component={LoginComponent} />
        <Route path='/Register' component={RegisterComponent} />
        <Route path='/AccountSettings' component={AccountSettingsComponent} />
        <Route path='/project/dashboard' component={ProjectDashboardComponent} />
        <Route path='/project/bugs' component={ProjectBugsDashboard} />
        <Route path='/project/calendar' component={ProjectCalendarComponent} />
        <Route path='/project/documents' component={ProjectDocumentsDashboard} />
        <Route path='/project/reports' component={ProjectReportsDashboard} />




    </Layout>
);
