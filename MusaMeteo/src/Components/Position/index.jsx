function Position({ geolocation: { latitude, longitude } }) {
  return (
    <div className="position">
      <h2>Posizione</h2>
      <p>Latitudine: {latitude}</p>
      <p>Longitudine: {longitude}</p>
    </div>
  );
}
export default Position;
