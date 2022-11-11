
export default [
    {
      title: "Sofia Mañana",
      year: "09-11-2022",
      tipo: "Gasto Comun",
      valor: "$ 100.000",
      pagado: "Si",
      morosidad: "No",
      boton:  <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('¡Has pagado la totalidad de tus deudas!')}}>Agregar</button></div>
    },
    {
      title: "Luis Corrales",
      year: "08-11-2022",
      tipo: "Multa",
      valor: "$ 2.000",
      pagado: "No",
      morosidad: "Si",
      boton: <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('¡Has pagado la totalidad de tus deudas!')}}>Agregar</button></div>
    },
];