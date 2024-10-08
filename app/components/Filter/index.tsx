import React from "react";

interface FilterFormProps {
    status: string;
    gender: string;
}

const FilterForm: React.FC<FilterFormProps> = ({ status, gender }) => {
    return (
        <form method="get" className="flex space-x-4 mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
            {/* Status Filter */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-1" htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    defaultValue={status}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
                >
                    <option value="">All Status</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-1" htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    defaultValue={gender}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
                >
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>


            <div className="flex flex-col justify-end">
                <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105">
                    Filter
                </button>
            </div>
        </form>
    );
};

export default FilterForm;
