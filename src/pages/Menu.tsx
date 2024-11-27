import { IonApp, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { chevronForwardOutline } from 'ionicons/icons';
import { Route } from 'react-router';
import Party from './Party';
import Guests from './Guests';
import Venue from './Venue';

const Menu: React.FC = () => {

    const paths = [
        { name: 'My Party', url: '/tab/party', icon: chevronForwardOutline },
        { name: 'Guests', url: '/tab/guests', icon: chevronForwardOutline },
        { name: 'Venue', url: '/tab/venue', icon: chevronForwardOutline },
        { name: 'Foods', url: '/tab/party', icon: chevronForwardOutline },
        { name: 'Invitation', url: '/tab/party', icon: chevronForwardOutline },
    ]

    return (
        <IonPage>
        <IonSplitPane contentId='main'>
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    {paths.map((item, index) => (


                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                {item.name}
                            </IonItem>

                        </IonMenuToggle>

                    ))}

                </IonContent>
            </IonMenu>

            <IonRouterOutlet id="main">
                <Route exact path="/tab/party" component={Party} />
                <Route exact path="/tab/guests" component={Guests} />
                <Route exact path="/tab/venue" component={Venue} />
                <Route exact path="/tab/party" component={Party} />
         

            </IonRouterOutlet>

        </IonSplitPane>
        </IonPage>
    );
};

export default Menu;