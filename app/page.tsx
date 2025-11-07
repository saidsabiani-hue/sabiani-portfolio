"use client";

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link text-light" href="#about">Über mich</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#career">Beruflicher Werdegang</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#skills-details">Qualifikationen</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#competences">Fachliche Kompetenzen</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#contact">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="text-center text-dark py-3 mt-5 bg-white">
                <div className="container d-flex flex-column align-items-center">
                    <img
                        src="/Bild2.jpg"
                        alt="Profilbild"
                        className="rounded-circle mb-2 border border-3"
                        style={{
                            borderColor: "#6c757d",
                            width: "120px",
                            objectFit: "cover",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                        }}
                    />
                    <h1 className="fw-bold mb-1" style={{ fontSize: "1.8rem", letterSpacing: "0.5px" }}>Said Sabiani</h1>
                    <p className="lead mb-0 text-secondary" style={{ fontSize: "1rem" }}>
                        Senior .NET & Fullstack Entwickler | Angular | C# | SQL
                    </p>
                </div>
            </header>

            {/* Über mich */}
            <section id="about" className="bg-light py-5">
                <div className="container">
                    <h4 className="text-center mb-4 text-dark">Über mich</h4>
                    <div className="d-flex align-items-start">
                        <i className="bi bi-person-workspace text-secondary fs-1 me-3"></i>
                        <div>
                            <p className="lead mb-3 text-dark">
                                Ich bin Diplom-Informatiker (FH) mit über 15 Jahren Erfahrung in der Entwicklung von Web- und Unternehmensanwendungen. <br /><br />
                                Seit 2017 arbeite ich bei der Commerzbank als .NET-Entwickler und betreue komplexe interne Anwendungen im Organisations- und Sicherheitsumfeld der Bank – von der Konzeption über die Implementierung bis hin zur Wartung und kontinuierlichen Weiterentwicklung.
                            </p>
                            <p className="mb-3 text-dark">
                                Ich lege großen Wert auf sauberen, wartbaren Code, automatisierte Prozesse und eine gute Zusammenarbeit im Team. Besonders spannend finde ich die Kombination von Backend-Architektur, modernen Frontend-Frameworks und Cloud-Technologien.
                            </p>
                            <blockquote className="blockquote border-start border-4 border-secondary ps-3">
                                <p className="mb-0 fst-italic text-secondary">
                                    Mich zeichnet eine strukturierte, ruhige und lösungsorientierte Arbeitsweise aus – ich übernehme Verantwortung und finde pragmatische Lösungen, die langfristig funktionieren.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beruflicher Werdegang */}
            <section id="career" className="py-5 bg-light">
                <div className="container">
                    <h4 className="text-center mb-5 text-dark">Beruflicher Werdegang</h4>
                    <div className="position-relative border-start border-3 border-secondary ps-4">
                        {/* Commerzbank */}
                        <div className="mb-5 position-relative">
                            <div className="position-absolute top-0 start-0 translate-middle bg-secondary rounded-circle" style={{ width: "16px", height: "16px" }}></div>
                            <div className="card shadow-sm border-0 ms-4">
                                <div className="card-body text-dark">
                                    <h6 className="fw-bold">01.07.2017 – heute | <strong>Commerzbank AG</strong></h6>
                                    <p className="mb-2 text-secondary"><em>Softwareentwickler</em></p>
                                    <ul className="mb-0">
                                        <li>Weiterentwicklung und Betreuung interner Portale (Arbeitsplatz-, Workflow-, Unterweisungs-, Schlüsselverwaltungs- und Policy-Portal)</li>
                                        <li>Migration bestehender Portale auf moderne Architekturen</li>
                                        <li>Prozessautomatisierung und UI-Optimierung</li>
                                        <li>Ausbau der CI/CD-Pipeline zur Automatisierung und Qualitätssicherung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* GFT */}
                        <div className="mb-5 position-relative">
                            <div className="position-absolute top-0 start-0 translate-middle bg-secondary rounded-circle" style={{ width: "16px", height: "16px" }}></div>
                            <div className="card shadow-sm border-0 ms-4">
                                <div className="card-body text-dark">
                                    <h6 className="fw-bold">01.01.2017 – 30.06.2017 | <strong>GFT Technologies SE</strong></h6>
                                    <p className="mb-2 text-secondary"><em>Softwareentwickler</em></p>
                                    <ul className="mb-0">
                                        <li>Neuentwicklung des Arbeitsplatzportals der Commerzbank (ASP.NET/C#, jQuery)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Quipu */}
                        <div className="position-relative">
                            <div className="position-absolute top-0 start-0 translate-middle bg-secondary rounded-circle" style={{ width: "16px", height: "16px" }}></div>
                            <div className="card shadow-sm border-0 ms-4">
                                <div className="card-body text-dark">
                                    <h6 className="fw-bold">01.04.2010 – 31.07.2016 | <strong>Quipu GmbH</strong></h6>
                                    <p className="mb-2 text-secondary"><em>Softwareentwickler</em></p>
                                    <ul className="mb-0">
                                        <li>Entwicklung und Implementierung von Features in CW.NET und E-Banking, inklusive Schnittstellen zu internationalen Finanzsystemen</li>
                                        <li>Installation und Betreuung von E-Banking-, Mobile-Banking- und RSA-Lösungen auf IIS Windows Servern</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Ausbildung */}
                        <div className="position-relative mt-5">
                            <div className="position-absolute top-0 start-0 translate-middle bg-secondary rounded-circle" style={{ width: "16px", height: "16px" }}></div>
                            <div className="card shadow-sm border-0 ms-4">
                                <div className="card-body text-dark">
                                    <h6 className="fw-bold">2003 – 2008 | <strong>Fachhochschule FFM</strong></h6>
                                    <p className="mb-2 text-secondary"><em>Diplom-Informatiker (FH)</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualifikationen und Technologien */}
            <section id="skills-details" className="py-5 bg-light">
                <div className="container">
                    <h4 className="mb-4 text-center text-dark">Qualifikationen & Technologien</h4>
                    <div className="row g-4 text-dark">

                        {/* Programmierung */}
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">💻 Programmierung</h6>
                                    <p>C#, .NET (MVC, Web API, Entity Framework, LINQ), Angular, TypeScript, JavaScript, jQuery, HTML5, CSS3, Bootstrap</p>
                                </div>
                            </div>
                        </div>

                        {/* Frontend */}
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">🌐 Frontend</h6>
                                    <p>Entwicklung dynamischer Benutzeroberflächen mit jQuery und Plugins wie Validation Engine, Select2, EasyComplete, Summernote, TreeSelect (Mehrfachauswahl), JsTree (Hierarchien)</p>
                                </div>
                            </div>
                        </div>

                        {/* Backend & Performance */}
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">⚙️ Backend & Performance</h6>
                                    <p>Optimierung von Datenzugriffen, Caching-Mechanismen, Active Directory-Integration, Mehrsprachigkeit, Unit-/Load-Tests, Logging, Base64-Verarbeitung von Formulardaten, Verschlüsselung/Entschlüsselung & E-Mail-Sicherheit (AES, CFB, SHA-256, CNG, XOR, PKCS#1 v1.5 Padding, TLS 1.2 für SMTP)</p>
                                </div>
                            </div>
                        </div>

                        {/* Automatisierung & Jobs */}
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">🤖 Automatisierung & Jobs</h6>
                                    <p>Entwicklung von Skripten und Konsolenanwendungen in .NET für SQL Server Agent Jobs und Windows Scheduled Tasks</p>
                                </div>
                            </div>
                        </div>

                        {/* Datenbanken */}
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">🗄 Datenbanken</h6>
                                    <p>T-SQL (Stored Procedures, Views, Scalar- und Tabellenwertfunktionen, Trigger), Performance-Tuning, SSRS</p>
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">🛠 Tools</h6>
                                    <p>Visual Studio, Resharper, CodeMaid, MS Office, Jira, Gemini, Confluence</p>
                                </div>
                            </div>
                        </div>

                        {/* CI/CD & DevOps */}
                        <div className="col-12">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold text-dark mb-2">🚀 CI/CD & DevOps</h6>
                                    <p>Aufbau und Pflege automatisierter Build-, Test- und Deployment-Pipelines (TeamCity, Bitbucket, SonarQube, Sonatype, Wasp, TFS) inkl. Codeanalyse und Bereitstellung auf IIS/SQL Server</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fachliche Kompetenzen */}
            <section id="competences" className="py-5 bg-light">
                <div className="container">
                    <h4 className="text-center mb-5 text-dark">Fachliche Kompetenzen</h4>
                    <div className="row g-4 text-dark">

                        {/* Banking & Finanzwesen */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center">
                                    <div className="text-secondary mb-3">
                                        <i className="bi bi-bank2 fs-1"></i>
                                    </div>
                                    <h5 className="fw-bold">Banking & Finanzwesen</h5>
                                    <p className="text-secondary mt-3">
                                        Fundiertes Wissen über Zahlungsverkehr, Konto- und Kreditprozesse, SEPA, EBICS sowie Routing & Clearing
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Arbeitsplatz-Portal */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center">
                                    <div className="text-secondary mb-3">
                                        <i className="bi bi-laptop fs-1"></i>
                                    </div>
                                    <h5 className="fw-bold">Arbeitsplatz-Portal</h5>
                                    <p className="text-secondary mt-3">
                                        Digitalisierung und Automatisierung interner Arbeitsprozesse durch digitale Formulare für Störungs-, Berechtigungs- und Serviceanfragen
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Finanzmathematik */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center">
                                    <div className="text-secondary mb-3">
                                        <i className="bi bi-graph-up-arrow fs-1"></i>
                                    </div>
                                    <h5 className="fw-bold">Finanzmathematik</h5>
                                    <p className="text-secondary mt-3">
                                        Entwicklung einer Toolbox zur Berechnung von Konvexität und Rendite (Yield) von Anleihen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kontakt */}
            <section id="contact" className="py-5 bg-light">
                <div className="container text-center text-dark">
                    <h4 className="mb-5">Kontakt</h4>
                    <p className="mb-5">Ich freue mich über Ihre Nachricht oder eine Kontaktaufnahme über eines der folgenden Netzwerke:</p>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 fs-5">
                        <div>
                            <i className="bi bi-envelope text-secondary fs-3 me-2"></i>
                            <a href="mailto:said.sabiani@gmail.com" className="text-decoration-none text-dark fw-semibold">said.sabiani@gmail.com</a>
                        </div>
                        <div>
                            <i className="bi bi-linkedin text-secondary fs-3 me-2"></i>
                            <a href="https://linkedin.com/in/said-sabiani-313145397" target="_blank" className="text-decoration-none text-dark fw-semibold">LinkedIn</a>
                        </div>
                        <div>
                            <i className="bi bi-x-circle text-secondary fs-3 me-2"></i>
                            <a href="https://www.xing.com/profile/Said_Sabiani" target="_blank" className="text-decoration-none text-dark fw-semibold">Xing</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-light text-center py-4">
                &copy; 2025 Said Sabiani – Alle Rechte vorbehalten
            </footer>
        </>
    );
}
