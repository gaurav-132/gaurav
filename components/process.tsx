import { steps } from "@/lib/content";

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="section-intro">
          <p className="section-index">03 / Process</p>
          <div>
            <h2 id="process-title">Working process</h2>
            <p>
              A simple sequence. A small feature does not need the same plan as a
              new application, so the depth of each step changes with the job.
            </p>
          </div>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
