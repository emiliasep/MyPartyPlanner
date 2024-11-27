import { IonApp, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { chevronForwardOutline } from 'ionicons/icons';
import plan from "../assets/plan.png";
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
    return (
        <>
            {/* Menu specifically for the Welcome page */}
            <IonMenu contentId="welcome-content" menuId="menu1">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle autoHide>
                            <IonItem button routerLink="/tabs/Party">
                                <IonLabel>My Party</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/Guests">
                               <IonLabel>Guests</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/Venue">
                                <IonLabel>Venue</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/Foods">
                                <IonLabel>Foods</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/Invitation">
                                <IonLabel>Invitation</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>

            {/* Main content for the Welcome page */}
            <IonPage id="welcome-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton menu="menu1" />
                        </IonButtons>
                        <IonTitle>My Party Planner</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h2>Welcome to My Party Planner!</h2>
                    <IonGrid>
                        <IonRow class="ion-justify-content-center">
                            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                                <div className="ion-text-center ion-padding">
                                    <Link to="/tabs/party">
                                        <img src={plan} alt="Start planning your party" width="60%" />
                                    </Link>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Welcome;
