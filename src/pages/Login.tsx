import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './style.css';
import logo from '../assets/logo.png';
import { loginUser } from '../firebaseConfig';
import { useHistory } from 'react-router';




const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    async function login() {
        const res = await loginUser(username, password);
        if(!res) {
          alert('Error logging in with your credentials')
        } else {
          history.push('/tabs/welcome');
        }
    }

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
                                        <IonInput fill="outline" label="Username" labelPlacement="floating" 
                                        onIonChange={(e: any) => setUsername(e.detail.value)}/>
                                        <IonInput className="ion-margin-top" fill="outline" label="Password" type="password" 
                                        labelPlacement="floating" onIonChange={(e: any) => setPassword(e.detail.value)}/>
                                    </form>
                                    <IonButton className="ion-margin-top" expand="full" onClick={login}>Log In</IonButton>
                                    <br />
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