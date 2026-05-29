const filterStudent = ({
  students = [],
  genderFilter,
  searchQuery,
  statusFilter,
}) => {
  console.log("students:", students);
  return students.filter((student) => {
    const isDeleted = student.isDeleted;
    const showActive = statusFilter === "active";
    if (showActive && isDeleted) {
      return false;
    }
    if (!showActive && !isDeleted) {
      return false;
    }

    const gender = student.personalDetails?.gender || "";
    if (genderFilter && gender.toLowerCase() !== genderFilter.toLowerCase()) {
      return false;
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const satsNumber = (student.satsNumber || "").toLowerCase();
      const firstName = (student.firstName || "").toLowerCase();
      const lastName = (student.lastName || "").toLowerCase();
      const fullName = `${firstName} ${lastName}`.toLowerCase();
      const fatherName = (
        student.parentDetails?.fatherName || ""
      ).toLowerCase();
      const district = (student.addressDetails?.district || "").toLowerCase();

      return (
        satsNumber.includes(query) ||
        fullName.includes(query) ||
        fatherName.includes(query) ||
        district.includes(query)
      );
    }

    return true;
  });
};

export default filterStudent;
