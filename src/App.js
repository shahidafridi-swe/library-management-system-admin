import { Route, Routes, useLocation } from "react-router-dom";
import AddBook from "./pages/AddItem/AddBook/AddBook";
import AddJournal from "./pages/AddItem/AddJournal/AddJournal";
import AddThesis from "./pages/AddItem/AddThesis/AddThesis";
import Dashboard from "./pages/Home/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Header from "./pages/Shared/Header";
import ViewBooks from "./pages/ViewItems/ViewBooks/ViewBooks";
import ViewThesis from "./pages/ViewItems/ViewTheses/ViewThesis";


function App() {
  const location = useLocation();
  const withoutNavbarLocation = '/login';

  return (
    <div className="bg-light" >
      {
        withoutNavbarLocation !== location.pathname && <Header/>
      }
     
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/addBook" element={<AddBook/>}></Route>
        <Route path="/addThesis" element={<AddThesis/>}></Route>
        <Route path="/addJournal" element={<AddJournal/>}></Route>
        <Route path="/viewBooks" element={<ViewBooks/>}></Route>
        <Route path="/viewTheses" element={<ViewThesis/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
