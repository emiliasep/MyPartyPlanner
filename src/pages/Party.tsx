import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackCircle, arrowBackOutline, arrowForwardCircle, arrowForwardOutline } from 'ionicons/icons';
import React from 'react';

const Party: React.FC = () => {

    return (
        <IonPage id="welcome-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton menu="menu1"/>
                    </IonButtons>
                    <IonTitle>My Party</IonTitle>
                </IonToolbar>
            </IonHeader>
                     <IonContent className="ion-padding">

                        <h2>Add details of your Party here:</h2>
                    
                <IonList>
                  
                    <IonItem>
                        <IonInput label="Party" labelPlacement="fixed" placeholder="Party Name"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Theme" labelPlacement="fixed"  placeholder="Party Theme"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Date" labelPlacement="fixed" type="date"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Time" labelPlacement="fixed" type="time"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Extra" labelPlacement="fixed" placeholder="More info about the party"></IonInput>
                    </IonItem>
                    
                </IonList>
            
                <IonButton expand="full">Save</IonButton>
                
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink="/tabs/invitation">
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>

                
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/tabs/guests">
                        <IonIcon icon={arrowForwardOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Party;