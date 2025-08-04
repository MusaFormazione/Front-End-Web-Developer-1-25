function MediaPuntiGiocatori({ media }) {
    return (
        <p className="h3">
          Media Punti: {media.toFixed(2)}
        </p>
    );
}

export default MediaPuntiGiocatori;
