import AdminEventDetail from "../app/adminEventDetails";
import CreateEvent from "../app/createEvent";
import Dashboard from "../app/dashboard";
import ManageEvents from "../app/manageEvents";
import Orders from "../app/orders";
import Profile from "../app/profile";



export const authRoutes = [
    {
        element: <CreateEvent/>,
        path: '/manage/events/create'
    },
    {
        element: <ManageEvents/>,
        path: '/manage/events'
    },
    {
        element: <AdminEventDetail/>,
        path: '/manage/events/:id'
    },
    {
        element: <Orders/>,
        path: '/orders'
    },
    {
        element: <Dashboard/>,
        path: '/dashboard'
    },
    {
        element: <Profile/>,
        path: '/profile'
    },
]