import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreConsulta, SituacionesClinicasComunes_PteHospitalizado, SituacionesClinicasComunes_PteHospitalizadoUCI, SituacionesClinicasComunes_PteCirugiaGeneral, SituacionesClinicasComunes_PreparacionPreQuirurgica, SituacionesClinicasComunes_PostOperatorios, Periodoncia_FaseHigienica, Periodoncia_FaseCorrectiva, Periodoncia_Ferulización, Periodoncia_Mantenimiento, CirugiaOral_Sindrome_Boca_Seca, CirugiaOral_Candidiasis, CirugiaOral_Inmunosuprimido, CirugiaOral_Quimioterapia, OrtopediaMaxilar_TtoActivo, OrtopediaMaxilar_RetencionFija, OrtopediaMaxilar_Mantenimiento, OrtopediaMaxilar_Mini_implantes } from '../Constants/Productos';

// import {} from 
import { SituacionesEspecialidad } from '../Constants/Menus';
import { RoutersLinks } from '../Constants/RoutersLinks';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import ViewProduct from '../Pages/ViewProduct';
import MenuPrincipal from '../Pages/MenuPrincipal';

const Routers = () => {
   return (
      <Router>
         <Switch>
            <Route exact path={RoutersLinks.login} component={() => <Login />} />
            <Route exact path={RoutersLinks.home} component={() => <Home />} />

            <Route exact path={RoutersLinks.preConsulta} component={() => <Menu products={PreConsulta} />} />

            <Route path={RoutersLinks.periodoncia} component={() => <MenuPrincipal title={"Periodoncia"} arrayMenu={SituacionesEspecialidad[0].menu} />} />
            <Route exact path={RoutersLinks.Periodoncia_FaseHigienica} component={() => <Menu products={Periodoncia_FaseHigienica} />} />
            <Route exact path={RoutersLinks.Periodoncia_FaseCorrectiva} component={() => <Menu products={Periodoncia_FaseCorrectiva} />} />
            <Route exact path={RoutersLinks.Periodoncia_Ferulización} component={() => <Menu products={Periodoncia_Ferulización} />} />
            <Route exact path={RoutersLinks.Periodoncia_Mantenimiento} component={() => <Menu products={Periodoncia_Mantenimiento} />} />
            <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={Periodoncia_FaseHigienica} />} />
            <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={Periodoncia_FaseCorrectiva} />} />
            <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={Periodoncia_Ferulización} />} />
            <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={Periodoncia_Mantenimiento} />} />


            <Route exact path={RoutersLinks.cirugiaOral} component={() => <MenuPrincipal title={"Cirugía Oral y Maxilofacial"} type="prod" arrayMenu={SituacionesEspecialidad[1].menu} />} />
            <Route exact path={RoutersLinks.CirugiaOral_Sindrome_Boca_Seca} component={() => <Menu products={CirugiaOral_Sindrome_Boca_Seca} />} />
            <Route exact path={RoutersLinks.CirugiaOral_Candidiasis} component={() => <Menu products={CirugiaOral_Candidiasis} />} />
            <Route exact path={RoutersLinks.CirugiaOral_Inmunosuprimido} component={() => <Menu products={CirugiaOral_Inmunosuprimido} />} />
            <Route exact path={RoutersLinks.CirugiaOral_Quimioterapia} component={() => <Menu products={CirugiaOral_Quimioterapia} />} />


            {/* <Route exact path={RoutersLinks.patologiaOral} component={() => <Menu products={} /> }/>
                <Route exact path={RoutersLinks.endodoncia} component={() => <Menu products={} /> }/>
                <Route exact path={RoutersLinks.operatoria_Rehabilitación} component={() => <Menu products={} /> }/>*/}
            <Route exact path={RoutersLinks.ortodonciaOrtopediaMaxilar} component={() => <MenuPrincipal title={"Ortodoncia y Ortopedia Maxilar"} type="prod" arrayMenu={SituacionesEspecialidad[5].menu} />} />
            <Route exact path={RoutersLinks.OrtopediaMaxilar_TtoActivo} component={() => <Menu products={OrtopediaMaxilar_TtoActivo} />} />
            <Route exact path={RoutersLinks.OrtopediaMaxilar_RetencionFija} component={() => <Menu products={OrtopediaMaxilar_RetencionFija} />} />
            <Route exact path={RoutersLinks.OrtopediaMaxilar_Mantenimiento} component={() => <Menu products={OrtopediaMaxilar_Mantenimiento} />} />
            <Route exact path={RoutersLinks.OrtopediaMaxilar_Mini_implantes} component={() => <Menu products={OrtopediaMaxilar_Mini_implantes} />} />


            <Route exact path={RoutersLinks.pacienteHospitalizado} component={() => <Menu products={SituacionesClinicasComunes_PteHospitalizado} />} />
            <Route exact path={RoutersLinks.pacienteHospitalizadoUCI} component={() => <Menu products={SituacionesClinicasComunes_PteHospitalizadoUCI} />} />
            <Route exact path={RoutersLinks.pacienteDeCirugiaGeneral} component={() => <Menu products={SituacionesClinicasComunes_PteCirugiaGeneral} />} />
            <Route exact path={RoutersLinks.preparacionPreQuirurgica} component={() => <Menu products={SituacionesClinicasComunes_PreparacionPreQuirurgica} />} />
            <Route exact path={RoutersLinks.postOperatorios} component={() => <Menu products={SituacionesClinicasComunes_PostOperatorios} />} />

            <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={PreConsulta} />} />
            {/* <Route path={RoutersLinks.viewProduct2} component={() => <ViewProduct arrayProduct={PreConsulta[1]} /> }/> */}
         </Switch>
      </Router>
   );
};

export default Routers;