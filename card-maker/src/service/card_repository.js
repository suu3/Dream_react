import firebaseApp from './firebase';

class CardRepository {
    syncCards(userId, onUpdate){
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot =>{ //값이 변경될때마다 알고 싶다.
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    };
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;