import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Contact: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu="menu2"/>
                    </IonButtons>
                    <IonTitle>Contact Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Still need help?</h2>
                <h2>Contact us: </h2>
                <p>Phone:</p>
                <p>012 345 678 90</p>
                <br />
                <p>Email:</p>
                <p>info@party.planner.my</p>
            </IonContent>
        </IonPage>
    );
};

export default Contact;