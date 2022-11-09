import { Component } from "react";

class Admin extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div class="container py-4 py-xl-5">
                <div class="row mb-5">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Bienvenido admin :ojosbacanes:</h2>
                        <p class="w-lg-50">Seleccione una opción para empezar a monitorear a los weones</p>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <div class="col">
                        <div class="d-flex p-3">
                            <div class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-bell">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                </svg></div>
                            <div class="px-2">
                                <h5 class="mb-0 mt-1">Gestionar gastos comunes</h5>
                            </div><button class="btn btn-primary" type="button">Ir</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex p-3">
                            <div class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-bell">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                </svg></div>
                            <div class="px-2 d-flex">
                                <h5 class="mb-0 mt-1">Gestionar residentes</h5>
                            </div><button class="btn btn-primary justify-self-end align-self-end" type="button">Ir</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex p-3">
                            <div class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-bell">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                </svg></div>
                            <div class="px-2">
                                <h5 class="mb-0 mt-1">Gestionar áreas comunes&nbsp;</h5>
                            </div><button class="btn btn-primary" type="button">Ir</button>
                        </div>
                    </div>
                </div>
                <section class="position-relative py-4 py-xl-5" >
                    <div class="container position-relative">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                                <div class="card mb-5">
                                    <div class="card-body p-sm-5">
                                        <h2 class="text-center mb-4">Crear un anuncio</h2>
                                        <form method="post">
                                            <div class="mb-3"><input class="form-control" type="text" id="NombreAnuncio" name="NombreAnuncio" placeholder="NombreAnuncio"></input></div>
                                            <div class="mb-3"><input class="form-control" type="email" id="AutorAnuncio" name="AutorAnuncio" placeholder="AutorAnuncio"></input></div>
                                            <div class="mb-3"><textarea class="form-control" id="Mensaje" name="Mensaje" rows="6" placeholder="Mensaje"></textarea></div>
                                            <div><button class="btn btn-primary d-block w-100" type="submit">Enviar anuncio</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Admin;