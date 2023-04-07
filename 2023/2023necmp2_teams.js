var teams = [
  {
    "city": "Londonderry",
    "country": "USA",
    "key": "frc1058",
    "name": "Fleet Ready Corp./Londonderry STEM/BAE Systems/Raytheon&Londonderry High School",
    "nickname": "PVC Pirates",
    "state_prov": "New Hampshire",
    "team_number": 1058
  },
  {
    "city": "Wolcott",
    "country": "USA",
    "key": "frc1071",
    "name": "Wolcott Public Schools/Pratt and Whitney/Lockheed Martin/Mattatuck Scrap Metal&Wolcott High School",
    "nickname": "Team MAX",
    "state_prov": "Connecticut",
    "team_number": 1071
  },
  {
    "city": "Hollis",
    "country": "USA",
    "key": "frc1073",
    "name": "Hollis-Brookline High School/Viasat/BAE Systems/FIRST New Hampshire/New Hampshire Department of Education/Amazon Robotics/Southern New England Admirals: Semi-Pro Football Team/Raytheon/Rockwell Automation/Intuitive Foundation&Hollis Brookline High School&Family/Community",
    "nickname": "The Force Team",
    "state_prov": "New Hampshire",
    "team_number": 1073
  },
  {
    "city": "Northborough/Southborough",
    "country": "USA",
    "key": "frc1100",
    "name": "Intel/Carrier/Boston Scientific/Argosy Foundation/Bayer/Bolt Depot /Autodesk &Algonquin Regional High School",
    "nickname": "Inverse Polarity",
    "state_prov": "Massachusetts",
    "team_number": 1100
  },
  {
    "city": "Walpole",
    "country": "USA",
    "key": "frc1153",
    "name": "Analog Devices/Legacy Engineering/WM Duggan Company/Koopman Lumber&Walpole High School",
    "nickname": "Timberwolves",
    "state_prov": "Massachusetts",
    "team_number": 1153
  },
  {
    "city": "North Sutton",
    "country": "USA",
    "key": "frc1247",
    "name": "NDEP/Hypertherm & Kearsarge Regional High School",
    "nickname": "Blood, Sweat, and Gears",
    "state_prov": "New Hampshire",
    "team_number": 1247
  },
  {
    "city": "Revere",
    "country": "USA",
    "key": "frc125",
    "name": "Sonos/Markforged/West Coast Products LLC/Northeastern University/PTC/BNY Mellon/BAE Systems/Mathworks & Greater Boston Robotics & Boston Latin School & Brookline High School & Revere High School",
    "nickname": "NUTRONs",
    "state_prov": "Massachusetts",
    "team_number": 125
  },
  {
    "city": "Manchester",
    "country": "USA",
    "key": "frc131",
    "name": "BAE SYSTEMS/NHDOE/Gene Haas Foundation/Queen City Rotary Club/Pfizer/CHAOS Families & Alumni/MegaFood/Scott Brown and the Diplomats/Central Pride Foundation&4-H&Manchester Central High School",
    "nickname": "CHAOS",
    "state_prov": "New Hampshire",
    "team_number": 131
  },
  {
    "city": "Standish",
    "country": "USA",
    "key": "frc133",
    "name": "ITS Inc. / Lockheed Martin / Robotics Institute of Maine / MSAD6 & Bonny Eagle High School",
    "nickname": "B.E.R.T.",
    "state_prov": "Maine",
    "team_number": 133
  },
  {
    "city": "Amherst",
    "country": "USA",
    "key": "frc138",
    "name": "Monarch Instrument/BAE Systems/John Alberts Welding/County Stores/PJ Currier Lumber/Omron/Rapid Sheet Metal&Souhegan High School",
    "nickname": "Entropy",
    "state_prov": "New Hampshire",
    "team_number": 138
  },
  {
    "city": "Berlin",
    "country": "USA",
    "key": "frc155",
    "name": "Raytheon Technologies, Pratt & Whitney Division,Middletown, CT/Berlin Public Schools, Berlin, Ct&Family/Community",
    "nickname": "The TechnoNuts",
    "state_prov": "Connecticut",
    "team_number": 155
  },
  {
    "city": "Merrimack",
    "country": "USA",
    "key": "frc166",
    "name": "Merrimack School District/New Hampshire Department of Education/Elbit Systems of America/Saint-Gobain/Raytheon Technologies/B & K Industrial Finishing, Inc./Fully Promoted/Sal's Pizza&Merrimack High School",
    "nickname": "Chop Shop",
    "state_prov": "New Hampshire",
    "team_number": 166
  },
  {
    "city": "Colchester",
    "country": "USA",
    "key": "frc1699",
    "name": "Dominion Nuclear Connecticut Inc./Tsunami  Solutions/Carolina Precision/Baldi Sand and Gravel/InCord /Microbest/Raytheon Technologies&Bacon Academy",
    "nickname": "Robocats",
    "state_prov": "Connecticut",
    "team_number": 1699
  },
  {
    "city": "Falmouth/Gorham",
    "country": "USA",
    "key": "frc172",
    "name": "IDEXX Laboratories/Lanco Integrated/Falmouth High School/Adobe/Texas Instruments/GoFar&Falmouth High School&Gorham High School",
    "nickname": "Northern Force",
    "state_prov": "Maine",
    "team_number": 172
  },
  {
    "city": "Peterborough",
    "country": "USA",
    "key": "frc1729",
    "name": "Wyatt & Associates/New Hampshire 4-H Association&Monadnock 4-H Robotics Club",
    "nickname": "Team Inconceivable!",
    "state_prov": "New Hampshire",
    "team_number": 1729
  },
  {
    "city": "Worcester",
    "country": "USA",
    "key": "frc1735",
    "name": "WPI/Boston Scientific&Burncoat High School",
    "nickname": "Green Reapers",
    "state_prov": "Massachusetts",
    "team_number": 1735
  },
  {
    "city": "Ledyard",
    "country": "USA",
    "key": "frc1740",
    "name": "Dominion Millstone Power Station&Ledyard High School",
    "nickname": "Cyber Colonels",
    "state_prov": "Connecticut",
    "team_number": 1740
  },
  {
    "city": "Enfield",
    "country": "USA",
    "key": "frc175",
    "name": "LifeWorks&Enfield High School",
    "nickname": "Buzz Robotics",
    "state_prov": "Connecticut",
    "team_number": 175
  },
  {
    "city": "Westwood",
    "country": "USA",
    "key": "frc1757",
    "name": "Heartlander Surgical/Westwood Public Schools/Medtronic/Act Fasteners/Gene Haas Foundation/TE Connectivity/General Dynamics/Ira Motor Group&Westwood High School",
    "nickname": "Wolverines",
    "state_prov": "Massachusetts",
    "team_number": 1757
  },
  {
    "city": "Windsor Locks",
    "country": "USA",
    "key": "frc176",
    "name": "Illinois Tool Works (ITW)/Amiel P. Zak Fund/Collins Aerospace & 4-H & Connecticut 4-H Foundation, Inc. & Windsor Locks High School & Suffield High School",
    "nickname": "Aces High",
    "state_prov": "Connecticut",
    "team_number": 176
  },
  {
    "city": "Bolton",
    "country": "USA",
    "key": "frc1768",
    "name": "SynQor/Boston Scientific/Raytheon&Nashoba Regional High School",
    "nickname": "Nashoba Robotics",
    "state_prov": "Massachusetts",
    "team_number": 1768
  },
  {
    "city": "South Windsor",
    "country": "USA",
    "key": "frc177",
    "name": "Apple/South Windsor Public Schools/NASA/Pratt & Whitney/Protedyne/Ensign-Bickford Aerospace & Defense/TE Connectivity/South Windsor Rotary&South Windsor High School",
    "nickname": "Bobcat Robotics",
    "state_prov": "Connecticut",
    "team_number": 177
  },
  {
    "city": "Farmington",
    "country": "USA",
    "key": "frc178",
    "name": "Haas Automation, Inc./Raytheon Technologies/Sikorsky Aircraft/Irina Bezsonova/Farmington Friends of Robotics&Farmington High School",
    "nickname": "The 2nd Law Enforcers",
    "state_prov": "Connecticut",
    "team_number": 178
  },
  {
    "city": "Contoocook",
    "country": "USA",
    "key": "frc1922",
    "name": "New Hampshire Department of Education/Osram Sylvania/Granite State Credit Union/Autodesk, Inc.&John Stark Regional High Sch&Hopkinton Middle School&Hopkinton High School",
    "nickname": "Oz-Ram",
    "state_prov": "New Hampshire",
    "team_number": 1922
  },
  {
    "city": "Southington",
    "country": "USA",
    "key": "frc195",
    "name": "Mohawk Northeast/Otis/Lockheed Martin/Henkel/Raytheon Technologies/Light Metals Coloring &Southington High School",
    "nickname": "CyberKnights",
    "state_prov": "Connecticut",
    "team_number": 195
  },
  {
    "city": "Guilford",
    "country": "USA",
    "key": "frc2067",
    "name": "Bishop's Orchards/Pratt  & Whitney/Rockwell Automation/Lockheed/Pfizer/Medtronic/Moroso Performance Products&4-H&4H",
    "nickname": "Apple Pi",
    "state_prov": "Connecticut",
    "team_number": 2067
  },
  {
    "city": "Glastonbury",
    "country": "USA",
    "key": "frc2170",
    "name": "Raytheon Technologies Corporation/Glastonbury Board of Education&Glastonbury High School",
    "nickname": "Galvanized Guardians",
    "state_prov": "Connecticut",
    "team_number": 2170
  },
  {
    "city": "Meriden",
    "country": "USA",
    "key": "frc228",
    "name": "Meriden YMCA/Raytheon Technologies/Trail of Terror/R&D Precision&YMCA",
    "nickname": "GUS",
    "state_prov": "Connecticut",
    "team_number": 228
  },
  {
    "city": "Shelton",
    "country": "USA",
    "key": "frc230",
    "name": "Raytheon Technologies Corporation/Sikorsky, Lockheed Martin/OEM Controls/Shelton Public School System/Hubbell/Intuitive Surgical/Logicbroker/Valley Community Foundation&Shelton High School",
    "nickname": "Gaelhawks",
    "state_prov": "Connecticut",
    "team_number": 230
  },
  {
    "city": "Nashua",
    "country": "USA",
    "key": "frc2342",
    "name": "Academy for Science and Design/Raytheon/Hi-Tech Fabricators/EmbroidMe/BAE SYSTEMS&Neighborhood Group",
    "nickname": "Team Phoenix",
    "state_prov": "New Hampshire",
    "team_number": 2342
  },
  {
    "city": "Watertown",
    "country": "USA",
    "key": "frc237",
    "name": "Siemon Company/Raytheon Technologies Corporation/Lockheed Martin - Sikorsky/Watertown Foundation/Watertown Rotary Club/Precision Dip Coating/Mike Sorrenti&Watertown High School",
    "nickname": "Black Magic Robotics",
    "state_prov": "Connecticut",
    "team_number": 237
  },
  {
    "city": "Rutland",
    "country": "USA",
    "key": "frc2370",
    "name": "GE Aviation Volunteers/Alderman Chevrolet and Toyota/Killington Ski Resort/Stafford Technical Center & Family/Community & Stafford Technical Center",
    "nickname": "IBOTS",
    "state_prov": "Vermont",
    "team_number": 2370
  },
  {
    "city": "Manchester",
    "country": "USA",
    "key": "frc238",
    "name": "Bosch&Manchester Memorial High Sch",
    "nickname": "Crusaders",
    "state_prov": "New Hampshire",
    "team_number": 238
  },
  {
    "city": "Watertown",
    "country": "USA",
    "key": "frc2423",
    "name": "The Bayer Fund/Bosch/Enanta Pharmaceuticals/Markforged&Watertown High School",
    "nickname": "The KwarQs",
    "state_prov": "Massachusetts",
    "team_number": 2423
  },
  {
    "city": "Boston",
    "country": "USA",
    "key": "frc246",
    "name": "The Boeing Company/Bayer Fund/Gene Haas Foundation/Boston University&Boston University Academy",
    "nickname": "Lobstah Bots",
    "state_prov": "Massachusetts",
    "team_number": 246
  },
  {
    "city": "Oakland",
    "country": "USA",
    "key": "frc2648",
    "name": "Wrabacon, Inc / The Robotics Institute of Maine / TRC / BAE Systems / Maine State Credit Union & Messalonskee High School",
    "nickname": "Infinite Loop",
    "state_prov": "Maine",
    "team_number": 2648
  },
  {
    "city": "Melrose",
    "country": "USA",
    "key": "frc2713",
    "name": "BAE Systems/Bayer Fund/Brad Hutchinson Real Estate/Churchill Corp/Community Coalition of Melrose/Corning/Gene Haas Foundation/Google/Insource Services/Intuitive Foundation/Melrose Cooperative Bank Charitable Foundation/Melrose Cultural Council/Minutemen Automation Systems/Motorola Solutions/NASA Veteran Growth Grant/Novartis/Odyssey Consulting/PTC/Raytheon/Salesforce/Vercel/WB Engineers/Wolf Greenfield and Sacks&Melrose High School",
    "nickname": "Red Hawk Robotics",
    "state_prov": "Massachusetts",
    "team_number": 2713
  },
  {
    "city": "Burlington",
    "country": "USA",
    "key": "frc2876",
    "name": "Broadcom/Ascent Development/Princess Diamonds&Burlington High School",
    "nickname": "Devilbotz",
    "state_prov": "Massachusetts",
    "team_number": 2876
  },
  {
    "city": "West Newton",
    "country": "USA",
    "key": "frc2877",
    "name": "Rockwell Automation/Newton Schools Foundation/Newton Public Schools/Raytheon Missiles & Defense/The Village Bank/PTC/Teradyne/Honda Village&Newton North High School&Newton South High School",
    "nickname": "LigerBots",
    "state_prov": "Massachusetts",
    "team_number": 2877
  },
  {
    "city": "Granby",
    "country": "USA",
    "key": "frc3146",
    "name": "Raytheon Technologies /JT Automation/Granby Lions Club/Checkered Flag Auto Center/Granby Public Schools/Granby Education Foundation/Four Dad's Pub/Vincent Funeral Homes/Arrow Concrete Products&Granby Memorial High School",
    "nickname": "GRANBY GRUNTS",
    "state_prov": "Connecticut",
    "team_number": 3146
  },
  {
    "city": "Hartford",
    "country": "USA",
    "key": "frc3182",
    "name": "Hartford County UConn 4-H/MakerspaceCT/Comcast NBCUniversal/NASA/Raytheon Technologies/Medtronic&4-H",
    "nickname": "Athena's Warriors",
    "state_prov": "Connecticut",
    "team_number": 3182
  },
  {
    "city": "Alton",
    "country": "USA",
    "key": "frc319",
    "name": "SPS New England/Schneider Electric/Profile Bank/PMHS Team 319 Booster Club&Prospect Mountain High School",
    "nickname": "Big Bad Bob",
    "state_prov": "New Hampshire",
    "team_number": 319
  },
  {
    "city": "Concord",
    "country": "USA",
    "key": "frc3205",
    "name": "Analog Devices/Concord Carlisle&Concord Carlisle Regional HS",
    "nickname": "Patriots",
    "state_prov": "Massachusetts",
    "team_number": 3205
  },
  {
    "city": "Bristol",
    "country": "USA",
    "key": "frc3461",
    "name": "The Arthur G. Russell Co./Hartford County 4-H & 4-H",
    "nickname": "Operation PEACCE Robotics",
    "state_prov": "Connecticut",
    "team_number": 3461
  },
  {
    "city": "Windham",
    "country": "USA",
    "key": "frc3467",
    "name": "Veloxion, Inc./Analog Devices/Bayer/BAE Systems/TE Connectivity/Intuitive Foundation/PTC/NH Department of Education/A+A Floral/Windup Robotics 4-H Club&Windham High School",
    "nickname": "Windham Windup",
    "state_prov": "New Hampshire",
    "team_number": 3467
  },
  {
    "city": "Middletown",
    "country": "USA",
    "key": "frc3654",
    "name": "Howmet Aerospace/AMC Services/Pratt and Whitney/A Wizard Did It/Tsunami Tsolutions/Lauren States/Andy Kasznay&Mercy High School",
    "nickname": "TechTigers",
    "state_prov": "Connecticut",
    "team_number": 3654
  },
  {
    "city": "Gardiner",
    "country": "USA",
    "key": "frc4041",
    "name": "MSAD #11/The Robinson Fund/Passerelle Data/NASA/DoDEA & Gardiner Area High School",
    "nickname": "Iron Tigers",
    "state_prov": "Maine",
    "team_number": 4041
  },
  {
    "city": "Westborough",
    "country": "USA",
    "key": "frc4048",
    "name": "Solidworks/Intel/Viasat/RTX / Raytheon/Bainwood, Huang & Associates, LLC/Westborough Shopping Center/Lowes&Westborough High School",
    "nickname": "Redshift",
    "state_prov": "Massachusetts",
    "team_number": 4048
  },
  {
    "city": "Brewer",
    "country": "USA",
    "key": "frc4564",
    "name": "Brewer High School/GE/Mid South Engineering/Dead River/Twin City Tire and Service/Penobscot Cleaning Company/Thomas Blanchard and Son/Main Street Music Studios/Walkers Garage&Brewer High School",
    "nickname": "Orange Chaos",
    "state_prov": "Maine",
    "team_number": 4564
  },
  {
    "city": "Shrewsbury",
    "country": "USA",
    "key": "frc467",
    "name": "Versatile/Shrewsbury Robotics/Vangy Tool Company/Mathworks/Imaginic, Inc./Raytheon Technologies&Shrewsbury Senior High School",
    "nickname": "Colonials",
    "state_prov": "Massachusetts",
    "team_number": 467
  },
  {
    "city": "Ayer",
    "country": "USA",
    "key": "frc4905",
    "name": "Boston Scientific/Schneider Electric/Ansys, Inc./Analog Devices/BAE Systems&AYER SHIRLEY REGIONAL HIGH SCHOOL",
    "nickname": "Andromeda One",
    "state_prov": "Massachusetts",
    "team_number": 4905
  },
  {
    "city": "Waterville",
    "country": "USA",
    "key": "frc4906",
    "name": "Mid-Maine Technical Center/Gene Haas Foundation/Maine Stream Place/New Balance&Mid-Maine Tech Center",
    "nickname": "The Collective",
    "state_prov": "Maine",
    "team_number": 4906
  },
  {
    "city": "Billerica",
    "country": "USA",
    "key": "frc4909",
    "name": "Orbotech/KLA/Analog Devices/Bayer Fund/Raytheon/Draper/Gene Haas Foundation/Workers Credit Union/3M&Billerica Memorial High School",
    "nickname": "Bionics",
    "state_prov": "Massachusetts",
    "team_number": 4909
  },
  {
    "city": "Manchester",
    "country": "USA",
    "key": "frc501",
    "name": "AC Trust/NH Department of Education/Louis P. Cote Inc./Stu, Sam & Lexxie/L3/Harris/TCI/FIRST NH/Heritage Helps Foundation/Macy Industries/BAE Systems/Serge Marchesseault Memorial Fund&4-H&Goffstown High School&Manchester High School-West",
    "nickname": "The PowerKnights",
    "state_prov": "New Hampshire",
    "team_number": 501
  },
  {
    "city": "Bedford",
    "country": "USA",
    "key": "frc509",
    "name": "NASA/Schneider Electric/NH Department of Education/Bedford School District/Masi Plumbing and Heating&Bedford High School",
    "nickname": "Red Storm",
    "state_prov": "New Hampshire",
    "team_number": 509
  },
  {
    "city": "Foster and Glocester ",
    "country": "USA",
    "key": "frc5112",
    "name": "Ponaganset STEM Academy/Leach Family Foundation/La Gondola &Ponaganset High School",
    "nickname": "The Gongoliers",
    "state_prov": "Rhode Island",
    "team_number": 5112
  },
  {
    "city": "Ipswich",
    "country": "USA",
    "key": "frc5459",
    "name": "Ipswich Education Foundation / Analog Devices Inc. / New England Biolabs / AXIS, Inc. / Josephson Family / Harmonic Drive Inc. / Joset Corp. / Tedford's Hardware and Building Supplies / East Coast Metrology / Dawn Falardeau / James Kernan / Dassault Systems & Ipswich High School",
    "nickname": "Ipswich TIGERS",
    "state_prov": "Massachusetts",
    "team_number": 5459
  },
  {
    "city": "Portland",
    "country": "USA",
    "key": "frc5687",
    "name": "Baxter Academy Tech & Science & Waynflete School",
    "nickname": "The Outliers",
    "state_prov": "Maine",
    "team_number": 5687
  },
  {
    "city": "Windsor",
    "country": "USA",
    "key": "frc571",
    "name": "The Town of Windsor Connecticut/RTX-Raytheon&Windsor High School",
    "nickname": "Team Paragon",
    "state_prov": "Connecticut",
    "team_number": 571
  },
  {
    "city": "South Portland",
    "country": "USA",
    "key": "frc58",
    "name": "South Portland School Department/Diodes Incorporated/Generac/Building STEAM/IBEW Local 567&South Portland High School",
    "nickname": "The Riot Crew",
    "state_prov": "Maine",
    "team_number": 58
  },
  {
    "city": "Concord",
    "country": "USA",
    "key": "frc5813",
    "name": "AAVID, Thermal Divsion of Boyd Corporation/Puninchittaya Family/Murali Ravel, DMD PC/Orsmond Family/ZBS Pet Care LLC, Bedford Veterinary Medical Center, Lowell Road Veterinary Center/Spear Family/SOLIDWORKS/Miskoe Family/BOSCH/Mr. Billings/Mr. Horn&Neighborhood Group",
    "nickname": "Morpheus",
    "state_prov": "New Hampshire",
    "team_number": 5813
  },
  {
    "city": "Upton",
    "country": "USA",
    "key": "frc61",
    "name": "TE Connectivity/WAGO/Foster-Miller&Blackstone Vly Reg Voc Tech HS",
    "nickname": "The Intimidators",
    "state_prov": "Massachusetts",
    "team_number": 61
  },
  {
    "city": "Farmington",
    "country": "USA",
    "key": "frc6153",
    "name": "NASA/Pratt & Whitney Division of Raytheon Technologies/Ranor Mechanical/Central Maine Power / Avangrid/Franklin Savings Bank/Richard Wilde/Ronald Holmes/Jay/Livermore Lions Club/MEMIC/Spruce Mountain Pharmacy&Foster Technology Center&Mt Blue High School&Spruce Mountain High School",
    "nickname": "Blue Crew",
    "state_prov": "Maine",
    "team_number": 6153
  },
  {
    "city": "Salem",
    "country": "USA",
    "key": "frc6324",
    "name": "Nordson Medical&Salem High School",
    "nickname": "The Blue Devils",
    "state_prov": "New Hampshire",
    "team_number": 6324
  },
  {
    "city": "Littleton",
    "country": "USA",
    "key": "frc6328",
    "name": "Patriot Beverages/Deployed Resources/NASA/Rockwell Automation/Workers Credit Union/Gene Haas Foundation/Intuitive Foundation/PTC/Tuck + Tuck Architects&Littleton STEM Educational Foundation",
    "nickname": "Mechanical Advantage",
    "state_prov": "Massachusetts",
    "team_number": 6328
  },
  {
    "city": "Bucksport",
    "country": "USA",
    "key": "frc6329",
    "name": "RSU 25/The Silvernail Family/The Town of Bucksport&Bucksport High School",
    "nickname": "The Bucks' Wrath",
    "state_prov": "Maine",
    "team_number": 6329
  },
  {
    "city": "Manchester",
    "country": "USA",
    "key": "frc6763",
    "name": "Manchester MakerSpace/NH Dept of Education/Parents of FUSION&Manchester School of Technology",
    "nickname": "FUSION",
    "state_prov": "New Hampshire",
    "team_number": 6763
  },
  {
    "city": "Bethel",
    "country": "USA",
    "key": "frc6933",
    "name": "The Jack & Dorothy Byrne Foundation/Vermont Academy of Science and Engineering/Lamson Howell Foundation/ECFiber/The Sharon Academy&Family/Community",
    "nickname": "Archytas",
    "state_prov": "Vermont",
    "team_number": 6933
  },
  {
    "city": "Manchester",
    "country": "USA",
    "key": "frc7153",
    "name": "Connecticut State Department of Education/The Hartford/SpaceFitters&4-H&East Catholic High School",
    "nickname": "Aetos Dios (Eagles of Zeus)",
    "state_prov": "Connecticut",
    "team_number": 7153
  },
  {
    "city": "Falls Village",
    "country": "USA",
    "key": "frc716",
    "name": "21st Century Fund/C. A. Lindell  & Son Inc./Freund's Farm Market and Bakery/Jon Higgins&Housatonic Valley Reg High Sch",
    "nickname": "Who'sCTEKS",
    "state_prov": "Connecticut",
    "team_number": 716
  },
  {
    "city": "Wallingford",
    "country": "USA",
    "key": "frc7407",
    "name": "Choate Rosemary Hall",
    "nickname": "Wired Boars",
    "state_prov": "Connecticut",
    "team_number": 7407
  },
  {
    "city": "West Hartford",
    "country": "USA",
    "key": "frc7694",
    "name": "Travelers Insurance/Raytheon Technologies/The Lee Corporation/Triumph Group/Hasz Family/Capewell Aerial Systems&Northwest Catholic High School",
    "nickname": "THE IRON LIONS",
    "state_prov": "Connecticut",
    "team_number": 7694
  },
  {
    "city": "Newport",
    "country": "USA",
    "key": "frc78",
    "name": "Naval Undersea Warfare Center/DoDSTEM/Nordson EFD/ACS Industries/BankNewport/Chad Kritzas Team/Kate Bosch Professional Organizing/KVH Industries/Mount Hope Animal Hospital/Rite-Solutions/Teri Degnan Real Estate & Consulting&Aquidneck Island Robotics",
    "nickname": "AIR STRIKE",
    "state_prov": "Rhode Island",
    "team_number": 78
  },
  {
    "city": "Bristol",
    "country": "USA",
    "key": "frc7913",
    "name": "Freudenburg-NOK/New Hampshire Department of Education&Newfound Regional High School",
    "nickname": "\"Bear\"ly Functioning",
    "state_prov": "New Hampshire",
    "team_number": 7913
  },
  {
    "city": "Boston",
    "country": "USA",
    "key": "frc8013",
    "name": "Family/Community",
    "nickname": "Boston Lions",
    "state_prov": "Massachusetts",
    "team_number": 8013
  },
  {
    "city": "Lewiston",
    "country": "USA",
    "key": "frc8023",
    "name": "Lewiston Regional Technical Center&Lewiston Reg Tech Center",
    "nickname": "LRTC Androscoggin Argonauts",
    "state_prov": "Maine",
    "team_number": 8023
  },
  {
    "city": "Meredith",
    "country": "USA",
    "key": "frc8046",
    "name": "Meredith Village Savings Bank/NH DOE/3M/ROCKETBOX&Inter-Lakes Jr Sr High School",
    "nickname": "LakerBots",
    "state_prov": "New Hampshire",
    "team_number": 8046
  },
  {
    "city": "Milford",
    "country": "USA",
    "key": "frc8085",
    "name": "Otis/Technology Associates/Lockheed Martin - Sikorsky/CT State Department of Education/Raytheon Technologies/Schick & Jonathan Law High School & Joseph a Foran High School & Family/Community",
    "nickname": "MOJO",
    "state_prov": "Connecticut",
    "team_number": 8085
  },
  {
    "city": "Durham",
    "country": "USA",
    "key": "frc8167",
    "name": "NASA/Lockheed Martin/Merwin Foundation/Eversource/Connect Electric/Durham Manufacturing/Grippo's Exxon Mobile&Coginchaug Reg High School",
    "nickname": "Cognatives",
    "state_prov": "Connecticut",
    "team_number": 8167
  },
  {
    "city": "Wellesley",
    "country": "USA",
    "key": "frc8567",
    "name": "Wellesley Public Schools/Schneider Electric/Mathworks/Bayer/OriginLab/BAE Systems/Intuitive Foundation/Donorschoose/Bob and Jen Ellis/Analyze Innovate Transform Inc./Wellesley VW/Greens Hardware/Roche Bros Groceries & Wellesley High School & Family/Community",
    "nickname": "Wellesley Robotics - Team Ultraviolet",
    "state_prov": "Massachusetts",
    "team_number": 8567
  },
  {
    "city": "Lexington",
    "country": "USA",
    "key": "frc8604",
    "name": "Minuteman Career & Tech HS",
    "nickname": "Alpha Centauri",
    "state_prov": "Massachusetts",
    "team_number": 8604
  },
  {
    "city": "Scituate",
    "country": "USA",
    "key": "frc8626",
    "name": "Altra Motion&Scituate High School",
    "nickname": "Cyber Sailors",
    "state_prov": "Massachusetts",
    "team_number": 8626
  },
  {
    "city": "Dunbarton",
    "country": "USA",
    "key": "frc8708",
    "name": "NASA/DoDEA/Gene Haas Foundation/Energy Controls of NH/Fullscript/PTC/Door 28/West Coast Products/Trail Dogs Adventure Vans/Eastman Screenprinting/FIRST/4-H/Dunbarton & Bow Robotics 4-H Club&Family/Community",
    "nickname": "Ov3R1y K0Mp13X",
    "state_prov": "New Hampshire",
    "team_number": 8708
  },
  {
    "city": "Bedford",
    "country": "USA",
    "key": "frc8724",
    "name": "U.S. Department of Defense/Rockwell Automation/Gene Haas Foundation/Wire Belt Company of America/Haggarty Family Trust/FIRST NH&Family/Community",
    "nickname": "Mayhem",
    "state_prov": "New Hampshire",
    "team_number": 8724
  },
  {
    "city": "Bridgewater",
    "country": "USA",
    "key": "frc88",
    "name": "DePuy Synthese, Inc. / Harpak Ulma & Bridgewater-Raynham Reg HS",
    "nickname": "TJ\u00b2",
    "state_prov": "Massachusetts",
    "team_number": 88
  },
  {
    "city": "Waterbury",
    "country": "USA",
    "key": "frc8889",
    "name": "logicbroker/Roll-A-Cover Int'l/Waterbury Public Schoos&Wilby High School",
    "nickname": "Project W",
    "state_prov": "Connecticut",
    "team_number": 8889
  },
  {
    "city": "Wilton",
    "country": "USA",
    "key": "frc9055",
    "name": "Maine STREAM Place, INC./NASA/Gene Haas Foundation/FIRST and NE FIRST (Argosy)/General Dynamics - Bath Iron Works/Wilton, Maine Lion's Club/Hammond Lumber Company/SmartFun Learning Adventures/IEC/IMAC/The Fitch Company&Family/Community",
    "nickname": "Knights of Katahdin (Ka TAH din)",
    "state_prov": "Maine",
    "team_number": 9055
  },
  {
    "city": "Burlington",
    "country": "USA",
    "key": "frc9101",
    "name": "Beta Technologies/Marvell Technology/FIRSTinVT&Family/Community",
    "nickname": "Green Mountain Robotics",
    "state_prov": "Vermont",
    "team_number": 9101
  },
  {
    "city": "White River Junction",
    "country": "USA",
    "key": "frc95",
    "name": "Hartford Area Career and Technology Center/Progressive Manufacturing/Hypertherm/Fujifilm Dimatix/OnShape/Dodd Stacy&Hartford Area Career-Tech Ctr",
    "nickname": "Grasshoppers",
    "state_prov": "Vermont",
    "team_number": 95
  },
  {
    "city": "Cheshire",
    "country": "USA",
    "key": "frc999",
    "name": "Cheshire Public Schools/OTIS/East Coast Mechanical&Cheshire High School",
    "nickname": "MechaRAMS",
    "state_prov": "Connecticut",
    "team_number": 999
  }
]