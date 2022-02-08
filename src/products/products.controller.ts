import { Controller, Get } from '@nestjs/common';
import * as productsData from './data/products.data.json';

@Controller('products')
export class ProductsController {
    @Get()
    getAll() {
        return productsData.map((product) => ({
            ...product,
            url: 'https://picsum.photos/200',
            quantity: Math.floor(Math.random() * 100),
        }));
    }
}
