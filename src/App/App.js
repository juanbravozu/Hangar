import React from 'react';
import '../main.css';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery'
import { HashRouter, Route } from 'react-router-dom';
import Creator from '../Creator/Creator';

function App() {

  const [ shipList, setShipList ] = React.useState([]);
  const [ id, setId ] = React.useState('');
  const [ shape, setShape ] = React.useState(1);
  const [ primaryColor, setPrimaryColor ] = React.useState('#FFFFFF');
  const [ secondaryColor, setSecondaryColor ] = React.useState('#EB144C');
  const [ fireColor, setFireColor ] = React.useState('#FCB900');
  const [ fireActivated, setFireActivated ] = React.useState(false);
  const [ name, setName ] = React.useState('');
  const [ background, setBackground ] = React.useState(1);

  React.useEffect(() => {
    if(localStorage.getItem('shipList')) { 
      const stringList = localStorage.getItem('shipList');
      setShipList(JSON.parse(stringList));
    }    
  }, []);

  React.useEffect(() => {
    localStorage.setItem('shipList', JSON.stringify(shipList));
    console.log(localStorage.getItem('shipList'));
  }, [ shipList ]);

  function handleFinish() {
    console.log(shipList);
    setShipList([
      ...shipList,
      {
        id: id,
        shape: shape,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        fireActivated: fireActivated,
        fireColor: fireColor,
        name: name,
        background: background,
      }
    ]);

    setShape(1);
    setPrimaryColor('#FFFFFF');
    setSecondaryColor('#EB144C');
    setFireColor('#FCB900');
    setFireActivated(false);
    setName('');
    setBackground(1);
  }
 
  return (
    <div className="App">
      <HashRouter> 

        <Route path="/creacion" render={(props) => 
        <Creator shape={shape} setShape={setShape}
        primaryColor={primaryColor} setPrimaryColor={setPrimaryColor}
        secondaryColor={secondaryColor} setSecondaryColor={setSecondaryColor}
        fireColor={fireColor} setFireColor={setFireColor}
        fireActivated={fireActivated} setFireActivated={setFireActivated}
        name={name} setName={setName}
        background={background} setBackground={setBackground}
        location={props.location}
        setId={setId}
        handleFinish={handleFinish}/>}/>

        <Route path="/galeria" component={Gallery}/>

        <Route path="/" exact component={Home}/>
      </HashRouter>
    </div>
  );
}

export default App;
