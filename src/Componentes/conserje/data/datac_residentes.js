
export default [
    {
      title: "Sofia Mañana",
      tipo: "Gasto Comun",
      valor: "$ 100.000",
      fecha: "09 - 11 - 2022",
      gastos: <div class="col d-flex justify-content-center"> <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('Esta persona está al día con sus pagos.')}}>Ver</button></div>,
      morosidad: "No",
      depto: "A01"    },
    {
      title: "Luis Corrales",
      tipo: "Multa",
      valor: "$ 2.000",
      fecha: "08 - 11 - 2022",
      gastos: <div class="col d-flex justify-content-center"> <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('Esta persona debe $ 60.000.')}}>Ver</button></div>,
      morosidad: "Si",
      depto: "A02"    },
];