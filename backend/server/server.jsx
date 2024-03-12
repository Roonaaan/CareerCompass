const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/login', async (req, res) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('An error occurred', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
