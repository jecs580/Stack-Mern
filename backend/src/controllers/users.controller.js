const userCtrl={}
const UserModel = require('../models/user');
userCtrl.getUsers= async (req,res)=> {
    const users = await UserModel.find();
    res.json(users)
}
userCtrl.getUser= async (req,res)=> {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
}
userCtrl.createUser= async (req,res)=> {
    const newUser=new UserModel(req.body);
    await newUser.save();
    res.json({message:'Usuario creado'});
}
userCtrl.updateUser= async (req,res)=> {
    const userUpdate = await UserModel.findOneAndUpdate({"_id":req.params.id},req.body);
    res.json(userUpdate)
}
userCtrl.deleteUser= async (req,res)=> {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({message:'Usuario eliminado'});
}

module.exports= userCtrl