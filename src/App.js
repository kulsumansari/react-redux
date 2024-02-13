import logo from './logo.svg';
import './App.css';
// import CounterFunction from './components/Counter/counterFunction';
// import ThemeFunction from './components/Themes/ThemeFunc';
//import Team  from "./components/Users/users";
// import  Login  from "./components/Login/login";
import Posts from './components/postsThunk';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
        {/* <CounterFunction />
        <ThemeFunction /> */}
        {/* <Theme /> */}
        <Posts />
      </header>
    </div>
  );
}

export default App;
