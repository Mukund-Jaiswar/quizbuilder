import { Outlet } from "react-router-dom";
import { LoginIcon, QuizIcon, OpenQuizIcon, CreateQuizIcon, MyQuizIcon, MenuIcon} from "../icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Navheader() {

    const navigate = useNavigate();
    const { currentUser, dispatch } = useContext(AuthContext) 
    const { modaldispatch } = useContext(ModalContext) 

    const [screenWidth, SetScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleResize() {
      SetScreenWidth(window.innerWidth);
    }

  const isMobile = screenWidth < 920;

    const signOutUser = () => {
      signOut(auth).then(()=>{
        dispatch({type:"LOGOUT"})
        navigate("/")
      })
    }

    const openmenu = () =>{
      modaldispatch({type:"menu"})
    }

    return (
      <>
        <nav>
            <div className='nav-center'>
                <h3><span><OpenQuizIcon/></span>Openquiz</h3>
                <div className='nav-container'>
                  { currentUser ? 
                    <>
                      {
                        isMobile ? (<h4><NavLink id="menuicon" to="/" onClick={openmenu}><span><MenuIcon/></span></NavLink></h4>) :
                          <><h4><NavLink to="/"><span><QuizIcon/></span>Quizes</NavLink></h4>
                          <h4><NavLink to="/CreateQuiz"><span><CreateQuizIcon/></span>CreateQuiz</NavLink></h4>
                          <h4><NavLink to="/MyQuizes"><span><MyQuizIcon/></span>MyQuizes</NavLink></h4>
                          <h4 onClick={signOutUser}><NavLink id="logout"><span><LoginIcon/></span>LogOut</NavLink></h4></>
                      }
                    </>
                    :
                    <>
                      { 
                        isMobile ? (<h4><NavLink id="menuicon" to="/" onClick={openmenu}><span><MenuIcon/></span></NavLink></h4>) :
                          <><h4><NavLink to="/"><span><QuizIcon/></span>Quizes</NavLink></h4>
                          <h4><NavLink to="/GoogleIn"><span><LoginIcon/></span>Login</NavLink></h4></>
                      }
                    </>
                  }
                </div>
            </div>
        </nav>
        <Outlet/>
      </>
    );
}

export default Navheader;