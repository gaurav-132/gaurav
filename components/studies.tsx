export function HrmsStudy() {
  return (
    <div className="stage-window" aria-hidden="true">
      <div className="stage-top"><i /><i /><i /><span>Workspace / People operations</span></div>
      <div className="stage-content">
        <aside className="stage-side"><p className="stage-brand">People CRM</p><ul><li className="active">Overview</li><li>People</li><li>Recruitment</li><li>Workflows</li><li>Reports</li></ul></aside>
        <div className="stage-main">
          <div className="stage-main-head"><strong>Team overview</strong><small>Today</small></div>
          <div className="stage-metrics"><div className="metric"><small>Open records</small><b>128</b><em>People</em></div><div className="metric"><small>In progress</small><b>34</b><em>Workflows</em></div><div className="metric"><small>Needs review</small><b>08</b><em>View queue</em></div></div>
          <table className="stage-table"><thead><tr><th>PERSON</th><th>WORKFLOW</th><th>STATUS</th></tr></thead><tbody>
            <tr><td><span className="person"><i>AM</i>Alex Morgan</span></td><td>Application</td><td><span className="status">Active</span></td></tr>
            <tr><td><span className="person"><i>JL</i>Jamie Lee</span></td><td>Review</td><td><span className="status">Active</span></td></tr>
            <tr><td><span className="person"><i>SR</i>Sam Rivera</span></td><td>Follow-up</td><td><span className="status">Active</span></td></tr>
          </tbody></table>
        </div>
      </div>
    </div>
  );
}

export function SportsStudy() {
  return (
    <div className="stage-window sports-window" aria-hidden="true">
      <div className="stage-top"><i /><i /><i /><span>Workspace / Sports CRM</span></div>
      <div className="sports-preview">
        <p className="mini-label">Sports operations · concept preview</p>
        <h4>Activity overview</h4>
        <div className="sports-summary"><div><small>Programs</small><b>Season planning</b></div><div><small>Workspace</small><b>Team operations</b></div></div>
        <div className="sports-rows"><div><span className="sports-dot" />Schedule coordination<i>↗</i></div><div><span className="sports-dot" />Member records<i>↗</i></div><div><span className="sports-dot" />Team workflows<i>↗</i></div></div>
        <small className="concept-caption">Illustrative CRM interface · not a product screenshot</small>
      </div>
    </div>
  );
}

export function CustomerCrmStudy() {
  return (
    <div className="stage-window customer-window" aria-hidden="true">
      <div className="stage-top"><i /><i /><i /><span>Workspace / Customer relationships</span></div>
      <div className="customer-preview">
        <aside><p>Customer CRM</p><b>Overview</b><span>Contacts</span><span>Activity</span><span>Follow-ups</span></aside>
        <div className="customer-main"><div className="customer-heading"><div><small>RELATIONSHIP OVERVIEW</small><h4>Customer activity</h4></div><span>+ Add record</span></div>
          <div className="customer-stats"><div><small>Active records</small><b>248</b></div><div><small>Follow-ups</small><b>16</b></div></div>
          <div className="customer-activity"><div><i>AM</i><span><b>Alex Morgan</b><small>Follow-up scheduled</small></span><time>Today</time></div><div><i>JL</i><span><b>Jamie Lee</b><small>Record updated</small></span><time>Yesterday</time></div><div><i>SR</i><span><b>Sam Rivera</b><small>New interaction</small></span><time>Yesterday</time></div></div>
          <small className="concept-caption">Illustrative CRM interface · not a product screenshot</small>
        </div>
      </div>
    </div>
  );
}
