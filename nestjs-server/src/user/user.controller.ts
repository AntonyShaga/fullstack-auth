import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common'
import { UserRole } from '@prisma/__generated__'

import { Authorization } from '@/auth/decorators/auth.decorator'
import { Authorized } from '@/auth/decorators/authorized.decorator'

import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Authorization()
	@Get('profile')
	@HttpCode(HttpStatus.OK)
	public async findProfile(@Authorized('id') userId: string) {
		return await this.userService.findById(userId)
	}
	@Authorization(UserRole.ADMIN)
	@Get('by-id/:id')
	@HttpCode(HttpStatus.OK)
	public async findById(@Param('id') userId: string) {
		return await this.userService.findById(userId)
	}
}
