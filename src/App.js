import './Styles/Styles.scss';
import './App.css';
import { useContext } from "react";
import { Navbar } from './Sections/Navbar/Navbar';
import { Loading } from './Components/Loading/Loading';
import { LanguageContext } from './Context/LanguageContext';
import { Contact } from './Sections/Contact/Contact';
import { MyProfile } from './Sections/MyProfile/MyProfile';

function App() {

  const { loading } = useContext(LanguageContext);

  return loading ? (
		<Loading/>
	) : (
    <div className="App">
      <Navbar/>
      <div className='preback'>
        <MyProfile/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
