import z from 'zod'

export const agendaValidator = {
	filter: z
		.object({
			search: z.string().optional(),
			page: z.number().optional(),
			limit: z.number().optional(),
			sort: z.enum(['asc', 'desc']).optional()
		})
		.optional()
}
