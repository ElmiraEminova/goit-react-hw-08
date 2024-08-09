import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
 
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(()=> import("../../pages/RegistrationPage/RegistrationPage"))

export default function App() {

    return (
      <div >
        <Layout>
        <Suspense fallback={null}>
            <Routes>
              <Route path='/' element={HomePage} />
              <Route path='/contacts' element={ContactsPage} />
              <Route path='/login' element={LoginPage} />
              <Route path='/register' element={RegistrationPage} />
            </Routes>
          </Suspense>
        </Layout>  
    </div>
  );
}