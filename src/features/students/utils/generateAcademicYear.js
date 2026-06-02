const generateAcademicYear = (date) => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth() + 1;

  const startYear = month >= 6 ? year : year - 1;

  return `${startYear}-${startYear + 1}`;
};

export default generateAcademicYear;
