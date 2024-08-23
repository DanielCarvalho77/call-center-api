const database = require('../models');

class PessoaController {
    static async findPeople(req, res){
        try {
            const allPeople = await database.Pessoas.findAll();
            return res.status(200).json(allPeople);            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findOnePeople(req, res) {
        try {
            const { id } = req.params;

            if(isNaN(id)){
                return res.status(404).json({ message: 'O ID deve ser um número!' });
            }
            
            const people = await database.Pessoas.findOne({
                where:{
                    id: Number(id)
                }
            });
            if (!people) {
                return res.status(404).json({ message: 'Pessoa não encontrada!' });
            }
            
            return res.status(200).json({people})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleleteOnePeople (req, res){
        try {
            const { id } = req.params;

            const isPeopleDeleted = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });

            if(!isPeopleDeleted){
                return res.status(404).json({message: 'Pessoa não encontrada'});
            }
            const namePeople = isPeopleDeleted.nome;

            await database.Pessoas.destroy({
                where: {
                    id: Number(isPeopleDeleted.id)
                }
            });

            return res.status(200).json({message: `${namePeople} foi removido!`})

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPeople (req, res){
        const newPeople = req.body;
        try {

            const peopleCrete = await database.Pessoas.create(newPeople);

            return res.status(200).json({message: `${peopleCrete.nome} foi adicionado com sucesso!`});
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePeople (req, res){
        const { id } = req.params;
        const newInfoPeople = req.body;
        try {

            if (isNaN(id)) {
                return res.status(404).json({ message: 'O ID deve ser um número!' });
            }

            await database.Pessoas.update(newInfoPeople, {
                where:{
                    id: Number(id)
                }
            });

            const peopleUpdate = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({message: `${peopleUpdate.nome} foi atualizado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
