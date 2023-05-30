const moment = require('moment');// require

const getExpensesInMonths = async (db, userId, number) => {
    try {
        const monthsAgo = moment().subtract(number, 'months').startOf('month').toDate();
        const formattedDate = monthsAgo.toLocaleDateString();
        const collection = db.collection('transactions');

        const querySnapshot = await collection.where('createdAt', '>=', formattedDate)
            .where('users', 'array-contains-any', [userId])
            .where('transactionStatus', '==', 'Success')
            .get();

        const expenses = querySnapshot.docs.map((doc) => doc.data())

        return expenses
    } catch (error) {
        console.error('Error retrieving expenses:', error);
        throw new Error(error.message); // Throw custom error message
    }
}


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

const CreateSettlementDetails = async (db, bankCode, bankName, accountNumber, accountName, userId) => {
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
        throw new Error(err.message); // Throw custom error message 
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


 // For users to call
const getSubscriptionsForUser = async (db, userId) => {
    try {
        const subscriptionsCollection = db.collection('subscriptions');
        const querySnapshot = await subscriptionsCollection.where('userId', '==', userId).where('status', '==', true).get()
        const subscriptions = querySnapshot.docs.map((doc) => doc.data())

        return {status: true, message: "Subscriptions returned", data: subscriptions }
    }catch (error) {
        console.error('Error retrieving subscriptions:', error);
        throw new Error('Failed to retrieve subscriptions'); // Throw custom error message
    }
}


// Add a subscriber to a merchant in the subscribers collection
const subscribeToMerchant = async (db, merchantId, userId) => {
    try{
        const subscribersCollection = db.collection('subscribers');
        const merchantDoc = subscribersCollection.doc(merchantId);
        
        // Check if the user is already a subscriber
        const docSnapshot = await merchantDoc.get();

        if (docSnapshot.exists && docSnapshot.data()[userId] === true) {
            return { status: true, message: "Already a subscriber"};
        } else {
            await merchantDoc.set({[userId]: true},{ merge: true });

            // Add to the subscriptions collection
            // Check if the subscription already exists in the subscriptions collection
            const subscriptionsCollection = db.collection('subscriptions');
            const querySnapshot = await subscriptionsCollection
            .where('userId', '==', userId)
            .where('merchantId', '==', merchantId)
            .limit(1)
            .get();

            if (querySnapshot.empty) {
                // Subscription does not exist, add it to the subscriptions collection
                await subscriptionsCollection.add({
                    userId: userId,
                    merchantId: merchantId,
                    status: true
                });
        
                console.log('Subscriber added successfully.');
                return { status: true, message: "Subscribed successfully" };
            } else {
                const subscriptionDoc = querySnapshot.docs[0];
                const subscriptionData = subscriptionDoc.data();
        
                if (!subscriptionData.status) {
                    // Subscription exists but the status is not true, update the status to true
                    await subscriptionDoc.ref.update({ status: true });
        
                    console.log('Subscriber added successfully.');
                    return { status: true, message: "Subscribed successfully" };
                }
                return { status: true, message: "Subscribed successfully"};
            }      
        }
    } catch (error) {
        console.error('Error subscribing to merchant:', error);
        throw new Error('Failed to subscribe'); // Throw custom error message
    }
  };

  const unSubscribeToMerchant = async (db, merchantId, userId) => {
    try{
        const subscribersCollection = db.collection('subscribers');
        const merchantDoc = subscribersCollection.doc(merchantId);
        
        // Check if the user is already a subscriber
        const docSnapshot = await merchantDoc.get();

        if (docSnapshot.exists && docSnapshot.data()[userId] === true) {
            await merchantDoc.set({[userId]: false},{ merge: true });

            const subscriptionsCollection = db.collection('subscriptions');
            const querySnapshot = await subscriptionsCollection
            .where('userId', '==', userId)
            .where('merchantId', '==', merchantId)
            .limit(1)
            .get();

            const subscriptionDoc = querySnapshot.docs[0];
            await subscriptionDoc.ref.update({ status: false });

            return { status: true, message: "User unsubscribed successfully."};
        } else {
            // User is not subscribed
            return { status: false, message: "'User is not subscribed to this merchant"};
        }
    } catch (error) {
        console.error('Error unsubscribing:', error);
        throw new Error('Failed to unsubscribe'); // Throw custom error message
    }
  };


  // For merchants to call
  const getSubscribedUsers = async (db, merchantId) => {
    try {
      const subscribersCollection = db.collection('subscribers');
      const merchantDoc = subscribersCollection.doc(merchantId);
  
      const docSnapshot = await merchantDoc.get();
  
      if (docSnapshot.exists) {
        const subscribers = docSnapshot.data();
        const subscribedUsers = Object.keys(subscribers).filter((userId) => subscribers[userId] === true);
  
        console.log('Subscribed users:', subscribedUsers);
        return { status: true, message: "Subscribed users.", data: subscribedUsers};
      } else {
        console.log('Merchant document does not exist.');
        return { status: true, message: "Subscribed users.", data: []};
      }
    } catch (error) {
        console.error('Error retrieving subscribers:', error);
        throw new Error('Failed to retrieve subscribers'); // 
    }
  };
  

module.exports = { getGeneralSettings, 
    CreateDeliveryDetails, 
    GetDeliveryDetailsForUser, 
    GetSettlementDetailsForUser, 
    CreateSettlementDetails, 
    getExpensesInMonths, 
    subscribeToMerchant,
    getSubscriptionsForUser,
    unSubscribeToMerchant,
    getSubscribedUsers
 };