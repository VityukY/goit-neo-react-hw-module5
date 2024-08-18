import {NavLink} from 'react-router-dom'
export default function Navigation() {
   return  (<>
      <nav >
        <NavLink to="/" >
          Home
        </NavLink>
        <br />
        <NavLink to="/movies" >
          Movie Page
         </NavLink>
         <br />
      </nav></>)
}