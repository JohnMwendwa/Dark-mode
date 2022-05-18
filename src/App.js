import './App.css';
import Navbar from './Navbar';
import PageContent from './PageContent';
import {LanguageProvider} from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      {/* Wrap all components that are going to consume the context with the LanguageProvider */}
        <LanguageProvider>
          <PageContent>
            <Navbar />
          </PageContent>
      </LanguageProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
