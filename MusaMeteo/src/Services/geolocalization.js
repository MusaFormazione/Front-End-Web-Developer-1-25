function updateGeolocation(setGeolocation) {
  if (!navigator.geolocation) {
    console.error('Geolocalizzazione non supportata dal browser');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      // equivalente a:
      const { latitude, longitude } = position.coords;
      setGeolocation({ latitude, longitude });
    },
    (error) => {
      console.error('Errore nel recupero della posizione:', error);
      alert('Errore nel recupero della posizione. Assicurati di aver abilitato la condivisione della posizione.');
    }
  );
}

export default updateGeolocation
