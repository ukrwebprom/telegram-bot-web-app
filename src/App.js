import './App.css';
import { Button } from './components/Botton/Button';
import { useTelegram } from './hooks/useTelegram';
function App() {
  const {onToggleButton, tg} = useTelegram();
  tg.MainButton.show();
  return (
    <div className="App">
      work
      <Button onClick={onToggleButton}>text</Button>
    </div>
  );
}

export default App;
