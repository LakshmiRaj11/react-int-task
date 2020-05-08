import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import './add-edit.css';
import { addData, getData, editData } from '../../services/incomeManagement';
import history from './../../history';
import backarrow from './../../assets/imgs/left-arrow.png';

class AddEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            formData: {
                date: '',
                description: '',
                type: '',
                amount: '',
            }
        }
        this.validator = new SimpleReactValidator();
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        }, () => {
            if (this.state.id) {
                let data = getData(this.state.id);
                this.setState({ formData: data })
            }
        });
    }

    addFormdata = () => {
        if (this.validator.allValid()) {
            addData(this.state.formData);
            history.push('/');
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    editFormdata = () => {
        editData(this.state.id, this.state.formData);
        history.push('/');
    }

    changeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let statusCopy = Object.assign({}, this.state);
        statusCopy.formData[name] = value;
        this.setState(statusCopy)
    }

    render() {
        return (
            <div className="container">
                <h4 className="header">
                    <span className="backarrow" onClick={history.goBack}>
                        <img src={backarrow} alt="back"></img> </span>
                    {this.state.id ? 'EDIT' : 'ADD'}</h4>
                <div className="row">
                    <div className="col-12 col-sm-4 mb-30">
                        <input type="date" className="fullwidth" placeholder="Date" name="date"
                            value={this.state.formData.date} onChange={this.changeEvent}></input>
                        {this.validator.message('date', this.state.formData.date, 'required')}
                    </div>
                    <div className="col-12 col-sm-4 mb-30">
                        <select className="fullwidth" placeholder="Income/Expense" name="type"
                            value={this.state.formData.type} onChange={this.changeEvent}>
                            <option value='' disabled>Income/Expense</option>
                            <option value="INC">Income</option>
                            <option value="EXP">Expense</option>
                        </select>
                        {this.validator.message('income/expense', this.state.formData.type, 'required')}
                    </div>
                    <div className="col-12 col-sm-4 mb-30">
                        <input type="number" className="fullwidth" placeholder="Amount" name="amount"
                            value={this.state.formData.amount} onChange={this.changeEvent}></input>
                        {this.validator.message('amount', this.state.formData.amount, 'required|numeric|min:1,num')}
                    </div>
                    <div className="col-12 col-sm-12 mb-30">
                        <textarea className="fullwidth" placeholder="Description" name="description"
                            rows="5" value={this.state.formData.description} onChange={this.changeEvent}></textarea>
                        {this.validator.message('description', this.state.formData.description, 'required')}
                    </div>
                    <div className="col-4 offset-4">
                        <button type="submit" className="btn btn-primary btn-block"
                            onClick={this.state.id ? this.editFormdata : this.addFormdata}>
                            {this.state.id ? 'UPDATE' : 'ADD'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEdit;