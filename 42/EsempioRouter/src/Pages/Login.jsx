import { useRef } from "react";
import { Navigate, useNavigate } from "react-router";

const USER = "gabriele"
const PASSWORD = "prova"

function Login() {
  const navigate = useNavigate()
  const refPassword = useRef()
  const refUser = useRef()

  const handleLogin = () => {
    if (refPassword.current.value === PASSWORD && refUser.current.value === USER) {
      navigate('/home')
    } else {
      navigate('/error')
    }

  }

  return (
    <div className='container'>
      <h2>Login</h2>
      <p>
        User: <input type="text" placeholder="Username" ref={refUser} />
        Password: <input type="password" placeholder="Password" ref={refPassword} />
      </p>
      <button className='btn btn-primary' onClick={handleLogin}>
        Accedi
      </button>
    </div>
  );
}
export default Login;
