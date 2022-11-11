
export default [
    {
      title: "Sofia Mañana",
      tipo: "Gasto Comun",
      valor: "$ 100.000",
      gastos: <div class="col d-flex justify-content-center"> <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('Esta persona está al día con sus pagos.')}}>Ver</button></div>,
      morosidad: "No",
      depto: "A01",
      boton:  <div class="col d-flex justify-content-center"><input type="text" name="name" placeholder="Ingrese valor" style={{margin:10, fit: "contain", width: 100, height: 30}}/> <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('Has agregado una multa exitosamente.')}}>Agregar</button></div>
    },
    {
      title: "Luis Corrales",
      tipo: "Multa",
      valor: "$ 2.000",
      gastos: <div class="col d-flex justify-content-center"> <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('Esta persona debe $ 60.000.')}}>Ver</button></div>,
      morosidad: "Si",
      depto: "A02",
      boton: <div class="col d-flex justify-content-center"><input type="text" name="name" placeholder="Ingrese valor" style={{margin:10, fit: "contain", width: 100, height: 30}}/> <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('Has agregado una multa exitosamente.')}}>Agregar</button></div>
    },
];