import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import { getXataClient, Myproduct } from "./xata";

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 3002; //use 3002 if there is no port in the env file
const xata = getXataClient();
app.use(express.json());

//Get all the products in the xata database
app.get('/api/products', async (req: Request, res: Response) => {
    try {
        const products = await xata.db.myproduct.getAll();
        res.json(products);       
    } catch (error) {
        console.error(error);
    }
});

//Get only the corresponding product by the ProductID not the ID column
app.get('/api/products/:id', async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const id = req.params.id;
        //const theProduct = await xata.db.myproduct.read(id);
        const theProduct = await xata.db.myproduct.filter('ProductID',parseInt(id)).getMany();
        res.json(theProduct);       
    } catch (error) {
        console.error(error);
    }
});

//Create a new product
app.post('/api/products', async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const newProduct = await xata.db.myproduct.create(product);
        res.json(newProduct);      
    } catch (error) {
        console.error(error);      
    }
});

//Update a product having ID
app.put('/api/products/:id', async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const id = req.params.id;
        const updateProduct = await xata.db.myproduct.update(id,product);
        res.json(updateProduct);      
    } catch (error) {
        console.error(error);     
    }
});

//Delete a product having ID
app.delete('/api/products/:id', async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const id = req.params.id;
        const deleteProduct = await xata.db.myproduct.delete(id);
        res.json(deleteProduct);  
    } catch (error) {
        console.error(error);         
    }
});

//starts the server on identified port above
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});