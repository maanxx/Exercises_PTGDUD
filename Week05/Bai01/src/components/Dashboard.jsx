import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="sub-nav">
        <ul>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="orders">Orders</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard

