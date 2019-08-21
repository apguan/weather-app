### 5-Day Weather Forecast

#### To run development mode

Run `npm install` - this will install all dependencies needed

To launch the development server, run `yarn start` and visit `http://localhost:3000/`

#### To run production

Run `yarn global add server` - this will install the `serve` package on your machine.

To launch a static server, run `serve -s build`. This will then launch a static server to host the production bundle included in the repository.

#### Testing

Testing was done through snapshots with supplied test data. To run tests, use `npm run test`

#### Assumptions

Because this is a weather service API, I assume that the API is fairly reliable and that I will get data back every time. The instance that I forsee breaking this would be hitting my API limit, which is rate-limited at 60 calls/second. This shouldn't be an issue because the parameter for the project is to refresh the data every 5 minutes.

Another assumption I am making is that we only care about the current weather today. Under this assumption, because of the way I am sorting and bucketing the forecast data, as the day draws to an end, the `today's` data becomes more sparse.
