import Image from "next/image";
import React from "react";

interface CharacterCardProps {
    character: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <li className="bg-gray-100/80 p-4 rounded shadow hover:shadow-lg transition-shadow animate-fadeInDown">
            <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
                className="rounded"
            />
            <h2 className="text-xl font-bold mt-2 text-gray-800">{character.name}</h2>
            <p className="text-gray-600"><strong>Status:</strong> {character.status}</p>
            <p className="text-gray-600"><strong>Species:</strong> {character.species}</p>
            <p className="text-gray-600"><strong>Gender:</strong> {character.gender}</p>
            <p className="text-gray-600"><strong>Location:</strong> {character.location.name}</p>
        </li>
    );
};

export default CharacterCard;
