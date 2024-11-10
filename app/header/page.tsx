import Link from "next/link"
import "../style/header.css";
function Header(){
    return(
        <header className="header">

            <div className="logo">
                <h2>The Cafe</h2>
            </div>
                
            {/* links */}
            <div className="rightside">
                <nav>
                    <ul>
                        
                        <li  className="nav-item">
                            <Link href="/">Home</Link></li>
                        <li  className="nav-item"><Link  href="./about" >Menu</Link></li>
                        <li  className="nav-item"><Link href="/review" >Review</Link></li>
                        <li  className="nav-item"><Link href="/contact ">Contact</Link></li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header

