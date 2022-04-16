const nameInput = document.getElementById('name-input')
const dateInput = document.getElementById('date-input')
const amountInput = document.getElementById('amount-input')
const btn = document.getElementById('btn')

// Set localStorage
function saveLocalStorage() {
    localStorage.setItem('name', JSON.stringify(nameInput.value));
    localStorage.setItem('date', JSON.stringify(dateInput.value));        localStorage.setItem('amount', JSON.stringify(amountInput.value));
}
console.log(saveLocalStorage())

// Stored values of localStorage
const storedName = localStorage.getItem('name')
const storedDate = localStorage.getItem('date')
const storedAmount = localStorage.getItem('amount')


// Event listeners to add expenses to list
btn.addEventListener('click', () => { 
    addExpense()
})

amountInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addExpense()
    }
})

function addExpense() {
    // Shows alert if all fields are not entered
    if(nameInput.value === '' || dateInput.value === '' || amountInput.value === '') {
        alert('Missing field!!')
        return false
    }
   
    // Adds a row showing name, date, amount
    const tableData = document.getElementById('table-data')
    let row = tableData.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell1.innerHTML = `${nameInput.value}`
    cell2.innerHTML = `${dateInput.value}`
    cell3.innerHTML = `$${amountInput.value}`

    // Local storage inserted into cells
    if(saveLocalStorage != undefined) {
        cell1.innerHTML = storedName
        cell2.innerHTML = storedDate
        cell3.innerHTML = storedAmount
    }

    // Adds delete btn to expense row
    if(tableData) {
        cell4.innerHTML = `<button class="btn-delete" id="btn-delete">X</button>`
    }
        
    const deleteBtn = document.getElementById('btn-delete')

    if(deleteBtn) {
       deleteBtn.addEventListener('click', (e) => {
           e.preventDefault()
           
           row.remove()
       })
      }

    // Sets value of each input to clear after an expense is added  
    nameInput.value = ''
    dateInput.value = ''
    amountInput.value = ''
}



