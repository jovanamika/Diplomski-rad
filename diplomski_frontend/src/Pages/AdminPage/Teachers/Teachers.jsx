import React from 'react';
import '../../AdminPage/Style.scss';
import { useState } from 'react';

const Teachers= () => {

  const [activeItem, setActiveItem] = useState('Svi studenti'); //u zavisnosti od activeItem prikazujemo 
                                                                //podatke
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Lorem ipsum dolor sit amet',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-10',
      priority: 'High',
      status: 'Active',
      therapist: 'Dr. Smith',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john.doe@example.com',
        description: 'Lorem ipsum dolor sit amet',
        createdDate: '2023-05-01',
        updatedDate: '2023-05-10',
        priority: 'High',
        status: 'Active',
        therapist: 'Dr. Smith',
      },
      {
        id: 3,
        name: 'John Doe',
        email: 'john.doe@example.com',
        description: 'Lorem ipsum dolor sit amet',
        createdDate: '2023-05-01',
        updatedDate: '2023-05-10',
        priority: 'High',
        status: 'Active',
        therapist: 'Dr. Smith',
      },
      {
        id: 4,
        name: 'John Doe',
        email: 'john.doe@example.com',
        description: 'Lorem ipsum dolor sit amet',
        createdDate: '2023-05-01',
        updatedDate: '2023-05-10',
        priority: 'High',
        status: 'Active',
        therapist: 'Dr. Smith',
      },
      {
        id: 5,
        name: 'John Doe',
        email: 'john.doe@example.com',
        description: 'Lorem ipsum dolor sit amet',
        createdDate: '2023-05-01',
        updatedDate: '2023-05-10',
        priority: 'High',
        status: 'Active',
        therapist: 'Dr. Smith',
      },
      {
        id: 6,
        name: 'John Doe',
        email: 'john.doe@example.com',
        description: 'Lorem ipsum dolor sit amet',
        createdDate: '2023-05-01',
        updatedDate: '2023-05-10',
        priority: 'High',
        status: 'Active',
        therapist: 'Dr. Smith',
      }
  ];

  return (
    <div>
      <div className="wrapper">
          <div className="right-content">
            <table>
              <thead>
                <tr>
                  <th>Ime</th>
                  <th>Email</th>
                  <th>Opis</th>
                  <th>Datum kreiranja</th>
                  <th>Datum ažuriranja</th>
                  <th>Prioritet</th>
                  <th>Status</th>
                  <th>Terapeut</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.description}</td>
                    <td>{student.createdDate}</td>
                    <td>{student.updatedDate}</td>
                    <td>{student.priority}</td>
                    <td>{student.status}</td>
                    <td>{student.therapist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Teachers;