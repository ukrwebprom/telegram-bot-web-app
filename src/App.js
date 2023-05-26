import './App.css';
import { Button } from './components/Botton/Button';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Button onClick={onToggleButton}>text</Button> */}
    </div>
  );
}

export default App;
