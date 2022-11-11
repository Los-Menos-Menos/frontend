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
            ["Gastoscomunes_residente","Gastos comunes"],
            ["Reservas_Residente","Reservas"],
            ["Anuncios","Anuncios"],
        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        }
    },
    "Administrador":{
        nombre: "Administrador",
        paginas: [
            ["Gestionar gastos comunes","Gestionar gastos comunes"],
            ["AdminUsuarios", "Gestionar usuarios"],
            ["AdminReservas", "Gestionar reservas"],
            ["Gestionar reclamos", "Gestionar reclamos"],
        ],
        botonLogin: {
            texto: "Cerrar Sesion",
        },
    },
    "Conserje":{
        nombre: "Conserje",
        paginas: [
            ["Residentes","Residentes"],
            ["Espacios comunes","Espacios comunes"],
            ["Libro","Libro"],
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