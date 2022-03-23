import { Route, Routes } from "react-router-dom";
import Home from "../components/Loyaut/HomeLoyaut/Home";
import StartLoyaut from "../components/Loyaut/StartLoyaut/StartLoyaut";
import ChangePassword from "../components/page/ChangePassword/ChangePassword";
import Customers from "../components/page/Customers/Customers";
import Users from "../components/page/Customers/Options/Users";
import Dashboard from "../components/page/Dashboard/Dashboard";
// import AddNewInvoicers from "../components/page/Documents/AddNewInvoicers/AddNewInvoicers";
import Documents from "../components/page/Documents/Documents";
import Drafts from "../components/page/Documents/Drafts/Drafts";
import Invoices from "../components/page/Documents/Invoices/Invoices";
import Templates from "../components/page/Documents/Templates/Templates";
import HelpContacts from "../components/page/HelpContacts/HelpContacts";
import Reports from "../components/page/Reports/Reports";
import Settings from "../components/page/Settings/Settings";
import SignIn from "../components/page/SignIn/SignIn";
import SignUp from "../components/page/SignUp/SignUp";
import PostDetail from './../modules/posts/PostDetail/PostDetail';

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<StartLoyaut/>}>
                <Route index element={<SignIn/>}/>
                <Route path='sign_up' element={<SignUp/>}/>
                <Route path='change_password' element={<ChangePassword/>}/>
                <Route path='home' element={<Home/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="reports" element={<Reports/>}/>
                    <Route path="reports/:id" element={<PostDetail/>}/>
                    <Route path="documents" element={<Documents/>}>
                        <Route path="invoices" element={<Invoices/>}/>
                        <Route path="drafts" element={<Drafts/>}/>
                        <Route path="templates" element={<Templates/>}/>
                    </Route>
                    <Route path="customers" element={<Customers/>}>
                        <Route path="users" element={<Users/>}/>
                    </Route>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="helpcontact" element={<HelpContacts/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default RouterApp