import { IonAlert, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const Guests: React.FC = () => {

    const [guests, setGuests] = useState<string[]>(['Bob', 'Mary', 'Poppy', 'Tom', 'Jack']);
    const [newGuest, setNewGuest] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState<string | null>(null);

    const handleDelete = (guestName: string) => {
        setSelectedGuest(guestName); // Set the selected guest's name
        setShowAlert(true);         // Show the alert
    };

    const addGuest = () => {
        if (newGuest.trim() === '') return; // Avoid `empty names
        setGuests([...guests, newGuest]);  // Add the new guest to the list
        setNewGuest('');                   // Clear the input
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Guests</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <h2>People invited</h2>
                <IonGrid>
                    <IonRow>
                        <IonCol>Accepted</IonCol>
                        <IonCol >Name</IonCol>
                        <IonCol>Remove</IonCol>
                    </IonRow>
                </IonGrid>

                <IonList lines="none">
                    {guests.map((guest) => (
                        <IonItem key={guest}>
                            <IonCheckbox />
                            <IonLabel>{guest}</IonLabel>
                            <IonButton color="warning" onClick={() => handleDelete(guest)}>
                                Delete
                            </IonButton>
                        </IonItem>
                    ))}
                </IonList>

                <br />

                <IonItem>
                    <IonInput
                        placeholder="Enter new guest name"
                        value={newGuest}
                        onIonChange={(e) => setNewGuest(e.detail.value!)} // Update input value
                    />
                    <IonButton onClick={addGuest}>
                        Add New
                    </IonButton>
                </IonItem>

                <IonAlert
                    isOpen={showAlert}
                    header={`Are you sure you want to delete ${selectedGuest}?`}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('Delete canceled');
                            },
                        },
                        {
                            text: 'OK',
                            role: 'confirm',
                            handler: () => {
                                setGuests(guests.filter((guest) => guest !== selectedGuest)); // Remove guest
                                console.log(`Deleted: ${selectedGuest}`);
                            },
                        },
                    ]}
                    onDidDismiss={() => setShowAlert(false)} // Close alert when dismissed
                />
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink="/tabs/party">
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>


                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/tabs/venue">
                        <IonIcon icon={arrowForwardOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Guests;