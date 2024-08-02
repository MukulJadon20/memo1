/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRouter from "./components/styles/auth/ProtectRouter";
//import { ImportExportOutlined } from "@mui/icons-material";
import { LayoutLoader } from "./components/layout/Loaders";


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(()=>import("./pages/admin/AdminLogin"));
const Dashboard =lazy(()=>import("./pages/admin/Dashboard"));
const UserManagement=lazy(()=>import("./pages/admin/UserManagement"));
const ChatManagement=lazy(()=>import("./pages/admin/ChatManagement"));
const MessageManagement =lazy(()=>import("./pages/admin/MessageMangement"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
      <Routes>
      <Route element={<ProtectRouter user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        <Route
          path="/login"
          element={
            <ProtectRouter user={user} redirect="/">
              <Login />
            </ProtectRouter>
          }
        />

<Route path="/admin" element={<AdminLogin/>}/>
<Route path="/admin/dashboard" element={<Dashboard/>}/>

<Route path="/admin/chats" element={<ChatManagement/>}/>
<Route path="/admin/users" element={<UserManagement/>}/>
<Route path="/admin/messages" element={<MessageManagement/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
