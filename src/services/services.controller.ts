import { Controller, Get } from '@nestjs/common';

@Controller('services')
export class ServicesController {
    @Get()
    getAllServices() {
        const services = [
            {
                "name": "Speedy Car Wash",
                "rating": 4.5,
                "location": "Delhi",
                "price": 400
            },
            {
                "name": "Shine AutoCare",
                "rating": 4.2,
                "location": "Delhi",
                "price": 350
            },
            {
                "name": "QuickFix Car Repair",
                "rating": 4.7,
                "location": "Noida",
                "price": 500
            },
            {
                "name": "Glitz Auto Spa",
                "rating": 4.1,
                "location": "Gurgaon",
                "price": 450
            }
        ];

        return services;
    }
}