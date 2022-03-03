//require the model if using mongoose
const courseModule = require('../models/courseModule');


const formatError = (code, message, desc) => {
    var obj = {
        "code": code,
        "message": message,
        "description": desc
    }
    return obj;
    //if want string jsonstringy here
}

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
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(400);
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

const deleteModule = async (req,res)=>{
    console.log('deleting module...');
    const moduleId = req.body.moduleId;
    courseModule.deleteOne({_id: moduleId}, function(err){
        if(!err){
            res.status(200).send(formatError(200, "Module deleted successfully", "Module deleted"));
        }else{
            res.status(401).send(formatError(401, "Module does not exist", "Wrong module id"));
        }
    })
}

module.exports = {
    getAllModule,
    getOneModule,
    addModule,
    updateModule,
    deleteModule
}



