const database = require('../models');

class TurmaController {

    static async findAllTurmas (req, res){
        try {

            const turmas = await database.Turmas.findAll();

            return res.status(200).json(turmas);            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // TurmaController.findOneTurma
    static async findOneTurma (req, res){
        try {
            const { id } = req.params;

            const turma = await database.Turmas.findOne({
                where: {
                    id: id
                }
            });

            if(!turma){
                return res.status(404).json({message: 'Turma não encontrada!'});
            }

            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // TurmaController.createTurma
    static async createTurma(req, res){
        try {
            const info = req.body;
            
            const newTurma = await database.Turmas.create(info);

            return res.status(200).json(newTurma)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    // TurmaController.updateTurma
    static async updateTurma(req, res) {
        try {
            const { id } = req.params;
            const infoTurma = req.body;

            const turma = await database.Turmas.findOne({
                where: {
                    id: id
                }
            });

            if(!turma){
                return res.status(404).json({message: 'Turma não encontrada!'});
            }

            await database.Turmas.update(infoTurma , {
                where: {
                    id: turma.id
                }
            })

            return res.status(200).json({message: `Turma atualizado com sucesso.`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    // TurmaController.deleteTurma
    static async deleteTurma(req, res) {
        try {

            const { id } = req.params;

            const turma = await database.Turmas.findOne({
                where: {
                    id: id
                }
            });

            if(!turma){
                return res.status(404).json('Turma não encontrada');
            }

            await database.Turmas.destroy({
                where: {
                    id: turma.id
                }
            });

            return res.status(200).json({message: 'Turma removida com sucesso'})            ;
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = TurmaController;