import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS-nya

AOS.init();
import HeroImage from "/assets/Josey.png";

const Image = {
  HeroImage,
};

export default Image;

import Proyek1 from "/assets/proyek/NLP-1.png";
import Project1_detail from "/assets/proyek/NLP-2.png";
import Proyek2 from "/assets/proyek/SR-1.png";
import Project2_detail from "/assets/proyek/SR-2.png";
import Project22_detail from "/assets/proyek/SR-3.png";
import Proyek3 from "/assets/proyek/ML-1.png";
import Project3_detail from "/assets/proyek/ML-2.png";
import Project33_detail from "/assets/proyek/ML-3.png";
import Project333_detail from "/assets/proyek/ML-4.png";
import Proyek4 from "/assets/proyek/RM-1.png";
import Project4_detail from "/assets/proyek/RM-2.png";
import Proyek5 from "/assets/proyek/HCI-1.png";
import Project5_detail from "/assets/proyek/HCI-2.png";
import Project55_detail from "/assets/proyek/HCI-3.png";

export const listProyek = [
  {
    id: 1,
    images: [Proyek1, Project1_detail],
    nama: "Integrating Next Word Prediction Into Transcription",
    desk: "Each word in the transcript is evaluated using entropy to measure confidence. If confidence is low, the system triggers Next Word Prediction to suggest a more contextually appropriate word.",
    tools: ["Python", "Streamlit"],
    dad: "200",
    link: "https://github.com/joss51-ctrl/transcription-nextword-prediction"
  },
  {
    id: 2,
    images: [Proyek2, Project2_detail, Project22_detail],
    nama: "Live Transcription with Noise and Echo Cancellation",
    desk: "A real-time Transcription System that converts speech to text using noise reduction and echo cancellation. The app features interface where users can log in, access their transcription history, and export transcripts to .txt.",
    tools: ["Python", "React", "Vite", "Streamlit"],
    dad: "300",
    link:"https://github.com/Angga-laksana/Noise-Resistant-Live-Transcription"
  },
  {
    id: 3,
    images: [Proyek3, Project3_detail, Project33_detail, Project333_detail],
    nama: "Diabetes and Heart Disease Predicition",
    desk: "A machine learning application that predicts the risk of diabetes and heart disease based on medical features. The system integrates two classification models into one platform, allowing users to run both risk assessments through an interactive Streamlit interface.",
    tools: ["Python", "Streamlit"],
    dad: "400",
    link:"https://github.com/joss51-ctrl/Diabetes_HeartDiseasePrediction"
  },
  {
    id: 4,
    images: [Proyek4, Project4_detail],
    nama: "Kickstarter Funding Success Prediction",
    desk: "Developed and evaluated machine learning models for predicting Kickstarter funding success, and completed a research paper analyzing feature importance to identify key early-stage factors.",
    tools: ["Python"],
    dad: "500",
    link:"https://drive.google.com/file/d/1C3LM-A-5Qli_6Xhmx8oblAwLsth1ph0d/view?usp=sharing"
  },
  {
    id: 5,
    images: [Proyek5, Project5_detail, Project55_detail],
    nama: "Food Catering Website",
    desk: "Developed a simple website using HTML, CSS, and JavaScript. JavaScript is used to handle form validation and interactivity, while CSS provides a modern and responsive design.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "600",
    link:"https://github.com/joss51-ctrl/food_catering_website"
  },
 
];
