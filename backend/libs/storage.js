const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage/imgs')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`); // Funciona, pero no es la misma extensión
    }
})

const upload = multer({ storage });

module.exports = upload;