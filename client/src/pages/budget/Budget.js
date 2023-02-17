import React from 'react'
import BudgetCard from './BudgetCard'

const Budget = () => {
  return (
    <div>
      <div className="row mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
            <BudgetCard title="Government Bonds, FD's" risk="Low Risk" />
            <BudgetCard title="Stocks, Mutual Funds" risk="Moderate Risk" />
            <BudgetCard title="Stocks" risk="High Risk" />
        </div>
      </div>
    </div>
  )
}

export default Budget
