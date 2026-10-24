import type { Competency, Course, CourseModule, Role } from "./types";

export const COMPETENCIES: Competency[] = [
  {
    id: "ethics",
    name: "Ethics & Integrity",
    short: "Ethics",
    category: "behavioral",
    blurb: "Conduct rules, conflict of interest, vigilance, and the duty of impartiality.",
  },
  {
    id: "leadership",
    name: "Public Leadership",
    short: "Leadership",
    category: "behavioral",
    blurb: "Leading teams, holding people accountable, and taking decisions under pressure.",
  },
  {
    id: "citizen",
    name: "Citizen-Centric Service",
    short: "Citizens",
    category: "behavioral",
    blurb: "Sevottam, grievance redressal, last-mile delivery, and treating citizens as principals.",
  },
  {
    id: "communication",
    name: "Official Communication",
    short: "Communication",
    category: "behavioral",
    blurb: "Briefing seniors, handling media, and writing with clarity for the public record.",
  },
  {
    id: "noting",
    name: "Noting & Drafting",
    short: "Noting",
    category: "functional",
    blurb: "Files, office memoranda, cabinet notes, and the grammar of secretariat work.",
  },
  {
    id: "finance",
    name: "Public Financial Management",
    short: "Finance",
    category: "functional",
    blurb: "GFR propriety, GeM, budget, audit paras, and spending public money with care.",
  },
  {
    id: "digital",
    name: "Digital Governance",
    short: "Digital",
    category: "functional",
    blurb: "DPI, e-office, data protection, and using technology without excluding citizens.",
  },
  {
    id: "data",
    name: "Data-Driven Decisions",
    short: "Data",
    category: "functional",
    blurb: "Reading dashboards, sampling, outcome indicators, and resisting vanity metrics.",
  },
  {
    id: "policy",
    name: "Policy Design",
    short: "Policy",
    category: "domain",
    blurb: "Problem framing, instruments, consultation, and evidence before announcement.",
  },
  {
    id: "disaster",
    name: "Disaster Management",
    short: "Disaster",
    category: "domain",
    blurb: "DM Act roles, incident command, relief standards, and building back better.",
  },
  {
    id: "urban",
    name: "Urban & Rural Governance",
    short: "Local",
    category: "domain",
    blurb: "Municipal finance, panchayats, scheme convergence, and last-mile institutions.",
  },
  {
    id: "law",
    name: "Law, Order & New Codes",
    short: "Law",
    category: "domain",
    blurb: "BNS, BNSS, BSA orientation and the officer’s duty to due process.",
  },
];

export const ROLES: Role[] = [
  {
    id: "ias",
    name: "IAS / District Administration",
    cadre: "IAS",
    blurb: "Collector, SDM, or secretariat roles spanning field and policy.",
    competencyIds: ["citizen", "policy", "noting", "leadership", "disaster", "finance"],
  },
  {
    id: "ips",
    name: "IPS / Police Administration",
    cadre: "IPS",
    blurb: "Law and order, investigation oversight, and public order management.",
    competencyIds: ["law", "leadership", "ethics", "communication", "disaster", "citizen"],
  },
  {
    id: "irs",
    name: "IRS / Revenue & Tax",
    cadre: "IRS",
    blurb: "Assessment, investigation, taxpayer service, and fiscal intelligence.",
    competencyIds: ["finance", "ethics", "data", "noting", "digital", "communication"],
  },
  {
    id: "secretariat",
    name: "Central Secretariat",
    cadre: "CSS / CSO",
    blurb: "ASO to Joint Secretary work in ministries and attached offices.",
    competencyIds: ["noting", "finance", "policy", "digital", "communication", "ethics"],
  },
  {
    id: "state",
    name: "State Secretariat & Directorate",
    cadre: "State",
    blurb: "State service officers, directors, and programme managers.",
    competencyIds: ["noting", "policy", "finance", "citizen", "urban", "leadership"],
  },
  {
    id: "municipal",
    name: "Municipal / ULB",
    cadre: "ULB",
    blurb: "Commissioners, engineers, and health officers in cities and towns.",
    competencyIds: ["urban", "finance", "citizen", "disaster", "digital", "leadership"],
  },
  {
    id: "panchayat",
    name: "Panchayati Raj & Rural",
    cadre: "RD",
    blurb: "BDOs, panchayat officers, and rural development functionaries.",
    competencyIds: ["urban", "citizen", "finance", "data", "disaster", "leadership"],
  },
  {
    id: "health",
    name: "Health Administration",
    cadre: "Health",
    blurb: "CMO, hospital administration, and public health programme leads.",
    competencyIds: ["citizen", "data", "disaster", "leadership", "ethics", "communication"],
  },
  {
    id: "education",
    name: "Education Administration",
    cadre: "Education",
    blurb: "DEO, school administration, and higher education regulators.",
    competencyIds: ["policy", "communication", "data", "citizen", "ethics", "leadership"],
  },
  {
    id: "support",
    name: "Support & Frontline Staff",
    cadre: "MTS / ASO",
    blurb: "Office staff, field functionaries, and first points of citizen contact.",
    competencyIds: ["citizen", "digital", "ethics", "communication", "noting", "finance"],
  },
];

