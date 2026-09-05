import React, { useState } from 'react';
import {
  X,
  Camera,
  Upload,
  Edit3,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileText,
  ArrowRight,
  BookOpen,
  Check,
  RefreshCw,
} from 'lucide-react';
import { extractTestResultFromImage, processSyllabusAndAssessment } from '../services/aiOrchestrator';
import { useAuth } from '../context/AuthContext';
import { saveStudentData } from '../data/db';

const AddTestModal = ({ isOpen, onClose, onSuccess }) => {
  const { studentData, refreshData } = useAuth();
  
  // Wizard steps: 'select_mode' | 'upload_view' | 'confirm_extraction' | 'syllabus_wizard' | 'question_analysis'
  const [step, setStep] = useState('select_mode');
  const [entryMode, setEntryMode] = useState('manual'); // 'photo' | 'image' | 'manual'
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // Extracted Form State
  const [subject, setSubject] = useState('Mathematics');
  const [assessmentType, setAssessmentType] = useState('Weekly Test');
  const [title, setTitle] = useState('Mathematics Weekly Test 4');
  const [marksObtained, setMarksObtained] = useState('14');
  const [maxMarks, setMaxMarks] = useState('20');
  const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);
  const [aiSummary, setAiSummary] = useState('Scored 14/20 in Factorisation and Polynomials test.');

  // Syllabus Coverage State
  const [selectedChapters, setSelectedChapters] = useState(['Factorisation', 'Polynomials']);
  const [syllabusExtent, setSyllabusExtent] = useState('Complete until Exercise 4.2');
  const [extractedQuestions, setExtractedQuestions] = useState([]);

  if (!isOpen) return null;

  const handleSelectMode = (mode) => {
    setEntryMode(mode);
    if (mode === 'manual') {
      setStep('confirm_extraction');
    } else {
      setStep('upload_view');
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      runVisionAnalysis(url);
    }
  };

  const runVisionAnalysis = async (imgUrl) => {
    setIsProcessing(true);
    try {
      const result = await extractTestResultFromImage(imgUrl);
      setSubject(result.subject);
      setAssessmentType(result.assessmentType);
      setTitle(result.title);
      setMarksObtained(String(result.marksObtained));
      setMaxMarks(String(result.maxMarks));
      setTestDate(result.date);
      setSelectedChapters(result.chaptersCovered);
      setExtractedQuestions(result.questionsExtracted || []);
      setAiSummary(result.aiSummary);
      setStep('confirm_extraction');
    } catch (e) {
      console.error('Vision extraction error:', e);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleToggleChapter = (chName) => {
    if (selectedChapters.includes(chName)) {
      setSelectedChapters(selectedChapters.filter((c) => c !== chName));
    } else {
      setSelectedChapters([...selectedChapters, chName]);
    }
  };

  const handleSaveAssessment = () => {
    const updatedData = processSyllabusAndAssessment(
      studentData,
      {
        subject,
        assessmentType,
        title,
        marksObtained,
        maxMarks,
        date: testDate,
        aiSummary,
      },
      {
        chapters: selectedChapters,
        extent: syllabusExtent,
      }
    );

    saveStudentData(updatedData);
    refreshData();
    if (onSuccess) onSuccess();
    onClose();
  };

  const availableChapters = [
    'Linear Equations',
    'Polynomials',
    'Factorisation',
    'Coordinate Geometry',
    'Trigonometry',
    'Chemical Reactions',
    'Acids, Bases & Salts',
    'Electricity',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-white space-y-6">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Add New Assessment Result</h3>
              <p className="text-xs text-slate-400">Multimodal vision OCR & syllabus coverage analysis</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: Select Mode */}
        {step === 'select_mode' && (
          <div className="space-y-6 py-4">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider text-center">
              How would you like to enter your test result?
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleSelectMode('photo')}
                className="p-6 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-white">📷 Upload Photo</span>
                <p className="text-xs text-slate-400">Snap a quick photo of your marksheet or paper</p>
              </button>

              <button
                onClick={() => handleSelectMode('image')}
                className="p-6 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-white">🖼 Upload Image</span>
                <p className="text-xs text-slate-400">Select a report card or screenshot file</p>
              </button>

              <button
                onClick={() => handleSelectMode('manual')}
                className="p-6 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Edit3 className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-white">✏ Enter Manually</span>
                <p className="text-xs text-slate-400">Type subject, marks, and date manually</p>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Upload File View */}
        {step === 'upload_view' && (
          <div className="space-y-6 py-4">
            {isProcessing ? (
              <div className="py-12 text-center space-y-4">
                <RefreshCw className="w-10 h-10 text-cyan-400 animate-spin mx-auto" />
                <h4 className="text-base font-bold text-white">Multimodal AI Extracting Result Data...</h4>
                <p className="text-xs text-slate-400">Analyzing marksheet layout, subjects, and questions with Vision AI.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-slate-700 hover:border-cyan-500/60 rounded-2xl p-8 text-center space-y-4 bg-slate-950/60 transition-colors relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                    <Upload className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Click or Drag & Drop Result Sheet Photo</span>
                    <span className="text-xs text-slate-400">Supports PNG, JPG, JPEG report cards & question papers</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <button
                    onClick={() => setStep('select_mode')}
                    className="text-slate-400 hover:text-white"
                  >
                    ← Back to Options
                  </button>
                  <button
                    onClick={() => runVisionAnalysis('sample_image')}
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    Use Sample Test Sheet →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: Confirm & Edit Extracted Data */}
        {step === 'confirm_extraction' && (
          <div className="space-y-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>AI extracted the following parameters. Please verify or edit before proceeding.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-400 mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-500"
                >
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                  <option>Social Science</option>
                  <option>Hindi</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-400 mb-1">Assessment Type</label>
                <select
                  value={assessmentType}
                  onChange={(e) => setAssessmentType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-500"
                >
                  <option>Weekly Test</option>
                  <option>Unit Test</option>
                  <option>Class Test</option>
                  <option>Monthly Assessment</option>
                  <option>Term Exam</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-400 mb-1">Marks Obtained</label>
                <input
                  type="number"
                  value={marksObtained}
                  onChange={(e) => setMarksObtained(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono font-bold focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-400 mb-1">Total Maximum Marks</label>
                <input
                  type="number"
                  value={maxMarks}
                  onChange={(e) => setMaxMarks(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono font-bold focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-400 mb-1">Assessment Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setStep('select_mode')}
                className="px-4 py-2.5 text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setStep('syllabus_wizard')}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center space-x-2"
              >
                <span>Next: Syllabus Coverage Wizard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Syllabus Coverage Wizard */}
        {step === 'syllabus_wizard' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
              <div className="flex items-center space-x-2 text-xs font-bold text-indigo-300">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>AI Syllabus Coverage Check</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Which chapters were included in this {subject} assessment?
              </p>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Tested Chapters
              </label>
              <div className="grid grid-cols-2 gap-2">
                {availableChapters.map((ch) => {
                  const isChecked = selectedChapters.includes(ch);
                  return (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => handleToggleChapter(ch)}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{ch}</span>
                      {isChecked && <Check className="w-4 h-4 text-cyan-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Syllabus Extent (e.g., Until Exercise 4.2)
              </label>
              <input
                type="text"
                value={syllabusExtent}
                onChange={(e) => setSyllabusExtent(e.target.value)}
                placeholder="e.g. Full Chapter 1-3, Chapter 4 until Ex 4.2"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStep('confirm_extraction')}
                className="text-xs text-slate-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                onClick={handleSaveAssessment}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm & Save Result</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AddTestModal;
