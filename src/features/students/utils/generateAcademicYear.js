const generateAcademicYear = (date) => {
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  if (month >= 6) {
    return `${year} - ${year + 1}`;
  }

  return `${year - 1}-${year}`;
};

export default generateAcademicYear;
