import React from "react";
import { Navigate } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
//import FullFeaturedCrudGrid from "./components/bills/billsdata";
import Bills from "./components/bills/bills";
import AddBill from "./components/bills/addBill";
import Vendors from "./components/vendors/vendors";
import AddVendor from "./components/vendors/addvendor";
import addInvoices from "./components/invoices/addInvoices";
import Invoices from "./components/invoices/invoices";
import payment from "./components/payment/payment";
import addstock from "./components/inventory/addstock";
import Inventory from "./components/inventory/inventory";
import Login from "./login";
import customerdata from "./components/services/customerdata";
import Customers from "./components/customers/customers";
import Addcustomer from "./components/customers/addcustomer";
import Home from "./components/dashboard2";
import App from "./components/photo";
import faq from "./components/faq";
import ImagePage from "./components/payment/payment";
import PaymentPage from "./components/payment/payment";
import qr from "./components/qr";
import QR from "./components/qr";
import phonepe from "./components/phonepe";
import phonepe2 from "./components/phonepe2";
import phonepe3 from "./components/phonepe3";
import ForgotPassword from "./components/components-overview/forgotpassword";
import googlepay from "./components/googlepay";
import googlepay2 from "./components/googlepay2";
import googlepay3 from "./components/googlepay3";
import card from "./components/card";
import card2 from "./components/card2";
import card3 from "./components/card3";
import randqr from "./components/qr";
import RandomQRCodeGenerator from "./components/qr";
import UserAccountDetails from "./components/user-profile-lite/UserAccountDetails";
//import Dashboard from "./components/dashboard/dashboard";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Navigate to="/login" />
  },
  {
    path: "/forgotpassword",
    layout: DefaultLayout,
    component: ForgotPassword 
  },
  {
    path:"/UserAccountDetails",
    layout:DefaultLayout,
    component: UserAccountDetails
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/dashboard2",
    layout: DefaultLayout,
    component: Home
  },
  {
    path:"/login",
    layout:DefaultLayout,
    component: Login
  },
  /*{
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },*/
  
  {
    path: ":id/editBill",
    layout: DefaultLayout,
    component: AddBill
  },
  {
    path: ":id/editvendor",
    layout: DefaultLayout,
    component: AddVendor
  },
  {
    path: ":id/editcustomer",
    layout: DefaultLayout,
    component: Addcustomer
  },
  {
    path: ":id/editstock",
    layout: DefaultLayout,
    component: addstock
  },
  {
    path: ":id/editInvoice",
    layout: DefaultLayout,
    component: addInvoices
  },
  {
    path: "/addvendor",
    layout: DefaultLayout,
    component: AddVendor
  },
  {
    path: "/addcustomer",
    layout: DefaultLayout,
    component:Addcustomer,
  },
  {
    path: "/addstock",
    layout: DefaultLayout,
    component: addstock
  },
  {
    path: "/addInvoices",
    layout: DefaultLayout,
    component: addInvoices
  },
  {
    path: "/addBill",
    layout: DefaultLayout,
    component: AddBill
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/bills",
    layout: DefaultLayout,
    component: Bills
  },
  {
    path: "/inventory",
    layout: DefaultLayout,
component: Inventory
  },
  {
    path: "/payment",
    layout: DefaultLayout,
    component: PaymentPage
  },
 
  /*{
    path: "/qr",
    layout: DefaultLayout,
    component: QR
  },*/
  {
    path: "/photo",
    layout: DefaultLayout,
    component: App
  },
  {
    path: "/phonepe",
    layout: DefaultLayout,
    component: phonepe
  },
  {
    path: "/phonepe2",
    layout: DefaultLayout,
    component: phonepe2
  },
  {
    path: "/phonepe3",
    layout: DefaultLayout,
    component: phonepe3 
  },
  {
    path: "/googlepay",
    layout: DefaultLayout,
    component: googlepay
  },
  {
    path: "/googlepay2",
    layout: DefaultLayout,
    component: googlepay2
  },
  {
    path: "/googlepay3",
    layout: DefaultLayout,
    component: googlepay3 
  },
  {
    path: "/card",
    layout: DefaultLayout,
    component: card
  },
  {
    path: "/card2",
    layout: DefaultLayout,
    component: card2
  },
  {
    path: "/card3",
    layout: DefaultLayout,
    component: card3 
  },
  {
    path: "/qr",
    layout: DefaultLayout,
    component: RandomQRCodeGenerator 
  },
  {
    path: "/faq",
    layout: DefaultLayout,
    component: faq
  },
  {
    path: "/vendors",
    layout: DefaultLayout,
    component: Vendors
  },
  {
    path: "/customers",
    layout: DefaultLayout,
    component: Customers
  },
  {
    path: "/invoices",
    layout: DefaultLayout,
    component: Invoices
  },
  {
    path: "/components-overview-login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];

