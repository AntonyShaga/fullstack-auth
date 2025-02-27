import Link from 'next/link'
import { type PropsWithChildren } from 'react'

import AuthSocial from '@/features/auth/components/AuthSocial'

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui'

interface AuthWrapperProps {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	isShowSocial?: boolean
}
export function AuthWrapper({
	children,
	backButtonLabel,
	backButtonHref,
	isShowSocial = false,
	heading,
	description
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<Card className={'w-[400px]'}>
			<CardHeader className={'space-y-2'}>
				<CardTitle>{heading}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
				<CardContent>
					{isShowSocial && <AuthSocial />}
					{children}
				</CardContent>
				<CardFooter>
					{backButtonLabel && backButtonHref && (
						<Button variant={'link'} className={'w-full font-normal'}>
							<Link href={backButtonHref}>{backButtonLabel}</Link>
						</Button>
					)}
				</CardFooter>
			</CardHeader>
		</Card>
	)
}
