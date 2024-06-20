import { Request, Response } from 'express';
import {employeetableDao} from '../dao/employeetableDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';















let employeetable = new employeetableDao();

export class employeetableService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: Delete')
     let  employeetableId = req.params.id;
     employeetable.Delete(employeetableId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: Search')
     let  employeetableData = req.query;
     employeetable.Search(employeetableData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: Update')
     let  employeetableData = req.body;
     employeetable.Update(employeetableData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: GetEntityById')
     let  employeetableId = req.params.id;
     employeetable.GetEntityById(employeetableId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: GetAllValues')
     
     employeetable.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: Create')
     let  employeetableData = req.body;
     employeetable.Create(employeetableData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeetableService.ts: GetNounCreatedBy')
     let  employeetableData = { created_by: req.query.createdby };
     employeetable.GetNounCreatedBy(employeetableData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeetableService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}