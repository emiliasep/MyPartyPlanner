import { IonCard, IonCardContent, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { addCircle, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import React from 'react';

const Invitation: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Invitation</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <IonCard>
                    <IonCardContent>
                        Add invitation here.
                    </IonCardContent>
                </IonCard>


                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink="/tabs/foods">
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>


                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/tabs/party">
                        <IonIcon icon={arrowForwardOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Invitation;