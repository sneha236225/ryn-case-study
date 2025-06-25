import React from 'react'

const ExpertiseCard = ({ item }) => {
    return (
        <div
            className="bg-[#1A1A1A] px-6 py-4 rounded-xl shadow-sm border border-[#333] md:bg-transparent md:p-0 md:rounded-none md:shadow-none md:border-none transition"
        >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">▪ {item.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-snug sm:leading-relaxed">
                {item.description}
            </p>
        </div>
    )
}

export default ExpertiseCard
