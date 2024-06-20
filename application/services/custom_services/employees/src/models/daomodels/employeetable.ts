
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const employeetableSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   age: { type: Number },
   salary: { type: Number },
   email: { type: String }
})

const employeetableModel = mongoose.model('employeetable', employeetableSchema, 'employeetable');
export default employeetableModel;
