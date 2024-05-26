import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import { getXataClient, Myproduct } from "./xata";

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 3002;
const xata = getXataClient();
app.use(express.json());

app.get('/api/products', async (req: Request, res: Response) => {
    try {
        const products = await xata.db.myproduct.getAll();
        res.json(products);       
    } catch (error) {
        console.error(error);
    }
});

app.post('/api/products', async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const newProduct = await xata.db.myproduct.create(product);
        res.json(newProduct);      
    } catch (error) {
        console.error(error);      
    }
});

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

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});