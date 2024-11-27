import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const About: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu="menu2"/>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>What is My Party Planner?</h2>
                <p>My Party Planner is an application designed to make your party planning easier.</p>
                <p>Whether it is a birthday, a wedding or a cat’s christening party, My Party Planner helps you keep all the information of your party in one place.</p>
                <p>My Party Planner was created by a tired mom who lost track on how many different apps and lists she was using when planning her child’s birthday.</p>
            </IonContent>
        </IonPage>
    );
};

export default About;