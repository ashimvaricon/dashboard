import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LazyLoad from "./LazyLoad";

const Login = () => (
  <LazyLoad importFunc={() => import("../pages/signin/login")} />
);

const MainLayout = () => (
  <LazyLoad importFunc={() => import("../layout/appLayout/appLayout")} />
);

const Dashboard = () => (
  <LazyLoad importFunc={() => import("../pages/dashboard/Dashboard")} />
);

const Products = () => (
  <LazyLoad importFunc={() => import("../pages/products/products")} />
);

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<MainLayout />}>
      <Route element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
