import { Navigate, useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <h2>404 - Not Found</h2>
      <p>La pagina che stai cercando non esiste.</p>
      <button className='btn btn-primary' onClick={() => navigate(-1)}>
        Vai alla pagina precedente
      </button>
    </div>
  );
}
export default NotFound;
