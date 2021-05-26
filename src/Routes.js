import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Manutencao from './pages/Manutencao';
import Veiculos from './pages/Veiculos';
import Contratos from './pages/Contratos';
import NovoVeiculoPage from './pages/novo-Veiculo/NovoVeiculoPage';


export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/veiculos">
                <Veiculos />
            </Route>

            <Route exact path="/manutencao">
                <Manutencao />
            </Route>

            <Route exact path="/contratos">
                <Contratos />
            </Route>

            <Route exact path="/pecas">
                Peças Work!
            </Route>

            <Route exact path="/viagem">
                Viagem Work!
            </Route>
            
            <Route exact path="/veiculo/novo">
                <NovoVeiculoPage/>
            </Route>
        </Switch>
    );

}
