import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

function Experience() {
  const experiences = [
  {
      title: "AI Engineer",
      company: "OptiMe Health",
      duration: "Apr 2025 - Present",
      location: "Boston, Massachusetts, United States",
      type: "Full-time",
      responsibilities: [
        "Created an educational chatbot with personalized guidance, improving user engagement.",
        "Built RESTful APIs for LLM integration on AWS, leveraging Flask and Redis for scalable, event-driven architecture",
        "Deployed serverless AWS Lambda microservices for AI-driven document enhancement, optimizing user-specific workflows",
        "Integrated secure backend endpoints in Node.js to handle Stripe based subscription workflows via webhooks, integrating rate limiting for AI services and enforcing access controls to ensure compliant billing and usage"
      ]
    },
    {
      title: "Research Assistant",
      company: "Institute for Experiential AI at Northeastern University",
      duration: "May 2024 - Oct 2024 · 6 mos",
      location: "Boston, Massachusetts, United States",
      type: "Part-time",
      responsibilities: [
        "Researched and implemented a RAG pipeline for summarizing Electronic Health Records (EHRs) using MIMIC-IV dataset, reducing hallucinations and improving contextual accuracy in generated summaries.",
        "Engineered and enhanced prompt-based RAG workflows using a robust question driven summarization framework, achieving a 30% reduction in clinician chart review time, using locally hosted LLM models for patient data privacy."
      ]
    },
    {
      title: "Data Scientist Co-op",
      company: "RagaAI Inc",
      duration: "Jan 2024 - Jul 2024 · 7 mos",
      location: "Fremont, California, United States",
      type: "Full-time",
      responsibilities: [
        "Co-developed a framework with over 50 evaluation metrics for LLMs and RAG applications, enhancing model accuracy.",
        "Collaborated on developing an open-source observability tool, Raga AI Catalyst, for debugging systems with advanced analytics.",
        "Engineered Raga LLM Hub, reducing development timelines for bespoke RAG pipelines."
      ]
    },
    {
      title: "Data Science Consultant",
      company: "RagaAI Inc",
      duration: "May 2022 - Aug 2022 · 4 mos",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time",
      responsibilities: [
        "Architected an efficient API pipeline with an interactive dashboard to visualize clustering patterns in DNN embeddings; improved the speed of data insights generation for image classification tasks by over 30%.",
        "Leveraged AE, VAE, Variational Auto-Encoding Gaussian Mixture Model (VAEGMM) algorithms to identify outliers in high-dimensional datasets, improving anomaly detection accuracy by 40%."
      ]
    },
    {
      title: "Founding Software Engineer",
      company: "Askim Technologies Pvt. Ltd.",
      duration: "May 2020 - May 2022 · 2 yrs 1 mo",
      location: "Mumbai, Maharashtra, India",
      type: "Full-time",
      responsibilities: [
        "Designed, developed, and deployed a robust full-stack application utilizing the MERN stack.",
        "Increased click-through rate by 15% through A/B testing UI features.",
        "Implemented principles for user-centric design, and software development best practices."
      ]
    },
    {
      title: "Software Development Intern",
      company: "UPL",
      duration: "Dec 2019 - Jan 2020 · 2 mos",
      location: "Mumbai, Maharashtra, India",
      type: "Internship",
      responsibilities: [
        "Developed a custom plant images dataset with annotations and trained an object detection model for detecting objects and their length.",
        "Implemented data augmentation and hyperparameter tuning to achieve a model accuracy of 96% in real-world scenarios.",
        "Increased accuracy of object detection on plant by 30% and reduced human error by agronomists."
      ]
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <div className="timeline-container">
          <div className="timeline-track">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                {...experience}
              />
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Experience; 