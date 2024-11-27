import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './style.css';
import logo from '../assets/logo.png'




const Login: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='title'>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                            <div className='ion-text-center ion-padding'>
                                <img src={logo} alt='My Party Planner' width={'50%'}></img>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                            <IonCard>
                                <IonCardContent>
                                    <form>
                                        <IonInput fill="outline" label="Email" type="email" labelPlacement="floating"></IonInput>
                                        <IonInput className="ion-margin-top" fill="outline" label="Password" type="password" labelPlacement="floating"></IonInput>
                                    </form>
                                    <IonButton routerLink="/tabs/welcome" className="ion-margin-top" expand="full">Log In</IonButton>
                                    <p>Don't have an Account?</p>
                                    <IonButton routerLink="/register" className="ion-margin-top" expand="full">Sign Up</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>


            </IonContent>
        </IonPage>
    );
};

export default Login;