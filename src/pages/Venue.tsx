import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import React from 'react';

const Venue: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Venue</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <h2>Add details of the Venue</h2>
                
                <IonList>
                  
                    <IonItem>
                        <IonInput label="Name" labelPlacement="fixed"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Address" labelPlacement="fixed"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Phone" labelPlacement="fixed" type="tel"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Email" labelPlacement="fixed" type="email"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Other info" labelPlacement="fixed" placeholder="More info about the Venue"></IonInput>
                    </IonItem>
                    
                </IonList>
                <IonButton expand="full">Save</IonButton>

                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink="/tabs/guests">
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>

                
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/tabs/foods">
                        <IonIcon icon={arrowForwardOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Venue;