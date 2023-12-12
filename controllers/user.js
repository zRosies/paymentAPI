const mongodb = require("../connection/db");
const { ObjectId } = require("mongodb");

const createPurchase = async (req, res) => {
  const purchaseInfo = {
    client: {
      name: req.body.client.name,
      phone: req.body.client.phone,
      email: req.body.client.email,
      address: req.body.client.address,
    },
    paymentInfo: {
      quantity: req.body.paymentInfo.quantity,
      delivery: req.body.paymentInfo.delivery,
      date: req.body.paymentInfo.date,
      fee: req.body.paymentInfo.fee,
      price: req.body.paymentInfo.price,
      carsName: req.body.paymentInfo.carsName,
      method: req.body.paymentInfo.method,
    },
  };

  try {
    const result = await mongodb
      .getDb()
      .db("Veloster")
      .collection("carRental")
      .insertOne(purchaseInfo);

    if (result && result.insertedId) {
      res
        .status(201)
        .json({ message: `${result.insertedId} added to the database` });
    } else {
      res
        .status(400)
        .json({ message: "No data found or error during insertion" });
    }
  } catch (error) {
    console.log("Error querying the database:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db("Veloster")
    .collection("carRental")
    .find()
    .toArray();

  if (result.length !== 0) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } else {
    res.status(400).json("Not found");
  }
};

const getPurchaseById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // console.log(userId)
  const result = await mongodb
    .getDb()
    .db("Veloster")
    .collection("carRental")
    .findOne({ _id: userId });

  try {
    if (result.length === 0) {
      res.status(404).json({ message: "No data found" });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result);
    }
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createPurchase, getUsers, getPurchaseById };
