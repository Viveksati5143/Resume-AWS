// pages/experiences.js

import { ExperienceCard } from '@/components/ExperienceCard'; // Import the ExperienceCard component

const experiences = [
  {
    title: 'Frontend Developer at XYZ Corp.',
    description: 'Worked on building interactive websites and applications using React, JavaScript, and CSS.',
    date: 'January 2020 - Present',
  },
  {
    title: 'Backend Developer at ABC Ltd.',
    description: 'Developed and maintained RESTful APIs and worked with databases such as PostgreSQL and MongoDB.',
    date: 'June 2018 - December 2019',
  },
  {
    title: 'Intern at Tech Solutions',
    description: 'Assisted with full-stack development and debugging web applications.',
    date: 'June 2017 - May 2018',
  },
  {
    title: 'Web Developer at WebWorks',
    description: 'Developed dynamic websites using HTML, CSS, JavaScript, and WordPress.',
    date: 'January 2016 - May 2017',
  },
  {
    title: 'Software Engineer at NextTech',
    description: 'Worked with machine learning algorithms and contributed to cloud-based services.',
    date: 'August 2020 - Present',
  },
  {
    title: 'Junior Developer at Future Tech',
    description: 'Collaborated in the development of a mobile app using React Native.',
    date: 'July 2019 - August 2020',
  },
];

export default function ExperiencesPage() {
  return (
    <div className="container mx-auto p-8 max-w-screen-xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">My Experiences</h1>
      <div className="grid grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            description={experience.description}
            date={experience.date}
          />
        ))}
      </div>
    </div>
  );
}