export const MINISTRIES = [
  "Cabinet Secretariat / PMO",
  "Home Affairs",
  "Finance",
  "Personnel & Training",
  "Rural Development",
  "Housing & Urban Affairs",
  "Health & Family Welfare",
  "Education",
  "Agriculture & Farmers Welfare",
  "Railways",
  "Defence",
  "External Affairs",
  "Law & Justice",
  "Environment, Forest & Climate",
  "Electronics & IT",
  "Social Justice & Empowerment",
  "Women & Child Development",
  "Jal Shakti",
  "Power",
  "State / UT Administration",
  "Municipal / Local Body",
  "Other / Attached Office",
];

export const COURSES: Course[] = [
  {
    id: "ethics-public-life",
    title: "Ethics in Public Life",
    subtitle: "Conduct, conflict, gifts, and the quiet habits of integrity.",
    competencyIds: ["ethics"],
    category: "behavioral",
    durationMin: 75,
    level: "foundation",
    audience: "All officials",
  },
  {
    id: "leading-teams",
    title: "Leading Teams in Government",
    subtitle: "Authority is given. Followership is earned, daily.",
    competencyIds: ["leadership"],
    category: "behavioral",
    durationMin: 80,
    level: "practitioner",
    audience: "Section heads and above",
  },
  {
    id: "citizen-first",
    title: "Citizen-First Service Delivery",
    subtitle: "Design the counter, the portal, and the grievance loop around the citizen.",
    competencyIds: ["citizen"],
    category: "behavioral",
    durationMin: 70,
    level: "foundation",
    audience: "Field and secretariat",
  },
  {
    id: "clear-briefing",
    title: "Briefing Up, Speaking Out",
    subtitle: "Notes for the Minister, press lines, and saying no with reasons.",
    competencyIds: ["communication"],
    category: "behavioral",
    durationMin: 55,
    level: "practitioner",
    audience: "Officers who brief seniors",
  },
  {
    id: "noting-craft",
    title: "The Craft of Noting & Drafting",
    subtitle: "How a file thinks, and how an officer should write on it.",
    competencyIds: ["noting"],
    category: "functional",
    durationMin: 90,
    level: "foundation",
    audience: "Secretariat and attached offices",
  },
  {
    id: "cabinet-notes",
    title: "Cabinet Notes and Decision Memos",
    subtitle: "From problem statement to the paragraph the Cabinet actually reads.",
    competencyIds: ["noting", "policy"],
    category: "functional",
    durationMin: 65,
    level: "advanced",
    audience: "US and above",
  },
  {
    id: "gfr-propriety",
    title: "Spending Public Money",
    subtitle: "GFR propriety, delegation, and the audit para you can defend.",
    competencyIds: ["finance"],
    category: "functional",
    durationMin: 85,
    level: "foundation",
    audience: "DDO, HOO, and programme officers",
  },
  {
    id: "gem-procurement",
    title: "Procurement on GeM and Beyond",
    subtitle: "Thresholds, bid design, PAC, and the difference between haste and emergency.",
    competencyIds: ["finance", "ethics"],
    category: "functional",
    durationMin: 70,
    level: "practitioner",
    audience: "Indenters and purchase committees",
  },
  {
    id: "dpi-officers",
    title: "Digital Public Infrastructure for Officers",
    subtitle: "Aadhaar, UPI-class rails, e-office, and designing for the unconnected.",
    competencyIds: ["digital"],
    category: "functional",
    durationMin: 60,
    level: "foundation",
    audience: "All officials",
  },
  {
    id: "genai-officials",
    title: "Generative AI for Public Officials",
    subtitle: "Draft faster, verify harder, and never put a citizen’s file into a public model.",
    competencyIds: ["digital", "noting"],
    category: "functional",
    durationMin: 50,
    level: "foundation",
    audience: "All officials",
  },
  {
    id: "data-admin",
    title: "Data-Driven Administration",
    subtitle: "Outcome indicators, dirty MIS, and decisions that survive a field visit.",
    competencyIds: ["data"],
    category: "functional",
    durationMin: 75,
    level: "practitioner",
    audience: "Programme and district officers",
  },
  {
    id: "policy-instruments",
    title: "Choosing Policy Instruments",
    subtitle: "Ban, tax, subsidy, nudge, or standard — and who pays the cost.",
    competencyIds: ["policy"],
    category: "domain",
    durationMin: 80,
    level: "practitioner",
    audience: "Policy wings and directors",
  },
  {
    id: "district-dm",
    title: "Disaster Response at District Level",
    subtitle: "Incident command, relief standards, and the 72 hours that matter.",
    competencyIds: ["disaster", "leadership"],
    category: "domain",
    durationMin: 70,
    level: "practitioner",
    audience: "District and municipal officers",
  },
  {
    id: "urban-ledger",
    title: "The Municipal Ledger",
    subtitle: "Property tax, user charges, grants, and why the balance sheet is a governance tool.",
    competencyIds: ["urban", "finance"],
    category: "domain",
    durationMin: 65,
    level: "practitioner",
    audience: "ULB and urban mission staff",
  },
  {
    id: "new-codes",
    title: "New Criminal Laws: An Officer’s Map",
    subtitle: "BNS, BNSS, and BSA — what changed, and what due process still requires.",
    competencyIds: ["law"],
    category: "domain",
    durationMin: 55,
    level: "foundation",
    audience: "Police, prosecution, and magistracy-adjacent roles",
  },
  {
    id: "rti-records",
    title: "RTI, Records, and the Public File",
    subtitle: "Write every note as if it will be read. Because it might.",
    competencyIds: ["ethics", "noting"],
    category: "functional",
    durationMin: 50,
    level: "foundation",
    audience: "All officials",
  },
];

