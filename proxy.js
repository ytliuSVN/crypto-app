const axios = require('axios');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/*', (req, res) => {
  const baseUrl = `${process.env.API_URL}/v1/cryptocurrency/listings/latest?sort=market_cap&start=1&limit=25&convert=EUR`;

  axios
    .get(baseUrl, { headers: { 'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY } })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err.response.data);
      res.send(err.response.data);
    });
});

app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
);
