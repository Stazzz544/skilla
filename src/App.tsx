import Sidebar from './components/Sidebar/Sidebar';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
		 <div className="App__wrapper">
			 <div className="App__sidebar-wrapper">
				<Sidebar/>
			 </div>
			 <div className="App__header-and-content-wrapper">

			 </div>
		 </div>
    </div>
  );
}

export default App;
