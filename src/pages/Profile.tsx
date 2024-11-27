import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu="menu2"/>
                    </IonButtons>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                <h2>Update your details</h2>

                <IonList>

                    <IonItem>
                        <IonInput label="Name" labelPlacement="fixed"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Email" labelPlacement="fixed"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Phone" labelPlacement="fixed" type="tel"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Age" labelPlacement="fixed" type="email"></IonInput>
                    </IonItem>

                </IonList>

                <IonButton expand="full">Save</IonButton>
                <br />
                <IonButton routerLink="/home" color="warning" expand="full">Log Out</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Profile;