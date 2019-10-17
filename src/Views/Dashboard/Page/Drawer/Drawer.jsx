import React from 'react';
import PropTypes from 'prop-types';
import { Container, MenuItems, ContainerBody } from './Drawer.styles';
import { MenuIcon } from '../Page.styles';
import './Drawer.css';

export default function Drawer(props) {
  const { toggleDrawer, drawerOpened } = props;

  return (
    <Container
      width={300}
      visible={drawerOpened}
      onClose={toggleDrawer}
      placement="left"
      closable={false}
      {...props}
    >
      <ContainerBody>
        <MenuItems to="/cadastro/bancasteste">
          <MenuIcon type="home" />
          Bancas
        </MenuItems>
        <MenuItems to="/cadastro/home">
          <MenuIcon type="home" />
          Início
        </MenuItems>
        <MenuItems to="/cadastro/bancas">
          <MenuIcon type="file-add" />
          Cadastro de bancas
        </MenuItems>
        <MenuItems to="/cadastro/arbitros">
          <MenuIcon type="notification" />
          Cadastro de Árbitros
        </MenuItems>
        <MenuItems to="/cadastro/atletas/form">
          <MenuIcon type="file-add" />
          Cadastro de Atleta (Form)
        </MenuItems>
      </ContainerBody>
    </Container>
  );
}

Drawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpened: PropTypes.bool.isRequired,
};
