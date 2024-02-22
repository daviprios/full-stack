import z from 'zod'

import { prisma } from '@/database'
import { ContactModel } from '@/schema'
import { LIST_LIMIT } from '@/constants/listLimit'
import { agendaValidator } from './validator'

export const agendaDAL = {
	listContacts(
		filter: z.infer<typeof agendaValidator.filter> = {
			search: undefined,
			page: undefined,
			limit: undefined,
			sort: undefined
		}
	) {
		const { search, page, limit, sort } = filter
		const cappedLimit = (limit ?? LIST_LIMIT) > LIST_LIMIT ? LIST_LIMIT : limit

		return prisma.contact.findMany({
			where: {
				name: {
					startsWith: search
				}
			},
			take: cappedLimit,
			skip: (cappedLimit ?? 10) * (page ?? 1 - 1),
			orderBy: {
				name: sort
			}
		})
	},
	createContact(data: z.infer<typeof ContactModel>) {
		return prisma.contact.create({
			data
		})
	},
	readContact(id: string) {
		return prisma.contact.findFirst({
			where: {
				id
			}
		})
	},
	updateContact(id: string, data: z.infer<typeof ContactModel>) {
		return prisma.contact.update({
			where: {
				id
			},
			data
		})
	},
	deleteContact(id: string) {
		return prisma.contact.delete({
			where: {
				id
			}
		})
	}
}
