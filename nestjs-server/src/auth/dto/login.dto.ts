import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class LoginDto {
	@IsEmail({}, { message: 'Некоректный формат email' })
	@IsString({ message: 'Email должен быть стракой' })
	@IsNotEmpty({ message: 'Email обязателен к заполнению' })
	email: string

	@MinLength(6, { message: 'Пароль должен содержать не мение 6 символов' })
	@IsString({ message: 'Пароль должен быть стракой' })
	@IsNotEmpty({ message: 'Пароль не должен быть пустым' })
	password: string
}
