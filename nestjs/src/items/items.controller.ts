import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

const test = [
    {
        name: "john doe",
        email: "test@test.nl"
    },
];

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): object {
        return test;
    }

    @Get(':id')
    findOne(): object {
        return test;
    }

    @Post()
    postOne(): object {
        return {
            success: true,
            message: "Successfully posted item",
            errors: {},
        };
    }

    @Put(':id')
    putOne(): object {
        return {
            success: true,
            message: "Successfully updated item",
            errors: {},
        };
    }

    @Delete(':id')
    deleteOne(): object {
        return {
            success: true,
            message: "Successfully Deleted item",
            errors: {},
        };
    }
}
