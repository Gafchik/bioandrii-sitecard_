import Contacts from './components/Contacts';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
      <Contacts />
    </HttpsRedirect>
  );
}

export default App;
