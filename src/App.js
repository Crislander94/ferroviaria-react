import './App.css';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import Header from './componentes/Header';
import Main from './componentes/Main';
const App =  () => {
  return (
    <BrowserRouter>
      <ContainerMain>
        <Header/>
        <Main />
      </ContainerMain>
    </BrowserRouter>
  );
}

const ContainerMain = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 1000px;
`;


export default App;