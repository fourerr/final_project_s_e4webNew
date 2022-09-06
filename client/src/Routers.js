import React from "react";
import { Routes, Route } from "react-router-dom";

import Context from './Context';
import Auth from './pages/Auth';
import Layout from './Layout';

import Chat from "./pages/Chat";
import Documents from "./pages/user/Documents";
import ConvertMoney from "./pages/user/ConvertMoney";
import CreditCards from "./pages/user/CreditCards";
import Details from "./pages/user/details/Details";
import Home from "./pages/user/Home";
import LoanRequest from "./pages/user/LoanRequest";
import Password from "./pages/user/Password";
import RequestsStatus from "./pages/user/RequestsStatus";
import Savings from "./pages/user/Savings";
import Current from "./pages/user/Current";
import TransferMoney from "./pages/user/TransferMoney";


import UsersTable from './pages/admin/UsersTable';
import MoneyTable from './pages/admin/MoneyTable';
import AddUser from './pages/admin/AddUser';
import ConfirmDocuments from "./pages/admin/ConfirmDocuments";
import ConfirmLoan from "./pages/admin/ConfirmLoan";
import AdminChat from "./pages/Chat/AdminChat";









function Routers(){
    const {isAuth,isManager} = React.useContext(Context);
    return(
        <Routes>
            {!isAuth && <Route index element={<Auth />} />}
            {isAuth && <Route path='/' element={<Layout />}>
              <Route index element={<>Home</>} />
              <Route path='/chat' element={<Chat/>} />
              <Route path='/creditcards' element={<MoneyTable/> } />

              {///////////////////
              /* Users Rauting */
              ////////////////////
              }
               <Route path='/documents' element={<Documents />} />
               <Route path='/convertmoney' element={<ConvertMoney />} />
               <Route path='/creditcards' element={<CreditCards />} />
               <Route path='/details' element={<Details />} />
               <Route path='/userhome' element={<Home />} />
               <Route path='/loanrequest' element={<LoanRequest />} />
               <Route path='/password' element={<Password />} />
               <Route path='/requeststatus' element={<RequestsStatus />} />
               <Route path='/savings' element={<Savings />} />
               <Route path='/current' element={<Current />} />
               <Route path='/transfer' element={<TransferMoney />} />
              

              {///////////////////
              /* Manager Rauting */
              ////////////////////
              }
              {isManager && <Route path='/confirmloan' element={<ConfirmLoan/>} />}
              {isManager && <Route path='/confirmdocuments' element={<ConfirmDocuments/>} />}
              {isManager && <Route path='/users' element={<UsersTable/>} />}
              {isManager && <Route path='/add-user' element={<AddUser />} />}
              {isManager && <Route path='/adminchat' element={<AdminChat />} />}



  


              <Route path='/page3' element={<div><h1>page3</h1></div>} />
            </Route>}
          </Routes>
    )
} 
export default Routers;