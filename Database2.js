const { MongoClient, ServerApiVersion} = require('mongodb');

const uri = "mongodb+srv://Shashwath:Karkera1@cluster0.lp3bzto.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// CRUD OPERATION IN MONGODB

async function addProfessor() {         // CREATE Function
  const database = client.db("College");
  const profCollection = database.collection("Professor");

  try {
    await profCollection.insertMany([
      {
        Name: "Pavan",
        USN: "4SF23IS092",
        Age: 40,
        Gender: "Male",
        Skills: "Java",
      },
      {
        Name: "John",
        USN: "4SF23IS093",
        Age: 35,
        Gender: "Male",
        Skills: "JavaScript",
      },
      {
        Name: "Sharath",
        USN: "4SF23IS094",
        Age: 30,
        Gender: "Female",
        Skills: "Python",
      },
    ]);
    console.log("Executed");
  } catch (error) {
    console.error("Error inserting professor:", error);
  }
}


async function addProfessorList() {         // READ Function
  const database = client.db("College");
  const profCollection = database.collection("Professor");

  try {
    const data = await profCollection.find({}).toArray();
    console.log("Professor List:", data);
  } catch (error) {
    console.error("Error fetching professors:", error);
  }
}

async function updateProfessor() {        // UPDATE Function
  const database = client.db("College");
  const profCollection = database.collection("Professor");

  try {
    const result = await profCollection.updateOne(
      { Name: "Pavan" },                             // Updayte by Name
      { $set: { Skills: "Python", salary: 600000 } }
    );
    console.log("Updated professor:", result);
  } catch (error) {
    console.error("Error updating professor:", error);
  }
}


async function deleteProfessor() {          // DELETE Function
  const database = client.db("College");
  const profCollection = database.collection("Professor");

  try {
    const result = await profCollection.deleteOne(
        { Name: "John" });                              // delete by Name
    console.log("Deleted professor:", result);
  } catch (error) {
    console.error("Error deleting professor:", error);
  }
}

async function run() {
  try {
    
    await client.connect();
    console.log("Connected to MongoDB!");

    await addProfessor();
    await addProfessorList();
    await updateProfessor();
    await deleteProfessor();

    await client.db("admin").command({ ping: 1 });
    console.log(" Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

run().catch(console.dir);
