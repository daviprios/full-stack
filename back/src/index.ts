import express, { json } from 'express'
import cors from 'cors'

import { agendaRoutes } from './modules/Agenda/routes'

const PORT = 8000
const app = express()

app
	.use(cors())
	.use(json())
	.use(agendaRoutes)
	.listen(PORT, () => {
		console.log(`Server opened at http://localhost:${PORT}`)
	})
