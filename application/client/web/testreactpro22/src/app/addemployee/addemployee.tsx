import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./addemployee.scss";
import  {service}   from './addemployee.service';

class Addemployee extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    employeetable : {
    name: '',
    age: '',
    salary: '',
    email: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ employeetable: { ...this.state.employeetable, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.employeetable.created_by = sessionStorage.getItem('email')||'{}';
    }
    Create  () {
    this.test.Create(this.state.employeetable).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">addemployee</h2>
        <div>
    <div id="template-i9fl">
        <div id="template-ignw">
            <div id="template-in2c" className="gjs-row">
                <div id="template-i16k" className="gjs-cell">
                    <input type="text" id="template-i173" placeholder="name" required="true"
                    onChange={this.handlechange} name="name" value={this.state.employeetable.name}className="form-control "
                    />
                </div>
                <div id="template-idy9" className="gjs-cell">
                    <input type="text" id="template-iscq" placeholder="age" required="true"
                    onChange={this.handlechange} name="age" value={this.state.employeetable.age}className="form-control "
                    />
                </div>
                <div id="template-iu8o" className="gjs-cell">
                    <input type="text" id="template-ib61" placeholder="salary" required="false"
                    onChange={this.handlechange} name="salary" value={this.state.employeetable.salary}className="form-control "
                    />
                </div>
            </div>
            <div id="template-ihsp" className="gjs-row">
                <div id="template-ir28" className="gjs-cell">
                    <div type="button" id="template-ix786" onClick={()=>this.Create()} className="btn btn-primary "></div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Addemployee;