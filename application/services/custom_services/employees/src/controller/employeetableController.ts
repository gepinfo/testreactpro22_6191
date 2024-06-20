import { Request, Response } from 'express';
import { employeetableService } from '../service/employeetableService';
import { CustomLogger } from '../config/Logger'
let employeetable = new employeetableService();

export class employeetableController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: Search');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employeetable.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeetableController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeetableController.ts: GetNounCreatedBy');
    })}


}