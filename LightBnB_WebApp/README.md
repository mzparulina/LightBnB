# LightBnB WebApp

A simple multi-page Airbnb clone that uses server-side Javascript to display information from queries to web pages via SQl queries.
## Project Structure

```
├── public
│   ├── index.html
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── index.js
│   │   ├── libraries
│   │   ├── network.js
│   │   └── views_manager.js
│   └── styles
├── sass
└── server
    ├── db
    │  ├── database.js
    │  └── index.js
    ├── routes
    │  ├── apiRoutes.js
    │  └── userRoutes.js
    ├── json
    └── server.js
```
## Dependencies
  - "bcrypt": "^3.0.6"
  - "body-parser": "^1.19.0"
  - "cookie-session": "^1.3.3"
  - "express": "^4.17.1"
  - "nodemon": "^1.19.1"
  - "pg": "^8.9.0"

## Getting Started

Install all dependencies (using the npm install command).
Run the development web server using the npm run local.

## Project Screenshot
  !["Lighthouse Home"](https://github.com/mzparulina/LightBnB/blob/main/LightBnB_WebApp/docs/lightbnb_home.png)