const transactionsUl = document.querySelector("#transactions")
const balanceH1 = document.querySelector("#balance")

const dummyTransactions = [
    {id: 1, name: 'Bolo brigadeiro', amout: -20.1},
    {id: 2, name: 'Salario', amout: 300},
    {id: 3, name: 'Torta de frango', amout: -10},
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amout < 0 ? "-" : "+"
    const CSSClass = transaction.amout < 0 ? "minus" : "plus"
    const amountWithoutOperator = Math.abs(transaction.amout)
    const li = document.createElement('li')
    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionsUl.prepend(li)
    console.log(li)
}

const updateBalanceValues = () => {
    const total = dummyTransactions.map(e => e.amout).reduce((e, acc) => e + acc).toFixed(2)
    balanceH1.textContent = `R$ ${total}`
    console.log(balanceH1)
}

const init = () => {
    dummyTransactions.forEach(transaction => addTransactionIntoDom(transaction))
    updateBalanceValues()
}

init()
