import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormStep1 } from "./pages/FormStep1/FormStep1";
import { FormStep2 } from "./pages/FormStep2/FormStep2";
import { FormStep3 } from "./pages/FormStep3/FormStep3";
import { FormStep4 } from "./pages/FormStep4/FormStep4";
import { Tks } from "./pages/tks/Tks";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/multiform-reactjs/" element={<FormStep1 />} />
                <Route path="/multiform-reactjs/step2" element={<FormStep2 />} />
                <Route path="/multiform-reactjs/step3" element={<FormStep3 />} />
                <Route path="/multiform-reactjs/step4" element={<FormStep4 />} />
                <Route path="/multiform-reactjs/tks" element={<Tks />} />
            </Routes>
        </BrowserRouter>
    );
}