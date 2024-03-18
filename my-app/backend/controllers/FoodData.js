

// const FoodData = () => {
//  console.log("hii")
// }

//   module.exports=FoodData

const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = process.env.DBURL;

// Controller function to fetch data from MongoDB
async function FoodData(req, res) {
    try {
        // Create a new MongoClient
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collections
        const db = client.db('FoodApp');
        const foodCollection = db.collection('foodData');
        const categoryCollection = db.collection('foodCategory');

        // Fetch data from MongoDB collections
        const foodData = await foodCollection.find({}).toArray();
        const categoryData = await categoryCollection.find({}).toArray();

        // Close the connection to the MongoDB server
        await client.close();

        // Send the fetched data as a response
        return res.status(200).json({
            foodData: foodData,
            categoryData: categoryData
        });
    } catch (error) {
        // Handle any errors that occur during data fetching
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = FoodData;

