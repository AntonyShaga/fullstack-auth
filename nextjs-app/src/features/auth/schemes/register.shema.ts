import { z } from 'zod'

export const RegisterShema = z
	.object({
		name: z.string().min(1, {
			message: 'Введите имя'
		}),
		email: z.string().email({
			message: 'Не коректная почта'
		}),
		password: z.string().min(6, {
			message: 'Пароль минимум 6 символов'
		}),
		passwordRepeat: z.string().min(6, {
			message: 'Пароль потверждения минимум 6 символов'
		})
	})
	.refine(data => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают',
		path: ['passwordRepeat']
	})
export type TypeRegisterShema = z.infer<typeof RegisterShema>
