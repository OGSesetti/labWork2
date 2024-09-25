import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const Service: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                18 | P a g e Hands-on Labwork-2
                <IonToolbar>
                    <IonTitle>Service</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">TabService</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};
export default Service;
