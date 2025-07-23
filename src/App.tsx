import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CustomLoarder from './components/Loarder';
import Navbar from './components/Navbar';
import { useAuth } from './hooks/useAuth';
import useUser from './hooks/User';

const ClaimCreation = React.lazy(() => import('./pages/claim/Create'));
const ClaimView = React.lazy(() => import('./pages/claim/View'));
const ClaimList = React.lazy(() => import('./pages/claim/List'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Signup = React.lazy(() => import('./pages/auth/Signup'));
const RevieverPannel = React.lazy(() => import('./pages/reviewer/ReviewerPannel'));
const ClaimReview = React.lazy(() => import('./pages/reviewer/Review'));
const MotorInsuranceForm = React.lazy(() => import('./pages/motor/Create'));
const QuotationList = React.lazy(() => import('./pages/motor/List'));
const QuotationListPannel = React.lazy(() => import('./pages/reviewer/QuotationListPannel'));
const QuotationDetail = React.lazy(() => import('./pages/motor/View'));

function App() {
  const { isAuthenticated } = useAuth();
  const { user } = useUser();
  return (
    <div>
      <Navbar />
      <div className="flex justify-center pt-6 pb-16">
        <div className=" md:w-[75%] lg:md:w-[75%] xl:md:w-[75%] text-2xl">
          <BrowserRouter>
            <Routes>
              <Route path="/claims" element={
                <React.Suspense fallback={
                  <CustomLoarder />
                }>
                  {isAuthenticated ? user && !user.is_superuser ? <ClaimList />: <RevieverPannel /> : <Navigate to="/login" />}
                </React.Suspense>
              } />
              { user && !user.is_superuser ?
                <Route path="/claim/add" element={
                  <React.Suspense fallback={
                    <CustomLoarder />
                  }>
                    {isAuthenticated ? <ClaimCreation /> : <Navigate to="/login" />}
                  </React.Suspense>
                } />
              : null}

              {/* { user && !user.is_superuser ?
                <Route path="/" element={
                  <React.Suspense fallback={
                    <CustomLoarder />
                  }>
                  </React.Suspense>
                } />
                : null} */}
              { user ?

                <Route path="/" element={
                  <React.Suspense fallback={
                    <CustomLoarder />
                  }>
                    {isAuthenticated ? user && !user.is_superuser ? <QuotationList />: <QuotationListPannel /> : <Navigate to="/login" />}
                  </React.Suspense>
                } />
              : null}

              { user && user.is_superuser ?
                <Route path="/quotation/:id/detail" element={
                  <React.Suspense fallback={
                    <CustomLoarder />
                  }>
                    {isAuthenticated ? <QuotationDetail /> : <Navigate to="/login" />}
                  </React.Suspense>
                } />
              : null}
              
              { user && user.is_superuser ?
                <Route path="/claim/:id/review" element={
                  <React.Suspense fallback={
                    <CustomLoarder />
                  }>
                    {isAuthenticated ? <ClaimReview /> : <Navigate to="/login" />}
                  </React.Suspense>
                } />
              : null}

              <Route path="/claim/:id/view" element={
                <React.Suspense fallback={
                  <CustomLoarder />
                }>
                  {isAuthenticated ? <ClaimView /> : <Navigate to="/login" />}
                </React.Suspense>
              } />

              <Route path="/login" element={
                <React.Suspense fallback={
                  <CustomLoarder />
                }>
                  <Login />
                </React.Suspense>
              } />

              <Route path="/register" element={
                <React.Suspense fallback={
                  <CustomLoarder />
                }>
                  <Signup />
                </React.Suspense>
              } />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
