const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/database');
const clgDev = require('./utils/clgDev');
const errorHandler = require('./middlewares/errorHandler');
const path = require('path');
const cloudinaryConnect = require('./config/cloudinaryConnect');
const Axios = require("axios");


dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 4000;
const app = express();
connectDB();
cloudinaryConnect();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
const AuthR = require('./routes/AuthR');
const CategoryR = require('./routes/CategoryR');
const CourseProgressR = require('./routes/CourseProgressR');
const CourseR = require('./routes/CourseR');
const PaymentR = require('./routes/PaymentR');
const ProfileR = require('./routes/ProfileR');
const ReviewR = require('./routes/ReviewR');
const SectionR = require('./routes/SectionR');
const SubSectionR = require('./routes/SubSectionR');
const UserR = require('./routes/UserR');
const OtherR = require('./routes/OtherR');
const certificateRoutes = require('./routes/certificateRoutes');
const internshipApplication = require('./routes/internshipApplicationR');


app.use('/api/v1/auth', AuthR);
app.use('/api/v1/categories', CategoryR);
app.use('/api/v1/courses', CourseR);
app.use('/api/v1/payments', PaymentR);
app.use('/api/v1/profiles', ProfileR);
app.use('/api/v1/reviews', ReviewR);
app.use('/api/v1/sections', SectionR);
app.use('/api/v1/subsections', SubSectionR);
app.use('/api/v1/users', UserR);
app.use('/api/v1/other', OtherR);
app.use('/api/v1/courseprogress', CourseProgressR);
// Routes
app.use( '/api/v1/certificates', certificateRoutes );
app.use( '/api/v1/internship', internshipApplication )


app.use(errorHandler); // must be after mounting the routes

app.get('/', (req, res) => {
  res.send('Server is Running...');
});

app.post("/api/v1/compile", (req, res) => {
  // getting the required data from the request
  let code = req.body.code;
  let language = req.body.language;
  let input = req.body.input;

  let languageMap = {
      "c": { language: "c", version: "10.2.0" },
      "cpp": { language: "c++", version: "10.2.0" },
      "python": { language: "python", version: "3.10.0" },
      "java": { language: "java", version: "15.0.2" }
  };

  if (!languageMap[language]) {
      return res.status(400).send({ error: "Unsupported language" });
  }

  let data = {
      "language": languageMap[language].language,
      "version": languageMap[language].version,
      "files": [
          {
              "name": "main",
              "content": code
          }
      ],
      "stdin": input
  };

  let config = {
      method: 'post',
      url: 'https://emkc.org/api/v2/piston/execute',
      headers: {
          'Content-Type': 'application/json'
      },
      data: data
  };

  // calling the code compilation API
  Axios(config)
      .then((response) => {
          res.json(response.data.run);  // Send the run object directly
          console.log(response.data);
      }).catch((error) => {
          console.log(error);
          res.status(500).send({ error: "Something went wrong" });
      });
});

app.listen(PORT, (err) => {
  if (err) {
    clgDev('Error occurred creating server');
    process.exit();
  }
  clgDev(`Server in running on ${PORT}`.yellow.underline.bold);
});

// TODO : check for these, what it is
/**
 * // handle unhandled promise rejection
 * process.on("unhandledRejection", (err, promise) => {
 *  clgDev(`Error : ${err.message}`.red);
 *  // close server & exit process
 *  server.close(()=>process.exit(1));
 * });
 */
