const database = require('../models');

class CaseController {
    // createCase
    static async createCase (req, res){
        const { ticketId } = req.params;
        const newCase = req.body;
        try {

            const caseTicket = await database.Cases.create(newCase);
            
            return res.status(200).json({caseTicket});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    // findAllCases
    static async findAllCasesByTicket(req,res) {
        const { ticketId } = req.params;
        try {

            const caseByTicket = await database.Cases.findAll({
                where: {
                    ticketId: ticketId
                }
            });

            if (!caseByTicket?.length) {
                return res.status(404).json({message: 'Não há registros de caso deste atendimento.'});
            }

            return res.status(200).json({caseByTicket});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    // findCaseById
    // updateCase
}

module.exports = CaseController;
