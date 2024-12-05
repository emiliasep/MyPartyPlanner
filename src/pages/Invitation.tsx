import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { addCircle, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';

const Invitation: React.FC = () => {

    const [photo, setPhoto] = useState<string | null>(null); // State to store the photo URI
    const takePicture = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri,
            });
            setPhoto(image.webPath || null); // Save the photo URI
        } catch (error) {
            console.error('Error taking photo:', error);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Invitation</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    
                    <IonCardContent className="ion-text-center ion-padding">
                        <p>Add invitation from Photo library:</p>
                        <IonButton onClick={takePicture}>Add invitation</IonButton>
                        {photo && (
                            <div className="ion-margin-top">
                                <p>Invitation Preview:</p>
                                <img src={photo} alt="Captured" style={{ width: '60%' }} />
                            </div>
                        )}
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
