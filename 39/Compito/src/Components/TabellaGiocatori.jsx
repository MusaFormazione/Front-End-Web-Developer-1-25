function RigaGiocatori({ riga }) {
    return (
      <tr>
        <td>{riga.nome}</td>
        <td>{riga.punti}</td>
        <td>{riga.squadra}</td>
      </tr>
    )
}

function TabellaGiocatori({ children, data, mostraSoloPuntiAlti }) {
    return <div className="mb-2">
    <h2>{ children} </h2>
    <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Punti</th>
            <th>Squadra</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(giocatore => !mostraSoloPuntiAlti || giocatore.punti > 20)
            .map((riga, index) =><RigaGiocatori key={index} riga={riga} />)}
        </tbody>
      </table>
    </div>
}

export default TabellaGiocatori;
