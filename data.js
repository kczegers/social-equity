let result;
//take the var data and its
let data = [

	{
		"location": "Coachella, CA",
		"eligibility": "Classification 1. A current or former resident of the City of Coachella who\npreviously resided or currently resides in a low-income household and was\neither: a) arrested or convicted for a cannabis related crime in the City of\nCoachella between the years of 1980 and 2011; or is b) an immediate\nfamily member of an individual in subsection a of Classification 1 or\nClassification 2. Classification 2. A current or former resident of the City of Coachella who\nhas lived in a low-income household for at least five (5) years, between\nthe years of 1908 and 2018. Annual family income must be at or below 80\npercent of the Area Median Income (AMI) and net worth below $250,000.",
		"details": "Includes business plan development, mentoring, assistance securing capital, assistance with criminal records expungement, marketing/social media, regulatory compliance, permit fee waivers",
		"link": "https://www.bcc.ca.gov/licensees/socequity_coachela.pdf"
  },
	{
		"location": "Humboldt County, CA",
		"eligibility": "Must meet any of the following qualifications: a. Any individual and/or entity that has obtained or applied for a permit (either\ntemporary or permanent), and the permit is for a business located in an area in\nHumboldt County with a poverty rate of 17% or above.\nb. Have engaged in or are currently engaged in small-scale cultivation of cannabis on\nproperty in Humboldt County owned, leased, or with the express permission of the\nowner, with a cultivation area less than 10,000 square feet;\nc. Any woman, person of color, or LGBTQ individual who has or worked in, or currently\nworks in the cannabis industry in Humboldt County;\nd. Any individual who has obtained or applied for a cannabis permit in Humboldt\nCounty, or who has worked in or currently works in the cannabis industry, and was\narrested and/or convicted of a non-violent cannabis-related offense, or was subject\nto asset forfeiture arising from a cannabis-related event;\ne. Are a person who experienced sexual assault, exploitation, domestic violence, and/or\nhuman trafficking while participating in the cannabis industry.\nf. Have become homeless or suffered a loss of housing as a result of marijuana\nenforcement",
		"details": "Includes tiered fees and fee waivers; business planning assistance; loans or grants to comply with regulations; employment skill training; deferral of payment of applications fees for zoning clearance or special permits up to three years",
		"link": "https://humboldtgov.org/DocumentCenter/View/78911/Local-Equity-Program-Manual"
  },
	{
		"location": "Long Beach, CA",
		"eligibility": "Annuual family income at or below 80% of the area median income and a net worth below $250,000 and: has lived in a lower-income census tract for at least three years; or was arrested for a crime relating to the sale, possession, use, or cultivation of cannabis in Long Beach prior to Nov. 8, 2016; is a city resident currently receiving unemployment benefits",
		"details": "Includes expedited permit application review, permit compliance assistance, cultivation business license tax deferrals during the first year, expedited buildinf plan check review, fee waivers",
		"link": "http://longbeach.legistar.com/View.ashx?M=F&ID=6367362&GUID=58CE120C-2A55-45B6-934F-D283823AF1B3"
  },
	{
		"location": "Rio Dell, CA",
		"eligibility": "Must be one of the following: licensed for, seeking a license, or employment in a Rio Dell cannabis business; the business owner; own 40% of the business and be a managing member; own at least 51% of the business; AND: have resided in Humboldt County at least five years between 1971 ans 2016; have obtained a permit for employment; meet one of the following conditions: household income below 80% median area income; have a cannabis-related arrested or conviction between 1971 to 2015; have lived within a five-mile raduis of raids conducted by the Campaign Against Marijuana Planting between 1971 to 2015; have cultivated on an area less than 10,000 square feet for at least two years; be a memeber of an ethnis, racial or other disadvantaged community, including LGBTQ persons; have become homeless or lost housing as a result of marijuana enforcement",
		"details": "Fee waivers or deferrals, techinal assistance, reduction or deferral of local cannabis excise taxes",
		"link": "https://cityofriodell.ca.gov/sites/cityofriodell.ca.gov/files/LatestNews/Ord%20375-2019%20ESTABLISHING%20A%20CANNABIS%20LOCAL%20EQUITY%20PROGRAM%20RDCLEP.pdf"
  },
	{
		"location": "Santa Cruz, CA",
		"eligibility": "Owners of commercial cannabis businesses who can demonstrate that they, their employees, or their customers have been negatively impacted in a disproportionate way by cannabis criminalization and who can further demonstrate what they have done and will do to address those negative impacts, including but not limited to supporting compassionate care programs within the community.",
		"details": "Compliance workshops, permit training, fee waivers, assistance is securing business locations",
		"link": "https://www.codepublishing.com/CA/SantaCruzCounty/html/SantaCruzCounty07/SantaCruzCounty07136.html"
  },
	{
		"location": "San José , CA",
		"eligibility": "Annual income at or below 80% of area median income and at least one of the following criteria: Has lived in San José for at least four years un a census tract where at least 51% of current residents have an income at or below 80% AMI; Has attended a San José public school, or schools, for at least four years located in a census tract where at least 51% of current residents have an income at or below 80% AMI; was arrested or convicted for a crime; relating to the sale, possession, use, or cultivation of cannabis; or had a parent, guardian, child, or sibling convicted of a crime relating to the sale, possession, use, or cultivation of cannabis in the City of San José",
		"details": "Technical assistance, training for prospective employees, and other services dependent on funding",
		"link": "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT6BULIRE_CH6.88MENDICA_PT3.5CAEQASPR"
  },
	{
		"location": "Sacramento, CA",
		"eligibility": "Classification 1 (individual): Lives or have lived in a low-income household and has been arrested in Sacramento for cannabis-related crime between 1980 and 2011; or an immediate family member who was arrested for a cannabis-related offense; Classification 2 (individual):\nLived in a low income household in the following zip codes for 5 consecutive years between 1980 and 2011; Classification 3 (business): Businesses with no less then 51% ownership by Classifications 1& 2 individuals; Classification 4 (business): An incubator that hosts a social equity participant and 30% of its workforce are Classification 1 or 2 partcipants; or is a shared manufacturing cannabis business and donates hours of operation and equipment or is a cannabis business that sells, gives or otherwise transfers no less than a 33% equity share in participants and contracts no less than 30% of its cannabis and ancillary business with Classification 1 or 2 eligible participants.; Classification 5 (business): Cannabis Social Enterprise with no less then 51% ownership by Classifications 1 & 2 individuals",
		"details": "",
		"link": "https://www.cityofsacramento.org/Finance/Revenue/Sacramento-Marijuana-Information/Core-Program"
  },
	{
		"location": "San Franciso, CA",
		"eligibility": "Must meet three of six conditions: Has a household income below 80% of the average median income in the city; Have been arrested for or convicted of the sale, possession, use, manufacture, or cultivation of cannabis (including as a juvenile) from 1971 to 2016; Have a parent, sibling or child who was arrested for or convicted of the sale, possession, use, manufacture, or cultivation of cannabis (including as a juvenile) from 1971 to 2016; Lost housing in San Francisco after 1995 through eviction, foreclosure or subsidy cancellation; Attended school in the San Francisco Unified School District for a total of 5 years from 1971 to 2016; Have lived in San Francisco census tracts for a total of 5 years from 1971 to 2016 where at least 17% of the households had incomes at or below the federal poverty level",
		"details": "Equity applicants do not have to pay the $5,000 permit fee and can participate in an incubator program that provides rent-free space for three years or technical assistance to run their business",
		"link": "https://officeofcannabis.sfgov.org/equity/applicant#equity-conditions"
  },
	{
		"location": "Los Angeles, CA",
		"eligibility": "Tier 1: Must be low-income and have an arrest conviction for a cannabis offense in CA priot to Nov. 8, 2016 or have been a resident for at least 5 years in a disproportionately impacted area; must own at least 51% of the business applying for a license; Tier 2: Must be low-income and have been a resident for at least 5 years in a disproportionately impacted area, and must own 33 1/3 % of the business applying for a license; Tier 3: Must provide Tier 1 and Tier 2 applicants business licensing and compliance support. Must provide a Tier 1 applicant with access to property",
		"details": "Seeks to priotitize licensing for social equity apllicants in a limited market; provides technical and businesess assistance during licensing process; applicants may qualify for fee deferrals; support for workforce development and job placement for thosr interested in job placement rather than business licensing",
		"link": "https://cannabis.lacity.org/licensing/social-equity-program-2"
  },
	{
		"location": "Oakland, CA",
		"eligibility": "City Resident who either has a cannabis conviction after Nov. 5, 1996 or has lived for 10 of the last 20 years in the police beats with disproportionately higher number of cannabis-related arrests; Must show an annual income at or less than 80% of the city median income thresholds.",
		"details": "The city partners equity applicants with general applicants, who provide free incubator space–a minimum of 1000 square feet–for three years.",
		"link": "https://www.oaklandca.gov/topics/become-an-equity-applicant-or-incuabtor"
  },
	{
		"location": "Illinois",
		"eligibility": "1. Have lived in a disproportionately impacted area in five of the past 10 years; 2. Have been arrested for, convicted of, or adjudicated delinquent for cannabis-related offenses eligible for expungement, including cannabis possession up to 500 grams or intent to deliver up to 30 grams; Have a parent, child, or spouse that has been arrested for, convicted of, or adjudicated delinquent for cannabis-related offenses eligible for expungement, including possession up to 500 grams or intent to deliver up to 30 grams",
		"details": "Social equity applicants have least 51% ownershio and control of a business; Business with  more than10 full-time employees include more than half a staff that qualifies as a social equity applicant; A $2,500 application fee and $30,000 two-year licenses are half the cost of fees for non-social equity applicants.",
		"link": "https://www2.illinois.gov/dceo/Pages/CannabisEquity.aspx"
  },
	{
		"location": "Massachusetts",
		"eligibility": "1. Residence in an area of disproportionate impact for at least five of the past 10 years and an income that does bot exceed 400% of the Federal Poverty Level; 2. A past deug conviction and residence in Massachusetts for at least the preceding 12 months; 3. Married to or the child of a person with a drug conviction and residence in Massachusetts for at thes the preceding 12 months",
		"details": "Provides professional training, technical assistace, and mentoring with the mission to encaourage full participation by people from communities disproportionately harmed by marijuana prohibition by reducing barriers to entry.",
		"link": "https://mass-cannabis-control.com/equityprograms-2/#tab-id-2"
  },
	{
		"location": "Michigan",
		"eligibility": "Must be a resident of a disproportionately impacted community for the last five consecutive years; has a marijuana-related conviction; or has been registered as a primary caregiver for at least two years between 2008 and 2017.",
		"details": "Provides one-on-one application assistance; reduced application, lincense and renewal fees up to 60%; business resources on taxes, compliance, employee benefits, safety.",
		"link": "https://www.michigan.gov/lara/0,4601,7-154-89334_79571_79784-508912--,00.html"
  }
]