const jwt = require('jsonwebtoken');

/*************************************
 ** Verificar Token de autenticación
 ************************************/

let verificaToken = ( req, res, next) => {

    let token = req.get('token');

    jwt.verify( token, process.env.SEED, (err, decoded) => {

        if ( err ) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};


/*************************************
 ** Verificar Token de autenticación
 ************************************/
let verificaAdminRole = ( req, res, next ) => {

    let usuario = req.usuario;

    if ( usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            error: {
                message: 'Prohibido! No eres un usuario Administrador'
            }
        });
    }

}

module.exports = {
    verificaToken,
    verificaAdminRole
}