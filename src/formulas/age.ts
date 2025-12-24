export function calculateAge(birthDate: Date): number {
  if (!(birthDate instanceof Date) || isNaN(birthDate.getTime())) {
    throw new Error('Invalid birth date');
  }

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}
