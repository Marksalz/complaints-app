import client from "../db/connect.js";

const complaintsCollectipn = client.collection("complaints");

export function submitContoller(req, res) {
  const { complaint_category, complaint_text } = req.body;
  const complaint = {
    complaint_category,
    complaint_text,
    createdAt: new Date(),
  };
  complaintsCollectipn
    .insertOne(complaint)
    .then(() => {
      res.send("Complaint received! Thank you.");
    })
    .catch((err) => {
      res.status(500).send(`Error saving complaint ${err.message}`);
    });
}

export async function adminController(req, res) {
  const password = req.body.adminPassword;
  if (password === process.env.ADMIN_PASSWORD) {
    complaintsCollectipn
      .find({})
      .toArray()
      .then((complaints) => {
        res.send(
          `<pre style='color:green; justify-content:center; margin-top:5vh; font-size:20px'>${JSON.stringify(
            complaints,
            null,
            2
          )}</pre>`
        );
      })
      .catch((err) => {
        res.status(500).send(`Error retrieving complaints ${err.message}`);
      });
  } else {
    res.status(404).sendFile("/public/not-found.html", { root: process.cwd() });
  }
}
