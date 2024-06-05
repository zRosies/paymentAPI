function EmailTemplate() {
  return (
    <div style={{ background: "#eb4034" }}>
      <h1>Job offer,</h1>
      <p>Recruiter name: {recruiterName}</p>
      <p>Company name: {companyName}!</p>
      <p>Role: {role}</p>
      <p>Schedule: {schedule}</p>
      <p>Contact: {email}</p>
    </div>
  );
}

module.exports = { EmailTemplate };
