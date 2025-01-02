import React from 'react';
import { motion } from 'framer-motion';
import './card.css'; // Add your styles here

const internships = [
  {
    role: "Machine Learning Research",
    company: "UCSD School of Medicine Carter Lab",
    duration: "November 2024 - Present",
    descriptionpart1: "Applying machine learning to analyze DNA sequences and predict methylation regions."
  },
  {
    role: "Data Science Intern",
    company: "Caterpillar",
    duration: "May 2024 - December 2024",
    descriptionpart1: "Directed a recommendation system enhancing user experience for over 200,000 new online customers, projected to generate $10 million in revenue.",
  },
  {
    role: "AI Research Intern",
    company: "Caterpillar",
    duration: "Aug 2023 - Dec 2023",
    descriptionpart1: "Conducted a comprehensive case study on GenAI, evaluating prompt repeatability and hallucinations"
  },
  {
    role: "Software Engineer Intern",
    company: "Caterpillar",
    duration: "May 2023 - Aug 2023",
    descriptionpart1: "Developed a visualization application for dealer targets, facilitating decision-making for 200+ dealers across 197 countries.",
    descriptionpart2: "Enhanced previous system, increasing approval ratings by 80% and resulted in a 90% increase in operational efficiency"
  },
  {
    role: "Field & Data Analytics Intern",
    company: " Missouri Asian American Youth Foundation ",
    duration: "Aug 2022 - May 2023",
    descriptionpart1: "Created data visualizations on voting patterns, viewed by over 10,000 voters, increased Asian American voter turnout by 30%."
  }
];

function Internships() {
  return (
    <div className="internships-container">
      <div className="scrollable-internship-cards">
      {internships.map((internship, index) => (
          <motion.div
            key={index}
            className="internship-card"
            whileHover={{ scale: 1.01}}
            whileTap={{ scale: 1.2}}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.3, delay: index * 0.001 }}
          >
            <h3>{internship.role}</h3>
            <p><span style={{ color: '#1097B5' }}><strong>Company:</strong></span> {internship.company}</p>
            <p><span style={{ color: '#1097B5' }}><strong>Duration:</strong></span> {internship.duration}</p>
            <p>{internship.descriptionpart1}</p>
            <p>{internship.descriptionpart2}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
