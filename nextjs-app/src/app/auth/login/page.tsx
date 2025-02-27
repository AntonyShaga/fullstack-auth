import { Metadata } from 'next'

import { LoginForm } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'Войти в акаунт'
}

export default function LoginPage() {
	return <LoginForm></LoginForm>
}
