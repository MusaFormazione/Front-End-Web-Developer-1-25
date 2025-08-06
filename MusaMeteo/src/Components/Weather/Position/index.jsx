// function Position({ geolocation }) {
//    const { latitude, longitude } = geolocation;
// //=> equivale a:
function Position({ geolocation: { latitude, longitude } }) {
  return (
    <div className="position">
      <h2>Posizione</h2>
      <p>Latitudine: <b>{latitude}</b></p>
      <p>Longitudine: <b>{longitude}</b></p>
    </div>
  );
}
export default Position;
