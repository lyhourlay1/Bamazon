export const fetchTransactions = () => (
    $.ajax({
        url: `api/transactions/`,
        method: 'get'
    })
);


export const createTransaction = transaction => (
    $.ajax({
        url: `api/transactions/`,
        method: 'POST',
        data: { transaction }
    })
);

