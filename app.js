const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan'); // for http logs
const dotenv = require('dotenv');
const { logger } = require('./utils/logger');
const { Provider, Instructor } = require('./models/provider');
const AdminBroExpress = require('@admin-bro/express');
const AdminBro = require('admin-bro');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize)

let app = express();

app.use(cors())
dotenv.config();

if (process.env.NODE_ENV === 'production'){
    app.use(morgan('common'));
}
else {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const adminBro = new AdminBro({
    resources: [{resource: Provider}, {
        resource: Instructor,
        options: {
            properties: {
                submission: {
                    type: 'mixed',
                    show: true,
                    filter: false,
                    edit: true
                },
            },
        }
    }],
})

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)




const port = 8000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})