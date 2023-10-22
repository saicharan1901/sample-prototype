import React from "react";
import { useState } from "react";
const Dashboard = () => {
    const sampleData = [
        {
            name: 'John Doe',
            picture: '1.jpeg',
            base: 'IAH',
            seniority: '3 year Anniversary (2020, Sep 01)',
        },
        {
            name: 'Jane Smith',
            picture: '2.jpeg',
            base: 'ORD',
            seniority: '4 year Anniversary (2019, Oct 15)',

        },
        {
            name: 'Bob Johnson',
            picture: '3.jpeg',
            base: 'SFO',
            seniority: '2 year Anniversary (2021, Mar 20)',

        },
        {
            name: 'Alexis Rose',
            picture: '4.jpeg',
            base: 'EWR',
            seniority: '1 year Anniversary (2022, Nov 10)',

        },
        {
            name: 'Abigail Smith',
            picture: '5.jpeg',
            base: 'DEN',
            seniority: '2 year Anniversary (2021, Mar 25)',

        },
    ];
    const [data, setData] = useState(sampleData);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const handleSort = (columnName) => {
        if (columnName === sortColumn) {
            // Toggle sorting direction if the same column is clicked
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // Sort by a new column
            setSortColumn(columnName);
            setSortDirection('asc');
        }
        const sortedData = [...data].sort((a, b) => {
            if (sortDirection === 'asc') {
                return a[columnName].localeCompare(b[columnName]);
            } else {
                return b[columnName].localeCompare(a[columnName]);
            }
        });
        setData(sortedData);
    };
    return (
        <div className="bg-gray-300 min-h-screen">
            <div className="px-6 ">
                <div className="py-7 px-2 font-bold lg:text-6xl text-3xl lg:text-left text-center text-white rounded-lg mb-4 mt5  bg-gray-700">
                    AMPLIFY
                </div>
            </div>
            <div className="px-6">
                <div className="py-3 px-2 w-full font-semibold lg:text-left text-center rounded-lg text-2xl mb-5 text-white bg-gray-700">
                    Dashboard
                </div>
            </div>
            <div className="px-6">
                <div className="py-3 px-2 w-full font-semibold lg:text-left text-center rounded-lg text-2xl mb-6 text-white bg-gray-700">
                    Potential Leaders
                </div>
            </div>
            <div className="container mx-auto lg:py-4 py-1 lg:px-10 px-1 lg:w-full lg:text-xl text-xs  ">
                <table className="table-auto w-full bg-white border shadow-md rounded-md overflow-hidden">
                    <thead>
                        <tr>
                            <th className=" px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('name')}>
                                Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
                            </th>
                            <th className=" px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('base')}>
                                Base {sortColumn === 'base' && (sortDirection === 'asc' ? '▲' : '▼')}
                            </th>
                            <th className=" px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('seniority')}>
                                Seniority {sortColumn === 'seniority' && (sortDirection === 'asc' ? '▲' : '▼')}
                            </th>
                            <th className=" px-1 lg:px-4 py-2">Channel</th>
                            <th className=" px-1 lg:px-4 py-2 cursor-pointer">
                                Pictures
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}>
                                <td className="px-1 lg:px-14 py-2">{item.name}</td>
                                <td className="px-1 lg:px-14 py-2">{item.base}</td>
                                <td className="px-1 lg:px-14 py-2">{item.seniority}</td>
                                <td className="px-1 lg:px-14 py-2">
                                    <select className="border p-1" defaultValue={item.channel}>
                                        <option value="1">FA Interested</option>
                                        <option value="2">Leader Identified</option>
                                        <option value="3">Eligible by Seniority</option>
                                    </select>
                                </td>
                                <td className="px-1 lg:px-14 py-2">
                                    <img src={`/${item.picture}`} alt={item.name} className="rounded-full w-10 h-10" />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};
export default Dashboard;