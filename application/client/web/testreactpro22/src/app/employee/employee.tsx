import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employee.scss";
import  {service}   from './employee.service';
import  BootstrapTable   from 'react-bootstrap-table-next';
import  paginationFactory   from 'react-bootstrap-table2-paginator';
import  'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'  ;
import  'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'  ;

class Employee extends React.Component<any, any> {
    columnDefs: any = [{ dataField: 'name', text: 'name' },{ dataField: 'age', text: 'age' },{ dataField: 'salary', text: 'salary' },{ dataField: 'email', text: 'email' },];
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
    this.GpGetAllValues();
    }
    GetAllValues  () {
    this.test.GetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    rowclick ={onClick: (e: any, row: any, rowIndex: any) => 
    {this.props.history.push({ pathname: "/",state:{id:row} });
    }}

    render(){
    return(
    <>
        <h2 className="screen-align">employee</h2>
        <div>
    <div id="template-i6vn">
        <div id="template-ib1l">
            <div id="template-io7c">
                <div id="template-isj4">
                    <div id="i2b2">
                        <div>
                            <BootstrapTable keyField='_id' data={this.state.rowData} columns={this.columnDefs}
                            rowEvents={this.rowclick} pagination={paginationFactory({ sizePerPageList:
                            [{ text: '5', value: 5 }, { text: '25', value: 25 }, { text: '50', value:
                            50 }], } ) } />
                        </div>
                        <div id="template-indm" className="gjs-row">
                            <div id="template-icdg" className="gjs-cell">
                                <div type="button" id="template-idgv" className="btn btn-primary "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Employee;