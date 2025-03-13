import { useMutation } from '@tanstack/react-query'

import { toastMessageHandler } from '@/shared/utils'

import { TypeRegisterSchema } from '../schemes'
import { authService } from '../services'

export function useRegisterMutation() {
	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['register user'],
		mutationFn: async ({ values, recaptcha }: { values: TypeRegisterSchema; recaptcha: string }) => {
			try {
				const response = await authService.register(values, recaptcha)
				return response
			} catch (error: any) {
				throw error
			}
		},
		onSuccess(data: any) {
			toastMessageHandler(data)
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { register, isLoadingRegister }
}
