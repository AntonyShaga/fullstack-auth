/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		//missingSuspenseWithCSRBailout: false
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
		NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net'
			}
		]
	}
}

export default nextConfig
