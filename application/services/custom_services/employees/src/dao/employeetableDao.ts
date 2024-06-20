import * as mongoose from 'mongoose';
import employeetableModel from '../models/daomodels/employeetable';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class employeetableDao {
    private employeetable = employeetableModel;

    

    constructor() { }
    
    public async Delete(employeetableId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: Delete');

    

    
    
    
    this.employeetable.findByIdAndRemove(employeetableId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(employeetableData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(employeetableData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.employeetable.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(employeetableData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: Update');

    

    
    
    
    this.employeetable.findOneAndUpdate({ _id: employeetableData._id }, employeetableData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(employeetableId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: GetEntityById');

    

    
    
    
    this.employeetable.findById(employeetableId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: GetAllValues');

    

    
    
    
    this.employeetable.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(employeetableData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: Create');

    let temp = new employeetableModel(employeetableData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(employeetableData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeetableDao.ts: GetNounCreatedBy');

    

    
    
    
    this.employeetable.aggregate(([
                        { $match: { $and: [{ created_by: employeetableData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeetableDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}