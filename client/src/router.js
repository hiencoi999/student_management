import React from "react";
import Home from "./HomePage/Component/Home";
import Notification from './HomePage/Component/Notification';
import Chat from './Chat/Chat';
import ListStudent from './ListStudent/ListStudent';
import Chart from './Chart/Chart';
import AddForm from './ListStudent/Components/AddForm';
import InfoStudent from './ListStudent/Components/InfoStudent';
import ImportData from './ListStudent/Components/ImportData';
import Profile from "./Profile/Profile";

const routes = [
    {
        path: '/home',
        exact: false,
        main : () => <Home />        
    },
    {
        path: '/notification',
        exact: true,
        main : () => <Notification />
    },
    {
        path: '/chat',
        exact: true,
        main : () => <Chat />
    },
    {
        path: '/list-students',
        exact: true,
        main : () => <ListStudent />
    },
    {
        path: '/chart',
        exact: true,
        main : () => <Chart />
    },
    {
        path: '/list-students/add',
        exact: true,
        main : () => <AddForm />
    },
    {
        path: '/list-students/update/:id',
        exact: true,
        main: ({ match }) => <InfoStudent match={match}/>
    },
    {
        path: '/list-students/import-data',
        exact: true,
        main : () => <ImportData />
    },
    {
        path: '/profile',
        exact: true,
        main : () => <Profile />
    }
];

export default routes;