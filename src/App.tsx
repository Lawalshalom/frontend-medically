import logo from './images/logo.svg';

const App: React.FC = () => (
  <div className="coming-soon">
    <img alt="" src={logo} />
    <div>
      COMING <span className="faded">SOON</span>{' '}
    </div>
  </div>
);

export default App;
