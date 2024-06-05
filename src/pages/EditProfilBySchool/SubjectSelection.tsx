import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { BlueFullButton, ButtonAddDiscipline, ButtonDeleteChild } from '../../components/Button/CustomButton';

interface SubjectSelectionProps {
    selectedSubjects: string[];
    availableSubjects: string[];
    handleSelectSubject: (subject: string) => void;
    handleRemoveSelectedSubject: (index: number) => void;
    handleOpenAddSubjectModal: () => void;
    handleCloseAddSubjectModal: () => void;
    showAddSubjectModal: boolean;
}

const SubjectSelection: React.FC<SubjectSelectionProps> = ({
    selectedSubjects,
    availableSubjects,
    handleSelectSubject,
    handleRemoveSelectedSubject,
    handleOpenAddSubjectModal,
    handleCloseAddSubjectModal,
    showAddSubjectModal
}) => {
    return (
        <div className="mt-4 flex flex-col items-center justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
            {selectedSubjects.length > 0 && (
                <div className="text-center mb-4">
                    <p className="text-blue-800">Matières sélectionnées :</p>
                    <ul className="mt-2">
                        {selectedSubjects.map((subject, index) => (
                            <li key={index} className="mb-2">
                                <ButtonDeleteChild
                                    onClick={() => handleRemoveSelectedSubject(index)}
                                    className="text-red-500 flex items-center justify-center"
                                >
                                    {subject} <FiMinusCircle className="ml-2" />
                                </ButtonDeleteChild>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="mt-4 mb-6">
                <BlueFullButton onClick={handleOpenAddSubjectModal}>Ajouter une matière</BlueFullButton>
            </div>

            {showAddSubjectModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto border border-gray-400">
                        <p className="mb-4 text-center">Sélectionnez une matière :</p>
                        <div className="mb-4 flex flex-wrap gap-2 justify-center">
                            {availableSubjects.map(subject => (
                                <ButtonAddDiscipline
                                    key={subject}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
                                    onClick={() => handleSelectSubject(subject)}
                                >
                                    <FiPlusCircle className="mr-2" /> {subject}
                                </ButtonAddDiscipline>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <BlueFullButton
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
                                onClick={handleCloseAddSubjectModal}
                            >
                                Fermer
                            </BlueFullButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubjectSelection;
