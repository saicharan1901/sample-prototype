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
      name: 'Benjamin Roberts (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'DEN',
      seniority: '4 year Anniversary (2019, Sep 08)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'John Smith (M)',
      picture: '/1.jpeg',
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },
    {
      name: 'Mary Johnson (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },
    {
      name: 'Kevin Thomas (M)',
      picture: '/3.jpeg', // Picture 3 for male
      base: 'EWR',
      seniority: '9 month Anniversary (2022, Jul 5)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Robert Davis (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },


    {
      name: 'Andrew Baker (M)',
      picture: '/1.jpeg', // Picture 1 for male
      base: 'SFO',
      seniority: '6 year Anniversary (2017, Jan 30)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Jennifer Jones (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },
    {
      name: 'Olivia Evans (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'LAX',
      seniority: '4 year Anniversary (2019, Mar 25)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Lily Cooper (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'SFO',
      seniority: '2 year Anniversary (2021, Jun 10)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Emily White (F)',
      picture: '/3.jpeg', // Picture 3 for female
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },

    {
      name: 'David Wilson (M)',
      picture: '/1.jpeg', // Picture 1 for male
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Laura Harris (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Elizabeth Turner (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'William Turner (M)',
      picture: '/3.jpeg', // Picture 3 for male
      base: 'LAX',
      seniority: '5 year Anniversary (2018, Jan 12)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Amanda Gray (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'EWR',
      seniority: '3 year Anniversary (2020, Dec 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Chloe Mitchell (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'DEN',
      seniority: '3 year Anniversary (2020, Nov 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Sarah Williams (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },

    {
      name: 'Matthew Lewis (M)',
      picture: '/3.jpeg', // Picture 3 for male
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Natalie Wood (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'DEN',
      seniority: '1 year Anniversary (2022, May 5)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Christopher Hall (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Emma Reed (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'SFO',
      seniority: '5 year Anniversary (2018, Mar 12)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Ava Adams (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'SFO',
      seniority: '4 year Anniversary (2019, Nov 08)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Daniel Clark (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Richard Carter (M)',
      picture: '/3.jpeg', // Picture 3 for male
      base: 'SFO',
      seniority: '4 year Anniversary (2019, Dec 16)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Grace Morgan (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'SFO',
      seniority: '3 year Anniversary (2020, Feb 20)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Charles Murphy (M)',
      picture: '/5.jpeg', // Picture 5 for male
      base: 'SFO',
      seniority: '3 year Anniversary (2020, Apr 25)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Katherine Hayes (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'LAX',
      seniority: '9 month Anniversary (2022, Jun 5)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Victoria Green (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'DEN',
      seniority: '5 year Anniversary (2018, Apr 22)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'William Taylor (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },


    {
      name: 'Samuel Nelson (M)',
      picture: '/1.jpeg', // Picture 1 for male
      base: 'DEN',
      seniority: '2 year Anniversary (2021, Mar 10)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Olivia Walker (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Ryan Ross (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'DEN',
      seniority: '1 year Anniversary (2022, Jun 20)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Anna Parker (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'DEN',
      seniority: '6 month Anniversary (2022, Sep 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },


    {
      name: 'Michael Brown (M)',
      picture: '/3.jpeg', // Picture 3 for male
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },

    {
      name: 'Justin Price (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'LAX',
      seniority: '3 year Anniversary (2020, Nov 18)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Rachel Miller (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'EWR',
      seniority: '9 month Anniversary (2022, Jul 10)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Thomas Scott (M)',
      picture: '/1.jpeg', // Picture 1 for male
      base: 'DEN',
      seniority: '6 year Anniversary (2017, Feb 15)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Henry Foster (M)',
      picture: '/3.jpeg', // Picture 3 for male
      base: 'LAX',
      seniority: '1 year Anniversary (2022, Feb 12)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Jacob Simpson (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'LAX',
      seniority: '9 month Anniversary (2022, Jul 10)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Zachary Bennett (M)',
      picture: '/1.jpeg', // Picture 1 for male
      base: 'EWR',
      seniority: '4 year Anniversary (2019, Nov 8)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

    {
      name: 'Jonathan Murphy (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'EWR',
      seniority: '2 year Anniversary (2021, Feb 20)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Leah Phillips (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'LAX',
      seniority: '2 year Anniversary (2021, Mar 10)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'James Anderson (M)',
      picture: '/4.jpeg', // Picture 4 for male
      base: 'IAH',
      seniority: '3 year Anniversary (2020, Sep 01)',
      channel: 'Leader Identified',
      objective: `Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.`,
      education: `High School Diploma\nName of High School], [City, State]\nGraduation Date: [Month Year]`,
      certifications: `- FAA Certification for Flight Attendants\n- CPR and First Aid Certification`,
      skills: `- Exceptional customer service skills\n- Knowledge of safety and emergency procedures\n- Effective communication and interpersonal skill\n- Attention to detail and organization`,
      languages: 'Fluent in English and Spanish',
      references: 'Available upon request',
    },
    {
      name: 'Megan White (F)',
      picture: '/4.jpeg', // Picture 4 for female
      base: 'EWR',
      seniority: '1 year Anniversary (2022, May 10)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Sophia King (F)',
      picture: '/5.jpeg', // Picture 5 for female
      base: 'ORD',
      seniority: '4 year Anniversary (2019, Oct 15)',
      channel: 'FA Interested',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },


    {
      name: 'Alexander Adams (M)',
      picture: '/1.jpeg', // Picture 1 for male
      base: 'EWR',
      seniority: '9 month Anniversary (2022, Aug 15)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },
    {
      name: 'Joseph Hill (M)',
      picture: '/2.jpeg', // Picture 2 for male
      base: 'SFO',
      seniority: '5 year Anniversary (2018, Sep 25)',
      channel: 'Leader Identified',
      objective: 'Motivated and enthusiastic individual seeking a Flight Attendant position with a reputable airline to provide excellent passenger service and ensure safety during flights.',
      education: 'High School Diploma Name of High School], [City, State] Graduation Date: [Month Year]',
      certifications: "- FAA Certification for Flight Attendants  - CPR and First Aid Certification",
      skills: "- Exceptional customer service skills - Knowledge of safety and emergency procedures - Effective communication and interpersonal skill - Attention to detail and organization",
      languages: "Fluent in English and Spanish",
      references: "Available upon request"
    },

  ];


  const parsedData = JSON.parse(JSON.stringify(sampleData));

  // // Replace \n with <br> for line breaks
  // parsedData.education = parsedData.education.replace(/\n/g, '<br>');
  // parsedData.certifications = parsedData.certifications.replace(/\n/g, '<br>');
  // parsedData.skills = parsedData.skills.replace(/\n/g, '<br>');

  const [data, setData] = useState(sampleData);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filteredSortColumn, setFilteredSortColumn] = useState(null);
  const [filteredSortDirection, setFilteredSortDirection] = useState('asc');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedBaseFilter, setSelectedBaseFilter] = useState('');



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

  const handleBaseFilterChange = (event) => {
    const selectedBaseValue = event.target.value;
    setSelectedBaseFilter(selectedBaseValue);

    if (selectedBaseValue === '') {
      setFilteredData([]);
    } else {
      const filtered = data.filter((item) => item.base === selectedBaseValue);
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
            <th className="px-1 lg:px-4 py-2">
              <select value={selectedBaseFilter} onChange={handleBaseFilterChange}>
                <option value="">Base</option>
                <option value="IAH">IAH</option>
                <option value="ORD">ORD</option>
                <option value="SFO">SFO</option>
                {/* Add other base options as needed */}
              </select>
            </th>

            <th className="px-1 lg:px-4 py-2 cursor-pointer" onClick={() => handleSort('seniority')}>
              Seniority {sortColumn === 'seniority' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th className="px-1 lg:px-4 py-2">
              <select value={selectedFilter} onChange={handleFilterChange}>
                <option className=" text-center">Channel</option>
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
