const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
//ไม่มี file user.jsonให้สร้างไฟล์
app.use((req, res, next) => {
  const indexPath = path.join(__dirname, "user.json");
  fs.access(indexPath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(indexPath, JSON.stringify([{ id: 1, name: "A" }]), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error creating index.html");
          return;
        }
        console.log("index.html created successfully");
        next(); // ส่งต่อไปยัง middleware ถัดไปหรือเส้นทางต่อไป
      });
    } else {
      next();
    }
  });
});
app.get("/", (req, res) => {
  const json_user = JSON.parse(
    fs.readFileSync(path.join(__dirname, "user.json"))
  );
  res.json(json_user);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
