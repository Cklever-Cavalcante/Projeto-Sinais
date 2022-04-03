import React from "react";

import { Route, BrowserRouter} from "react-router-dom";

import Inicio from "../componentes/Inicio.js";
import Cursos from "../componentes/Cursos.js";
import Tecnologias from "../componentes/Tecnologogias.js";
import Projetos from "../componentes/Projetos.js";
import Oportunidades from "../componentes/Oportunidades.js";

const Routes = () => {

    return (

    <BrowserRouter>
            
            <Route component={Inicio} path="/" exact/>
            <Route component={Cursos} path="/Cursos"/>
            <Route component={Oportunidades} path="/Oportunidades"/>
            <Route component={Projetos} path="/Projetos"/>
            <Route component={Tecnologias} path="/Tecnologias"/>
    
    </BrowserRouter>

    );

}

export default Routes;