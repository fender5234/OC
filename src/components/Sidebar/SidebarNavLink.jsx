import './Sidebar.css'
import { NavLink } from 'react-router-dom';

function SidebarNavLink({to,children }) {
  return <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}>{children}</NavLink>;
}

export default SidebarNavLink;

