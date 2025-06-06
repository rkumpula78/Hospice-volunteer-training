// Training data
const trainingData = {
  "training_modules": [
    {
      "id": 1,
      "title": "Introduction to Hospice Care",
      "duration": "30 minutes",
      "learning_objectives": [
        "Understand the philosophy and goals of hospice care",
        "Learn about Medicare Hospice Conditions of Participation",
        "Identify the role of volunteers in the interdisciplinary team"
      ],
      "content": {
        "overview": "Hospice care focuses on comfort, dignity, and quality of life for terminally ill patients and their families.",
        "key_points": [
          "Hospice emphasizes comfort over cure",
          "Care is provided by an interdisciplinary team",
          "Medicare requires 5% of patient care hours be provided by volunteers",
          "Volunteers provide non-clinical support services"
        ],
        "regulations": "Medicare Conditions of Participation require comprehensive volunteer training and integration into patient care"
      },
      "quiz": [
        {
          "question": "What percentage of patient care hours must be provided by volunteers according to Medicare requirements?",
          "options": ["3%", "5%", "10%", "15%"],
          "correct": 1
        }
      ]
    },
    {
      "id": 2,
      "title": "Patient Confidentiality & HIPAA Compliance",
      "duration": "45 minutes",
      "learning_objectives": [
        "Understand HIPAA requirements for volunteers",
        "Learn to protect patient health information",
        "Identify appropriate information sharing practices"
      ],
      "content": {
        "overview": "HIPAA applies to all healthcare workers, including volunteers, requiring protection of patient health information.",
        "key_points": [
          "Volunteers are considered part of the workforce under HIPAA",
          "Protected Health Information (PHI) includes any health data that can identify a patient",
          "Information can only be shared for Treatment, Payment, and Operations (TPO)",
          "Violations can result in significant penalties"
        ],
        "best_practices": [
          "Never discuss patient information in public areas",
          "Only access information needed for your volunteer role",
          "Report any suspected privacy breaches immediately",
          "Shred documents containing patient information"
        ]
      },
      "quiz": [
        {
          "question": "Which of the following is considered Protected Health Information (PHI)?",
          "options": ["Patient's medical condition", "Patient's name", "Patient's address", "All of the above"],
          "correct": 3
        }
      ]
    },
    {
      "id": 3,
      "title": "Volunteer Roles and Responsibilities",
      "duration": "25 minutes",
      "learning_objectives": [
        "Define appropriate volunteer duties and boundaries",
        "Understand the scope of volunteer services",
        "Learn about ethical behavior expectations"
      ],
      "content": {
        "overview": "Volunteers provide non-medical support including companionship, respite care, and bereavement support.",
        "appropriate_activities": [
          "Companionship and emotional support",
          "Respite care for family caregivers",
          "Light household tasks",
          "Transportation to appointments",
          "Bereavement support"
        ],
        "boundaries": [
          "No clinical or medical care",
          "No medication administration",
          "No lifting or moving patients",
          "No making medical decisions"
        ]
      },
      "quiz": [
        {
          "question": "Which activity is appropriate for a hospice volunteer?",
          "options": ["Administering medication", "Providing companionship", "Making medical decisions", "Performing clinical assessments"],
          "correct": 1
        }
      ]
    },
    {
      "id": 4,
      "title": "Communication Skills",
      "duration": "40 minutes",
      "learning_objectives": [
        "Develop active listening techniques",
        "Learn compassionate communication approaches",
        "Practice difficult conversation skills"
      ],
      "content": {
        "overview": "Effective communication is essential for supporting terminally ill patients and their families.",
        "techniques": [
          "Active listening without interrupting",
          "Empathetic responses and validation",
          "Open-ended questions",
          "Non-verbal communication awareness",
          "Comfortable presence in silence"
        ],
        "difficult_situations": [
          "When patients express anger or frustration",
          "Dealing with family conflicts",
          "Supporting during moments of grief",
          "Responding to spiritual concerns"
        ]
      },
      "quiz": [
        {
          "question": "What is the most important communication skill for hospice volunteers?",
          "options": ["Giving advice", "Active listening", "Talking about personal experiences", "Avoiding emotional topics"],
          "correct": 1
        }
      ]
    },
    {
      "id": 5,
      "title": "Infection Control and Safety",
      "duration": "35 minutes",
      "learning_objectives": [
        "Understand standard precautions",
        "Learn proper use of personal protective equipment",
        "Identify infection control procedures"
      ],
      "content": {
        "overview": "Infection control protects both volunteers and patients from disease transmission.",
        "standard_precautions": [
          "Hand hygiene before and after patient contact",
          "Use of appropriate PPE when indicated",
          "Safe handling of contaminated materials",
          "Proper disposal of waste materials"
        ],
        "ppe_guidelines": [
          "Gloves for contact with body fluids",
          "Masks when respiratory symptoms present",
          "Gowns for protection from contamination",
          "Proper donning and doffing procedures"
        ]
      },
      "quiz": [
        {
          "question": "When should hand hygiene be performed?",
          "options": ["Only before patient contact", "Only after patient contact", "Before and after patient contact", "Only when hands appear dirty"],
          "correct": 2
        }
      ]
    },
    {
      "id": 6,
      "title": "Cultural Sensitivity",
      "duration": "30 minutes",
      "learning_objectives": [
        "Understand diverse cultural perspectives on death",
        "Learn culturally responsive communication",
        "Respect different spiritual and religious beliefs"
      ],
      "content": {
        "overview": "Cultural competence ensures respectful care for patients and families from diverse backgrounds.",
        "key_concepts": [
          "Culture influences views on illness, death, and dying",
          "Family roles and decision-making vary by culture",
          "Religious and spiritual practices may differ",
          "Communication styles vary across cultures"
        ],
        "best_practices": [
          "Ask about cultural preferences and needs",
          "Respect different mourning practices",
          "Avoid assumptions based on appearance",
          "Use professional interpreters when needed"
        ]
      },
      "quiz": [
        {
          "question": "How should volunteers approach cultural differences?",
          "options": ["Assume all families are the same", "Ask about cultural preferences", "Avoid discussing cultural topics", "Apply your own cultural values"],
          "correct": 1
        }
      ]
    },
    {
      "id": 7,
      "title": "End-of-Life Care and Bereavement Support",
      "duration": "45 minutes",
      "learning_objectives": [
        "Understand the stages of grief",
        "Learn to support families during the dying process",
        "Develop bereavement support skills"
      ],
      "content": {
        "overview": "Supporting families through the dying process and bereavement requires special skills and sensitivity.",
        "grief_stages": [
          "Denial and isolation",
          "Anger",
          "Bargaining",
          "Depression",
          "Acceptance"
        ],
        "support_techniques": [
          "Presence and active listening",
          "Validation of emotions",
          "Practical assistance",
          "Respecting individual coping styles",
          "Connecting families with resources"
        ]
      },
      "quiz": [
        {
          "question": "What is the most important thing a volunteer can provide during bereavement?",
          "options": ["Advice on moving forward", "Presence and listening", "Distractions from grief", "Quick solutions to problems"],
          "correct": 1
        }
      ]
    },
    {
      "id": 8,
      "title": "Ethical and Legal Responsibilities",
      "duration": "35 minutes",
      "learning_objectives": [
        "Understand ethical principles in hospice care",
        "Learn about advance directives and patient rights",
        "Recognize legal boundaries for volunteers"
      ],
      "content": {
        "overview": "Volunteers must understand ethical principles and legal requirements governing hospice care.",
        "ethical_principles": [
          "Autonomy - respecting patient choices",
          "Beneficence - acting in patient's best interest",
          "Non-maleficence - do no harm",
          "Justice - fair treatment for all"
        ],
        "legal_considerations": [
          "Advance directives and living wills",
          "Patient rights and decision-making",
          "Mandatory reporting requirements",
          "Scope of volunteer practice"
        ]
      },
      "quiz": [
        {
          "question": "What should a volunteer do if asked to perform a task outside their scope?",
          "options": ["Try to help anyway", "Politely decline and contact supervisor", "Ask the family to do it", "Ignore the request"],
          "correct": 1
        }
      ]
    },
    {
      "id": 9,
      "title": "Documentation and Reporting",
      "duration": "25 minutes",
      "learning_objectives": [
        "Learn proper documentation techniques",
        "Understand reporting requirements",
        "Practice accurate record-keeping"
      ],
      "content": {
        "overview": "Accurate documentation ensures continuity of care and regulatory compliance.",
        "documentation_requirements": [
          "Record all volunteer activities",
          "Note any changes in patient condition",
          "Document family interactions and concerns",
          "Report hours worked accurately"
        ],
        "reporting_procedures": [
          "Report concerns to supervisor immediately",
          "Document objective observations, not opinions",
          "Use clear, professional language",
          "Maintain confidentiality in all records"
        ]
      },
      "quiz": [
        {
          "question": "What should be included in volunteer documentation?",
          "options": ["Personal opinions about the family", "Objective observations only", "Medical diagnoses", "Gossip about other staff"],
          "correct": 1
        }
      ]
    },
    {
      "id": 10,
      "title": "Emergency Procedures",
      "duration": "40 minutes",
      "learning_objectives": [
        "Learn emergency response protocols",
        "Understand when to call for help",
        "Practice emergency communication skills"
      ],
      "content": {
        "overview": "Volunteers must know how to respond appropriately to emergency situations while maintaining focus on comfort care.",
        "emergency_protocols": [
          "Assess the situation calmly",
          "Contact hospice team immediately",
          "Provide comfort and reassurance",
          "Follow established procedures"
        ],
        "when_to_call": [
          "Sudden changes in patient condition",
          "Family requests for immediate help",
          "Safety concerns",
          "Patient or family distress"
        ]
      },
      "quiz": [
        {
          "question": "In an emergency, a volunteer's first priority should be to:",
          "options": ["Provide medical treatment", "Call 911 immediately", "Contact the hospice team", "Leave the scene"],
          "correct": 2
        }
      ]
    },
    {
      "id": 11,
      "title": "Ongoing Education and Evaluation",
      "duration": "20 minutes",
      "learning_objectives": [
        "Understand the importance of continuous learning",
        "Learn about evaluation processes",
        "Develop self-assessment skills"
      ],
      "content": {
        "overview": "Ongoing education ensures volunteers maintain competency and provide high-quality care.",
        "continuing_education": [
          "Quarterly training sessions",
          "Annual competency assessments",
          "Specialty training opportunities",
          "Peer support and mentoring"
        ],
        "evaluation_components": [
          "Self-assessment tools",
          "Supervisor feedback",
          "Family and patient feedback",
          "Performance improvement plans"
        ]
      },
      "quiz": [
        {
          "question": "How often should volunteers participate in continuing education?",
          "options": ["Only during initial training", "Annually", "Quarterly", "When problems arise"],
          "correct": 2
        }
      ]
    }
  ],
  "final_assessment": [
    {
      "question": "What is the primary goal of hospice care?",
      "options": ["Cure the patient", "Prolong life at all costs", "Provide comfort and dignity", "Reduce healthcare costs"],
      "correct": 2
    },
    {
      "question": "Under HIPAA, volunteers are considered:",
      "options": ["Visitors", "Workforce members", "Independent contractors", "Family members"],
      "correct": 1
    },
    {
      "question": "Which is NOT an appropriate volunteer activity?",
      "options": ["Providing companionship", "Administering medications", "Offering respite care", "Light housekeeping"],
      "correct": 1
    },
    {
      "question": "The most important communication skill for volunteers is:",
      "options": ["Giving advice", "Sharing personal stories", "Active listening", "Avoiding difficult topics"],
      "correct": 2
    },
    {
      "question": "When should hand hygiene be performed?",
      "options": ["Only when hands are visibly dirty", "Before patient contact only", "After patient contact only", "Before and after patient contact"],
      "correct": 3
    }
  ]
};

