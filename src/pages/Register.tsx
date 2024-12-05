import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { registerUser as registerUserService } from '../firebaseConfig';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const history = useHistory();

    async function handleregister() {
        if (password !== cpassword) {
            return alert('Passwords do not match')
        }
        if (username.trim() === '' || password.trim() === '') {
            return alert('User name and password are required')
        }

        try {
            const res = await registerUserService(username, password);
            if (res) {
                alert('Registration successful!');
                history.push('/login');
            } else {
                alert('Registration failed. Please try again.');
            } } catch (error) {
                console.error(error);
                alert('An error occurred. Please try again.');
            }
        }

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
                                            <IonInput fill="outline" label="Email" type="email" labelPlacement="floating"
                                                onIonChange={(e: CustomEvent) => setUsername(e.detail.value)} />
                                            <IonInput className="ion-margin-top" fill="outline" label="Password" type="password" labelPlacement="floating"
                                                onIonChange={(e: CustomEvent) => setPassword(e.detail.value)} />
                                            <IonInput className="ion-margin-top" fill="outline" label="Repeat Password" type="password" labelPlacement="floating"
                                                onIonChange={(e: CustomEvent) => setCPassword(e.detail.value)} />
                                        </form>
                                        <IonButton className="ion-margin-top" expand="full" onClick={handleregister}>Sign Up</IonButton>
                                        <br />
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