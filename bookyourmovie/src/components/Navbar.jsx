import { Link } from 'react-router-dom';

export const Navbar = () =>{
    return(
        <div style={{fontSize:"30px",display:"flex",justifyContent:"space-around",backgroundColor:"black"
        ,height:"60px",marginTop:"auto",fontWeight:"700"}}>
            <Link to="/" style={{color:"white"}}>Home</Link>
            <Link to="/about" style={{color:"white"}}>About</Link>
            <Link to="/newshow" style={{color:"white"}}>Newshow</Link>
            <Link to="/bookevent" style={{color:"white"}}>BookEvent</Link>
            <Link to="/movies" style={{color:"white"}}>MovieList</Link>
            <Link to="/login" style={{color:"white"}}>Login</Link>
        </div>
    )
}