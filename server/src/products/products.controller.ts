import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

// Route: localhost:3000/products
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    @Body() completeBody,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    console.log(completeBody);

    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: generatedId };
  }
}
