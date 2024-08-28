const database = require('../models');

class NivelController {

    static async findAllNivel (req, res){
        try {

            const niveis = await database.Niveis.findAll();

            return res.status(200).json(niveis)
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async nivelCreate(req, res){
        const newNivel = req.body;
        try {

            const nivelCreate = await database.Niveis.create(newNivel);

            return res.status(200).json({message: `${nivelCreate.desc_nivel} foi adicionado!`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findOneNiveis(req, res){
        try {
            const { id } = req.params;

            const nivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });

            if (!nivel) {
                return res.status(404).json({message: 'Nível não encontrado.'});
            }

            return res.status(200).json({nivel});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteNivel (req, res){
        try {
            const { id } = req.params;

            const nivel = await database.Niveis.findOne({
                where: {
                    id: id
                }
            });

            if (!nivel) {
                return res.status(404).json({message: 'Nível não encontrado.'})
            }

            await database.Niveis.destroy({
                where: {
                    id: nivel.id
                }
            });

            return res.status(200).json({message: 'Nível removido com sucesso!'})            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateNivel (req, res){
        try {
            const { id } = req.params;
            const info = req.body;

            const nivel = await database.Niveis.findOne({
                where: {
                    id: id
                }
            });

            if (!nivel) {
                return res.status(404).json({message: 'Erro, tente mais tarde.'})
            }

            await database.Niveis.update(info, {
                where: {
                    id: Number(nivel.id)
                }
            });

            return res.status(200).json({message: `Nível ${nivel.desc_nivel} foi alterado para ${info.desc_nivel}!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = NivelController;
