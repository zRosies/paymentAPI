const mongodb = require("../connection/db");
// const {EmailTemplate} = require("./confirmationMessage");
const { Resend } = require("resend");
const { ObjectId } = require("mongodb");

// Demonstrating throwing and handling exceptions using try/catch blocks.

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

  try {
    // Adding purchase to the database
    const result = await mongodb
      .getDb()
      .db("Veloster")
      .collection("carRental")
      .insertOne(purchaseInfo);

    // Checking if the insertion in the db was successful
    if (result && result.insertedId) {
      const resend = new Resend(process.env.RESEND_APIKEY);

      // Sending an email to the owner confirming the purchase.
      const { data, error } = await resend.emails.send({
        from: `${process.env.RESEND_API_DOMAIN}`,
        to: `${process.env.MY_EMAIL}`,
        subject: "Purchase confirmation",
        text: "Purchase confirmed successfully",
        // react:
        // html: `<strong>Purchase Confirmed Successfuly!</strong>
        //       <p  style={{ background: "#eb4034" }}>------------------------------------------------</p>
        //       <p>Model: ${req.body.paymentInfo.carsName}</p>
        //       <p>Price: ${req.body.paymentInfo.price}</p>
        //       <p>Quantity: ${req.body.paymentInfo.quantity}</p>
        //       <p>Delivery: ${req.body.paymentInfo.fee}</p>
        //       <p>Fee:${req.body.paymentInfo.fee} </p>
        //       <p>Payment Method: ${req.body.paymentInfo.method} </p>
        //       <p>------------------------------------------------</p>
        //       <h1>Customer Information</h1>
        //       <p>Name: ${req.body.client.name}</p>
        //       <p>Phone: ${req.body.client.phone}</p>
        //       <p>Email: ${req.body.client.email}</p>
        //       <p>Address: ${req.body.client.addres}</p>
        //  `,
      });

      if (error) {
        res.status(500).json({ message: "Internal server error" });
      }
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
