export function submitContoller(req, res) {
  const complaint = req.body;
  res.send(`Complaint: ${complaint} received! Thank you.`);
}

export function adminController(req, res) {
  // Handle admin form submission
  res.send("Admin request received.");
}
