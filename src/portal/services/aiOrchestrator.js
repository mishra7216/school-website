// AI Orchestrator Service for Little Kingdom AI Platform
// Handles multimodal test result extraction, question paper analysis, chapter mastery updates, and recalculation

export const extractTestResultFromImage = (imageFileOrUrl) => {
  return new Promise((resolve) => {
    // Simulate AI Vision model OCR processing time (Gemini Flash Multimodal API)
    setTimeout(() => {
      // Return structured extraction result
      resolve({
        subject: 'Mathematics',
        assessmentType: 'Weekly Test',
        title: 'Mathematics Weekly Test 4',
        date: new Date().toISOString().split('T')[0],
        marksObtained: 14,
        maxMarks: 20,
        percentage: 70,
        chaptersCovered: ['Polynomials', 'Factorisation'],
        questionsExtracted: [
          { qNo: 1, topic: 'Linear Equations in 2 Variables', difficulty: 'Easy', marks: 2, obtained: 2, status: 'correct' },
          { qNo: 2, topic: 'Polynomial Degree Identification', difficulty: 'Easy', marks: 3, obtained: 3, status: 'correct' },
          { qNo: 3, topic: 'Algebraic Identities Expansion', difficulty: 'Medium', marks: 4, obtained: 4, status: 'correct' },
          { qNo: 4, topic: 'Factorisation by Splitting Middle Term', difficulty: 'Medium', marks: 5, obtained: 2, status: 'partial', mistakeType: 'Conceptual' },
          { qNo: 5, topic: 'Factorisation of Cubic Polynomials', difficulty: 'Hard', marks: 6, obtained: 3, status: 'partial', mistakeType: 'Calculation' },
        ],
        mistakesBreakdown: {
          conceptual: 2,
          calculation: 1,
          careless: 0,
          formulaRecall: 1,
        },
        aiSummary: 'Scored 14/20 (70%). Solid performance in Linear Equations and Polynomials degree identification. Lost 5 marks in Factorisation cubic expansion due to conceptual middle-term splitting errors.',
      });
    }, 1200);
  });
};

export const processSyllabusAndAssessment = (studentData, assessmentData, syllabusInfo) => {
  const currentAssessments = studentData.assessments || [];
  
  // Calculate percentage
  const percentage = Math.round((Number(assessmentData.marksObtained) / Number(assessmentData.maxMarks)) * 100);
  
  const newAssessment = {
    id: `ast_${Date.now()}`,
    title: assessmentData.title || `${assessmentData.subject} ${assessmentData.assessmentType}`,
    subject: assessmentData.subject,
    assessmentType: assessmentData.assessmentType,
    date: assessmentData.date || new Date().toISOString().split('T')[0],
    marksObtained: Number(assessmentData.marksObtained),
    maxMarks: Number(assessmentData.maxMarks),
    percentage,
    chaptersCovered: syllabusInfo.chapters || ['Factorisation', 'Polynomials'],
    syllabusExtent: syllabusInfo.extent || 'Complete upto Exercise 4.2',
    mistakesBreakdown: assessmentData.mistakesBreakdown || { conceptual: 2, calculation: 1, careless: 0 },
    aiSummary: assessmentData.aiSummary || `Scored ${assessmentData.marksObtained}/${assessmentData.maxMarks} (${percentage}%). AI analyzed performance across covered chapters.`,
  };

  const updatedAssessments = [newAssessment, ...currentAssessments];

  // Recalculate subject performance
  const subjectMap = {};
  updatedAssessments.forEach((ast) => {
    if (!subjectMap[ast.subject]) {
      subjectMap[ast.subject] = { totalPct: 0, count: 0 };
    }
    subjectMap[ast.subject].totalPct += ast.percentage;
    subjectMap[ast.subject].count += 1;
  });

  const updatedSubjectPerformance = (studentData.subjectPerformance || []).map((sub) => {
    if (subjectMap[sub.subject]) {
      const avg = Math.round(subjectMap[sub.subject].totalPct / subjectMap[sub.subject].count);
      const diff = avg - sub.score;
      return {
        ...sub,
        score: avg,
        trend: diff >= 0 ? 'up' : 'down',
        change: diff >= 0 ? `+${diff}%` : `${diff}%`,
      };
    }
    return sub;
  });

  // Recalculate overall score
  const totalScoreSum = updatedSubjectPerformance.reduce((acc, curr) => acc + curr.score, 0);
  const newOverall = Math.round((totalScoreSum / updatedSubjectPerformance.length) * 10) / 10;
  const scoreTrend = Math.round((newOverall - studentData.metrics.overallScore) * 10) / 10;

  // Recalculate Chapter Mastery
  const updatedChapterMastery = (studentData.chapterMastery || []).map((ch) => {
    if (ch.subject === assessmentData.subject && (syllabusInfo.chapters || []).includes(ch.chapter)) {
      // If assessment score is high, boost chapter mastery slightly
      let newMastery = ch.mastery;
      if (percentage >= 85) {
        newMastery = Math.min(100, ch.mastery + 8);
      } else if (percentage >= 70) {
        newMastery = Math.min(100, ch.mastery + 4);
      } else {
        newMastery = Math.max(10, ch.mastery - 5);
      }
      return {
        ...ch,
        mastery: newMastery,
        status: newMastery >= 75 ? 'strong' : newMastery >= 55 ? 'moderate' : 'weak',
        color: newMastery >= 75 ? 'green' : newMastery >= 55 ? 'yellow' : 'red',
      };
    }
    return ch;
  });

  // Append new AI Insight
  const newInsight = {
    id: `ins_${Date.now()}`,
    type: percentage >= 75 ? 'success' : 'warning',
    title: `New Result Processed: ${newAssessment.title}`,
    message: `You scored ${newAssessment.marksObtained}/${newAssessment.maxMarks} (${percentage}%). ${newAssessment.aiSummary}`,
    date: 'Just now',
    actionable: percentage < 75,
    actionText: percentage < 75 ? 'Practice Weak Concepts' : null,
  };

  return {
    ...studentData,
    assessments: updatedAssessments,
    subjectPerformance: updatedSubjectPerformance,
    chapterMastery: updatedChapterMastery,
    metrics: {
      ...studentData.metrics,
      overallScore: newOverall,
      scoreTrend: scoreTrend >= 0 ? `+${scoreTrend}` : `${scoreTrend}`,
      totalTestsTaken: updatedAssessments.length,
      aiInsightSummary: `Latest test in ${newAssessment.subject} recorded ${percentage}%. Chapter mastery estimates updated.`,
    },
    aiInsights: [newInsight, ...(studentData.aiInsights || [])],
  };
};
