import React, { useState } from "react";

const PersonDetails = ({ person, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold">{person.name}</h2>
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
            <span className="font-bold">Base:</span> {person.base}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Seniority:</span> {person.seniority}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Objective:</span> {person.objective}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Education:</span> {person.education}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Certifications:</span> {person.certifications}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Skills:</span> {person.skills}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Languages:</span> {person.languages}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">References:</span> {person.references}
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
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]\nGraduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants- CPR and First Aid Certification",
      skills: "- Exceptional customer service skills- Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Jane Smith',
      picture: '/2.jpeg',
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Bob Johnson',
      picture: '/3.jpeg',
      base: 'SFO',
      seniority: '2 year Anniversary (2021, Mar 20)',
      channel: 'Eligible by Seniority',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Alexis Rose',
      picture: '/4.jpeg',
      base: 'EWR',
      seniority: '1 year Anniversary (2022, Nov 10)',
      channel: 'Leader Identified',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Ted Mosby',
      picture: '/1.jpeg',
      base: 'ATL',
      seniority: '3 year Anniversary (2020, Dec 16)',
      channel: 'Eligible by Seniority',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Ella Turner',
      picture: '/3.jpeg',
      base: 'MSP',
      seniority: '1 year Anniversary (2022, May 9)',
      channel: 'Eligible by Seniority',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'William Hill',
      picture: '/5.jpeg',
      base: 'PHL',
      seniority: '2 year Anniversary (2021, Feb 25)',
      channel: 'Leader Identified',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Ava Wright',
      picture: '/2.jpeg',
      base: 'DCA',
      seniority: '3 year Anniversary (2020, Jul 8)',
      channel: 'FA Interested',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
    },
    {
      name: 'Mia Parker',
      picture: '/4.jpeg',
      base: 'TPA',
      seniority: '4 year Anniversary (2019, Oct 4)',
      channel: 'Eligible by Seniority',
            objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State]  Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request" 
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
