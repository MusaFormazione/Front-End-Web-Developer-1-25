import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <h2 style={{ color: 'red' }}>Error</h2>
      <p>Errore nel login</p>
      <button className='btn btn-primary' onClick={() => navigate("/login")}>
        Torna al login
      </button>
    </div>
  );
}
export default ErrorPage;
