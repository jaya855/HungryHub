const { MongoClient } = require('mongodb');
const uri = process.env.DBURL;
async function FoodData(req, res) {
    try {
       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db('FoodApp');
        const foodCollection = db.collection('foodData');
        const categoryCollection = db.collection('foodCategory');
        const foodData = await foodCollection.find({}).toArray();
        const categoryData = await categoryCollection.find({}).toArray();
        await client.close();
        return res.status(200).json({
            foodData: foodData,
            categoryData: categoryData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = FoodData;

