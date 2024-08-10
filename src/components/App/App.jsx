import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { selectRefreshing } from '../../redux/auth/selectors'
import { refreshUser } from '../../redux/auth/operations'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import PrivateRoute from "../PrivateRoute/PrivateRoute"
 
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(()=> import("../../pages/RegistrationPage/RegistrationPage"))

export default function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

    return ( isRefreshing ? (<div>isRefreshing</div>) :
      (<div >
        <Layout>
        <Suspense fallback={null}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} goTo="/login" />} />
              <Route path='/login' element={<RestrictedRoute component={<LoginPage />} goTo="/contacts" />} />
              <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} goTo="/contacts" />} />
            </Routes>
          </Suspense>
        </Layout>  
    </div>)
  );
}