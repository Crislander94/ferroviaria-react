import {Route, Routes } from 'react-router-dom';
import CargarVistaEquipos from './cargarVistaEquipos';
import FormularioEquipos from './formularioEquipos';
import styled from 'styled-components';
import Error404 from './Error404';


const Main = () => {
 
    return ( 
        <ContainerMainRoute>
          <Routes>
            <Route path='/' exact={true} element={<CargarVistaEquipos/>}/>
            <Route path='/formularioEquipos' element={<FormularioEquipos/>}/>
            <Route element={<Error404/>}/>
          </Routes>
        </ContainerMainRoute>
     );
}

const ContainerMainRoute = styled.main`
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 8px 8px 5px rgba(129,129,129,0.1);
`;

export default Main;