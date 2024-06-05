import React, { ChangeEvent } from 'react';

interface ParentFormProps {
    parents: {
        firstName: string;
        lastName: string;
        email: string;
    };
    formErrors: { [key: string]: string };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ParentForm: React.FC<ParentFormProps> = ({ parents, formErrors, handleChange }) => {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-4">
                <label htmlFor="lastName">Nom</label>
                <input
                    type="text"
                    name="lastName"
                    value={parents.lastName}
                    onChange={handleChange}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                {formErrors.lastName && <p className="text-red-500">{formErrors.lastName}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="firstName">Prénom</label>
                <input
                    type="text"
                    name="firstName"
                    value={parents.firstName}
                    onChange={handleChange}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                {formErrors.firstName && <p className="text-red-500">{formErrors.firstName}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={parents.email}
                    onChange={handleChange}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
            </div>
        </div>
    );
};

export default ParentForm;
