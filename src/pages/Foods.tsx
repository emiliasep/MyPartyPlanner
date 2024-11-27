import { IonAlert, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const Foods: React.FC = () => {

    const [foods, setFoods] = useState<string[]>(['Crisps', 'Soda', 'Chocolate', 'Popcorn', 'Prosecco']);
    const [newFood, setNewFood] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false);
    const [selectedFood, setSelectedFood] = useState<string | null>(null);

    const handleDelete = (FoodName: string) => {
        setSelectedFood(FoodName); // Set the selected guest's name
        setShowAlert(true);         // Show the alert
    };

    const addFood = () => {
        if (newFood.trim() === '') return; // Avoid `empty names
        setFoods([...foods, newFood]);  // Add the new guest to the list
        setNewFood('');                   // Clear the input
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton menu="menu1" />
                    </IonButtons>
                    <IonTitle>Foods and Drinks</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <h2>Add Food and Drinks here:</h2>

            <IonGrid>
                    <IonRow>
                        <IonCol>Bought</IonCol>
                        <IonCol >Item</IonCol>
                        <IonCol>Remove</IonCol>
                    </IonRow>
                </IonGrid>

                <IonList lines="none">
                    {foods.map((Food) => (
                        <IonItem key={Food}>
                            <IonCheckbox />
                            <IonLabel>{Food}</IonLabel>
                            <IonButton color="warning" onClick={() => handleDelete(Food)}>
                                Delete
                            </IonButton>
                        </IonItem>
                    ))}
                </IonList>

                <br />

                <IonItem>
                    <IonInput
                        placeholder="Enter new food item"
                        value={newFood}
                        onIonChange={(e) => setNewFood(e.detail.value!)} // Update input value
                    />
                    <IonButton onClick={addFood}>
                        Add New
                    </IonButton>
                </IonItem>

                <IonAlert
                    isOpen={showAlert}
                    header={`Are you sure you want to delete ${selectedFood}?`}
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
                                setFoods(foods.filter((food) => food !== selectedFood)); // Remove guest
                                console.log(`Deleted: ${selectedFood}`);
                            },
                        },
                    ]}
                    onDidDismiss={() => setShowAlert(false)} 
                />

                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink="/tabs/venue">
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>

                
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/tabs/invitation">
                        <IonIcon icon={arrowForwardOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Foods;