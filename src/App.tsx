import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Details from "./components/components_detail/Details";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="details/:characterId" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}