export const COURSE_MODULES: Record<string, CourseModule[]> = {
  "ethics-public-life": [
    {
      id: "e1",
      title: "The public office is a trust",
      minutes: 22,
      paragraphs: [
        "A civil servant holds power that does not belong to her. Conduct Rules, the Prevention of Corruption Act, and the Central Civil Services (Classification, Control and Appeal) Rules are the floor — not the ceiling — of that trust. Integrity is not the absence of a vigilance case. It is the habit of asking, on every file: who benefits, who pays, and would I defend this note if it were read aloud?",
        "Conflict of interest is often quiet. A relative’s firm on a bid list, a post-retirement conversation, a festival gift that is ‘customary’. Disclose early. Recuse in writing. Do not wait to be asked. The appearance of influence is itself a governance cost, because citizens discount the fairness of the State.",
      ],
      takeaways: [
        "Treat every discretionary decision as a public account.",
        "Disclose and recuse; do not self-certify that you are unbiased.",
        "Gifts, hospitality, and ‘good relations’ are the usual entry points for capture.",
      ],
    },
    {
      id: "e2",
      title: "Code of ethics versus code of conduct",
      minutes: 24,
      paragraphs: [
        "A code of conduct tells you what you must not do. A code of ethics tells you how to choose when the rules run out. Mission Karmayogi treats ethics as a behavioural competency precisely because most hard files are not solved by a circular. They are solved by an officer who can hold two duties at once: loyalty to the Constitution, and loyalty to the facts.",
        "When a political instruction and a legal duty collide, the note must record the law, the risk, and a recommended course. Silence is not neutrality. A file that hides the legal position to please a senior is a misconduct, even if no money changed hands.",
      ],
      takeaways: [
        "Rules are the floor; judgement is the job.",
        "Record the legal position even when it is inconvenient.",
        "Neutrality is towards persons, never towards the Constitution.",
      ],
    },
    {
      id: "e3",
      title: "Vigilance as a design problem",
      minutes: 29,
      paragraphs: [
        "Most corruption is not a villain in a room. It is a process with too much discretion, too little logging, and a citizen who cannot see the queue. Tighten the process: published checklists, time norms, random audit, dual control on payments, and a grievance path that does not loop back to the same desk.",
        "Protect honest officers. A vigilance culture that only punishes after the fact, and never redesigns the counter, produces two failures: the corrupt adapt, and the careful stop taking decisions. Decision-making is also a public duty.",
      ],
      takeaways: [
        "Reduce discretion where a rule can do the work.",
        "Log who did what, and when — including ‘no action’.",
        "Speed with a trail is better than delay dressed up as caution.",
      ],
    },
  ],
  "leading-teams": [
    {
      id: "l1",
      title: "Authority is not the same as leadership",
      minutes: 25,
      paragraphs: [
        "The government gives you a chair, a stamp, and a channel of command. It does not give you a team that will tell you the truth. Leadership in a secretariat or a district is the ability to make average systems produce above-average public results — without burning out the people who actually run the counter.",
        "Start with the work, not the personality. What must be true on Friday for this scheme to move? Who is blocked, and by which file? Officers who only inspect attendance and never inspect bottlenecks create compliance theatre.",
      ],
      takeaways: [
        "Inspect bottlenecks, not just attendance.",
        "Ask what must be true by Friday.",
        "Truth-telling is a team skill you have to protect.",
      ],
    },
    {
      id: "l2",
      title: "Holding people to account without humiliation",
      minutes: 28,
      paragraphs: [
        "Public organisations fail in public. The temptation is to scold in the meeting that follows. That produces quiet rooms and false reports. Set standards in writing, review them on a calendar, and correct in private when the failure is skill — in writing when the failure is integrity.",
        "Delegation is not dumping. When you pass a file down, pass the purpose, the constraint, and the decision rights. ‘Put up a draft’ with no problem statement is how noting becomes ritual.",
      ],
      takeaways: [
        "Standards in writing, review on a calendar.",
        "Correct skill privately; record integrity failures.",
        "Delegation includes purpose, constraints, and decision rights.",
      ],
    },
    {
      id: "l3",
      title: "Deciding under incomplete information",
      minutes: 27,
      paragraphs: [
        "Field officers rarely get a complete brief. The flood is tonight; the lab report is next week. Leadership is naming what you know, what you do not, and which error is costlier — acting too soon, or acting too late. Write that trade-off in the order. Future you, and the audit, will need it.",
        "After-action reviews are not blame sessions. One page: what we expected, what happened, what we will change. Do this after the event, while memory is cheap.",
      ],
      takeaways: [
        "Name the uncertainty in the order itself.",
        "Choose which error is costlier, then move.",
        "Run a one-page after-action review while memory is fresh.",
      ],
    },
  ],
  "citizen-first": [
    {
      id: "c1",
      title: "The citizen is the principal",
      minutes: 22,
      paragraphs: [
        "Sevottam and citizen charters fail when they are posters. They work when a service has a published time norm, a named owner, and a redress path that does not return to the same officer. Map the journey: how many trips, how many documents, how many unofficial ‘facilitators’.",
        "Language is part of access. Forms in only English, portals that die on a 4G phone, and counters that close at the hour when daily-wage workers can come — these are design choices, not fate.",
      ],
      takeaways: [
        "Publish the time norm and the owner of the service.",
        "Count trips, documents, and unofficial fees.",
        "Design for the phone, the language, and the working day of the citizen.",
      ],
    },
    {
      id: "c2",
      title: "Grievance is a sensor",
      minutes: 24,
      paragraphs: [
        "A grievance is not a complaint against you. It is a signal that a process failed. Centralised portals help only if someone with authority reads the pattern, not just the ticket. Five similar complaints is a process bug. Fifty is a policy bug.",
        "Close the loop in the citizen’s language. ‘Disposed’ is not a reply. ‘Your certificate is ready, collect on Tuesday, window 3’ is a reply. Measure time-to-resolution and first-contact resolution, not volume of tickets closed.",
      ],
      takeaways: [
        "Treat repeated grievances as design bugs.",
        "Never close a ticket with the word ‘disposed’ alone.",
        "Measure resolution quality, not disposal volume.",
      ],
    },
    {
      id: "c3",
      title: "Last-mile without leakage",
      minutes: 24,
      paragraphs: [
        "DBT, Aadhaar, and geo-tagging reduce one kind of leakage and can create another: exclusion. An officer’s job is to watch both error types. Keep an offline exception path with a human review, a time limit, and a public register of exceptions. Invisibility is how genuine beneficiaries disappear.",
        "Frontline staff carry the State’s face. Train them as if they were the policy. A rude clerk can undo a well-written scheme in thirty seconds.",
      ],
      takeaways: [
        "Watch inclusion errors as carefully as leakage.",
        "Keep a time-bound, logged exception path.",
        "Frontline conduct is part of the policy.",
      ],
    },
  ],
  "clear-briefing": [
    {
      id: "b1",
      title: "The one-page brief",
      minutes: 18,
      paragraphs: [
        "Seniors do not need your reading. They need the decision, the options, the legal hook, the money, the political and operational risk, and what you recommend. One page. Annexes exist for a reason. If the recommendation is buried on page seven, you have already lost the meeting.",
        "Write the opposing view in steel-man form. If you cannot state the strongest case against your own advice, you are not ready to advise.",
      ],
      takeaways: [
        "Lead with the decision and the recommendation.",
        "Put money, law, and risk on page one.",
        "Steel-man the opposing view before the meeting.",
      ],
    },
    {
      id: "b2",
      title: "Press and public language",
      minutes: 18,
      paragraphs: [
        "Never brief the press beyond the authorised line, and never invent a line in a corridor. Facts, next steps, and sympathy — in that order — during an incident. Do not speculate on cause. Do not name victims before families are informed.",
        "Social media is a public record. A forward from an official handle is an official act. If you would not put it in a file, do not put it on a timeline.",
      ],
      takeaways: [
        "Authorised lines only; no corridor inventions.",
        "Facts, next steps, sympathy — never speculation.",
        "Treat every official post as a file noting.",
      ],
    },
    {
      id: "b3",
      title: "Saying no to a senior",
      minutes: 19,
      paragraphs: [
        "A good officer can disagree without theatre. Put the objection in the note: the rule, the consequence, the alternative. Offer a path that achieves the legitimate aim inside the law. If the instruction is still pressed, ask for it in writing. This is not insubordination. This is how institutions survive individuals.",
      ],
      takeaways: [
        "Disagree on the file, with a lawful alternative.",
        "Ask for oral instructions to be confirmed in writing.",
        "Protect the institution, not the mood of the room.",
      ],
    },
  ],
  "noting-craft": [
    {
      id: "n1",
      title: "What a noting is for",
      minutes: 28,
      paragraphs: [
        "A noting is not a summary of the correspondence. It is a decision-support document: facts, rules, options, recommendation. The next officer should be able to decide without reopening the entire correspondence. If your note forces the JS to reread 140 pages, you have not done the work.",
        "Separate facts from opinion. Quote the rule. Name the file and the page. ‘It is submitted that the matter may kindly be seen’ is not a noting. It is a shrug.",
      ],
      takeaways: [
        "Facts, rule, options, recommendation — in that order.",
        "Never hide behind ‘may kindly be seen’.",
        "Make the next officer able to decide from your note.",
      ],
    },
    {
      id: "n2",
      title: "Drafts that travel",
      minutes: 32,
      paragraphs: [
        "Know the instrument. An OM communicates a decision inside government. An order creates rights or duties. A circular spreads a standing instruction. A letter to a State is not a command unless the law says so. Mismatch the instrument and you either under-bind or overreach.",
        "Write short sentences. Prefer the active voice. Put the request or the decision in the first paragraph. Dates, amounts, and section numbers belong in the body, not in a fog of courtesy. Courtesy can live in the salutation; it should not live in the verb.",
      ],
      takeaways: [
        "Match the instrument to the legal effect you need.",
        "Decision in paragraph one; courtesy in the salutation.",
        "Short sentences, active voice, precise numbers.",
      ],
    },
    {
      id: "n3",
      title: "The file as an institutional memory",
      minutes: 30,
      paragraphs: [
        "Officers move. Files stay. A good file can be picked up after two transfers and still explain why a decision was taken. Date every page. Number every para. Flag the rule. Record oral discussions in a brief note. The RTI applicant, the CAG audit team, and your successor are the hidden readers of every noting.",
        "e-Office does not forgive sloppy structure. Subject lines, references, and the linking of previous files are the search index of the State. Treat them as such.",
      ],
      takeaways: [
        "Write for the successor, the auditor, and the citizen.",
        "Record oral decisions the same day.",
        "Subject lines and references are how the State remembers.",
      ],
    },
  ],
  "cabinet-notes": [
    {
      id: "k1",
      title: "The anatomy of a Cabinet note",
      minutes: 22,
      paragraphs: [
        "A Cabinet note is not a ministry’s essay. It is a proposal for a collective decision: what is asked, why now, legal position, financial implication, inter-ministerial consultation, and the paragraph of the decision sought. The Cabinet Secretariat’s format exists so that ministers can compare apples with apples.",
        "Hide an implication and you have not been clever. You have created a decision that will unravel in implementation, in Parliament, or in court.",
      ],
      takeaways: [
        "Lead with the decision sought.",
        "Surface money, law, and dissent — do not bury them.",
        "Format is not bureaucracy; it is comparability.",
      ],
    },
    {
      id: "k2",
      title: "Consultation is not a ritual",
      minutes: 22,
      paragraphs: [
        "Inter-ministerial comments are meant to catch the costs you do not own. Finance will ask who pays. Law will ask whether you can. DoPT will ask who does the work. Treat a late, hostile comment as a gift: it is cheaper than a failed Cabinet item.",
        "If you disagree with a consulting ministry, say so in the note with reasons. Do not quietly drop their paragraph.",
      ],
      takeaways: [
        "Hostile comments are cheaper than failed items.",
        "Record dissent; never silently drop it.",
        "Name the ministry that will actually implement.",
      ],
    },
    {
      id: "k3",
      title: "Implementation is part of the proposal",
      minutes: 21,
      paragraphs: [
        "A decision without a timeline, an owner, a budget line, and a metric is a press release. Put the implementation architecture in the note: who, by when, with what money, reviewed how. If States must deliver, say what the Centre will fund and what it will only urge.",
      ],
      takeaways: [
        "Owner, money, date, metric — or it is not a decision.",
        "Distinguish funding from urging when States implement.",
        "Write the review cadence into the proposal.",
      ],
    },
  ],
  "gfr-propriety": [
    {
      id: "f1",
      title: "Standards of financial propriety",
      minutes: 28,
      paragraphs: [
        "GFR’s standards of financial propriety are short and almost always the paragraph an audit quotes. Expenditure should not be prima facie more than the occasion demands. No authority should exercise a power for her own advantage. Public money should not be spent for the benefit of a particular person without a recognised policy. Every officer who incurs or authorises expenditure is responsible for it.",
        "Delegation does not dissolve responsibility. If you signed, you own the trail. ‘As per past practice’ is not a sanction.",
      ],
      takeaways: [
        "Propriety is a personal duty, not a section’s.",
        "Past practice is not a sanction.",
        "Delegation never erases the trail of the signatory.",
      ],
    },
    {
      id: "f2",
      title: "Budget, reappropriation, and the year-end rush",
      minutes: 28,
      paragraphs: [
        "A budget is a law-shaped plan, not a suggestion. March spending to ‘use the allocation’ is how warehouses fill with things nobody asked for. Plan procurement in Q2. Keep a working estimate of committed vs cash. Surrender what you will not spend in time for someone else to use it.",
        "Reappropriation has a grammar. You cannot quietly move money from a capital vote to hide a revenue overspend, or fund a new scheme from a savings that is actually a delay. When in doubt, ask the financial adviser before the voucher, not after the para.",
      ],
      takeaways: [
        "Plan buy in Q2; do not panic-spend in March.",
        "Surrender early rather than dump late.",
        "Talk to the FA before the voucher.",
      ],
    },
    {
      id: "f3",
      title: "Living with audit",
      minutes: 29,
      paragraphs: [
        "An audit para is a question about the public trail. Answer with documents, not adjectives. If the objection is right, admit and fix the control. If it is wrong, show the rule and the paper. Repeated paras on the same control mean the organisation has not learned.",
        "Internal audit should be a friend you actually use. A clean CAG report that surprises you is a failure of your own feedback loop.",
      ],
      takeaways: [
        "Reply with papers, not adjectives.",
        "Fix the control, not just the paragraph.",
        "Internal audit is cheaper than public audit.",
      ],
    },
  ],
  "gem-procurement": [
    {
      id: "g1",
      title: "Why GeM exists",
      minutes: 22,
      paragraphs: [
        "The Government e-Marketplace exists to make price discovery visible and to shrink the private negotiation that used to live in a drawer. Direct purchase, comparison, and bid — each has a threshold and a documentation burden. Crossing a threshold without the matching process is not a shortcut. It is an irregularity.",
        "An item being ‘on GeM’ does not make a bad specification good. Garbage in, cartel out.",
      ],
      takeaways: [
        "Match process to threshold. No informal shortcuts.",
        "Specification quality is the real bid design.",
        "Visibility is the point of the platform.",
      ],
    },
    {
      id: "g2",
      title: "Specifications, PAC, and single source",
      minutes: 24,
      paragraphs: [
        "A proprietary article certificate is an exception, not a stationery item. You must show why a standard product will not do, and who in the market was considered. Brand names in a tender without ‘or equivalent’ are a red flag CVC has named for years.",
        "Emergency is a legal idea, not a mood. A conference next week is not a flood. If you invoke urgency, write the public harm of delay.",
      ],
      takeaways: [
        "PAC is an exception with reasons on the file.",
        "Never lock a brand without ‘or equivalent’ unless PAC is real.",
        "Urgency must name the public harm of waiting.",
      ],
    },
    {
      id: "g3",
      title: "Bid evaluation without theatre",
      minutes: 24,
      paragraphs: [
        "Publish the evaluation criteria before you open the bids. Do not invent ‘technical fitness’ after seeing who applied. Minutes of the committee should record dissent. A unanimous committee that always picks the same vendor is a pattern, not a coincidence.",
        "Post-tender negotiation, except where the rules explicitly allow it, is how a fair bid becomes a private conversation.",
      ],
      takeaways: [
        "Criteria before opening, never after.",
        "Record dissent in committee minutes.",
        "Do not negotiate away a competitive process.",
      ],
    },
  ],
  "dpi-officers": [
    {
      id: "d1",
      title: "Rails, not apps",
      minutes: 20,
      paragraphs: [
        "India’s digital public infrastructure — identity, payments, data sharing with consent — is a set of rails. Officers should ask: can this service ride an existing rail, or are we building another portal that nobody will maintain? Portals without a last-mile human and an offline path exclude the people the scheme was written for.",
        "Interoperability is a public good. A ministry-only login that cannot talk to a State system is a tax on the citizen’s time.",
      ],
      takeaways: [
        "Prefer rails over yet another portal.",
        "Always design an offline, human path.",
        "Interoperability is part of citizen service.",
      ],
    },
    {
      id: "d2",
      title: "e-Office and the digital file",
      minutes: 20,
      paragraphs: [
        "e-Office fails when it is used as a scanner for paper habits. Use the tools: pull receipts, reminders, and the audit trail. Do not print to ‘really’ read. If a noting needs a diagram, attach it. If a decision was taken in a room, record it the same day on the file.",
      ],
      takeaways: [
        "Do not recreate paper inside a digital file.",
        "Use reminders and receipts; they are the new dak.",
        "Same-day recording of oral decisions still applies.",
      ],
    },
    {
      id: "d3",
      title: "Data protection is part of service",
      minutes: 20,
      paragraphs: [
        "You hold citizens’ most sensitive facts. Collect less. Share with a purpose. Mask by default on screens that a clerk can photograph. The Digital Personal Data Protection Act is not an IT problem. It is a process problem: who can see a field, for how long, and why.",
      ],
      takeaways: [
        "Collect less than you can; share less than you have.",
        "Mask sensitive fields on the clerk’s screen.",
        "Access logs are part of the service design.",
      ],
    },
  ],
  "genai-officials": [
    {
      id: "a1",
      title: "A draft is not a decision",
      minutes: 16,
      paragraphs: [
        "Generative models are fast readers and confident writers. That is useful for a first draft of a speech, a comparison of options, or a plain-language explanation of a circular. It is dangerous for a legal position, a medical protocol, or a list of beneficiaries. You remain the officer. The model has no duty of care and no file number.",
        "Never paste a citizen’s personal data, a classified annex, or an unreleased Cabinet note into a public model. If your department provides a closed instance, use that. If it does not, keep the prompt at the level of a public circular.",
      ],
      takeaways: [
        "Use models for drafts, never for unreviewed decisions.",
        "No personal data, no classified text, no unreleased notes.",
        "You sign. The model does not.",
      ],
    },
    {
      id: "a2",
      title: "Verify, then send",
      minutes: 17,
      paragraphs: [
        "Models invent sections of Acts, plausible statistics, and case names. Every citation must be opened. Every number must be checked against the source MIS. Build a habit: generate, then interrogate. Ask the model for the weakest part of its own draft. Then check that too.",
      ],
      takeaways: [
        "Open every citation. Models invent law.",
        "Check every number against the official source.",
        "Ask for the weakest part of the draft, then verify it.",
      ],
    },
    {
      id: "a3",
      title: "Where AI helps a public officer this week",
      minutes: 17,
      paragraphs: [
        "Good uses: turning a 40-page guideline into a one-page field checklist; translating a citizen notice; generating a first set of FAQs; role-playing a difficult grievance conversation. Bad uses: auto-disposing RTI, auto-grading tenders, auto-selecting beneficiaries. If a human should be accountable, a human must still decide.",
      ],
      takeaways: [
        "Checklists, translations, FAQs: yes.",
        "Auto-disposal of rights and money: no.",
        "Accountability cannot be delegated to a model.",
      ],
    },
  ],
  "data-admin": [
    {
      id: "da1",
      title: "Indicators that survive a field visit",
      minutes: 25,
      paragraphs: [
        "If a dashboard cannot be true in a village, it is not an outcome indicator. Houses geo-tagged but unlivable, enrolments without attendance, ‘trained’ staff who cannot run the machine — these are classic vanity metrics. Pair every output with a quality check you could do on a Thursday morning.",
        "A denominator matters. Coverage of 90% of registered names is not 90% of the eligible. Know which list you are using, and who is missing from it.",
      ],
      takeaways: [
        "Pair every output with a field-survivable quality check.",
        "Know the denominator, and who is absent from it.",
        "Vanity metrics create false victory and real exclusion.",
      ],
    },
    {
      id: "da2",
      title: "Dirty data, honest decisions",
      minutes: 25,
      paragraphs: [
        "MIS lag, duplicate Aadhaar seeds, and block officers filling numbers at 11 pm are not reasons to stop using data. They are reasons to triangulate: administrative data, sample survey, and a walk. Publish the caveats with the number. A precise falsehood is worse than a ranged truth.",
      ],
      takeaways: [
        "Triangulate MIS with sample and a walk.",
        "Publish caveats next to the number.",
        "A ranged truth beats a precise falsehood.",
      ],
    },
    {
      id: "da3",
      title: "From review meeting to learning",
      minutes: 25,
      paragraphs: [
        "A review that only ranks districts produces gaming. A review that asks ‘what did we change since last month, and did the indicator move?’ produces learning. Keep a small set of indicators. Kill the ones nobody uses. Give the room time to talk about the exception, not the average.",
      ],
      takeaways: [
        "Review change, not just rank.",
        "Fewer indicators, actually used.",
        "Spend the meeting on the exception.",
      ],
    },
  ],
  "policy-instruments": [
    {
      id: "p1",
      title: "Name the problem before the scheme",
      minutes: 26,
      paragraphs: [
        "A scheme is not a problem statement. ‘Farmers are in distress’ is a headline. Is the problem price, water, credit, risk, or market access? Each diagnosis implies a different instrument. If you skip diagnosis, you will copy last year’s scheme with a new name.",
        "Talk to the people who will be regulated or paid — and to the people who will implement. A beautiful notification that a block officer cannot run is not policy. It is literature.",
      ],
      takeaways: [
        "Diagnose before you name the scheme.",
        "Different problems need different instruments.",
        "If the block cannot run it, it is not yet policy.",
      ],
    },
    {
      id: "p2",
      title: "The instrument menu",
      minutes: 28,
      paragraphs: [
        "Governments can ban, mandate, tax, subsidise, inform, insure, procure, or build. Each has a distributional effect. A subsidy without an exit becomes an entitlement. A ban without enforcement becomes a rent. A campaign without a budget becomes a circular.",
        "Ask who captures the instrument. Input subsidies often leak to sellers. Price support without procurement is a speech. Procurement without storage is a rot.",
      ],
      takeaways: [
        "Pick the instrument that matches the failure.",
        "Name who will capture it if you are careless.",
        "No enforcement and no budget means no policy.",
      ],
    },
    {
      id: "p3",
      title: "Sunset, review, and the cost of keeping it",
      minutes: 26,
      paragraphs: [
        "Every new scheme should carry a review date and a kill criterion. Administrative capacity is finite. Adding a scheme without retiring one is how a district office drowns. Write the monitoring plan in the Cabinet note, not in a later SOP that never arrives.",
      ],
      takeaways: [
        "Give every scheme a review date and a kill criterion.",
        "Retire something when you add something.",
        "Monitoring belongs in the proposal, not in a later SOP.",
      ],
    },
  ],
  "district-dm": [
    {
      id: "dm1",
      title: "Roles under the DM Act",
      minutes: 22,
      paragraphs: [
        "The Disaster Management Act creates a chain: NDMA, SDMA, DDMA. At district level the Collector usually chairs the DDMA. That is not a ceremonial chair. It is the legal home of preparedness, response, and the coordination of line departments, armed forces, and NGOs. Know your plan before the siren. The night of the event is a bad time to discover that the relief godown key is with someone on leave.",
      ],
      takeaways: [
        "DDMA is an operational body, not a meeting.",
        "Read the district plan before monsoon, not during it.",
        "Keys, rosters, and fuel must exist at 2 a.m.",
      ],
    },
    {
      id: "dm2",
      title: "Incident command in the first 72 hours",
      minutes: 24,
      paragraphs: [
        "People, then access, then information. Rescue before relief selfies. One operations room, one map, one spokesperson. Log every deployment. Do not let every department run a parallel command on WhatsApp. Medical triage, drinking water, and power for pumps beat almost every other ask in the first day.",
        "Inclusion is operational: disability, women in shelters, migrants with no local papers. If you do not name them in the first order, they will not appear in the first camp.",
      ],
      takeaways: [
        "One command, one map, one spokesperson.",
        "People and access before optics.",
        "Name vulnerable groups in the first order.",
      ],
    },
    {
      id: "dm3",
      title: "Relief, reconstruction, and learning",
      minutes: 24,
      paragraphs: [
        "Relief standards exist so that officers are not inventing fairness under cameras. Follow them, document exceptions, and move to reconstruction with a bias for building back safer, not just faster. After-action reviews should change the next monsoon’s standing order. A disaster that teaches nothing will be repeated.",
      ],
      takeaways: [
        "Use published relief standards; document exceptions.",
        "Build back safer, not only faster.",
        "Change the standing order after every event.",
      ],
    },
  ],
  "urban-ledger": [
    {
      id: "u1",
      title: "A city is a fiscal organism",
      minutes: 22,
      paragraphs: [
        "Property tax, user charges, grants, and borrowings are the four lungs of a municipal body. If assessment is stale, if collections are a negotiation, and if grants arrive as tied schemes, the commissioner is not running a city. She is running a pass-through. GIS-based assessment, door-to-door coverage, and a published arrears list are governance, not ‘revenue work’.",
      ],
      takeaways: [
        "Stale assessment is a political choice.",
        "Own-source revenue is autonomy.",
        "Publish arrears; darkness is a subsidy to the powerful.",
      ],
    },
    {
      id: "u2",
      title: "Services people can see",
      minutes: 22,
      paragraphs: [
        "Water, waste, roads, street lights, and public health are the city’s contract with its residents. A smart-city dashboard that does not move a collection truck is decoration. Set ward-level service levels, put a name on them, and review them like a district reviews a scheme.",
      ],
      takeaways: [
        "Service levels at ward, with a named owner.",
        "Dashboards that do not move trucks are decoration.",
        "Public health is a municipal function, not a guest appearance.",
      ],
    },
    {
      id: "u3",
      title: "Panchayats and convergence",
      minutes: 21,
      paragraphs: [
        "Rural governance fails when every scheme invents its own committee. Use the panchayat. Gram sabha is not a photo. It is the legal forum for priority-setting. Convergence of MGNREGA, Jal Jeevan, and housing is a map-and-calendar problem, not a workshop problem. Sit with the same list of habitations until the lists match.",
      ],
      takeaways: [
        "Do not invent a committee the panchayat already is.",
        "Gram sabha is a legal forum, not a backdrop.",
        "Convergence is matching lists, not holding workshops.",
      ],
    },
  ],
  "new-codes": [
    {
      id: "lc1",
      title: "What actually changed",
      minutes: 18,
      paragraphs: [
        "The Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam replace the IPC, CrPC, and Evidence Act. For an officer, the operational shifts that matter are process: electronic processes, timelines, community service in some sentences, and updated offence maps. Do not pretend you have memorised the new section numbers. Keep a conversion table at the desk until muscle memory arrives.",
      ],
      takeaways: [
        "Keep a section conversion table at the desk.",
        "Process and timelines changed as much as names of offences.",
        "Training is not optional for anyone who signs a process.",
      ],
    },
    {
      id: "lc2",
      title: "Due process did not get repealed",
      minutes: 19,
      paragraphs: [
        "New codes do not license shortcuts. Arrest still needs legal grounds. Search still needs a record. Confessions to police still do not become a lazy substitute for investigation. An officer who treats reform as a free hand will lose the case and the public.",
      ],
      takeaways: [
        "Reform is not a shortcut around rights.",
        "Record arrest, search, and seizure as carefully as before.",
        "A lost procedure still loses the case.",
      ],
    },
    {
      id: "lc3",
      title: "For non-police officers",
      minutes: 18,
      paragraphs: [
        "Magistrates, prosecutors, and even district officers who sit on related committees need a working map: when a matter is cognizable, how a victim is to be treated, and which timelines now bind the system. Ignorance of the new map is not a defence when a file asks you to concur.",
      ],
      takeaways: [
        "Non-police officers still need a working map.",
        "Victim-process and timelines bind the wider system.",
        "Do not concur on a criminal process you have not read.",
      ],
    },
  ],
  "rti-records": [
    {
      id: "r1",
      title: "Write as if it will be read",
      minutes: 16,
      paragraphs: [
        "The Right to Information Act made the file a public document with exceptions, not a private conversation. Notings can be disclosed. That is not a reason to write less. It is a reason to write fairly. Do not put in a noting what you would be ashamed to justify. Do not leave out what a citizen would need to understand the decision.",
      ],
      takeaways: [
        "Assume the noting can travel outside the building.",
        "Fairness, not silence, is the response to RTI.",
        "Exceptions exist; they are not a blanket.",
      ],
    },
    {
      id: "r2",
      title: "The PIO is not a clerk at the edge",
      minutes: 17,
      paragraphs: [
        "A Public Information Officer who is last to know will miss the thirty-day clock. Make disclosure the default in the process: keep a disclosure log, know the third-party consultation rule, and do not use Section 8 as a reflex. A bad refusal costs more than a careful release.",
      ],
      takeaways: [
        "Build the clock into the process, not the panic.",
        "Section 8 is a reasoned exception, not a reflex.",
        "A careful release is cheaper than a bad refusal.",
      ],
    },
    {
      id: "r3",
      title: "Records that can be found",
      minutes: 17,
      paragraphs: [
        "An unindexed record is a secret even when it is not confidential. Retention schedules, weeding, and a living file index are how you survive both RTI and a transfer. Digital dumps without metadata are the new dusty room.",
      ],
      takeaways: [
        "Index is part of transparency.",
        "Weeding is legal; disappearing is not.",
        "Metadata is how digital records remain public.",
      ],
    },
  ],
};

export function competencyById(id: string) {
  return COMPETENCIES.find((c) => c.id === id);
}

export function roleById(id: string) {
  return ROLES.find((r) => r.id === id);
}

export function courseById(id: string) {
  return COURSES.find((c) => c.id === id);
}

export function modulesFor(courseId: string): CourseModule[] {
  return COURSE_MODULES[courseId] ?? [];
}

export const CATEGORY_LABEL: Record<Competency["category"], string> = {
  behavioral: "Behavioural",
  functional: "Functional",
  domain: "Domain",
};

export const LEVEL_LABEL: Record<Course["level"], string> = {
  foundation: "Foundation",
  practitioner: "Practitioner",
  advanced: "Advanced",
};
