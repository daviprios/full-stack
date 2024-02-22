import { Router } from 'express'

import { agendaController } from './controller'

export const agendaRoutes = Router()
	.get('/contacts', agendaController.listContacts)
	.post('/contact', agendaController.createContact)
	.get('/contact/:id', agendaController.readContact)
	.put('/contact/:id', agendaController.updateContact)
	.delete('/contact/:id', agendaController.deleteContact)
