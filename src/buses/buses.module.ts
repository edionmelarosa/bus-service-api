import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesController } from './buses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusRepository } from './bus.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusRepository])
  ],
  providers: [BusesService],
  controllers: [BusesController]
})
export class BusesModule {}
