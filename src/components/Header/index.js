import React from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import * as ReactBootStrap from 'react-bootstrap';

import { FaGithub, FaHouseDamage } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsBoxArrowInRight } from "react-icons/bs";



import { AreaHeader } from './styled';

function Header() {
  return (
    <AreaHeader>

      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
  <a class="navbar-brand" href="/"><img src="../../../logo.png" alt="logo" /><span class="sr-only">(página atual)</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <Link to="/veiculos"><a class="nav-link">Veiculos</a></Link>
      </li>
      <li class="nav-item">
       <Link to="/contratos"><a class="nav-link">Contratos</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/manutencao"><a class="nav-link">Manutenção</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/pecas"><a class="nav-link">Peças</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/viagem"><a class="nav-link">Viagem</a></Link>
      </li>
      

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Procura"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
    </form>
  </div>
</nav>

    </AreaHeader>

  );
}

export default Header;

