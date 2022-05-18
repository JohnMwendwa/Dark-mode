import './App.css';
import Navbar from './Navbar';
import PageContent from './PageContent';
import {LanguageProvider} from './contexts/LanguageContext'

function App() {
  return (
    <div className="App">
      {/* Wrap all components that are going to consume the context with the LanguageProvider */}
      <LanguageProvider>
        <PageContent>
          <Navbar />
        </PageContent>
    </LanguageProvider>
    </div>
  );
}

export default App;
