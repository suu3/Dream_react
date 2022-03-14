import { getDatabase, ref, onValue, set, remove} from "firebase/database";

class CardRepository {
    syncCards(userId, onUpdate){
        const database = getDatabase();
        const syncRef = ref(database, `${userId}/cards`);
        onValue(syncRef, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => syncRef.off();
    };
    saveCard(userId, card) {
        const database = getDatabase();
        set(ref(database, `${userId}/cards/${card.id}`), {
            ...card,
        });
    }
    removeCard(userId, card){
        const database = getDatabase();
        remove(ref(database, `${userId}/cards/${card.id}`));
    }
}

export default CardRepository;