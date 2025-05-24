
import { useState } from 'react';
import './App.css';
import BuildingHome from './Components/BuildingHome';
import NavBar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';

function App() {

  const [currentTab, setCurrentTab] = useState("Home");

  const getSelectedTab = (tabName: string) => {
    console.log(tabName);
    setCurrentTab(tabName);
  }

  return (
    <div className="App bg-[#222831] h-[100vh] w-full rounded-lg shadow-md">

      {/* NAVBAR */}
      <NavBar />


      {/* MAIN  */}

      <div className=' flex flex-row h-[92vh] w-full'>
        {/* SIDEBAR  */}
        <div className='w-[20%] border-r border-gray-500 h-full'>
          <Sidebar getSelectedTab={getSelectedTab} />
        </div>

        <div className='w-[80%] h-full'>
          {/* CONTENT  */}
          {currentTab === 'Home' &&
            <Home />
          }

          {currentTab === 'Orders' &&
            <Home />
          }

          {currentTab === 'Settings' &&
            <Home />
          }
        </div>

      </div>
      {/* <div className=' w-[80%] mx-auto h-full'>
      <BuildingHome />
      </div> */}


      {/* FOOTER  */}

    </div>
  );
}

export default App;
