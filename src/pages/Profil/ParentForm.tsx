import React from "react";
import { Field, ErrorMessage } from "formik";

interface ParentFormProps {
    parent: any;
    formErrors: any;
    touched: any;
    handleChange: (e: React.ChangeEvent<any>) => void;
}

const ParentForm: React.FC<ParentFormProps> = ({ formErrors, touched }) => {
    return (
        <div>
            <div className="mt-10">
                <label htmlFor="firstname">Prénom</label>
                <Field
                    id="firstname"
                    name="firstname"
                    type="text"
                    className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                <ErrorMessage name="firstname" component="div" className="text-red-500" />
            </div>

            <div className="mt-6">
                <label htmlFor="lastname">Nom</label>
                <Field
                    id="lastname"
                    name="lastname"
                    type="text"
                    className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                <ErrorMessage name="lastname" component="div" className="text-red-500" />
            </div>

            <div className="mt-6">
                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
        </div>
    );
};

export default ParentForm;
