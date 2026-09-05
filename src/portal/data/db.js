// Data store for Little Kingdom Student Academic Intelligence Platform

const STORAGE_KEYS = {
  CURRENT_USER: 'lk_ai_current_user',
  STUDENT_DATA: 'lk_ai_student_data_v1',
  CONVERSATIONS: 'lk_ai_conversations',
  MEMORIES: 'lk_ai_memories',
  QUIZZES: 'lk_ai_quizzes',
  STUDY_PLANS: 'lk_ai_study_plans',
  NOTIFICATIONS: 'lk_ai_notifications',
};

// Initial seeded student profile and academic metrics for Aradhya (LK20261042)
export const initialStudentData = {
  profile: {
    studentId: 'LK20261042',
    name: 'Aradhya Mishra',
    role: 'STUDENT',
    class: '10th',
    section: 'A',
    rollNo: '1042',
    academicYear: '2025-2026',
    schoolName: 'Little Kingdom Senior Secondary School, Baihar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    joinedDate: '2025-04-01',
  },
  goals: {
    Mathematics: { current: 82, target: 90 },
    Science: { current: 74, target: 85 },
    English: { current: 79, target: 85 },
    SocialScience: { current: 76, target: 82 },
    Hindi: { current: 80, target: 85 },
  },
  metrics: {
    overallScore: 78.2,
    scoreTrend: +4.2,
    strongestSubject: 'Mathematics',
    weakestSubject: 'Science',
    totalTestsTaken: 12,
    aiInsightSummary: 'Your recent Mathematics scores are improving (+6%), but Factorisation and Trigonometry remain recurring weak areas.',
  },
  subjectPerformance: [
    { subject: 'Mathematics', score: 82, trend: 'up', change: '+6%' },
    { subject: 'Science', score: 74, trend: 'down', change: '-2%' },
    { subject: 'English', score: 79, trend: 'stable', change: '0%' },
    { subject: 'Social Science', score: 76, trend: 'up', change: '+3%' },
    { subject: 'Hindi', score: 80, trend: 'up', change: '+1%' },
  ],
  chapterMastery: [
    { id: 'math_ch1', subject: 'Mathematics', chapter: 'Linear Equations', mastery: 91, status: 'strong', color: 'green', prereqs: [] },
    { id: 'math_ch2', subject: 'Mathematics', chapter: 'Polynomials', mastery: 78, status: 'strong', color: 'green', prereqs: ['math_ch1'] },
    { id: 'math_ch3', subject: 'Mathematics', chapter: 'Factorisation', mastery: 42, status: 'weak', color: 'red', prereqs: ['math_ch2'] },
    { id: 'math_ch4', subject: 'Mathematics', chapter: 'Coordinate Geometry', mastery: 63, status: 'moderate', color: 'yellow', prereqs: ['math_ch1'] },
    { id: 'math_ch5', subject: 'Mathematics', chapter: 'Trigonometry', mastery: 39, status: 'weak', color: 'red', prereqs: ['math_ch2', 'math_ch4'] },
    { id: 'sci_ch1', subject: 'Science', chapter: 'Chemical Reactions', mastery: 84, status: 'strong', color: 'green', prereqs: [] },
    { id: 'sci_ch2', subject: 'Science', chapter: 'Acids, Bases & Salts', mastery: 71, status: 'moderate', color: 'yellow', prereqs: ['sci_ch1'] },
    { id: 'sci_ch3', subject: 'Science', chapter: 'Electricity', mastery: 48, status: 'weak', color: 'red', prereqs: [] },
    { id: 'sci_ch4', subject: 'Science', chapter: 'Light Reflection & Refraction', mastery: 65, status: 'moderate', color: 'yellow', prereqs: [] },
  ],
  assessments: [
    {
      id: 'ast_001',
      title: 'Mathematics Weekly Test 1',
      subject: 'Mathematics',
      assessmentType: 'Weekly Test',
      date: '2026-07-10',
      marksObtained: 12,
      maxMarks: 20,
      percentage: 60,
      chaptersCovered: ['Linear Equations'],
      mistakesBreakdown: { conceptual: 3, calculation: 1, careless: 0 },
      aiSummary: 'Good command over linear graph plotting. Lost marks in multi-variable equations.',
    },
    {
      id: 'ast_002',
      title: 'Science Unit Test 1',
      subject: 'Science',
      assessmentType: 'Unit Test',
      date: '2026-07-22',
      marksObtained: 16,
      maxMarks: 20,
      percentage: 80,
      chaptersCovered: ['Chemical Reactions'],
      mistakesBreakdown: { conceptual: 1, calculation: 0, careless: 1 },
      aiSummary: 'Excellent chemical balancing. Minor careless error in reaction definitions.',
    },
    {
      id: 'ast_003',
      title: 'Mathematics Class Test 2',
      subject: 'Mathematics',
      assessmentType: 'Class Test',
      date: '2026-08-05',
      marksObtained: 34,
      maxMarks: 50,
      percentage: 68,
      chaptersCovered: ['Linear Equations', 'Polynomials'],
      mistakesBreakdown: { conceptual: 4, calculation: 2, careless: 2 },
      aiSummary: 'Polynomial roots identification was weak. Linear algebra remains stable.',
    },
    {
      id: 'ast_004',
      title: 'Mathematics Monthly Assessment',
      subject: 'Mathematics',
      assessmentType: 'Monthly Test',
      date: '2026-08-25',
      marksObtained: 16,
      maxMarks: 20,
      percentage: 80,
      chaptersCovered: ['Polynomials', 'Factorisation'],
      mistakesBreakdown: { conceptual: 3, calculation: 1, formula: 1 },
      aiSummary: 'Significant improvement in Polynomials. Factorisation algebraic identity expansion remains weak.',
    },
  ],
  mistakesSummary: {
    conceptual: 11,
    calculation: 4,
    careless: 3,
    formulaRecall: 2,
    timeManagement: 1,
  },
  aiInsights: [
    {
      id: 'ins_1',
      type: 'warning',
      title: 'Recurring Weakness Detected',
      message: 'Factorisation has appeared as a weak area in 3 consecutive assessments.',
      date: 'Today',
      actionable: true,
      actionText: 'Practice Factorisation',
    },
    {
      id: 'ins_2',
      type: 'success',
      title: 'Mathematics Score Upward Trend',
      message: 'Your recent Mathematics scores increased from 60% → 82% over the last month.',
      date: '2 days ago',
      actionable: false,
    },
    {
      id: 'ins_3',
      type: 'target',
      title: 'Goal Progress Alert',
      message: 'You are only 8 percentage points away from reaching your Mathematics target of 90%.',
      date: '3 days ago',
      actionable: true,
      actionText: 'View Goal Blueprint',
    },
  ],
  notifications: [
    { id: 'not_1', text: 'Weekly AI Academic Report generated.', time: '2 hours ago', read: false },
    { id: 'not_2', text: 'Factorisation revision plan updated.', time: '1 day ago', read: false },
    { id: 'not_3', text: 'New practice quiz ready on Electricity.', time: '2 days ago', read: true },
  ],
};

// Seed storage if not present
export const getStudentData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.STUDENT_DATA);
    if (data) {
      return JSON.parse(data);
    }
    localStorage.setItem(STORAGE_KEYS.STUDENT_DATA, JSON.stringify(initialStudentData));
    return initialStudentData;
  } catch (e) {
    console.error('Error loading student data from localStorage:', e);
    return initialStudentData;
  }
};

export const saveStudentData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEYS.STUDENT_DATA, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving student data:', e);
  }
};
