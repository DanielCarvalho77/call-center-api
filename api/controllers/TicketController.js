const database = require('../models');

class TicketController {

    static async findAllTickets (req, res) {
        try {
            
            const tickets = await database.Tickets.findAll();

            return res.status(200).json(tickets);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createTicket(req, res){

        const { consumerId , productId } = req.params;
        const newTicket = {...req.body, consumerId: consumerId, productId: productId }
        try {
            console.log('newTicket --- ',newTicket);

            const ticket = await database.Tickets.create(newTicket)
            
            return res.status(200).json(ticket);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findTicketById (req, res){
        const { id } = req.params;
        try {

            const ticket = await database.Tickets.findOne({
                where: {
                    id: id
                }
            });
            
            
            const consumer = await database.Pessoas.findOne({
                where: {
                    id: Number(ticket.consumerId)
                }
            });
            
            const product = await database.Produtos.findOne({
                where:{
                    id: consumer.id
                }
            })
            
            const ticketDetails  = {
                ticket: ticket,
                consumer: consumer ? consumer.toJSON() : null, 
                product: product ? product.toJSON() : null,
            }
            
            return res.status(200).json(ticketDetails);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TicketController;