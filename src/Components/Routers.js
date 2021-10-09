import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreConsulta, SituacionesClinicasComunes_PteHospitalizado, SituacionesClinicasComunes_PteHospitalizadoUCI, SituacionesClinicasComunes_PteCirugiaGeneral, SituacionesClinicasComunes_PreparacionPreQuirurgica, SituacionesClinicasComunes_PostOperatorios, Periodoncia_FaseHigienica, Periodoncia_FaseCorrectiva, Periodoncia_Ferulizacion, Periodoncia_Mantenimiento, CirugiaOral_Sindrome_Boca_Seca, CirugiaOral_Candidiasis, CirugiaOral_Inmunosuprimido, CirugiaOral_Quimioterapia, OrtopediaMaxilar_TtoActivo, OrtopediaMaxilar_RetencionFija, OrtopediaMaxilar_Mantenimiento, OrtopediaMaxilar_Mini_implantes } from '../Constants/Productos';

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
            <Route exact path={RoutersLinks.login} component={() =>
               <Login />}
            />

            <Route exact path={RoutersLinks.home} component={() =>
               <Home />}
            />


            <Route exact path={RoutersLinks.preConsulta} component={() =>
               <Menu products={PreConsulta} />}
            />


            <Route exact path={RoutersLinks.periodoncia} component={() =>
               <MenuPrincipal title={"Periodoncia"} arrayMenu={SituacionesEspecialidad[0].menu} />}
            />

            <Route exact path={RoutersLinks.Periodoncia_FaseHigienica} component={() =>
               <Menu title={"Periodoncia - Fase Higienica"} url={RoutersLinks.Periodoncia_FaseHigienica} products={Periodoncia_FaseHigienica} />}
            />

            <Route exact path={RoutersLinks.Periodoncia_FaseCorrectiva} component={() =>
               <Menu title={"Periodoncia - Fase Correctiva"} url={RoutersLinks.Periodoncia_FaseCorrectiva} products={Periodoncia_FaseCorrectiva} />}
            />

            <Route exact path={RoutersLinks.Periodoncia_Ferulizacion} component={() =>
               <Menu title={"Periodoncia - Ferulización"} url={RoutersLinks.Periodoncia_Ferulizacion} products={Periodoncia_Ferulizacion} />}
            />

            <Route exact path={RoutersLinks.Periodoncia_Mantenimiento} component={() =>
               <Menu title={"Periodoncia - Mantenimiento"} url={RoutersLinks.Periodoncia_Mantenimiento} products={Periodoncia_Mantenimiento} />}
            />

            <Route path={RoutersLinks.Periodoncia_FaseHigienica_View} children={<ViewProduct title={"Periodoncia - Fase Higienica"} arrayProduct={Periodoncia_FaseHigienica} />} />
            <Route path={RoutersLinks.Periodoncia_FaseCorrectiva_View} children={<ViewProduct title={"Periodoncia - Fase Correctiva"} arrayProduct={Periodoncia_FaseCorrectiva} />} />
            <Route path={RoutersLinks.Periodoncia_Ferulizacion_View} children={<ViewProduct title={"Periodoncia - Ferulización"} arrayProduct={Periodoncia_Ferulizacion} />} />
            <Route path={RoutersLinks.Periodoncia_Mantenimiento_View} children={<ViewProduct title={"Periodoncia - Mantenimiento"} arrayProduct={Periodoncia_Mantenimiento} />} />


            <Route exact path={RoutersLinks.cirugiaOral} component={() =>
               <MenuPrincipal title={"Cirugía Oral y Maxilofacial"} type="prod" arrayMenu={SituacionesEspecialidad[1].menu} />}
            />

            <Route exact path={RoutersLinks.CirugiaOral_Sindrome_Boca_Seca} component={() =>
               <Menu title={"Cirugía Oral y Maxilofacial - Sindrome Boca Seca"} url={RoutersLinks.CirugiaOral_Sindrome_Boca_Seca} products={CirugiaOral_Sindrome_Boca_Seca} />}
            />

            <Route exact path={RoutersLinks.CirugiaOral_Candidiasis} component={() =>
               <Menu title={"Cirugía Oral y Maxilofacial - Candidiasis"} url={RoutersLinks.CirugiaOral_Candidiasis} products={CirugiaOral_Candidiasis} />}
            />

            <Route exact path={RoutersLinks.CirugiaOral_Inmunosuprimido} component={() =>
               <Menu title={"Cirugía Oral y Maxilofacial - Inmunosuprimido"} url={RoutersLinks.CirugiaOral_Inmunosuprimido} products={CirugiaOral_Inmunosuprimido} />}
            />

            <Route exact path={RoutersLinks.CirugiaOral_Quimioterapia} component={() =>
               <Menu title={"Cirugía Oral y Maxilofacial - Quimioterapia"} url={RoutersLinks.CirugiaOral_Quimioterapia} products={CirugiaOral_Quimioterapia} />}
            />

            <Route path={RoutersLinks.CirugiaOral_Sindrome_Boca_Seca_View} children={<ViewProduct title={"Cirugía Oral y Maxilofacial - Sindrome Boca Seca"} arrayProduct={CirugiaOral_Sindrome_Boca_Seca} />} />
            <Route path={RoutersLinks.CirugiaOral_Candidiasis_View} children={<ViewProduct title={"Cirugía Oral y Maxilofacial - Candidiasis"} arrayProduct={CirugiaOral_Candidiasis} />} />
            <Route path={RoutersLinks.CirugiaOral_Inmunosuprimido_View} children={<ViewProduct title={"Cirugía Oral y Maxilofacial - Inmunosuprimido"} arrayProduct={CirugiaOral_Inmunosuprimido} />} />
            <Route path={RoutersLinks.CirugiaOral_Quimioterapia_View} children={<ViewProduct title={"Cirugía Oral y Maxilofacial - Quimioterapia"} arrayProduct={CirugiaOral_Quimioterapia} />} />


            {/* <Route exact path={RoutersLinks.patologiaOral} component={() => 
            <Menu products={} /> 
         }/>

                <Route exact path={RoutersLinks.endodoncia} component={() => 
                  <Menu products={} /> 
               }/>

                <Route exact path={RoutersLinks.operatoria_Rehabilitación} component={() => 
                <Menu products={} /> }/>
                */}

            <Route exact path={RoutersLinks.ortodonciaOrtopediaMaxilar} component={() =>
               <MenuPrincipal title={"Ortodoncia y Ortopedia Maxilar"} type="prod" arrayMenu={SituacionesEspecialidad[5].menu} />}
            />

            <Route exact path={RoutersLinks.OrtopediaMaxilar_TtoActivo} component={() =>
               <Menu title={"Ortodoncia y Ortopedia Maxilar - Tratamiento Activo"} url={RoutersLinks.OrtopediaMaxilar_TtoActivo} products={OrtopediaMaxilar_TtoActivo} />}
            />

            <Route exact path={RoutersLinks.OrtopediaMaxilar_RetencionFija} component={() =>
               <Menu title={"Ortodoncia y Ortopedia Maxilar - Retención Fija"} url={RoutersLinks.OrtopediaMaxilar_RetencionFija} products={OrtopediaMaxilar_RetencionFija} />}
            />

            <Route exact path={RoutersLinks.OrtopediaMaxilar_Mantenimiento} component={() =>
               <Menu title={"Ortodoncia y Ortopedia Maxilar - Mantenimiento"} url={RoutersLinks.OrtopediaMaxilar_Mantenimiento} products={OrtopediaMaxilar_Mantenimiento} />}
            />

            <Route exact path={RoutersLinks.OrtopediaMaxilar_Mini_implantes} component={() =>
               <Menu title={"Ortodoncia y Ortopedia Maxilar - Postoperatorio Mini-implantes de Anclaje"} url={RoutersLinks.OrtopediaMaxilar_Mini_implantes} products={OrtopediaMaxilar_Mini_implantes} />}
            />

            <Route path={RoutersLinks.OrtopediaMaxilar_TtoActivo_View} children={<ViewProduct title={"Ortodoncia y Ortopedia Maxilar - Tratamiento Activo"} arrayProduct={OrtopediaMaxilar_TtoActivo} />} />
            <Route path={RoutersLinks.OrtopediaMaxilar_RetencionFija_View} children={<ViewProduct title={"Ortodoncia y Ortopedia Maxilar - Retención Fija"} arrayProduct={OrtopediaMaxilar_RetencionFija} />} />
            <Route path={RoutersLinks.OrtopediaMaxilar_Mantenimiento_View} children={<ViewProduct title={"Ortodoncia y Ortopedia Maxilar - Mantenimiento"} arrayProduct={OrtopediaMaxilar_Mantenimiento} />} />
            <Route path={RoutersLinks.OrtopediaMaxilar_Mini_implantes_View} children={<ViewProduct title={"Ortodoncia y Ortopedia Maxilar - Postoperatorio Mini-implantes de Anclaje"} arrayProduct={OrtopediaMaxilar_Mini_implantes} />} />


            <Route exact path={RoutersLinks.pacienteHospitalizado} component={() =>
               <Menu title={"PACIENTE HOSPITALIZADO"} url={RoutersLinks.pacienteHospitalizado} products={SituacionesClinicasComunes_PteHospitalizado} />}
            />

            <Route exact path={RoutersLinks.pacienteHospitalizadoUCI} component={() =>
               <Menu title={"PACIENTE HOSPITALIZADO EN UCI"} url={RoutersLinks.pacienteHospitalizadoUCI} products={SituacionesClinicasComunes_PteHospitalizadoUCI} />}
            />

            <Route exact path={RoutersLinks.pacienteDeCirugiaGeneral} component={() =>
               <Menu title={"PACIENTE DE CIRUGÍA GENERAL PROGRAMADA EN HOSPITAL"} url={RoutersLinks.pacienteDeCirugiaGeneral} products={SituacionesClinicasComunes_PteCirugiaGeneral} />}
            />

            <Route exact path={RoutersLinks.preparacionPreQuirurgica} component={() =>
               <Menu title={"PREPARACIÓN PRE-QUIRÚRGICA"} url={RoutersLinks.preparacionPreQuirurgica} products={SituacionesClinicasComunes_PreparacionPreQuirurgica} />}
            />

            <Route exact path={RoutersLinks.postOperatorios} component={() =>
               <Menu title={"POST-OPERATORIOS QUIRÚRGICOS"} url={RoutersLinks.postOperatorios} products={SituacionesClinicasComunes_PostOperatorios} />}
            />


            <Route path={RoutersLinks.pacienteHospitalizado_View} children={<ViewProduct title={"PACIENTE HOSPITALIZADO"} arrayProduct={Periodoncia_FaseHigienica} />} />
            <Route path={RoutersLinks.pacienteHospitalizadoUCI_View} children={<ViewProduct title={"PACIENTE HOSPITALIZADO EN UCI"} arrayProduct={Periodoncia_FaseHigienica} />} />
            <Route path={RoutersLinks.pacienteDeCirugiaGeneral_View} children={<ViewProduct title={"PACIENTE DE CIRUGÍA GENERAL PROGRAMADA EN HOSPITAL"} arrayProduct={Periodoncia_FaseHigienica} />} />
            <Route path={RoutersLinks.preparacionPreQuirurgica_View} children={<ViewProduct title={"PREPARACIÓN PRE-QUIRÚRGICA"} arrayProduct={Periodoncia_FaseHigienica} />} />
            <Route path={RoutersLinks.postOperatorios_View} children={<ViewProduct title={"POST-OPERATORIOS QUIRÚRGICOS"} arrayProduct={Periodoncia_FaseHigienica} />} />

            <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={PreConsulta} />} />
            {/* <Route path={RoutersLinks.viewProduct2} component={() => 
               <ViewProduct arrayProduct={PreConsulta[1]} /> }/> 
               */}

         </Switch>
      </Router>
   );
};

export default Routers;