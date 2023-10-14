import React, { useState } from "react";

const PersonDetails = ({ person, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold">{person.name}</h2>
          <button onClick={onClose} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3">
          <img
            src={person.picture}
            alt={person.name}
            className="rounded-full w-16 h-16 cursor-pointer mx-auto"
          />
        </div>
        <div className="mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">Base:</span> {person.base}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Seniority:</span> {person.seniority}
          </p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const sampleData = [
    {
      name: 'John Doe',
      picture: '/1.jpeg',
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
    },
    {
      name: 'Jane Smith',
      picture: '/2.jpeg',
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
    },
    {
      name: 'Bob Johnson',
      picture: '/3.jpeg',
      base: 'SFO',
      seniority: '2 year Anniversary (2021, Mar 20)',
      channel: 'Eligible by Seniority',
    },
    {
      name: 'Alexis Rose',
      picture: '/4.jpeg',
      base: 'EWR',
      seniority: '1 year Anniversary (2022, Nov 10)',
      channel: 'Leader Identified',
    },
    {
      name: 'Abigail Smith',
      picture: '/5.jpeg',
      base: 'LAX',
      seniority: '2 year Anniversary (2021, Mar 25)',
      channel: 'FA Interested',
    },
    {
      name: 'Barney Stinson',
      picture: '/2.jpeg',
      base: 'NYC',
      seniority: '4 year Anniversary (2019, July 25)',
      channel: 'Leader Identified',
    },
    {
      name: 'Rachel Zelger',
      picture: '/1.jpeg',
      base: 'LAX',
      seniority: '3 year Anniversary (2020, Jan 19)',
      channel: 'Eligible by Seniority',
    },
    {
      name: 'Daniel Sam',
      picture: '/3.jpeg',
      base: 'MIA',
      seniority: '1 year Anniversary (2022, June 2)',
      channel: 'Leader Identified',
    },
    {
      name: 'Ted Mosby',
      picture: '/1.jpeg',
      base: 'ATL',
      seniority: '3 year Anniversary (2020, Dec 16)',
      channel: 'Eligible by Seniority',
    },
    {
      name: 'Jake Anderson',
      picture: '/4.jpeg',
      base: 'LAS',
      seniority: '2 year Anniversary (2021, May 12)',
      channel: 'FA Interested',
    },
    {
      name: 'Emma White',
      picture: '/5.jpeg',
      base: 'MCO',
      seniority: '4 year Anniversary (2019, Aug 30)',
      channel: 'Leader Identified',
    },
    {
      name: 'Olivia Miller',
      picture: '/2.jpeg',
      base: 'PHX',
      seniority: '1 year Anniversary (2022, July 5)',
      channel: 'Eligible by Seniority',
    },
    {
      name: 'Sophia Davis',
      picture: '/1.jpeg',
      base: 'ORD',
      seniority: '2 year Anniversary (2021, Feb 8)',
      channel: 'FA Interested',
    },
    {
      name: 'James Wilson',
      picture: '/3.jpeg',
      base: 'JFK',
      seniority: '3 year Anniversary (2020, Nov 7)',
      channel: 'Leader Identified',
    },
    {
      name: 'Lucas Harris',
      picture: '/2.jpeg',
      base: 'LGA',
      seniority: '1 year Anniversary (2022, Mar 18)',
      channel: 'FA Interested',
    },
    {
      name: 'Benjamin Lee',
      picture: '/4.jpeg',
      base: 'BOS',
      seniority: '2 year Anniversary (2021, Jan 7)',
      channel: 'Eligible by Seniority',
    },
    {
      name: 'Zoe Anderson',
      picture: '/1.jpeg',
      base: 'SEA',
      seniority: '3 year Anniversary (2020, Apr 11)',
      channel: 'Leader Identified',
    },
    {
      name: 'Ella Turner',
      picture: '/3.jpeg',
      base: 'MSP',
      seniority: '1 year Anniversary (2022, May 9)',
      channel: 'Eligible by Seniority',
    },
    {
      name: 'William Hill',
      picture: '/5.jpeg',
      base: 'PHL',
      seniority: '2 year Anniversary (2021, Feb 25)',
      channel: 'Leader Identified',
    },
    {
      name: 'Ava Wright',
      picture: '/2.jpeg',
      base: 'DCA',
      seniority: '3 year Anniversary (2020, Jul 8)',
      channel: 'FA Interested',
    },
    {
      name: 'Mia Parker',
      picture: '/4.jpeg',
      base: 'TPA',
      seniority: '4 year Anniversary (2019, Oct 4)',
      channel: 'Eligible by Seniority',
    },
  ];

  const [data, setData] = useState(sampleData);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filteredSortColumn, setFilteredSortColumn] = useState(null);
  const [filteredSortDirection, setFilteredSortDirection] = useState('asc');
  const [selectedPerson, setSelectedPerson] = useState(null);


  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    if (selectedValue === '') {
      setFilteredData([]);
    } else {
      const filtered = data.filter((item) => item.channel === selectedValue);
      setFilteredData(filtered);
    }
  };

  const handleSort = (columnName) => {
    if (selectedFilter === '') {
      // Sort the original data
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
    } else {
      // Sort the filtered data
      if (columnName === filteredSortColumn) {
        // Toggle sorting direction if the same column is clicked
        setFilteredSortDirection(filteredSortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        // Sort by a new column
        setFilteredSortColumn(columnName);
        setFilteredSortDirection('asc');
      }

      const sortedData = [...filteredData].sort((a, b) => {
        if (filteredSortDirection === 'asc') {
          return a[columnName].localeCompare(b[columnName]);
        } else {
          return b[columnName].localeCompare(a[columnName]);
        }
      });

      setFilteredData(sortedData);
    }
  };

  const openPersonDetails = (person) => {
    setSelectedPerson(person);
    setShowDetails(true);
  };

  const closePersonDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* ... (your other components) */}
      <table className="table-auto w-full bg-white border shadow-md rounded-md overflow-hidden">
        <thead>
          <tr>
            <th className="px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('name')}>
              Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th className="px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('base')}>
              Base {sortColumn === 'base' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th className="px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('seniority')}>
              Seniority {sortColumn === 'seniority' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th className="px-1 lg:px-4 py-2">
              Channel
              <select value={selectedFilter} onChange={handleFilterChange}>
                <option className=" text-center">Filter</option>
                <option value="FA Interested">FA Interested</option>
                <option value="Leader Identified">Leader Identified</option>
                <option value="Eligible by Seniority">Eligible by Seniority</option>
              </select>
            </th>
            <th className="px-1 lg:px-4 py-2 cursor-pointer">Pictures</th>
          </tr>
        </thead>
        <tbody>
          {(filteredData.length > 0 ? filteredData : data).map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}>
              <td className="px-1 lg:px-14 py-2">{item.name}</td>
              <td className="px-1 lg:px-14 py-2">{item.base}</td>
              <td className="px-1 lg:px-14 py-2">{item.seniority}</td>
              <td className="px-1 lg:px-14 py-2">{item.channel}</td>
              <td className="px-1 lg:px-14 py-2">
                <img
                  src={item.picture}
                  alt={item.name}
                  className="rounded-full w-10 h-10 cursor-pointer"
                  onClick={() => openPersonDetails(item)}

                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      {showDetails && (
        <PersonDetails person={selectedPerson} onClose={closePersonDetails} />
      )}
    </div>
  );
};

export default Dashboard;
