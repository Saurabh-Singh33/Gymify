import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

// Load environment variables from config.env
config({ path: "./config.env" });

// CORS configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // allowed frontend URL
    methods: ["POST"],                  // allowed HTTP methods
    credentials: true,                  // allow cookies/auth headers
  })
);

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Route to handle sending mail
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the required fields",
    });
  }

  try {
    // Here you can add your logic to send email
    await sendEmail({
      email:"saurabh.singh133449@marwadiuniversity.ac.in", // Add recipient email address
      subject: "Gym Contact Form Message",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    // Pass error to Express error handler
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    })
    next(error);
  }
});

// Use the router with base path "/"
app.use("/", router);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
