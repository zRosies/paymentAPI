const mongodb = require("../connection/db");
const { Resend } = require("resend");
const { ObjectId } = require("mongodb");
const html = require("../../");
const sendEmailMessage = require("./sendEmail");
// import EmailTemplate from "./emailMessage.jsx";

const deletePurchaseById = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db("Veloster")
      .collection("carRental")
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: "Purchase deleted" });
    } else {
      return res.status(404).json({ message: "Purchase not found" });
    }
  } catch (error) {
    console.log("Error querying the database:", error);
  }
};

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

  // try {

  console.log(req.body);
  // Adding purchase to the database
  //   const result = await mongodb
  //     .getDb()
  //     .db("Veloster")
  //     .collection("carRental")
  //     .insertOne(purchaseInfo);

  //   // Checking if the insertion in the db was successful
  //   if (result && result.insertedId) {
  //     // Sending an email to the owner confirming the purchase.
  //     const sendEmail = await sendEmailMessage(req, result.insertedId);

  //     if (sendEmail.error) {
  //       res.status(422).json({
  //         error: sendEmail.error,
  //         message: "Re-check your email format",
  //       });
  //     }
  //     res.status(201).json({
  //       message: `${result.insertedId} added to the database`,
  //       purchaseInfo: "Email confirmation sent!",
  //     });
  //   }
  // } catch (error) {
  //   console.log("Error querying the database:", error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
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

// Get the purchase information from the database
const getPurchaseById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  console.log(userId);
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

module.exports = {
  createPurchase,
  getUsers,
  getPurchaseById,
  deletePurchaseById,
};
