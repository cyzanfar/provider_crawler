const {Provider, Instructor, CrawlerExecution } = require('./provider')

Provider.sync({ alter: true })
Instructor.sync({ alter: true })
CrawlerExecution.sync({ alter: true })
