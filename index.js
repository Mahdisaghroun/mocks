const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
// Import interfaces and mock data generation functions
const {
    UploadFolder,
    UploadImage,
    Tags,
    GeneralCodeTva,
    Family,
    ArticleAllergen,
    Article,
    Badges
} = require('./interfaces');

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Mocks API for FIO MANAGER WEB by ZEROBUG',
            version: '1.0.0',
            description: 'Mocks API for FIO MANAGER WEB by ZEROBUG',
            contact: {
                name: 'zerobug',
                email: 'zerobug@hack.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'Local development server'
            }
        ]
    },
    apis: ['index.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define GET routes for all interfaces

/**
 * @swagger
 * /uploadfolder:
 *   get:
 *     summary: Get all upload folders
 *     description: Retrieve a list of upload folders with mock data
 *     responses:
 *       200:
 *         description: A list of upload folders
 */
app.get('/uploadfolder', (req, res) => {
    const mockData = Array.from({ length: 10 }, UploadFolder);
    res.json(mockData);
});

/**
 * @swagger
 * /uploadimage:
 *   get:
 *     summary: Get all upload images
 *     description: Retrieve a list of upload images with mock data
 *     responses:
 *       200:
 *         description: A list of upload images
 */
app.get('/uploadimage', (req, res) => {
    const mockData = Array.from({ length: 10 }, UploadImage);
    res.json(mockData);
});

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Get all tags
 *     description: Retrieve a list of tags with mock data
 *     responses:
 *       200:
 *         description: A list of tags
 */
app.get('/tags', (req, res) => {
    const mockData = Array.from({ length: 10 }, Tags);
    res.json(mockData);
});

/**
 * @swagger
 * /generalcodetva:
 *   get:
 *     summary: Get all general code TVA
 *     description: Retrieve a list of general code TVA with mock data
 *     responses:
 *       200:
 *         description: A list of general code TVA
 */
app.get('/generalcodetva', (req, res) => {
    const mockData = Array.from({ length: 10 }, GeneralCodeTva);
    res.json(mockData);
});

/**
 * @swagger
 * /family:
 *   get:
 *     summary: Get all families
 *     description: Retrieve a list of families with mock data
 *     responses:
 *       200:
 *         description: A list of families
 */
app.get('/family', (req, res) => {
    const mockData = Array.from({ length: 10 }, Family);
    res.json(mockData);
});

/**
 * @swagger
 * /articleallergen:
 *   get:
 *     summary: Get all article allergens
 *     description: Retrieve a list of article allergens with mock data
 *     responses:
 *       200:
 *         description: A list of article allergens
 */
app.get('/articleallergen', (req, res) => {
    const mockData = Array.from({ length: 10 }, ArticleAllergen);
    res.json(mockData);
});

/**
 * @swagger
 * /article:
 *   get:
 *     summary: Get all articles
 *     description: Retrieve a list of articles with mock data
 *     responses:
 *       200:
 *         description: A list of articles
 */
app.get('/article', (req, res) => {
    const mockData = Array.from({ length: 10 }, Article);
    res.json(mockData);
});

/**
 * @swagger
 * /badges:
 *   get:
 *     summary: Get all badges
 *     description: Retrieve a list of badges with mock data
 *     responses:
 *       200:
 *         description: A list of badges
 */
app.get('/badges', (req, res) => {
    const mockData = Array.from({ length: 10 }, Badges);
    res.json(mockData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
