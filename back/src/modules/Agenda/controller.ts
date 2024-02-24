import { Request, Response } from 'express'
import { constants } from 'http2'

import { agendaDAL } from './dal'
import { ContactModel } from '@/schema'
import { agendaValidator } from './validator'

export const agendaController = {
	listContacts(req: Request, res: Response) {
		const filterParse = agendaValidator.filter.safeParse(req.body)
		if (!filterParse.success)
			return res
				.status(constants.HTTP_STATUS_BAD_REQUEST)
				.send(filterParse.error.message)

		const contacts = agendaDAL.listContacts(filterParse.data)

		res.status(constants.HTTP_STATUS_OK).send(contacts)
	},

	createContact(req: Request, res: Response) {
		const agenda = ContactModel.safeParse(req.body)
		if (!agenda.success)
			return res
				.status(constants.HTTP_STATUS_BAD_REQUEST)
				.send('Data format is incorrect')

		const contact = agenda.data
		const databaseContact = agendaDAL.createContact(contact)

		res.status(constants.HTTP_STATUS_CREATED).send(databaseContact)
	},

	readContact(req: Request, res: Response) {},

	updateContact(req: Request, res: Response) {},

	deleteContact(req: Request, res: Response) {}
}
