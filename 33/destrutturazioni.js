
function provaNonDestrutturata(props) {
  const {propA} = props;
  console.log("Prova non destrutturata:", propA);
}

function provaDestrutturata({propA, propB}) {
  console.log("Prova destrutturata:", propA, propB);
}

provaNonDestrutturata({propA: "valoreA", propB: "valoreB"});
