import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.repository.create(createProductDto);
    return this.repository.save(product);
  }

  findAll() {
    return this.repository.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number) {
    const product = await this.repository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return this.repository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.repository.remove(product);
    return { message: `Product ${id} deleted` };
  }
}
