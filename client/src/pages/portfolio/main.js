import React from 'react'
import BondPieChart from '../../components/BondPieCharts'
import BondChart from '../../components/BondCharts'

const Main = () => {
    return (
        <div>
            <div className="row">
                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    <div className="col-span-1">
                        <div className="row">
                            <h1 className='text-3xl my-5 font-extrabold'>Stock</h1>
                            <table className='mx-auto bg-blue-400 border-2 border-black mb-10 text-2xl'>
                                <tr>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Sr.No</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Name</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Price</th>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>1</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>BCG</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>220</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>2</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>HDFC Bank</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>578.8</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>3</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>Reliance Industry Limted</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>2440</td>
                                </tr>
                            </table>
                        </div>
                        <div className="row">
                            <h1 className='text-3xl my-5 font-extrabold'>Bond</h1>
                            <table className='mx-auto bg-green-300 border-2 border-black mb-10 text-2xl'>
                                <tr>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Sr.No</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Name</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Price</th>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>1</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>Indiabulls Housing Finanace</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>117</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>2</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>Blue Dart Express</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>6137</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>13</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>Britania Industry</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>4570</td>
                                </tr>
                            </table>
                        </div>


                    </div>
                    <div className="col-span-1">
                        <div className="row">
                            <h1 className='text-3xl my-10 font-extrabold'>Gold</h1>
                            <table className='mx-auto bg-yellow-400 border-2 border-black mb-10 text-2xl'>
                                <tr>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Sr.No</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Name</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Price</th>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>1</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>22-Carat(per gram)</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>5490</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>2</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>24-Carat(per gram)</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>6000</td>
                                </tr>
                            </table>
                        </div>
                        <div className="row">
                            <h1 className="text-3xl my-5 font-extrabold">Fixed Deposits</h1>
                            <table className='mx-auto bg-orange-400 border-2 border-black mb-10 text-2xl'>
                                <tr>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Sr.No</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Name</th>
                                    <th className='xl:px-10 border-solid border-2 border-black'>Stock Price</th>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>1</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>SBI</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>3.00 - 7.00%</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>2</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>HDFC</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>3.00 - 7.00%</td>
                                </tr>
                                <tr>
                                    <td className='xl:px-10 border-solid border-2 border-black'>3</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>ICICI</td>
                                    <td className='xl:px-10 border-solid border-2 border-black'>3.00-7.90%</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className='xl:flex xl:align-middle pb-20'>
                <div className='ml-0 xl:ml-44'>
                    <BondPieChart />
                </div>
                <div className=' ml-0 xl:mt-20'>
                    <BondChart />
                </div>

            </div>

        </div>
    )
}

export default Main
