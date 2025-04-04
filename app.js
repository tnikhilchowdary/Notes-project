const fs = require('fs');
const path = require('path');


const today = new Date().toISOString().split("T")[0]; 
const folderPath = path.join(__dirname, today);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(`Folder created: ${folderPath}`);
} else {
  console.log(`Folder already exists: ${folderPath}`);
}


const filePath = path.join(folderPath, 'notes.txt');

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "📝 First note created!\n");
  console.log("notes.txt created and first note written.");
} else {
  console.log("notes.txt already exists.");
}


const currentTime = new Date().toLocaleTimeString();
fs.appendFileSync(filePath, `[${currentTime}] Practiced Node.js today.\n`);
console.log("New note appended to notes.txt");


