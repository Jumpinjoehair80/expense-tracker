const nameInput = document.getElementById('name-input')
const dateInput = document.getElementById('date-input')
const amountInput = document.getElementById('amount-input')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => { 
    addExpense()
})

amountInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addExpense()
    }
})

function addExpense() {
    if(nameInput.value === '' || dateInput.value === '' || amountInput.value === '') {
        alert('Missing field!!')
        return false
    }
   
    const tableData = document.getElementById('table-data')

    let row = tableData.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell1.innerHTML = `${nameInput.value}`
    cell2.innerHTML = `${dateInput.value}`
    cell3.innerHTML = `$${amountInput.value}`
    cell4.innerHTML = `<button class="btn-delete" id="btn-delete">X</button>`
        
    const deleteBtn = document.getElementById('btn-delete')

    if(deleteBtn) {
       deleteBtn.addEventListener('click', (e) => {
           e.preventDefault()
           
           row.remove()
       })
      }

    nameInput.value = ''
    dateInput.value = ''
    amountInput.value = ''
}



