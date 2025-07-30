function Hourly({ hourly }) {
  return <tr>
      <td>{hourly.hour}</td>
      <td>{hourly.precipitation} mm</td>
      <td>{Math.round(hourly.temperature)} °C</td>
    </tr>
}

export default Hourly;
