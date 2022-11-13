type Rating = 1 | 2 | 3;

interface Result {
  periodLength: number;
  trainingDays: number;
  target: number;
  averageTime: number;
  success: boolean;
  rating: Rating;
  ratingDescription: string;
}

const calculateExercises = (
  exerciseHours: Array<number>,
  target: number
): Result => {
  const periodLength: number = exerciseHours.length;
  const trainingDays: number = exerciseHours.filter((day) => day !== 0).length;
  const check: number = exerciseHours.find((day) => day < target);
  const success: boolean = check < target ? false : true;
  const averageTime: number =
    exerciseHours.reduce((acc, day) => acc + day, 0) / periodLength;

  let ratingDescription: string;
  let rating: Rating;
  if (averageTime < target) {
    ratingDescription = "Not too bad but could be better";
    rating = 1;
  } else if (averageTime === target) {
    ratingDescription = "It was good, keep it up!";
    rating = 2;
  } else if (averageTime > target) {
    ratingDescription = "That was amazing, keep pushing!";
    rating = 3;
  }

  return {
    periodLength,
    trainingDays,
    target,
    averageTime,
    success,
    rating,
    ratingDescription,
  };
};

const period: Array<number> = [3, 0, 2, 4.5, 0, 3, 1];
const target: number = 2;

console.log(calculateExercises(period, target));