// Application state
let currentModule = null;
let progress = JSON.parse(localStorage.getItem('hospiceTrainingProgress') || '{}');
let assessmentScore = null;

// User data management
let userData = {
    fullName: '',
    email: '',
    organization: '',
    startDate: '',
    completedModules: [],
    assessmentScore: null
};

// DOM elements
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const mainContent = document.getElementById('mainContent');
const pageTitle = document.getElementById('pageTitle');
const overallProgress = document.getElementById('overallProgress');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    setupEventListeners();
    loadUserData();
    populateModulesList();
    populateModulesGrid();
    updateProgressIndicators();
}

function setupEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => sidebar.classList.add('open'));
    closeSidebar.addEventListener('click', () => sidebar.classList.remove('open'));

    // Navigation links
    document.addEventListener('click', function(e) {
        if (e.target.matches('.nav-link') || e.target.closest('.nav-link')) {
            e.preventDefault();
            const link = e.target.closest('.nav-link');
            const view = link.getAttribute('data-view');
            const moduleId = link.getAttribute('data-module');
            
            if (moduleId) {
                showModule(parseInt(moduleId));
            } else {
                showView(view);
            }
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            sidebar.classList.remove('open');
        }
    });

    // Module navigation
    document.getElementById('prevModule').addEventListener('click', () => navigateModule(-1));
    document.getElementById('nextModule').addEventListener('click', () => navigateModule(1));

    // Quiz functionality
    document.getElementById('submitQuiz').addEventListener('click', submitQuiz);
    document.getElementById('completeModule').addEventListener('click', completeModule);

    // Assessment
    document.getElementById('submitAssessment').addEventListener('click', submitAssessment);

    // Certificate
    document.getElementById('printCertificate').addEventListener('click', () => window.print());

    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('modalOk').addEventListener('click', closeModal);

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        userData.fullName = document.getElementById('fullName').value;
        userData.email = document.getElementById('email').value;
        userData.organization = document.getElementById('organization').value;
        userData.startDate = document.getElementById('startDate').value;
        
        // Save user data
        saveUserData();
        
        // Show dashboard
        showDashboard();
    });
}

