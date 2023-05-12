const getGeneralSettings  = async (db) => {
    try{
        const collection = db.collection('general_settings');
        const querySnapshot = await collection.limit(1).get();
        const documentSnapshot = querySnapshot.docs[0];
        
        const settings = documentSnapshot.data();
        return settings
    }catch (err){
        console.log(err)
    }
}

module.exports = { getGeneralSettings };