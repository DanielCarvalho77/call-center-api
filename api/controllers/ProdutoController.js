const database = require('../models');

class ProdutoController {

    static async createProduct(req, res){
        try {
            const product = req.body;

            const existProduct = await database.Produtos.findAll({
                where:{
                    name: product.name
                }
            });
            console.log(existProduct);

            if (existProduct?.length) {
                return res.status(404).json({message: 'produto já existe'})
            };

            const productCreated = await database.Produtos.create(product);
            
            return res.status(200).json({message: `${productCreated.name} foi criado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findAllProduct (req, res){
        try {            
            const product = await database.Produtos.findAll();
            return res.status(200).json(product)            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneProduct (req, res){
        try {
            const {id } = req.params;

            const product = await database.Produtos.findOne({
                where: {
                    id: id
                }
            })

            if (!product) {
                return res.status(404).json({message: 'Nenhum produto encontrado!'});
            }

            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateProduct(req, res){
        try {
            const { id } = req.params;
            const newInfoProduct = req.body;

            const productUpdate = await database.Produtos.findOne({
                where:{
                    id: Number(id)
                }
            });

            if (!productUpdate) {
                return res.status(404).json({message: 'Produto não encontrado!'});
            };

            await database.Produtos.update(newInfoProduct, {
                where:{
                    id: Number(id)
                }
            });

            return res.status(200).json({message: `${productUpdate.name} foi atualizado com sucesso!`})            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteProduct(req, res){
        try {
            const { id } = req.params;

            const product = await database.Produtos.findOne({
                where:{
                    id: id
                }
            });

            if (!product) {
                return res.status(404).json({message: 'Produto não encontrado!'});
            }

            await database.Produtos.destroy({
                where:{
                    id: product.id
                }
            });

            return res.status(200).json({message: `${product.name} foi removido com sucesso!`})            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


}

module.exports = ProdutoController