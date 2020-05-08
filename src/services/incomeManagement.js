const incomeData = [
    {
        id: 1001,
        date: '2020-03-18',
        description: 'Salary Income',
        type: 'INC',
        amount: 20000
    },
    {
        id: 1002,
        date: '2020-03-20',
        description: 'Travel Expense',
        type: 'EXP',
        amount: 1000
    }
];

export const currentData = () => {
    let localData = JSON.parse(localStorage.getItem('data'));
    if (localData) return localData; else return [];
}

export const setInitDataToLocal = (data) => {
    localStorage.setItem('data', JSON.stringify(data))
}

export const getAllIncomeData = () => {
    let data = currentData();
    if (data.length > 0)
        return data;
    else
        setInitDataToLocal(incomeData);
}

export const addData = (data) => {
    let lsData = currentData();
    let lastDataId = lsData[lsData.length - 1].id;
    lastDataId++;
    data.id = lastDataId;
    lsData.push(data);
    setInitDataToLocal(lsData);
}

export const editData = (id, formData) => {
    let lsData = currentData();
    lsData = lsData.map(data => data.id == id ? formData : data)
    setInitDataToLocal(lsData)
}

export const getData = (id) => {
    let lsData = currentData();
    return lsData.find(data => data.id == id);
}
