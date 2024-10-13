import React from "react";
import { Field, ErrorMessage } from "formik";
import ButtonRemoveChild from "../../components/Button/ButtonRemoveChild.tsx";

interface ChildFormProps {
    child: any;
    index: number;
    handleDateChange: (date: string) => void;
    handleRemoveChild: () => void;
    formErrors: any;
    touched: any;
}

const ChildForm: React.FC<ChildFormProps> = ({
                                                 index,
                                                 handleDateChange,
                                                 handleRemoveChild,
                                                 formErrors,
                                                 touched,
                                             }) => {
    return (
        <div className="child-form">
            <div className="mt-10">
                <label htmlFor={`children.${index}.name`}>Prénom de l'enfant</label>
                <Field
                    id={`children.${index}.name`}
                    name={`children.${index}.name`}
                    type="text"
                    className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                <ErrorMessage name={`children.${index}.name`} component="div" className="text-red-500" />
            </div>

            <div className="mt-6">
                <label htmlFor={`children.${index}.birthday`}>Date de naissance</label>
                <Field
                    id={`children.${index}.birthday`}
                    name={`children.${index}.birthday`}
                    type="date"
                    className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                    onChange={(e) => handleDateChange(e.target.value)}
                />
                <ErrorMessage name={`children.${index}.birthday`} component="div" className="text-red-500" />
            </div>

            <div className="mt-6">
                <label htmlFor={`children.${index}.class`}>Classe</label>
                <Field
                    id={`children.${index}.class`}
                    name={`children.${index}.class`}
                    type="text"
                    className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                <ErrorMessage name={`children.${index}.class`} component="div" className="text-red-500" />
            </div>

                <div className='flex justify-end' onClick={handleRemoveChild}>
                    <ButtonRemoveChild />
                </div>

        </div>
    );
};

export default ChildForm;