function populateModulesList() {
    const modulesList = document.getElementById('modulesList');
    modulesList.innerHTML = '';
    
    trainingData.training_modules.forEach(module => {
        const li = document.createElement('li');
        const isCompleted = progress[module.id]?.completed || false;
        
        li.innerHTML = `
            <a href="#" data-view="module" data-module="${module.id}" class="nav-link ${isCompleted ? 'completed' : ''}">
                <i class="fas fa-book"></i> ${module.title}
            </a>
        `;
        modulesList.appendChild(li);
    });
}

function populateModulesGrid() {
    const modulesGrid = document.getElementById('modulesGrid');
    modulesGrid.innerHTML = '';
    
    trainingData.training_modules.forEach(module => {
        const isCompleted = progress[module.id]?.completed || false;
        
        const moduleCard = document.createElement('div');
        moduleCard.className = `card module-card ${isCompleted ? 'completed' : ''}`;
        moduleCard.innerHTML = `
            <div class="card__body">
                <div class="module-number">Module ${module.id}</div>
                <h3>${module.title}</h3>
                <div class="module-duration">
                    <i class="fas fa-clock"></i>
                    ${module.duration}
                </div>
            </div>
        `;
        
        moduleCard.addEventListener('click', () => showModule(module.id));
        modulesGrid.appendChild(moduleCard);
    });
}

