import { IonApp, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';

const Settings: React.FC = () => {
    return (
        <>
            
            <IonMenu contentId="settings_menu" menuId="menu2">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle autoHide menu="menu2">
                            <IonItem button routerLink="/tabs/settings">
                                <IonLabel>Settings</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/Profile">
                                <IonLabel>My Profile</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/About">
                               <IonLabel>About</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/FAQ">
                                <IonLabel>FAQ</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/tabs/Contact">
                               <IonLabel>Contact Us</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>

          
            <IonPage id="settings_menu">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton menu="menu2" />
                        </IonButtons>
                        <IonTitle>Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h2>Notifications</h2>
                    <IonList>
                        <IonItem>
                            <IonToggle>Receive Push Notifications</IonToggle>
                        </IonItem>
                        <IonItem>
                            <IonToggle>Receive Email Reminders</IonToggle>
                        </IonItem>
                        <IonItem>
                            <IonToggle>Receive Text Message Reminders</IonToggle>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Settings;
