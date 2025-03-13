import Certificates from './Components/Certificates';
import Header from './Components/Header';
import Left from './Components/Left';
import MyProjects from './Components/MyProjects';
import Skills from './Components/Skills';
import './styles.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <div className="body">

          <Left />

          <div className="body-right">

            <MyProjects />
            <Skills />
            <Certificates />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
