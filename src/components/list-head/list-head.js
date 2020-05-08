import React, { Component } from 'react';

class ListHead extends Component {
    render() {
        return (
            <thead className="thead-light">
                <tr>
                    {
                        this.props.valueArr.map((value, index) => {
                            return <th key={index}>{value.head}</th>
                        })
                    }
                    <th>Summary</th>
                    <th></th>
                </tr>
            </thead>
        )
    }
}

export default ListHead;