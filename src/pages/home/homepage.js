import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListComponent from '../../components/list/list';
import { getAllIncomeData } from '../../services/incomeManagement';
import ListHead from '../../components/list-head/list-head';
import history from './../../history';
import './homepage.css';

class Homepage extends Component {
    valArr = [
        {
            head: 'S.No',
            keyName: 'id'
        },
        {
            head: 'Date',
            keyName: 'date'
        },
        {
            head: 'Description',
            keyName: 'description'
        },
        {
            head: 'Income/Expense',
            keyName: 'type'
        },
        {
            head: 'Amount',
            keyName: 'amount'
        }
    ];

    constructor(props) {
        super(props)
        this.state = {
            incomeDetails: getAllIncomeData()
        }
    }

    editData(id) {
        history.push('/edit/' + id)
    }

    addData() {
        history.push('/add');
    }

    render() {
        return (
            <div className="main_container">
                <div className="add_hdr">
                    <button className="addbtn btn btn-primary" onClick={this.addData}>+ ADD</button>
                </div>
                <table className="table striped bordered">
                    <ListHead valueArr={this.valArr}></ListHead>
                    <ListComponent incomeArr={this.state.incomeDetails}
                        valueArr={this.valArr} onEdit={this.editData}></ListComponent>
                </table>
            </div>
        )
    }
}

export default Homepage;
