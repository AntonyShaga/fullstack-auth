import Link from 'next/link'

import { buttonVariants } from '@/shared/components/ui'

export default function Home() {
	return (
		<div className='space-y-5 text-center'>
			<h1 className='text-4xl font-bold'>Главная страница</h1>
			<Link className={buttonVariants()} href='/auth/login'>
				Войти в акаунт
			</Link>
		</div>
	)
}
