import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from 'prisma/__generated__'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	public async onModuleInit(): Promise<void> {
		await this.$connect()
	}

	public async onModuleDestroy(): Promise<void> {
		await this.$disconnect()
	}
	/*create(createPrismaDto: CreatePrismaDto) {
		return 'This action adds a new prisma'
	}

	findAll() {
		return `This action returns all prisma`
	}

	findOne(id: number) {
		return `This action returns a #${id} prisma`
	}

	update(id: number, updatePrismaDto: UpdatePrismaDto) {
		return `This action updates a #${id} prisma`
	}

	remove(id: number) {
		return `This action removes a #${id} prisma`
	}*/
}
