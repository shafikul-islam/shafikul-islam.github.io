import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import ProjectLayout from "./pages/ProjectLayout";
import Academic from "./pages/Projects/Academic";
import Optimization from "./pages/Projects/Optimization";
import SupplyChain from "./pages/Projects/SupplyChain";
import DataScience from "./pages/Projects/DataScience";
import ML from "./pages/Projects/ML";
import NLP from "./pages/Projects/NLP";
import Publications from "./pages/Publications";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="projects" element={<ProjectLayout></ProjectLayout>}>
        <Route path="academic" element={<Academic></Academic>}></Route>
        <Route
          path="optimization"
          element={<Optimization></Optimization>}
        ></Route>
        <Route
          path="supply-chain"
          element={<SupplyChain></SupplyChain>}
        ></Route>
        <Route
          path="data-science"
          element={<DataScience></DataScience>}
        ></Route>
        <Route path="machine-learning" element={<ML></ML>}></Route>
        <Route path="natural-language-processing" element={<NLP></NLP>}></Route>
      </Route>
      <Route
        path="publications"
        element={<Publications></Publications>}
      ></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
