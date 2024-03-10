import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function Expense() {
  return (
    <div>
        <ExpenseItem date='Mar 3, 2024' title='Book' amount='Pkr 500' />
        <ExpenseItem date='Mar 2, 2024' title='Dress' amount='Pkr 2500' />
        <ExpenseItem date='Mar 1, 2024' title='Shoes' amount='Pkr 1200' />
        <ExpenseItem date='Feb 28, 2024' title='Bag' amount='Pkr 1000' />
    </div>
  )
}
