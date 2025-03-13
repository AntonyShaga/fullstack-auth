import { type NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
	const { url, cookies } = request
	console.log('Current URL:', url)
	const session = cookies.get('session')?.value
	console.log('Session:', session)
	const isAuthPage = url.includes('/auth')
	console.log('isAuthPage:', isAuthPage)
	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard/settings', url))
		}

		return NextResponse.next()
	}

	if (!session && url.includes('/dashboard')) {
		return NextResponse.redirect(new URL('/auth/login', url))
	}
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*']
}
