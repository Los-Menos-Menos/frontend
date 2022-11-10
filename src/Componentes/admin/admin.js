import { Component } from "react";

import AdminInicio from "./admin_inicio";
import AdminUsuarios from "./admin_usuarios";
import AdminReservas from "./admin_reservas";

class Admin extends Component {
    constructor(){
        super();
        this.state = {
            page: "Inicio",
        }
        this.renderAdmin = this.renderAdmin.bind(this);
        this.cambiarPaginaAdmin = this.cambiarPaginaAdmin.bind(this);
    }

    renderAdmin(){
        var toRender = <AdminInicio />
        switch(this.state.page){
            case "Inicio":
                toRender = <AdminInicio cambiarPagina={this.cambiarPaginaAdmin}/>
            case "Gestionar gastos comunes":
                toRender = "Gestionar gastos comunes";
            case "Gestionar usuarios":
                toRender = <AdminUsuarios cambiarPagina={this.cambiarPaginaAdmin}/>;
            case "Gestionar espacios":
                toRender = <AdminReservas cambiarPagina={this.cambiarPaginaAdmin}/>;
            default:
                toRender = <AdminInicio cambiarPagina={this.cambiarPaginaAdmin}/>
        }
        return toRender;
    }

    cambiarPaginaAdmin(pagina){
        this.setState({page: pagina});
    }

    render() {

        return (
            <div>
            {this.renderAdmin()}
            </div>
        );
    }
}

export default Admin;