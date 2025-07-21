/* Visualizza un utente nel formato restituito dalla api jsonplaceholder.typicode.com/users */
/*
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
 */

function User ({ user }) {
  /* la classe user e' dichiarata in App.css, in un progetto reale sarebbe meglio usare un file dedicato
     per gli stili di questo componente */
  return (
    <div className='user'>
      <h2>Utente</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefono:</strong> {user.phone}</p>
      <p><strong>Sito Web:</strong> {user.website}</p>
      <h3>Indirizzo</h3>
      <p><strong>Via:</strong> {user.address.street}</p>
      <p><strong>Suite:</strong> {user.address.suite}</p>
      <p><strong>Città:</strong> {user.address.city}</p>
      <p><strong>CAP:</strong> {user.address.zipcode}</p>
      <h3>Geolocalizzazione</h3>
      <p><strong>Latitudine:</strong> {user.address.geo.lat}</p>
      <p><strong>Longitudine:</strong> {user.address.geo.lng}</p>
      <h3>Azienda</h3>
      <p><strong>Nome:</strong> {user.company.name}</p>
      <p><strong>Frase d'effetto:</strong> {user.company.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company.bs}</p>
    </div>
  )
}

export default User
