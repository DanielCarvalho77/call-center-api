const database = require('../models');

class CaseController {
    // createCase
    static async createCase (req, res){
        const { ticketId } = req.params;
        const newCase = {...req.body, ticketId: Number(ticketId)}
        try {

            const ticketExists = await database.Tickets.findOne({
                where:{
                    id: ticketId
                }
            })

            if (!ticketExists) {
                return res.status(404).json({message: 'Ticket não encontrado!'})
            }

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

    // updateCase
    static async updateCase(req, res){
        try { 
            const { caseId, ticketId } = req.params;
            const updateCase = {...req.body, ticketId: Number(ticketId)}

            const ticketExists = await database.Tickets.findOne({
                where:{
                    id: ticketId
                }
            })

            if (!ticketExists) {
                return res.status(404).json({message: 'Ticket não encontrado!'})
            }

            await database.Cases.update(updateCase, {
                where: {
                    id: caseId,
                    ticketId: ticketId
                }
            })

            const caseUpdated = await database.Cases.findOne({
                where: {
                    id: caseId,
                    ticketId: ticketId
                }
            })

            return res.status(200).json(caseUpdated)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CaseController;
