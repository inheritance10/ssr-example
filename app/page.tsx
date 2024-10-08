import React from "react";
import FilterForm from "@/app/components/Filter";
import CharacterCard from "@/app/components/CharacterCard";

async function getCharacters(page: number, status: string, gender: string) {
    const query = new URLSearchParams({
        page: String(page),
        status: status || '',
        gender: gender || '',
    });

    const res = await fetch(`https://rickandmortyapi.com/api/character?${query}`);
    const data = await res.json();

    return data;
}

export default async function Home({ searchParams }: { searchParams: any }) {
    const page = searchParams.page ? Number(searchParams.page) : 1;
    const status = searchParams.status || '';
    const gender = searchParams.gender || '';

    // Fetch characters on server side
    const data = await getCharacters(page, status, gender);
    const characters = data.results || []; // Defaults to an empty array
    const totalPages = data.info?.pages || 1; // Default to 1 if pages are not available

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>

            {/* Filter Component */}
            <FilterForm status={status} gender={gender} />

            {/* Loading Indicator */}
            {characters.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-spin"></div>
                    <span className="ml-4 text-lg">Loading...</span>
                </div>
            ) : (
                <>
                    {/* Characters List */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {characters.map((character: any) => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </ul>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-between items-center">
                        <a
                            href={`/?page=${Math.max(page - 1, 1)}&status=${status}&gender=${gender}`}
                            className={`bg-blue-500 text-white rounded px-4 py-2 ${
                                page <= 1 ? "opacity-50 pointer-events-none" : ""
                            }`}
                        >
                            Previous
                        </a>
                        <span className="mx-2">Page {page} of {totalPages}</span>
                        <a
                            href={`/?page=${Math.min(page + 1, totalPages)}&status=${status}&gender=${gender}`}
                            className={`bg-blue-500 text-white rounded px-4 py-2 ${
                                page >= totalPages ? "opacity-50 pointer-events-none" : ""
                            }`}
                        >
                            Next
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}
