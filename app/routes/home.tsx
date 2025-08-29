import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Resume Checker"},
        {name: "description", content: "Smart feedback for your dream job"},
    ];
}

export default function Home() {
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

        <Navbar/>

        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Resume Score Checker - ATS </h1>
                <h2>Real-time updates on your job applications and resume feedback - Powered By AI</h2>
            </div>


            {resumes.length > 0 && (
                <div className="resumes-section">
                    {resumes.map((resume) => (
                        <ResumeCard key={resume.id} resume={resume}/>
                    ))}
                </div>
            )}
        </section>

    </main>
}
