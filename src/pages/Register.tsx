import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                            <IonCard>
                                <IonCardContent>
                                    <form>
                                        <IonInput fill="outline" label="Email" type="email" labelPlacement="floating"></IonInput>
                                        <IonInput className="ion-margin-top" fill="outline" label="Password" type="password" labelPlacement="floating"></IonInput>
                                        <IonInput className="ion-margin-top" fill="outline" label="Repeat Password" type="password" labelPlacement="floating"></IonInput>
                                    </form>
                                    <IonButton routerLink="/tabs/welcome" className="ion-margin-top" expand="full">Sign Up</IonButton>
                                    <p>Already have an Account?</p>
                                    <IonButton routerLink="/login" className="ion-margin-top" expand="full">Login</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default Register;