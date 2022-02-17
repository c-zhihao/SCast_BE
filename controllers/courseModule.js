//require the model if using mongoose
const courseModule = require('../models/courseModule');

const getAllModule = async (req, res) => {
    console.log("get all modules");
    await courseModule.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
}

const getOneModule = async (req, res) => {
    console.log("get one module");
    console.log(req.params);
    const id = req.params.id;
    await courseModule.findById(id).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
}

const addModule = async (req, res) => {
    console.log(req.body);
    const moduleDetails = req.body;
    const newModule = new courseModule({
        moduleCode: moduleDetails.moduleCode,
        moduleName: moduleDetails.moduleName,
        post: []
    })

    newModule.save()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            console.log(err);
        })
}

const updateModule = async (req, res) => {
    console.log(req.body);
    const moduleDetails = req.body;
    const id = req.params.id;
    courseModule.findById(id, function (err, doc) {
        if (!err) {
            console.log(doc);
            doc.moduleName = moduleDetails.moduleName;
            doc.moduleCode = moduleDetails.moduleCode;
            doc.post = moduleDetails.post;
            doc.save().then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err);
            });
        }
        else {

        }
    });
}

module.exports = {
    getAllModule,
    getOneModule,
    addModule,
    updateModule
}



