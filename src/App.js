import './App.css';
import { Button } from './components/Botton/Button';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { Skills } from './pages/Skills/Skills';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='skills' element={<Skills />} />
        </Route>
      </Routes>
      {/* <Button onClick={onToggleButton}>text</Button> */}
    </div>
  );
}

export default App;
