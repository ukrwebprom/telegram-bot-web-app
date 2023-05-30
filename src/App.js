import './App.css';
import { Button } from './components/Botton/Button';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { Skills } from './pages/Skills/Skills';
import { Contacts } from './pages/Contacts/Contacts';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
      {/* <Button onClick={onToggleButton}>text</Button> */}
    </div>
  );
}

export default App;
