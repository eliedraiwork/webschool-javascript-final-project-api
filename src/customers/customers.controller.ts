import { Controller, Get, HttpException, NotFoundException, Param } from '@nestjs/common';
import * as customersData from './data/customers.data.json';

@Controller('customers')
export class CustomersController {
    @Get()
    getAll() {
        return customersData;
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        const customer = customersData.find((customer) => customer.id === Number(id));
        if (customer) return customer;

        throw new NotFoundException('Not found customer with id ' + id);
    }
}
