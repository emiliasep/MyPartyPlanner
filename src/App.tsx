import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home'
import './theme/variables.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Menu from './pages/Menu';
import Party from './pages/Party';
import Settings from './pages/Settings';
import Tabs from './pages/Tabs';
import Guests from './pages/Guests';
import Venue from './pages/Venue';
import Foods from './pages/Foods';
import Invitation from './pages/Invitation';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/welcome" component={Welcome} />
        <Route path="/menu" component={Menu} />
        <Route path="/party" component={Party} />
        <Route path="/guests" component={Guests} />
        <Route path="/venue" component={Venue} />
        <Route path="/foods" component={Foods} exact />
        <Route path="/invitation" component={Invitation} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/tabs" component={Tabs} exact />

        <Route path="/tabs" render={() => <Tabs />} />
      

       
        <Redirect exact from="/" to="/home" />

        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
