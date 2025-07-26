function updateGeolocation(setGeolocation) {
  if (!navigator.geolocation) {
    console.error('Geolocalizzazione non supportata dal browser');
    return;
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setGeolocation({ latitude, longitude });
  }, (error) => {
    console.error('Errore nel recupero della posizione:', error);
  });
}

export default updateGeolocation
