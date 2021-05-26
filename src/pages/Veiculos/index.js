import React from 'react';

import { ContainerPage, TitlePage } from '../../components/Main';
import { Link } from 'react-router-dom'


const Page = () => {
    return (
        <ContainerPage>
           
            <div class="container">
                <h1>Veiculos <span class="badge badge-secondary"></span>

                </h1>
                <form>
                <div class="form-row ">
                    <div class="col">
                    <input type="text" class="form-control" id="inputPassword3"  placeholder="Filtro"></input>
                    </div>
                    <button type="subimt" class="btn btn-outline-primary">Buscar</button>
                    <Link to="/veiculo/novo"><button type="button"  class="btn btn-outline-primary">Novo Veiculo</button></Link>
                    </div>
                </form>
                <br></br>

                <div class="center">
                    <table class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Placas</th>
                                <th>Veiculos</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Veiculos</td>
                                <button type="button" class="btn btn-outline-primary">Manutenção</button>
                                <button type="button" class="btn btn-outline-primary">Consumo</button>
                                <button type="button" class="btn btn-outline-primary">Contrato</button>
                            </tr>

                            <tr>
                                <td>001</td>
                                <td>Veiculos</td>

                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </ContainerPage>
    );
}

export default Page;

//<div class="float-sm-none">Ola mundo</div>