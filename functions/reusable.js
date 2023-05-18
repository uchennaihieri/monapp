const getGeneralSettings = async (db) => {
    try {
        const collection = db.collection('general_settings');
        const querySnapshot = await collection.limit(1).get();
        const documentSnapshot = querySnapshot.docs[0];

        const settings = documentSnapshot.data();
        return settings
    } catch (err) {
        console.log(err)
    }
}


const CreateDeliveryDetails = async (db, address, contact, email, userId) => {
    try {
        const document = await db.collection('delivery_details').add({
            createdAt: new Date().toLocaleDateString(),
            address: address,
            contact: contact,
            email: email,
            userId: userId,
        });
        return document;
    } catch (err) {
        console.log(err)
    }
}


const GetDeliveryDetailsForUser = async (db, userId) => {
    try {
        const collection = db.collection('delivery_details')
        const querySnapshot = await collection.where('userId', '==', userId).limit(1).get()

        const documentSnapshot = querySnapshot.docs[0];

        const details = documentSnapshot.data();

        return details
    } catch (error) {
        console.error('Error retrieving delivery details:', error);
        throw new Error('Failed to retrieve delivery details'); // Throw custom error message
    }
};

const CreateSettlementDetails = async (db, bankCode, accountNumber, accountName, userId) => {
    try {
        const document = await db.collection('settlement_details').add({
            createdAt: new Date().toLocaleDateString(),
            bankCode,
            bankName,
            accountNumber,
            accountName,
            userId: userId,
        });
        return document;
    } catch (err) {
        console.log(err)
    }
}
const GetSettlementDetailsForUser = async (db, userId) => {
    try {
        const collection = db.collection('settlement_details')
        const querySnapshot = await collection.where('userId', '==', userId).limit(1).get()

        const documentSnapshot = querySnapshot.docs[0];

        const details = documentSnapshot.data();

        return details
    } catch (error) {
        console.error('Error retrieving settlement details:', error);
        throw new Error('Failed to retrieve settlement details'); // Throw custom error message
    }
};

module.exports = { getGeneralSettings, CreateDeliveryDetails, GetDeliveryDetailsForUser, GetSettlementDetailsForUser, CreateSettlementDetails };