const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('<h1>Hello from AppRunner!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
