import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
//const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Demo = React.lazy(() => import('./views/Demo/Demo'))

//Events
const Events = React.lazy(() => import('./views/Events/Events'))
const BasicInformation = React.lazy(() => import('./views/Events/Form/BasicInformation/BasicInformation'))




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/demo', exact: true, name: 'Demo', element: Demo },
  { path: '/events', exact: true, name: 'Events', element: Events },
  { path: '/basicinformation', exact: true, name: 'BasicInformation', element: BasicInformation },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
 
]

export default routes
