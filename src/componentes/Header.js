import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return ( 
        <ContenedorHeader>
          <Titulo>Ferroviaria Tuquito</Titulo>
          <Menu>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/formularioEquipos">Crear Equipo</NavLink>
          </Menu>
        </ContenedorHeader>
     );
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a{
      text-decoration: none;
      color: #165168;
      margin: 0 10px;
      &:hover{
        color : #191668;
      }
      &.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
      }
  }
`;

export default Header;