import React, { Component } from "react";
import edit from './../../assets/imgs/pen.png';
import './list.css';

class ListComponent extends Component {

    triggerEdit(row, e) {
        this.props.onEdit(row.row.id)
    }

    getSummary(index, curAmt, type) {
        let sum = 0;
        if (index) {
            if (type == 'INC')
                sum = parseInt(this.props.incomeArr[index - 1].summary) + parseInt(curAmt);
            else
                sum = parseInt(this.props.incomeArr[index - 1].summary) - parseInt(curAmt);
            this.props.incomeArr[index].summary = sum;
            return sum;
        }
        else {
            this.props.incomeArr[index].summary = curAmt;
            return curAmt;
        }
    }

    render() {
        return (
            <tbody>
                {
                    this.props.incomeArr.map((row, index) => {
                        return <tr key={row.id} className={row.type}>
                            {
                                this.props.valueArr.map((key, index) => {
                                    return <td key={index} className={key.keyName}>{row[key.keyName]}</td>
                                })
                            }
                            <td>{this.getSummary(index, row.amount, row.type)}</td>
                            <td key={row.id} onClick={this.triggerEdit.bind(this, { row })}>
                                <img src={edit} alt="Edit" className="editicon"></img></td>
                        </tr>
                    })
                }
            </tbody>
        )
    }
}

export default ListComponent;