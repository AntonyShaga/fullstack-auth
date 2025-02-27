'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'
import { RegisterShema, TypeRegisterShema } from '@/features/auth/schemes'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/components/ui'

export function RegisterForm() {
	const form = useForm<TypeRegisterShema>({
		resolver: zodResolver(RegisterShema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		}
	})

	const onSubmit = (data: TypeRegisterShema) => {
		console.log(data)
	}

	return (
		<AuthWrapper
			isShowSocial
			backButtonHref={'/auth/login'}
			backButtonLabel={'Уже есть аккаунт? Войти.'}
			heading={'Регистрация'}
			description={'Чтобы войти на сайт введите свой email и пароль'}
		>
			<Form {...form}>
				<form className={'grid gap-2 space-y-2'} onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name={'name'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>ИМЯ</FormLabel>
								<FormControl>
									<Input placeholder={'Иван'} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'email'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Почта</FormLabel>
								<FormControl>
									<Input type='email' placeholder={'Ivan@exampel.com'} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'password'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input type='password' placeholder={'******'} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'passwordRepeat'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Повторите Пароль</FormLabel>
								<FormControl>
									<Input type='password' placeholder={'******'} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type={'submit'}>Создать Акаунт</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
