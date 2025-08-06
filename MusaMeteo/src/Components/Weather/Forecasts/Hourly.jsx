function Hourly({ hourly: { hour, precipitation, temperature } }) {
  return <tr>
      <td>{hour}</td>
      <td>{precipitation.toFixed(2)} mm</td>
      <td>{Math.round(temperature)} °C</td>
    </tr>
}

export default Hourly;
