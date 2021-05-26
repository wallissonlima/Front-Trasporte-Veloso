import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerPage, TitlePage } from '../../components/Main';

const NovoVeiculoPage = () => {
  return (
    <ContainerPage>

      <form class="">
        <div class="container">
          <h1>Novo Veiculos</h1> <span class="badge badge-secondary"></span>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationDefault01">Marca Veiculo</label>
              <input type="text" class="form-control" id="validationDefault03" placeholder="Modelo" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Placa</label>
              <input type="text" class="form-control" id="validationDefault03" placeholder="JTW-1980" required/>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault03">Chassi</label>
              <input type="text" class="form-control" id="validationDefault03" placeholder="00SD5858FF" required />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">Modelo</label>
              <input type="text" class="form-control" id="validationDefault03" placeholder="Onibus" required />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault05">Quilomentragem</label>
              <input type="text" class="form-control" id="validationDefault04" placeholder="km" required />
            </div>
            <div class="col-md-3 mb-3">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Zero km</label>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" >
              <option selected>Escolher...</option>
              <option value="1">Sim</option>
              <option value="2">Não</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
              <label class="form-check-label" for="invalidCheck2">
                Concordo com os termos e condições
      </label>
            </div>
          </div>
          <Link to="#"><button class="btn btn-outline-primary" type="submit">Cadastra</button></Link>
          <Link to="/veiculos"><button class="btn btn-outline-primary" type="button">Volta</button></Link>
        </div>
      </form>

    </ContainerPage>

  );
}

export default NovoVeiculoPage;

