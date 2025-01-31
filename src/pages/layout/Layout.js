import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {

    return <>

        <nav>
            <Link to='/'>All</Link>
            <Link to='/images'>Images</Link>
            <Link to='/videos'>Videos</Link>
            <Link to='/counter'>CounterPage</Link>
            <Link to='/newPage'>NewPage</Link>
            <Link to='/loginPage'>Login</Link>
            <Link to='/TablePage'>Table Page</Link>
            <Link to='/TextoPage'>Texto Page</Link>
        </nav>

        <div className='midle-section'>
            <aside>
                <Link to='/'>All</Link><br />
                <Link to='/images'>Images</Link><br />
                <Link to='/videos'>Videos</Link><br />
            </aside>

            <div className="content">
                <Outlet />
            </div>

        </div>

        <footer>adfdas</footer>
    </>

}

export default Layout;