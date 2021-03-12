// const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI || 'https://elasticbeanstalk-us-east-1-371298339747.s3.amazonaws.com/.elasticbeanstalk';

// mongoose
//   .connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(() => console.log(`Successfully connected to the database ${MONGODB_URI}`))
//   .catch(error => {
//     console.error(`An error ocurred trying to connect to the database ${MONGODB_URI}: `, error);
//     process.exit(1);
//   });