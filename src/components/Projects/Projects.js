// Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* First Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Parallelization Techniques in Deep Learning for Weather Classification in Images"
              description={[
                "Utilized diverse parallelization techniques such as multiprocessing, Dask, Data Parallelism, and Distributed Data Parallelism to optimize deep learning for weather image classification, managing computational complexity within diverse weather phenomena.",
                "Boosted model efficiency via rigorous CPU/GPU testing on Northeastern’s HPC cluster, achieving 1.5x expedited training times for accurate weather image classification.",
                "Evaluated parallel processing’s efficacy, balancing resources for efficient model training in accurate weather image classification."
              ]}
              ghLink="https://github.com/Dushyantm/Weather-Classification-using-Parallel-Deep-Learning" // Add your GitHub link here
            />
          </Col>

          {/* Second Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="GPT-based Language Model for Custom Script Generation"
              description={[
                "Designed and built a custom text generation model from the ground up, using Transformer architecture with multi-head self-attention and feed-forward networks, inspired by the 'Attention is All You Need' paper to grasp the core principles of LLMs.",
                "Trained the model to generate diverse scripts from various seed texts, demonstrating its adaptability and significantly enhancing the depth of storytelling across different genres."
              ]}
              ghLink="https://github.com/yourusername/gpt-script-generator" // Add your GitHub link here
            />
          </Col>

          {/* Third Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Reducing EHR Chart Burden with a Simple, Scalable, Clinician-Driven AI Approach"
              description={[
                "Developed and implemented a Retrieval-Augmented Generation (RAG) pipeline to automate summarization of Electronic Health Records (EHRs), reducing hallucinations and improving contextual accuracy by over 20%.",
                "Engineered and optimized prompt-based workflows for Large Language Models (LLMs), reducing clinician chart review time by 30%.",
                "Collaborated with subject matter experts to create a question-driven summarization framework, adaptable for various clinical tasks without extensive fine-tuning of the Llama 3 8b model."
              ]}              
              // ghLink="https://github.com/yourusername/editor.io" // Add your GitHub link here
              demoLink="https://aclanthology.org/2024.bionlp-1.63/" // Add your demo link here
            />
          </Col>
        </Row>
        {/*Fourth Project
        Optimized Fine-Tuning of LLMs on Apple Silicon (MLX + LoRA) | Link
        • Fine-tuned the Ministral-8B-Instruct model on a medical symptoms and diagnosis dataset, reducing test perplexity from 2.01 to
        1.42 and boosting response accuracy by 60% versus the baseline model
        • Implemented LoRA and QLoRA (4-bit quantization) on MLX, achieving 65% lower memory usage during training, and 2x faster
        inference speeds on Apple silicon*/}
        <Col md={4} className="project-card">
          <ProjectCard
            isBlog={false}
            title="Optimized Fine-Tuning of LLMs on Apple Silicon (MLX + LoRA)"
            description={[
              "Fine-tuned the Ministral-8B-Instruct model on a medical symptoms and diagnosis dataset, reducing test perplexity from 2.01 to 1.42 and boosting response accuracy by 60% versus the baseline model",
              "Implemented LoRA and QLoRA (4-bit quantization) on MLX, achieving 65% lower memory usage during training, and 2x faster inference speeds on Apple silicon"
            ]}
            blogLink="https://medium.com/@dummahajan/train-your-own-llm-on-macbook-a-15-minute-guide-with-mlx-6c6ed9ad036a"
          />
        </Col>
        
      </Container>
    </Container>
  );
}

export default Projects;
