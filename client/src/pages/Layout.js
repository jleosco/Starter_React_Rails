import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const Layout = () => {
  const navigate = useNavigate()
  const {authenticated, handleLogout} = useContext(AuthContext)
  const renderLogLinks = () => {
    if(authenticated){
      return(<button onClick={() => handleLogout(navigate)}>Logout</button>)
    }else{
      return(
        <>
          <div>
            <Link to='/register'>Register</Link>
           </div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </>
      )
    }
    
  }
  return (
    <div>
      <div style={styles.navbar}>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/public'>Public</Link>
        </div>
        <div>
          <Link to='/protected'>Protected</Link>
        </div>
      {renderLogLinks()}
    </div>
    <Outlet />
    </div>
  )
}

const styles = {
  navbar: {
    display: "flex",
    border: "1px solid",
  }
}

export default Layout;