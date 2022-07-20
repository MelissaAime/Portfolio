import './Styles/Styles.scss';
import './App.css';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom'
import { useContext } from "react";
import { Navbar } from './Sections/Navbar/Navbar';
import { Loading } from './Components/Loading/Loading';
import { LanguageContext } from './Context/LanguageContext';
import { Contact } from './Sections/Contact/Contact';
import { MyProfile } from './Sections/MyProfile/MyProfile';
import { Skills } from './Sections/Skills/Skills';
import { Home } from './Sections/Home/Home';
import { Resume } from './Sections/Resume/Resume';
import { Proyects } from './Sections/Proyects/Proyects';

function App() {

  const { loading } = useContext(LanguageContext);

  return loading ? (
		<Loading/>
	) : (
    <BrowserRouter> 
        
        <Navbar/>

        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/profile' element={ <MyProfile/> } />
            <Route path='/resume' element={ <Resume/> } />
            <Route path='/proyects' element={ <Proyects/> } />
            <Route path='/skills' element={ <Skills/> } />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
          
    </BrowserRouter> 

  );
}

export default App;
