import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should setup add expense default reducer',() => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expenses by id',() => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found',() => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// should add an expense
test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Water',
      note: '',
      amount: 20,
      createdAt: 0
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})


// should edit an expense
test('should edit an expense',() => {
  const note = 'January rent'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note
    }
    
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].note).toEqual(note)
})


// should not edit expense if expense not found
test('should not edit an expense if id not found',() => {
  const note = 'January rent'
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note
    }
    
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})