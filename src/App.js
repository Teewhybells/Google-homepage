import HeaderComponent from './components/header_component';
import SearchComponent from './components/search_field';
import FooterComponent from './components/footer_component';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
