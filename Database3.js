const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://Shashwath:Karkera1@cluster0.lp3bzto.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(express.json());

let profCollection; 

async function connectDB() {        // CONNECT TO DATABASE
  try {
    await client.connect();
    const database = client.db("College");
    profCollection = database.collection("Professor");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// --------------------------- CREATE ---------------------------
app.post("/professors", async (req, res) => {
  try {
    const professor = req.body;
    const result = await profCollection.insertOne(professor);
    res.send({ message: "Professor added successfully!", result });
  } catch (error) {
    console.error("Error inserting professor:", error);
  }
});

// --------------------------- READ ---------------------------
app.get("/professors", async (req, res) => {
  try {
    const data = await profCollection.find({}).toArray();
    res.send(data);
  } catch (error) {
    console.error("Error fetching professors:", error);
  }
});

// --------------------------- UPDATE ---------------------------
app.put("/professors/:name", async (req, res) => {
  const name = req.params.name;
  const updateData = req.body;

  try {
    const result = await profCollection.updateOne(
      { Name: name },                     // Update by Name
      { $set: updateData }
    );

    if (result.matchedCount === 0)
      return res.send({ message: "Professor not found" });

    res.send({ message: "Professor updated successfully", result });
  } catch (error) {
    console.error("Error updating professor:", error);
  }
});

// --------------------------- DELETE ---------------------------
app.delete("/professors/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const result = await profCollection.deleteOne(
        { Name: name });                           // Delete by Name

    if (result.deletedCount === 0)
      return res.send({ message: "Professor not found" });

    res.send({ message: "Professor deleted successfully", result });
  } catch (error) {
    console.error("Error deleting professor:", error);
  }
});

// --------------------------- SERVER ---------------------------
app.listen(3000, async () => {
  await connectDB();
  console.log("Server running on http://localhost:3000");
});
