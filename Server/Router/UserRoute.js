import express from "express";
import conn_query from "../db.js";
const Router = express.Router();
import jwt from "jsonwebtoken";

Router.post("/user-login", async (req, res) => {
  const sql = `SELECT * FROM users WHERE email='${req.body.email}' and password='${req.body.password}'`;
  // console.log(sql);
  const result = await conn_query(sql);
  if (result.length > 0) {
    console.log(result);
    const email = result[0].email;
    const token = jwt.sign({ role: "admin", email: email }, "jwt_secret_key", {
      expiresIn: "1hr",
    });
    res.cookie("token", token);
    return res.json({ loginStatus: true });
  } else {
    return res.json({ loginStatus: false, Error: "Wrong credentials" });
  }
});

// Get education levels
Router.get("/education_levels", async (req, res) => {
  const sql = `SELECT * FROM education_level`;
  // console.log(sql);
  const result = await conn_query(sql);
  if (result.length > 0) {
    console.log(result);
    return res.json({ result: result });
  } else {
    return res.json({ error: "Could not fetch education levels" });
  }
});

// Add staff
Router.post("/add_staff", async (req, res) => {
  // console.log(sql);
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    "fakepassword",
    req.body.id_number,
    req.body.nationality,
    req.body.address,
    req.body.education,
  ];
  const sql =
    "INSERT INTO users (first_name,last_name,email, password, id_no, nationality, address, education) VALUES($1,$2,$3, $4, $5, $6, $7, $8) RETURNING *";
  const query = {
    name: "add-staff",
    text: sql,
    values: values,
  };
  const result = await conn_query(query);
  if (result.length > 0) {
    return res.json({ result: true });
  } else {
    return res.json({ error: "Could not add staff" });
  }
});

export { Router as userRouter };
