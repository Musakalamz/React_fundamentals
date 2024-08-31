import Duties from "./Duties";

function JobInfo({ jobs, currentItem }) {
  // console.log(jobs);
  // const { company, title, dates, duties } = jobs[0];
  const { company, title, dates, duties } = jobs[currentItem];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}

export default JobInfo;
