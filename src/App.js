import Mainmenu from './components/routes/menu/Main-menu';
import Navbar from './components/routes/navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Signin from './routes/signin/Sign-in';
const App = () => {

  const Shop = () => {
    return <h1>I am super saiyen</h1>
  }

  return (
    <Routes>
      <Route path='/'element={<Navbar />}>
      <Route index element={<Mainmenu />}/>
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
