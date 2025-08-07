export function submitContoller(req, res) {
  const complaint = req.body;
  // Handle the complaint (e.g., save, validate)
  res.send("Complaint received! Thank you.");
}

export function adminController(req, res) {
  // Handle admin form submission
  res.send("Admin request received.");
}