function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    
    // Show selected view
    const targetView = document.getElementById(viewName);
    if (targetView) {
        targetView.classList.add('active');
        
        // Update page title
        const titles = {
            'dashboard': 'Training Dashboard',
            'final-assessment': 'Final Assessment',
            'certificate': 'Certificate of Completion'
        };
        pageTitle.textContent = titles[viewName] || 'Hospice Volunteer Training';
    }
}

function showModule(moduleId) {
    currentModule = trainingData.training_modules.find(m => m.id === moduleId);
    if (!currentModule) return;
    
    // Show module view
    showView('module');
    
    // Update navigation
    updateModuleNavigation();
    
    // Populate module content
    populateModuleContent();
    
    // Update page title
    pageTitle.textContent = currentModule.title;
}

function updateModuleNavigation() {
    const prevBtn = document.getElementById('prevModule');
    const nextBtn = document.getElementById('nextModule');
    const moduleProgress = document.getElementById('moduleProgress');
    
    const currentIndex = trainingData.training_modules.findIndex(m => m.id === currentModule.id);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === trainingData.training_modules.length - 1;
    
    moduleProgress.textContent = `Module ${currentIndex + 1} of ${trainingData.training_modules.length}`;
}

function populateModuleContent() {
    // Module header
    document.getElementById('moduleTitle').textContent = currentModule.title;
    document.getElementById('moduleDuration').innerHTML = `<i class="fas fa-clock"></i> ${currentModule.duration}`;
    
    // Learning objectives
    const objectivesList = document.getElementById('moduleObjectives');
    objectivesList.innerHTML = '';
    currentModule.learning_objectives.forEach(objective => {
        const li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
    
    // Module content
    const contentBody = document.getElementById('moduleContentBody');
    contentBody.innerHTML = '';
    
    // Overview section
    const overviewSection = document.createElement('div');
    overviewSection.className = 'content-section';
    overviewSection.innerHTML = `
        <h3>Overview</h3>
        <p>${currentModule.content.overview}</p>
    `;
    contentBody.appendChild(overviewSection);
    
    // Dynamic content sections
    Object.keys(currentModule.content).forEach(key => {
        if (key === 'overview') return;
        
        const section = document.createElement('div');
        section.className = 'content-section';
        
        const title = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        section.innerHTML = `<h3>${title}</h3>`;
        
        const content = currentModule.content[key];
        if (Array.isArray(content)) {
            const ul = document.createElement('ul');
            ul.className = key.replace(/_/g, '-');
            content.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            section.appendChild(ul);
        } else {
            const p = document.createElement('p');
            p.textContent = content;
            section.appendChild(p);
        }
        
        contentBody.appendChild(section);
    });
    
    // Quiz
    populateModuleQuiz();
}

function populateModuleQuiz() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';
    
    if (!currentModule.quiz || currentModule.quiz.length === 0) return;
    
    const quiz = currentModule.quiz[0]; // Taking first quiz question
    
    const quizQuestion = document.createElement('div');
    quizQuestion.className = 'quiz-question';
    quizQuestion.innerHTML = `
        <h4>${quiz.question}</h4>
        <div class="quiz-options">
            ${quiz.options.map((option, index) => `
                <div class="quiz-option" data-index="${index}">
                    ${option}
                </div>
            `).join('')}
        </div>
    `;
    
    quizContent.appendChild(quizQuestion);
    
    // Add click handlers to quiz options
    quizContent.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selections
            quizContent.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            // Add selection to clicked option
            this.classList.add('selected');
        });
    });
    
    // Reset quiz state
    document.getElementById('submitQuiz').classList.remove('hidden');
    document.getElementById('completeModule').classList.add('hidden');
}

