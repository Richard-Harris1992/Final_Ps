import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import formatDate from '../utilities/formatDate';

const Education = () => {
    const [education, setEducation] = useState([]);
    const [errors, setErrors] = useState({});

    const loadEducation = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/profile/education');
            setEducation(res.data);
        } catch (err) {
            setErrors(err.response.data);
        }
    };

    useEffect(() => {
        loadEducation();
    }, []);

    const deleteEducation = async (id) => {
        try {
            await axios.delete('http://localhost:5000/api/profile/education/${id}');
                loadEducation();
        } catch (err) {
            setErrors(err.response.data);
        }
    };

    const educations = education.map((edu) => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
                {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
            </td>
            <td>
                <button
                    onClick={() => deleteEducation(edu._id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    );
};

export default Education;