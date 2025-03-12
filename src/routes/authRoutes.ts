import { Router } from "express";

const router = Router();

// Render pages
router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));

// Handle form submissions (basic)
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt: ${email}`);
    res.send("Login successful (not yet implemented).");
});

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    console.log(`New user: ${name}, Email: ${email}`);
    res.send("Registration successful (not yet implemented).");
});

export default router;
