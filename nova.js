const { GoogleGenerativeAI } = require("@google/generative-ai");
const http = require('http');

// Setup the brain
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Keep Nova awake
http.createServer((req, res) => {
  res.write("Nova is online and ready to play!");
  res.end();
}).listen(process.env.PORT || 3000);

console.log("Nova is active and connected to the cloud!");