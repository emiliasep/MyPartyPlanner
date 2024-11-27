import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const FAQ: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu="menu2"/>
                    </IonButtons>
                    <IonTitle>FAQ</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Frequently Asked Questions:</h2>
                <p>Will be added soon...</p>
            </IonContent>
        </IonPage>
    );
};

export default FAQ;