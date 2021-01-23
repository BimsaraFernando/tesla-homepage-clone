import './App.css';
import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';



function App() {
  return (

    

    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title='Lowest Cost Solar Panels in America'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='Model S'
          desc='Starting at $69,420'
          descLink=''
          backgroundImage={ModelS}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='Model3'
          desc='Starting at $69,420'
          descLink=''
          backgroundImage={Model3}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='ModelX'
          desc='Starting at $69,420'
          descLink=''
          backgroundImage={ModelX}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='ModelY'
          desc='Starting at $69,420'
          descLink=''
          backgroundImage={ModelY}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='SolarRoof'
          desc='Starting at $69,420'
          descLink=''
          backgroundImage={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
      </div>
    </div>
  );
}

export default App;
