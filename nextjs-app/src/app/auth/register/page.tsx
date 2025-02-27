import { Metadata } from 'next'

import { RegisterForm } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'Создать акаунт'
}

export default function RegisterPage() {
	return <RegisterForm></RegisterForm>
}
