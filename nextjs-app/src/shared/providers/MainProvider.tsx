'use client'

import { type PropsWithChildren } from 'react'

import { TanstackQueryProvider } from '@/shared/providers/TanstackQueryProvider'
import { ThemeProvider } from '@/shared/providers/ThemeProvider'

export function MainProvider({ children }: PropsWithChildren) {
	return (
		<TanstackQueryProvider>
			<ThemeProvider attribute='class' disableTransitionOnChange defaultTheme='light'>
				{children}
			</ThemeProvider>
		</TanstackQueryProvider>
	)
}
