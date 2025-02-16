// components/ExperienceCard.js

export function ExperienceCard({ title, description, date }) {
  return (
    <div className="experience-card p-6 mb-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="text-gray-500 text-sm mb-2 dark:text-gray-400">{date}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
