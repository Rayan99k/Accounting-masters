export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "note"; label: string; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: ContentBlock[];
}

export const articles: Article[] = [
  {
    slug: "rrsp-2025-deadline-contribution-limits",
    title: "RRSP 2025: Deadline, Contribution Limits & Who Should Contribute",
    excerpt:
      "The RRSP deadline for the 2024 tax year was March 3, 2025. For 2025, the limit rises to $32,490. Here's what you need to know before you contribute.",
    category: "Personal Tax",
    date: "January 15, 2025",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Every year Canadians face the same question around February: should I contribute to my RRSP before the deadline, and how much? The answer depends on your income, your expected retirement income, and your available room. Here is a practical breakdown.",
      },
      { type: "heading", text: "2025 Key Numbers" },
      {
        type: "list",
        items: [
          "2024 tax year contribution limit: $31,560 (or 18% of 2023 earned income, whichever is less)",
          "2025 tax year contribution limit: $32,490 (or 18% of 2024 earned income)",
          "2024 RRSP deadline (for the 2024 tax year): March 3, 2025",
          "2025 RRSP deadline: March 2, 2026",
          "Unused room carries forward indefinitely — check your Notice of Assessment or CRA My Account",
        ],
      },
      {
        type: "highlight",
        text: "Your RRSP contribution room is printed on every Notice of Assessment the CRA sends you. If you're not sure how much room you have, log into CRA My Account or call us — this is one of the most common things we check for clients.",
      },
      { type: "heading", text: "What Counts as 'Earned Income' for RRSP Purposes?" },
      {
        type: "paragraph",
        text: "Your RRSP room for the following year is calculated at 18% of your current year's earned income. Earned income includes employment income (before deductions), net self-employment income, net rental income, royalties, and certain disability payments. It does not include investment income, RRSP withdrawals, pension income, or EI benefits.",
      },
      { type: "heading", text: "When Does an RRSP Contribution Make Sense?" },
      {
        type: "paragraph",
        text: "The core logic is simple: contribute when your current marginal tax rate is higher than the rate you'll pay when you withdraw in retirement. If you earn $100,000 today, you're in roughly the 43% bracket in Ontario. If in retirement you expect to have $50,000 in annual income, you'll be in the 29% bracket — meaning every dollar you contributed saved you 43 cents and will cost you 29 cents when withdrawn. That's a meaningful gain.",
      },
      {
        type: "paragraph",
        text: "If you earn below $50,000 today, the RRSP deduction is worth less and a TFSA contribution often makes more sense. There's no universal answer — it depends on your situation.",
      },
      { type: "heading", text: "Spousal RRSP" },
      {
        type: "paragraph",
        text: "You can contribute to your spouse's RRSP using your own contribution room. The deduction goes on your return (reducing your taxable income), but the money grows in your spouse's plan. When they withdraw it in retirement, it's taxed in their hands — ideally at a lower rate. One important rule: if your spouse withdraws from a spousal RRSP within three calendar years of a contribution, the withdrawal is attributed back to you and taxed in your hands instead.",
      },
      { type: "heading", text: "First Home Buyers' Plan and Lifelong Learning Plan" },
      {
        type: "list",
        items: [
          "First Home Buyers' Plan (HBP): Withdraw up to $35,000 tax-free from your RRSP to buy your first home. Repayments are required over 15 years or the amounts are included in income.",
          "Lifelong Learning Plan (LLP): Withdraw up to $10,000 per year ($20,000 total) to fund full-time education. Repayments over 10 years.",
          "For first-time home buyers, consider the newer First Home Savings Account (FHSA) — $8,000/year, $40,000 lifetime limit, and unlike the HBP, you don't repay the withdrawal.",
        ],
      },
      {
        type: "note",
        label: "Burlington clients",
        text: "If you haven't contributed to your RRSP in a while, you likely have significant unused room built up. We can pull your room from CRA My Account and help you decide whether a lump-sum contribution makes sense before the deadline. Call us at (289) 208-2087.",
      },
    ],
  },
  {
    slug: "self-employed-tax-deductions-canada",
    title: "10 Tax Deductions Self-Employed Canadians Commonly Miss",
    excerpt:
      "Self-employment comes with real tax advantages — if you know what you can claim. These are the deductions most small business owners leave on the table.",
    category: "Self-Employment",
    date: "February 3, 2025",
    readingTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Self-employed Canadians file their business income and expenses on a T2125 (Statement of Business Activities). The CRA allows you to deduct any expense that is reasonable and incurred to earn business income. In practice, many people either miss deductions entirely or claim them incorrectly and get reassessed. Here are ten areas worth paying attention to.",
      },
      { type: "heading", text: "1. Home Office Expenses" },
      {
        type: "paragraph",
        text: "If you work from home regularly, you can deduct a portion of your home expenses — including rent (or mortgage interest, not the principal payment), heat, electricity, internet, and home insurance — based on the percentage of your home used for work. The workspace must be used exclusively for business, or used as the principal place of work. Keep floor plans or photos in case the CRA asks.",
      },
      { type: "heading", text: "2. Vehicle Expenses" },
      {
        type: "paragraph",
        text: "You can deduct the business-use percentage of gas, oil changes, insurance, registration, car washes, repairs, and loan interest. You must keep a mileage logbook showing the date, destination, purpose, and kilometres for every business trip. At year-end, divide business kilometres by total kilometres to get your deductible percentage. Without a logbook, the CRA will deny the claim.",
      },
      { type: "heading", text: "3. Business-Use Portion of Your Phone and Internet" },
      {
        type: "paragraph",
        text: "Your cell phone and home internet are partially deductible if you use them for business. Estimate the business-use percentage honestly — 50–70% is common for most sole proprietors. Keep a few months of bills to support your calculation.",
      },
      { type: "heading", text: "4. Professional Fees and Subscriptions" },
      {
        type: "paragraph",
        text: "Accounting fees, legal fees, professional membership dues, and software subscriptions directly related to your business are fully deductible. This includes accounting software, project management tools, industry association dues, and your CPA's fee for preparing your return.",
      },
      { type: "heading", text: "5. Health and Dental Insurance Premiums" },
      {
        type: "paragraph",
        text: "Self-employed Canadians can deduct premiums paid for private health services plan coverage under line 21200 of their T1. This is different from the medical expense credit — it's a deduction, which is more valuable. If you're paying out-of-pocket for health or dental coverage because you don't have an employer plan, this deduction is often missed entirely.",
      },
      { type: "heading", text: "6. Meals and Entertainment (50%)" },
      {
        type: "paragraph",
        text: "Business meals with clients, referral partners, or employees are 50% deductible. Keep the receipt and note on it who was there and the business purpose. This is the most-audited deduction on small business returns, so your documentation needs to be clear.",
      },
      { type: "heading", text: "7. Capital Cost Allowance (CCA) on Equipment" },
      {
        type: "paragraph",
        text: "Equipment, computers, furniture, and tools are not fully deductible in the year of purchase — they're depreciated over time through CCA. Class 50 (computers) = 55% declining balance. Class 8 (office furniture, equipment) = 20%. Class 10 (vehicles) = 30%. The Immediate Expensing rules introduced in 2021 allowed full deduction in Year 1 for eligible depreciable property — check whether this still applies to your situation.",
      },
      { type: "heading", text: "8. Bank Charges and Interest" },
      {
        type: "paragraph",
        text: "Monthly bank fees on your business account, service charges, and interest on a business line of credit or loan are deductible. Keep your business and personal accounts separate — it makes this much easier to track.",
      },
      { type: "heading", text: "9. Salaries Paid to Family Members" },
      {
        type: "paragraph",
        text: "If a spouse or family member genuinely works in your business, you can pay them a salary and deduct it. The amount must be reasonable — comparable to what you'd pay an arm's-length employee for the same work. It must actually be paid (not just documented on paper). Done properly, this splits income with a lower-income earner and reduces the family's overall tax bill.",
      },
      { type: "heading", text: "10. Professional Development and Education" },
      {
        type: "paragraph",
        text: "Courses, conferences, workshops, and books directly related to maintaining or improving skills in your current business are deductible. If you're a bookkeeper taking an advanced Excel course or a consultant attending an industry conference, those are deductible. If the education is preparing you for a new career, it generally is not.",
      },
      {
        type: "highlight",
        text: "The CRA doesn't just look at whether a deduction is listed — it looks at whether it's reasonable relative to your income. Claiming $20,000 in meals on $40,000 of income will attract attention. Good documentation and reasonable amounts are your best protection.",
      },
    ],
  },
  {
    slug: "capital-gains-tax-canada-2024-changes",
    title: "Capital Gains in Canada: What the 2024 Inclusion Rate Change Means for You",
    excerpt:
      "The federal government proposed raising the capital gains inclusion rate in 2024. Here's what changed, who it affects, and what to consider before selling appreciated assets.",
    category: "Tax Planning",
    date: "March 10, 2025",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "In the April 2024 federal budget, the government proposed increasing the capital gains inclusion rate — the portion of a capital gain that is added to income and taxed — from one-half (50%) to two-thirds (66.7%), effective June 25, 2024. This is the most significant capital gains tax change in Canada in decades.",
      },
      { type: "heading", text: "What Changed and for Whom" },
      {
        type: "list",
        items: [
          "Individuals: The ½ inclusion rate still applies to the first $250,000 of capital gains per year. Gains above $250,000 in a single year are now subject to the ⅔ inclusion rate.",
          "Corporations and most trusts: All capital gains are subject to the ⅔ rate, with no $250,000 threshold.",
          "Effective date: June 25, 2024. Gains realized before that date in the 2024 tax year are still subject to the old ½ rate.",
        ],
      },
      {
        type: "note",
        label: "Important note",
        text: "As of early 2025, the legislation implementing the higher rate had not received Royal Assent (Parliament was prorogued in January 2025). However, the CRA announced it will administer the new rates for 2024 tax returns. The political status of this change is still evolving — we will keep this page updated.",
      },
      { type: "heading", text: "Lifetime Capital Gains Exemption (LCGE)" },
      {
        type: "paragraph",
        text: "To offset some of the impact, the federal government also increased the Lifetime Capital Gains Exemption for qualified small business corporation (QSBC) shares from $1,016,602 to $1,250,000, effective June 25, 2024. This benefits business owners who sell shares of a qualifying corporation — a significant relief for small business succession planning.",
      },
      { type: "heading", text: "What This Means in Practice" },
      {
        type: "paragraph",
        text: "For most individual investors selling stocks or mutual funds, if your capital gains are under $250,000 per year, nothing changes. You still pay tax on 50% of the gain. If you sold a rental property, a vacation home, or a significant investment portfolio in 2024 and realized gains above $250,000, the gains above that threshold are now taxed more heavily.",
      },
      {
        type: "paragraph",
        text: "For a corporation — say, a small business or a holding company — the change is more impactful. All capital gains in a corporation are now at the ⅔ rate, which affects strategies like holding investment portfolios inside a corporation, selling appreciated real estate held in a corp, or structuring business sales.",
      },
      { type: "heading", text: "What to Do" },
      {
        type: "list",
        items: [
          "If you have unrealized capital gains in a corporation, talk to your accountant about whether it makes sense to restructure before triggering those gains.",
          "If you're planning to sell a business or property, understanding the new inclusion rate is essential to timing the transaction correctly.",
          "If you're close to the $250,000 threshold in a given year, spacing out gains across multiple years can keep you under it.",
          "Ensure your accountant is tracking your pre- and post-June 25 gains separately for the 2024 return.",
        ],
      },
    ],
  },
  {
    slug: "hst-gst-registration-ontario-guide",
    title: "HST/GST Registration in Ontario: When You Must Register and When to Do It Early",
    excerpt:
      "The $30,000 threshold isn't the whole story. Voluntary registration can save you money from day one, and waiting too long creates penalties. Here's what you need to know.",
    category: "Small Business",
    date: "January 28, 2025",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Every Canadian business providing taxable supplies must register for GST/HST once revenues exceed $30,000 in a single calendar quarter or over four consecutive calendar quarters. In Ontario, HST is 13% (5% federal + 8% provincial). Here's a practical guide to navigating registration.",
      },
      { type: "heading", text: "The $30,000 Threshold: How It Works" },
      {
        type: "paragraph",
        text: "You need to track your taxable revenues rolling — both in the current calendar quarter and cumulatively over the past four quarters. The moment you exceed $30,000 in either window, you must register. You then have 29 days from the day you exceeded the threshold to file for registration. After that deadline, penalties apply.",
      },
      {
        type: "highlight",
        text: "One common mistake: people wait until their annual revenues cross $30,000. The threshold applies to a single quarter too. If you earn $35,000 in a slow quarter, you've crossed the threshold and must register immediately.",
      },
      { type: "heading", text: "Why Voluntary Registration Often Makes Sense" },
      {
        type: "paragraph",
        text: "Registering before you hit the threshold lets you claim Input Tax Credits (ITCs) — refunds of the HST you paid on business expenses — from the date of registration. If you're spending money on equipment, software, rent, or supplies for your business, you're already paying HST. Getting that back via ITCs is real money.",
      },
      {
        type: "paragraph",
        text: "For B2B businesses especially, early registration also removes the question from your clients' minds. A registered supplier looks like an established business. Unregistered suppliers under the threshold can sometimes create friction with larger corporate clients who expect a GST/HST number on invoices.",
      },
      { type: "heading", text: "Zero-Rated vs. Exempt: A Critical Distinction" },
      {
        type: "paragraph",
        text: "Not all supplies are taxable at 13%. Some are zero-rated (taxed at 0%) and some are exempt (not subject to HST at all). The difference matters for ITCs:",
      },
      {
        type: "list",
        items: [
          "Zero-rated supplies (basic groceries, prescription drugs, most exports, agricultural products): You charge 0% HST, but you CAN claim ITCs on your business expenses related to those supplies.",
          "Exempt supplies (residential rent, health care services, educational services, most financial services): You do NOT charge HST, and you CANNOT claim ITCs on related expenses.",
          "Most Ontario businesses providing services to consumers or other businesses are making taxable supplies at 13%.",
        ],
      },
      { type: "heading", text: "Filing Frequency" },
      {
        type: "paragraph",
        text: "The CRA assigns a filing frequency based on your annual taxable supplies: annual (under $1.5M), quarterly ($1.5M–$6M), or monthly (over $6M). Most small businesses start on annual filing. If you have significant ITCs (you pay more HST on inputs than you collect), requesting quarterly filing gets your ITCs back faster — improving your cash flow.",
      },
      { type: "heading", text: "Common Mistakes to Avoid" },
      {
        type: "list",
        items: [
          "Mixing HST collected with operating funds — set aside collected HST in a separate account.",
          "Missing a quarterly instalment if you owe more than $3,000 — interest and penalties apply.",
          "Not tracking the split between HST collected and HST paid on expenses — you'll need this for your return.",
          "Claiming ITCs on personal expenses mixed in with business — the CRA reviews these closely.",
        ],
      },
    ],
  },
  {
    slug: "home-office-expenses-canada-2025",
    title: "Home Office Expenses in Canada: What You Can Claim in 2025",
    excerpt:
      "The CRA's temporary flat-rate method ended after 2022. For 2023 onwards, only the detailed T2200 method applies. Here's exactly what you can and can't deduct.",
    category: "Personal Tax",
    date: "February 18, 2025",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "From 2020 through 2022, the CRA offered a simplified flat-rate home office deduction of $2 per day worked from home, up to $500 per year. That temporary measure is gone. For 2023 and all subsequent tax years, only the detailed method applies — and you need your employer to complete a T2200 form to support the claim.",
      },
      { type: "heading", text: "Eligibility for Employees" },
      {
        type: "paragraph",
        text: "To deduct home office expenses as an employee, your home must be where you mainly do your work (more than 50% of the time), or it must be the space you use exclusively and regularly to meet clients or customers. Your employer must certify this on a T2200 (Declaration of Conditions of Employment). Your employer is not required to issue this form, but many do as a matter of course.",
      },
      { type: "heading", text: "Calculating Your Workspace Percentage" },
      {
        type: "paragraph",
        text: "Divide the area of your workspace by the total finished area of your home. For example: a 200 sq ft home office in a 1,500 sq ft home = 13.3% workspace percentage. If your workspace is not a dedicated room but part of a shared space (living room, kitchen), you apply the percentage only to the hours the space is used for work — this gets complicated and the CRA may scrutinize it.",
      },
      { type: "heading", text: "What Employees Can Deduct" },
      {
        type: "list",
        items: [
          "Electricity, heat, water (proportional to workspace %)",
          "Rent (if you rent your home, proportional to workspace %)",
          "Internet access fees (proportional to workspace %)",
          "Home maintenance and minor repairs (proportional to workspace %)",
          "Commission-paid employees only: home insurance and property taxes",
        ],
      },
      {
        type: "highlight",
        text: "Mortgage interest is NOT deductible for employees working from home. Only rent is. If you own your home, the main benefit of the home office deduction as an employee is recouping a portion of your utilities and internet.",
      },
      { type: "heading", text: "What Self-Employed Can Deduct" },
      {
        type: "paragraph",
        text: "Self-employed individuals use Form T2125 (not T2200) and can claim a broader range of home expenses: rent or mortgage interest, property taxes, home insurance, maintenance and repairs, and utilities — all proportional to workspace percentage. Be aware that claiming CCA (capital cost allowance) on the workspace portion of your home can create a taxable capital gain when you sell, partially eliminating the principal residence exemption. Most accountants recommend not claiming CCA on your home unless you are absolutely certain you won't benefit from the PRE.",
      },
      { type: "heading", text: "What the CRA Looks For" },
      {
        type: "list",
        items: [
          "T2200 signed by your employer (employees only)",
          "Reasonable workspace percentage — claiming 50% of a 3-bedroom home for a single office raises flags",
          "Actual bills and receipts for all expenses claimed",
          "Consistency year to year — if you claim 20% one year and 45% the next, expect questions",
        ],
      },
    ],
  },
  {
    slug: "incorporating-ontario-when-it-makes-sense",
    title: "Incorporating in Ontario: When It Actually Makes Sense (and When It Doesn't)",
    excerpt:
      "Incorporating sounds appealing — but the tax savings only work if you're leaving money in the company. Here's the honest math behind the decision.",
    category: "Corporate",
    date: "March 1, 2025",
    readingTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Incorporation is one of the most powerful tools in the Canadian tax system — but it's also one of the most misunderstood. People incorporate too early, too late, or for the wrong reasons, and end up with extra compliance costs and no real tax benefit. Here is an honest breakdown of when it makes sense.",
      },
      { type: "heading", text: "The Core Tax Advantage" },
      {
        type: "paragraph",
        text: "A Canadian-Controlled Private Corporation (CCPC) earning active business income qualifies for the Small Business Deduction. The combined federal and Ontario tax rate on the first $500,000 of active business income is approximately 12.2% (9% federal after the SBD + 3.2% Ontario). Compare this to personal marginal rates in Ontario:",
      },
      {
        type: "list",
        items: [
          "$80,000 personal income: ~33% marginal rate",
          "$100,000 personal income: ~43% marginal rate",
          "$150,000 personal income: ~49.5% marginal rate",
          "$220,000+ personal income: ~53.5% marginal rate",
        ],
      },
      {
        type: "paragraph",
        text: "The difference between 12.2% (corporate) and your personal rate is the tax deferral — not a permanent saving. When money leaves the corporation as salary or dividends, you pay personal tax. The benefit is that money sitting inside the corporation grows at the lower corporate rate, which is powerful for reinvestment.",
      },
      { type: "heading", text: "The Math: When Deferral Becomes Real Savings" },
      {
        type: "paragraph",
        text: "If you earn $200,000 from your business and only need $80,000 personally, you leave $120,000 in the corporation. On that $120,000, you've deferred tax of roughly $40,000 – $50,000 compared to earning it personally. That deferred tax stays in the corporation, earning a return, for as long as you choose. Over 10–20 years, this compounding advantage is substantial.",
      },
      {
        type: "highlight",
        text: "If you need every dollar you earn, incorporation offers little tax advantage. The deferral only works if money stays in the corporation. Extraction via salary or dividends triggers personal tax.",
      },
      { type: "heading", text: "When Incorporating Makes Sense" },
      {
        type: "numbered",
        items: [
          "You consistently earn significantly more than your personal living costs — typically $80,000+ in net business income, with at least $30,000–40,000 being retained in the business.",
          "You want to split income with a lower-income spouse or adult children through salary payments or dividends (subject to TOSI rules).",
          "You run a professional practice (physician, dentist, lawyer, engineer) that qualifies for a Professional Corporation.",
          "Liability protection is important to you — incorporated businesses shield personal assets from business creditors (though professional malpractice may not be protected).",
          "You're planning to sell the business and want to qualify for the $1.25M Lifetime Capital Gains Exemption on QSBC shares.",
        ],
      },
      { type: "heading", text: "When It Probably Doesn't" },
      {
        type: "list",
        items: [
          "You're just starting out and revenue is under $60,000 — compliance costs ($1,500–3,500/year for corporate tax return and financial statements) often exceed the tax savings.",
          "Your business income is investment income (dividends, interest, rent inside a holding company) — passive investment income is taxed at ~50% inside a corporation, eliminating most advantages.",
          "You intend to take out all profits as salary anyway — you'll end up in the same tax position as a sole proprietor, but with more paperwork.",
        ],
      },
      { type: "heading", text: "The Salary vs. Dividend Decision" },
      {
        type: "paragraph",
        text: "Once incorporated, you decide how to pay yourself: salary, dividends, or a mix. Salary creates RRSP contribution room and counts toward CPP. Dividends do not. For most owner-managers, a mix is optimal — a salary equal to your RRSP contribution room or CPP benefit target, with the rest as dividends. The exact calculation changes each year with your income and bracket. This is something we calculate annually for our incorporated clients.",
      },
      {
        type: "note",
        label: "Next step",
        text: "If you're considering incorporating, book a consultation with us before you file. The decision about timing can affect what you pay this year and how you structure your business going forward. Call (289) 208-2087.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categories = Array.from(new Set(articles.map((a) => a.category)));
