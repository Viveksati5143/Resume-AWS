 import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Crc from '@/images/logos/crc.svg'
import Pipeline from '@/images/logos/pipeline.png'
import Sentiment from '@/images/logos/sentiment.png'
import Credit from '@/images/logos/credit.jpeg'
import Latex from '@/images/logos/latex.png'
import Iblog from '@/images/logos/iblog.png'

const projects = [
  {
    name: 'Cloud Resume Challenge',
    description:
      'The Cloud Resume Challenge was created by Forrest Brazeal to help individuals gain hands-on experience where participants build and deploy a personal resume website using Cloud services.',
    link: {
      href: 'https://resume.viveksati.online',
      label: 'resume.viveksati.online',
    },
    logo: Crc,
  },
  {
    name: 'Pipeline as a Code',
    description:
      'Implemented a Jenkins Maven Project based on Pipeline as a Code, Deployed the war file on the tomcat server and configured Slack notifications for different stages of the pipeline.',
    link: {
      href: 'https://github.com/Viveksati5143?tab=repositories',
      label: 'github.com',
    },
    logo: Pipeline,
  },
  {
    name: 'Sentimental Analysis',
    description:
      'Developed an ML project for recognizing sentiments using Logistic Regression with 93% accuracy and utilized Python libraries used such as NumPy, Pandas, scikit-learn, matplotlib and NLTK.',
    link: { 
      href: 'https://github.com/Viveksati5143/Sentimental-Analysis', 
      label: 'sentimental-analysis' 
    },
    logo: Sentiment,
  },
  {
    name: 'Credit card Fraud Detection',
    description:
      'Built a Credit card Fraud Detection system using Machine Learning with Python using the Logistic Regression model which can detect credit card fraudulent transactions..',
    link: {
      href: 'https://github.com/Viveksati5143/Credit-Card-Fraud-Detection',
      label: 'Credit-Card-Fraud-Detection',
    },
    logo: Credit,
  },
  {
    name: 'Resume',
    description:
      'Learning and drafting at the same time - Resume written using Latex.',
    link: {
      href: 'https://github.com/Viveksati5143/Resume',
      label: 'code for resume',
    },
    logo: Latex,
  },
  {
    name: 'iBlog',
    description:
      'Contributed to iBlog - A dynamic blogging platform for valuable information.',
    link: {
      href: 'https://github.com/Viveksati5143/iBlog',
      label: 'iBlog.com',
    },
    logo: Iblog,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Apps I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've created in an effort to make my mark on the universe."
      intro="I’ve worked on numerous Cloud, DevOps, web apps and machine learning projects over the years, but these are the ones I'm most proud of. Take a look at the projects, and feel free to email me with any suggestions on how I can improve."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
