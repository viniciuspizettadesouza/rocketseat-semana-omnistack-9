// metodos do controller index, show, store, update, destroy
// index listagem de sessões
// show, lista unica atual
// store, criar sessão
// destroy, remover/deletar sessão
// por padrao mvc da comunidade nao devo criar mais metods alem desses
// no mesmo controller, e sim criar outro controller

const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body

        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user)
    }
}