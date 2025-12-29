export interface Badge {
  name: string;
  icon: string;
  color: string;
}

export function getBadge(difficulty: string, score: number, total: number): Badge {
  const percentage = (score / total) * 100;

  if (difficulty === 'easy' && percentage >= 70) {
    return { name: "Heritage Seed", icon: "🌱", color: "#4CAF50" };
  } else if (difficulty === 'medium' && percentage >= 80) {
    return { name: "Cultural Explorer", icon: "🏯", color: "#FF5722" };
  } else if (difficulty === 'hard' && percentage >= 90) {
    return { name: "Heritage Guardian", icon: "🛡️", color: "#9C27B0" };
  }

  return { name: "Curious Learner", icon: "📚", color: "#2196F3" };
}

export function filterQuizQuestions(questions: any[], difficulty: string) {
  const filtered = questions.filter(q => q.difficulty === difficulty);
  const limits: Record<string, number> = {
    easy: 5,
    medium: 8,
    hard: 12
  };
  return filtered.slice(0, limits[difficulty] || 5);
}
