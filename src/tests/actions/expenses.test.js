import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('1234abcd', {note: 'New note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234abcd',
    updates: {
      note: 'New note value'
    }
  })

})

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Water Bill',
    note: 'July water bill',
    amount:45,
    createdAt: 100
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      description:'',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })  
})