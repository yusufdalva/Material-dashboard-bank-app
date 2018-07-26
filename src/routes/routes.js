import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Customers from '@/pages/Customers.vue'
import Banks from '@/pages/Banks.vue'
import Accounts from '@/pages/Accounts.vue'
import Graph from '@/pages/Graph.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customers
      },
      {
        path: 'banks',
        name: 'Banks',
        component: Banks
      },
      {
        path: 'accounts',
        name: 'Accounts',
        component: Accounts
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'graph',
        name: 'Graph',
        component: Graph
      }
    ]
  }
]

export default routes
