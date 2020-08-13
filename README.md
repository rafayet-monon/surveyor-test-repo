# SURVEYOR
![Continuous Integration](https://github.com/rafayet-monon/surveyor/workflows/Continuous%20Integration/badge.svg)
![Continuous Deployment](https://github.com/rafayet-monon/surveyor/workflows/Continuous%20Deployment/badge.svg)


## [Production](https://nimble-surveyor.herokuapp.com/) || [Staging](https://nimble-surveyor-staging.herokuapp.com/)

## [Project Board](https://github.com/rafayet-monon/surveyor/projects/1)

## Installation and Setup Instructions

You will need `node` and `npm` installed globally on your machine.  
Built using `node-14.6.0` and `npm-6.14.6`

Install packages: `npm install`  

To run test suite:  `npm test`  

To start server: `npm start`  

To visit app locally: [localhost:3000](localhost:3000)

To lint code: `npm run lint`

To format code: `npm run format`

## Deployment
This project uses `Github Actions` for `CI/CD` and deploys to `heroku`.

It has two deployment environment - `production` & `staging`. It uses `master`
branch for `production` and `staging` branch for `staging` deployment. So this project uses
two different apps on `heroku`.

To create `heroku` apps install Heroku CLI and go to project folder to run the following commands.
Or projects can also be created in Heroku website.

For Production: 
```
heroku create production_app_name --remote production --buildpack mars/create-react-app
```

For Staging: 
```
heroku create staging_app_name --remote staging --buildpack mars/create-react-app
```

Then in Github Project Secrets configure the following secrets
```
HEROKU_API_KEY: api key from heroku account's settings
HEROKU_STAGING_APP: staging_app_name
HEROKU_PRODUCTION_APP: production_app_name
```
