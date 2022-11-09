import { Component } from "react";

class Admin_reservas extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div class="container">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-2 d-flex">
                                <p>Piscina</p>
                            </div>
                            <div class="col d-flex flex-column align-items-end">
                                <p class="align-self-start">En esta wea hay una piscina</p><button class="btn btn-primary" type="button">reservar</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-2 d-flex">
                                <p>Piscina</p>
                            </div>
                            <div class="col d-flex flex-column align-items-end">
                                <p class="align-self-start">En esta wea hay una piscina</p><button class="btn btn-primary" type="button">reservar</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-2 d-flex">
                                <p>Piscina</p>
                            </div>
                            <div class="col d-flex flex-column align-items-end">
                                <p class="align-self-start">En esta wea hay una piscina</p><button class="btn btn-primary" type="button">reservar</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}



export default Admin_reservas;