function submitQuiz() {
    const selectedOption = document.querySelector('.quiz-option.selected');
    if (!selectedOption) {
        showModal('Quiz Result', 'Please select an answer before submitting.');
        return;
    }
    
    const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
    const quiz = currentModule.quiz[0];
    const isCorrect = selectedIndex === quiz.correct;
    
    // Show correct/incorrect styling
    document.querySelectorAll('.quiz-option').forEach((option, index) => {
        option.classList.remove('selected');
        if (index === quiz.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Show result and enable completion
    const resultMessage = isCorrect ? 
        'Correct! You can now complete this module.' : 
        'Incorrect. The correct answer is highlighted, but you can still complete the module.';
    
    showModal('Quiz Result', resultMessage);
    
    document.getElementById('submitQuiz').classList.add('hidden');
    document.getElementById('completeModule').classList.remove('hidden');
}

function completeModule() {
    // Mark module as completed
    if (!progress[currentModule.id]) {
        progress[currentModule.id] = {};
    }
    progress[currentModule.id].completed = true;
    progress[currentModule.id].completedAt = new Date().toISOString();
    
    // Save progress
    localStorage.setItem('hospiceTrainingProgress', JSON.stringify(progress));
    
    // Update UI
    updateProgressIndicators();
    populateModulesList();
    populateModulesGrid();
    
    showModal('Module Complete', `You have successfully completed "${currentModule.title}". Great job!`);
}

function navigateModule(direction) {
    const currentIndex = trainingData.training_modules.findIndex(m => m.id === currentModule.id);
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < trainingData.training_modules.length) {
        const newModule = trainingData.training_modules[newIndex];
        showModule(newModule.id);
    }
}

function updateProgressIndicators() {
    const completedCount = Object.keys(progress).filter(id => progress[id].completed).length;
    const totalModules = trainingData.training_modules.length;
    const percentage = Math.round((completedCount / totalModules) * 100);
    
    // Update overall progress
    overallProgress.textContent = `${percentage}% Complete`;
    
    // Update dashboard stats
    const completedModulesEl = document.getElementById('completedModules');
    if (completedModulesEl) {
        completedModulesEl.textContent = completedCount;
    }
}

function showModal(title, content) {
    const modal = document.getElementById('resultModal');
    const modalTitle = document.getElementById('resultTitle');
    const modalContent = document.getElementById('resultContent');
    
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.classList.remove('active');
}

function submitAssessment() {
    const questions = document.querySelectorAll('.assessment-question');
    let score = 0;
    let answered = 0;
    
    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('.quiz-option.selected');
        if (selectedOption) {
            answered++;
            const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
            if (selectedIndex === trainingData.final_assessment[index].correct) {
                score++;
            }
        }
    });
    
    if (answered < questions.length) {
        showModal('Assessment Incomplete', 'Please answer all questions before submitting.');
        return;
    }
    
    const percentage = Math.round((score / questions.length) * 100);
    assessmentScore = percentage;
    
    // Show results
    questions.forEach((question, index) => {
        const options = question.querySelectorAll('.quiz-option');
        const correctIndex = trainingData.final_assessment[index].correct;
        
        options.forEach((option, optionIndex) => {
            if (optionIndex === correctIndex) {
                option.classList.add('correct');
            } else if (option.classList.contains('selected') && optionIndex !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
    });
    
    const passed = percentage >= 80;
    const resultMessage = passed ? 
        `Congratulations! You scored ${percentage}% and have passed the assessment. You can now view your certificate.` :
        `You scored ${percentage}%. You need 80% or higher to pass. Please review the training materials and retake the assessment.`;
    
    showModal('Assessment Results', resultMessage);
    
    if (passed) {
        // Enable certificate
        progress.assessmentPassed = true;
        progress.assessmentScore = percentage;
        progress.completionDate = new Date().toLocaleDateString();
        localStorage.setItem('hospiceTrainingProgress', JSON.stringify(progress));
        
        // Populate certificate
        populateCertificate();
    }
}

function populateCertificate() {
    const certificateName = document.getElementById('certificateName');
    const completionDate = document.getElementById('completionDate');
    const finalScore = document.getElementById('finalScore');
    
    certificateName.textContent = userData.fullName;
    completionDate.textContent = new Date().toLocaleDateString();
    finalScore.textContent = userData.assessmentScore ? `${userData.assessmentScore}%` : 'N/A';
}

// Initialize final assessment when view is shown
document.addEventListener('click', function(e) {
    if (e.target.matches('[data-view="final-assessment"]')) {
        setTimeout(() => {
            populateFinalAssessment();
        }, 100);
    }
});

function populateFinalAssessment() {
    const assessmentQuestions = document.getElementById('assessmentQuestions');
    if (!assessmentQuestions || assessmentQuestions.children.length > 0) return;
    
    assessmentQuestions.innerHTML = '';
    
    trainingData.final_assessment.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'assessment-question';
        questionDiv.innerHTML = `
            <div class="question-number">Question ${index + 1}</div>
            <h4>${question.question}</h4>
            <div class="quiz-options">
                ${question.options.map((option, optionIndex) => `
                    <div class="quiz-option" data-index="${optionIndex}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        `;
        
        assessmentQuestions.appendChild(questionDiv);
        
        // Add click handlers
        questionDiv.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                // Remove selections from this question only
                questionDiv.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                // Add selection to clicked option
                this.classList.add('selected');
            });
        });
    });
}

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('hospiceTrainingUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
        showDashboard();
    } else {
        showLogin();
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('hospiceTrainingUserData', JSON.stringify(userData));
}

// Show login view
function showLogin() {
    document.getElementById('login').classList.add('active');
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('module').classList.remove('active');
    document.getElementById('final-assessment').classList.remove('active');
    document.getElementById('certificate').classList.remove('active');
    
    // Hide navigation sections
    document.getElementById('trainingSection').classList.add('hidden');
    document.getElementById('assessmentSection').classList.add('hidden');
    document.getElementById('progressIndicator').classList.add('hidden');
    document.getElementById('dashboardLink').classList.add('hidden');
    document.getElementById('loginLink').classList.remove('hidden');
}

// Show dashboard view
function showDashboard() {
    document.getElementById('login').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
    document.getElementById('module').classList.remove('active');
    document.getElementById('final-assessment').classList.remove('active');
    document.getElementById('certificate').classList.remove('active');
    
    // Show navigation sections
    document.getElementById('trainingSection').classList.remove('hidden');
    document.getElementById('assessmentSection').classList.remove('hidden');
    document.getElementById('progressIndicator').classList.remove('hidden');
    document.getElementById('dashboardLink').classList.remove('hidden');
    document.getElementById('loginLink').classList.add('hidden');
    
    // Update certificate name
    document.getElementById('certificateName').textContent = userData.fullName;
}