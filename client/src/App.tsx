import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./features/Loading";
import Sendquery from "./Components/pages/Sendquery";
import Sendmessage from "./Components/pages/Sendmessage";


const Landingpage = lazy(() => import("./Components/Main/Landingpage"))

const Index = lazy(() => import("./Components/Main/index"));
const Notfound = lazy(() => import("./Components/Main/404/Notfound"));

const Dashboard = lazy(() => import("./Components/pages/Dashboard"));
const User = lazy(() => import("./Components/pages/User"));
const Login = lazy(() => import("./Components/pages/Login"));
const Write = lazy(() => import("./Components/pages/Write"));
const Queries = lazy(() => import("./Components/pages/Queries"));
// logout 
const Logout = lazy(() => import("./features/Logout"));

const App = () => {


  return (
    <BrowserRouter>


      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Index />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prescribe" element={<Write />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/sendquery" element={<Sendquery />} />
          <Route path="/sendsms" element={<Sendmessage />} />
          <Route path="/dashboard/:no" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/:id" element={<Notfound />} />

        </Routes>
      </Suspense>
    </BrowserRouter >
  );
};
export default App;
