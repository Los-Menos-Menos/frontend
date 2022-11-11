let opciones={
    "Login":{
        nombre: "AdminCondom",
        paginas: [],
        botonLogin: {
            texto: "Iniciar Sesion",
        },
    },
    "Residente":{
        nombre: "Residente",
        paginas: [
            ["Gastos comunes","Gastos comunes"],
            ["Reservas","Reservas"],
            ["Anuncios","Anuncios"],
            ["Multas","Multas"],

        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        }
    },
    "Administrador":{
        nombre: "Administrador",
        paginas: [
            ["Gestionar gastos comunes","Gestionar gastos comunes"],
            ["Gestionar usuarios", "Gestionar usuarios"],
            ["Gestionar reservas", "Gestionar reservas"],
            ["Gestionar reclamos", "Gestionar reclamos"],
        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        },
    },
    "Conserje":{
        nombre: "Conserje",
        paginas: [
            ["Gestionar gastos comunes","Gestionar gastos comunes"],
            ["Gestionar usuarios", "Gestionar usuarios"],
            ["Gestionar reservas", "Gestionar reservas"],
            ["Gestionar reclamos", "Gestionar reclamos"],

        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        },
    },
    "SuperAdmin":{
        nombre: "SuperAdmin",
        paginas: [
            ["Gestionar gastos comunes","Gestionar gastos comunes"],
            ["Gestionar usuarios", "Gestionar usuarios"],
            ["Gestionar reservas", "Gestionar reservas"],
            ["Gestionar reclamos", "Gestionar reclamos"],
            ["Gestionar anuncios", "Gestionar anuncios"],

        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        },
    },
    "Directiva" : {
        nombre: "Directiva",
        paginas: [
            ["Gestionar gastos comunes","Gestionar gastos comunes"],
            ["Gestionar usuarios", "Gestionar usuarios"],
            ["Gestionar reservas", "Gestionar reservas"],
            ["Gestionar reclamos", "Gestionar reclamos"],
            ["Gestionar anuncios", "Gestionar anuncios"],
        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        },
    },
}
    
export default opciones;