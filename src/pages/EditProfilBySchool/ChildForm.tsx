import React, { ChangeEvent } from 'react';
import ButtonRemoveChild from '../../components/Button/ButtonRemoveChild';

interface ChildFormProps {
    child: {
        firstName: string;
        name: string;
        birthday: string;
        class: string;
    };
    index: number;
    formErrors: { [key: string]: string };
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleDateChange: (date: Date | null, index: number) => void;
    handleRemoveChild: (index: number) => void;
}

const ChildForm: React.FC<ChildFormProps> = ({ child, index, formErrors, handleChange, handleDateChange, handleRemoveChild }) => {
    return (
        <div key={index} className="p-4 sm:p-6 md:p-8">
            <div className="mb-4">
                <label htmlFor={`firstName_${index}`}>Prénom de l'enfant {index + 1}</label>
                <input
                    type="text"
                    name={`firstName_${index}`}
                    value={child.firstName}
                    onChange={handleChange}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                {formErrors[`child_${index}_firstName`] && <p className="text-red-500">{formErrors[`child_${index}_firstName`]}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor={`name_${index}`}>Nom de l'enfant {index + 1}</label>
                <input
                    type="text"
                    name={`name_${index}`}
                    value={child.name}
                    onChange={handleChange}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                {formErrors[`child_${index}_name`] && <p className="text-red-500">{formErrors[`child_${index}_name`]}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor={`birthday_${index}`}>Date de naissance de l'enfant {index + 1}</label>
                <input
                    type="date"
                    name={`birthday_${index}`}
                    value={child.birthday}
                    onChange={(e) => handleDateChange(new Date(e.target.value), index)}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                />
                {formErrors[`child_${index}_birthday`] && <p className="text-red-500">{formErrors[`child_${index}_birthday`]}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor={`class_${index}`}>Classe de l'enfant {index + 1}</label>
                <select
                    name={`class_${index}`}
                    value={child.class}
                    onChange={handleChange}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                >
                    <option value="">Sélectionner une classe</option>
                    <option value="CP">CP</option>
                    <option value="CE1">CE1</option>
                    <option value="CE2">CE2</option>
                    <option value="CM1">CM1</option>
                    <option value="CM2">CM2</option>
                </select>
                {formErrors[`child_${index}_class`] && <p className="text-red-500">{formErrors[`child_${index}_class`]}</p>}
            </div>
            {index > 0 && (
                <div onClick={() => handleRemoveChild(index)}>
                    <ButtonRemoveChild />
                </div>
            )}
        </div>
    );
};

export default ChildForm;
