import { Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { homeOutline, settingsOutline, starOutline } from 'ionicons/icons';
import Welcome from './Welcome';
import Party from './Party';
import Settings from './Settings';
import Guests from './Guests';
import Venue from './Venue';
import Foods from './Foods';
import Invitation from './Invitation';
import Profile from './Profile';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>

      <Route exact path="/tabs/welcome">
        <Welcome />
      </Route>
      <Route exact path="/tabs/party">
        <Party />
      </Route>
      <Route path="/tabs/settings">
        <Settings />
      </Route>

      
      <Route path="/tabs/guests">
        <Guests />
      </Route>
      <Route path="/tabs/venue">
        <Venue />
      </Route>
      <Route path="/tabs/foods">
        <Foods />
      </Route>
      <Route path="/tabs/invitation">
        <Invitation />
      </Route>


      <Route path="/tabs/profile">
        <Profile />
      </Route>
      <Route path="/tabs/about">
        <About />
      </Route>
      <Route path="/tabs/faq">
        <FAQ />
      </Route>
      <Route path="/tabs/contact">
        <Contact />
      </Route>

    
      

    </IonRouterOutlet>
    <IonTabBar slot="bottom" className='bottom'>
      <IonTabButton tab="Welcome" href="/tabs/welcome">
        <IonIcon icon={homeOutline} />
        <IonLabel className="custom-label">Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Party" href="/tabs/party">
        <IonIcon icon={starOutline} />
        <IonLabel className="custom-label">Party</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Settings" href="/tabs/settings">
        <IonIcon icon={settingsOutline} />
        <IonLabel className="custom-label">Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;