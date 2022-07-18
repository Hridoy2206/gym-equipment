import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './component/AddItem/AddItem';
import Login from './component/Login/Login';
import About from './component/page/About/About';
import AllItem from './component/page/AllItem/AllItem';
import Banner from './component/page/Banner/Banner';
import Home from './component/page/Home/Home';
import Item from './component/page/Item/Item';
import MyItem from './component/page/MyItem/MyItem';
import NavBer from './component/page/NavBer/NavBer';
import UploadPd from './component/page/UploadPd/UploadPd';
import SignUp from './component/SignUp/SignUp';
import RequireAuth from './RequireAuth';
import Footer from './Shared/Footer/Footer';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className="App">
      <NavBer></NavBer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Banner />} />
        <Route path='/uploadPd' element={
          <RequireAuth>
            <UploadPd />
          </RequireAuth>
        }></Route>
        <Route path='/item/:id' element={
          <RequireAuth>
            <Item />
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <AllItem />
          </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/addItem' element={<AddItem />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
