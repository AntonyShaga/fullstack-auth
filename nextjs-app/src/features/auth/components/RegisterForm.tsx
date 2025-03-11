'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/components/ui'

import { RegisterSchema, TypeRegisterSchema } from '../schemes'

export function RegisterForm() {
	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		}
	})
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const onSubmit = (data: TypeRegisterSchema) => {
		if (recaptchaValue) {
			console.log(data)
		} else {
			toast.error('Пожалуйста, завершите reCAPTCHA')
		}
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
					<div className='flex justify-center'>
						<ReCAPTCHA
							sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
							onChange={setRecaptchaValue}
							theme={theme === 'light' ? 'light' : 'dark'}
						/>
					</div>
					<Button type={'submit'}>Создать Акаунт</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
