import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ProviderModule } from '@/auth/provider/provider.module'
import { IS_DEV_ENV } from '@/libs/common/utils/is-dev.util'

import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: !IS_DEV_ENV
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		ProviderModule
	]
})
export class AppModule {}
