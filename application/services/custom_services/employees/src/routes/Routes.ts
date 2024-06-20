import { Request, Response, NextFunction } from "express";
import { employeetableController } from '../controller/employeetableController';


export class Routes {
    private employeetable: employeetableController = new employeetableController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/employeetable/:id').delete(this.employeetable.Delete);
app.route('/employeetable/get/search').get(this.employeetable.Search);
app.route('/employeetable').put(this.employeetable.Update);
app.route('/employeetable/:id').get(this.employeetable.GetEntityById);
app.route('/employeetable').get(this.employeetable.GetAllValues);
app.route('/employeetable').post(this.employeetable.Create);
app.route('/employeetable/userid/created_by').get(this.employeetable.GetNounCreatedBy);
     }

}