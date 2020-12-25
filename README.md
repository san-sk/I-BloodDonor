# I-BloodDonor
website used to find blood donors list.developed using expressjs and reactjs.

thanks to Avanthika meenakshi https://github.com/AvanthikaMeenakshi/uthiramapp.



Starting node-server from /server/config/db-config.js:

    Import idonor.sql into MySQL server. If needed, find the following lines in your server/app.js and modify it as per your configuration.

    var connection = mysql.createConnection({
      host: 'localhost',   //hostname
      user: 'root',        //username
      database: 'idonor'   //database name
    })

    Do npm install - This will install all the dependencies listed in the package.json.

    node app.js will start the server on localhost:4000

Starting the react application from /client:

    From the root directory, go to frontend folder. Do npm install in the frontend folder.
    Do npm start and the client will be started at localhost:3000. The proxy is already configured to make all the requests to localhost:4000.

