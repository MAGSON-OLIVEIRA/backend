const express = require('express')
const auth = require('./auth')

module.exports = function(server){


  /*
    Rotas abertas
  */
  const openApi = express.router()
  server.use('/oapi', openApi)

  const AuthService = rquire('../api/user/AuthService.js')
  openApi.post('/login', AuthService)

  const router = express.Router()
  server.use('/api', router)

  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
