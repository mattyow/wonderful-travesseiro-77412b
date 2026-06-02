const BOOKS = [
  {
    "title": "1000 Record Covers",
    "author": "Michael Ochs",
    "isbn": "9783836550581",
    "genres": [
      "Design",
      "Music",
      "Reference"
    ],
    "themes": [
      "Album art history",
      "Vinyl-era design",
      "Visual music culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836550581-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "additionalAuthors": "Peter Hobley Davison",
    "isbn": "9780141036144",
    "genres": [
      "Classics",
      "Dystopian fiction",
      "Literary fiction"
    ],
    "themes": [
      "Totalitarianism",
      "Surveillance",
      "Doublethink",
      "The erasure of truth"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780141036144-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "33⅓: Led Zeppelin IV",
    "author": "Erik Baker",
    "isbn": "9780826416582",
    "genres": [
      "Nonfiction",
      "Music"
    ],
    "themes": [
      "Occult Led Zeppelin",
      "Album mythology",
      "Hermetic rock"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780826416582-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "33⅓: Master of Reality",
    "author": "John Darnielle",
    "isbn": "9780826428998",
    "genres": [
      "Nonfiction",
      "Music",
      "Memoir"
    ],
    "themes": [
      "Black Sabbath through a teen’s eyes",
      "Psychiatric confinement",
      "Music as lifeline"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780826428998-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "33⅓: Metallica",
    "author": "David Masciotra",
    "isbn": "9781628929300",
    "genres": [
      "Nonfiction",
      "Music"
    ],
    "themes": [
      "The Black Album",
      "Metal goes mainstream",
      "Track-by-track"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781628929300.jpg",
    "publicationYear": 2015
  },
  {
    "title": "33⅓: Reign In Blood",
    "author": "D. X. Ferris",
    "isbn": "9780826429094",
    "genres": [
      "Nonfiction",
      "Music"
    ],
    "themes": [
      "Slayer’s album",
      "Thrash metal craft",
      "Track-by-track devotion"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780826429094.jpg",
    "publicationYear": 2008
  },
  {
    "title": "A Better Brand: A Guide to Creating and Evolving Brands",
    "author": "Scott Lerman",
    "isbn": "9781440331435",
    "genres": [
      "Design",
      "Business",
      "Reference"
    ],
    "themes": [
      "Brand strategy",
      "Identity evolution",
      "Design process"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781440331435.jpg",
    "publicationYear": 2013
  },
  {
    "title": "A Burning",
    "author": "Megha Majumdar",
    "isbn": "9780593214763",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Social media and accusation",
      "Class in India",
      "Three intersecting lives",
      "Political opportunism"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593214763-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "A Canticle For Leibowitz",
    "author": "Walter M. Miller Jr.",
    "isbn": "9780553141245",
    "genres": [
      "Science fiction",
      "Post-apocalyptic"
    ],
    "themes": [
      "Cyclical history",
      "Faith vs. science",
      "Preservation of knowledge"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553141245-L.jpg?default=false",
    "publicationYear": 1984
  },
  {
    "title": "A Collapse of Horses",
    "author": "Brian Evenson",
    "isbn": "9781566894135",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Horror"
    ],
    "themes": [
      "Quiet dread",
      "Reality slipping",
      "Domestic unease"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781566894135-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "A Confederacy of Dunces",
    "author": "John Kennedy Toole",
    "additionalAuthors": "Walker Percy",
    "isbn": "9780802130204",
    "genres": [
      "Literary fiction",
      "Classics",
      "Comic novel"
    ],
    "themes": [
      "New Orleans",
      "Misanthropic genius",
      "Slapstick of failure",
      "Posthumous discovery"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802130204-L.jpg?default=false",
    "publicationYear": 1982
  },
  {
    "title": "A Constellation of Vital Phenomena",
    "author": "Anthony Marra",
    "isbn": "9780770436421",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Chechen wars",
      "Strangers as family",
      "Acts of preservation",
      "Compassion in catastrophe"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780770436421-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "A Grief Observed",
    "author": "C.S. Lewis",
    "isbn": "9780060652388",
    "genres": [
      "Memoir",
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Grief",
      "Faith under loss",
      "Doubt",
      "Marriage and mortality"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060652388-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "A Heartbreaking Work of Staggering Genius",
    "author": "Dave Eggers",
    "isbn": "9780375725784",
    "genres": [
      "Memoir",
      "Literary fiction"
    ],
    "themes": [
      "Loss of both parents",
      "Raising a brother",
      "Self-conscious narration",
      "Grief and humor"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375725784-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "A History of Violence",
    "author": "John Wagner",
    "additionalAuthors": "Vince Locke",
    "isbn": "9781563893674",
    "genres": [
      "Comics",
      "Crime"
    ],
    "themes": [
      "Hidden pasts",
      "Violence and identity",
      "Family secrets"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781563893674-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "A Hologram for the King",
    "author": "Dave Eggers",
    "isbn": "9780241145852",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "American decline",
      "Globalization",
      "Middle age and obsolescence",
      "Saudi Arabia"
    ],
    "publicationYear": 2013
  },
  {
    "title": "A Little Manual for Knowing",
    "author": "Esther Lightcap Meek",
    "isbn": "9781610977845",
    "genres": [
      "Philosophy",
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Personal knowledge",
      "Covenant epistemology",
      "Knowing as relationship"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781610977845-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "A Long Way Gone: Memoirs of a Boy Soldier",
    "author": "Ishmael Beah",
    "isbn": "9780374105235",
    "genres": [
      "Memoir",
      "Biography"
    ],
    "themes": [
      "War and childhood",
      "Sierra Leone",
      "Rehabilitation",
      "Survival"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374105235-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "A Million Little Pieces",
    "author": "James Frey",
    "isbn": "9781565117785",
    "genres": [
      "Memoir"
    ],
    "themes": [
      "Addiction and recovery",
      "Rehab",
      "Truth and embellishment"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781565117785.jpg"
  },
  {
    "title": "A Natural History of Hell: Stories",
    "author": "Jeffrey Ford",
    "isbn": "9781618731180",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Slipstream fabulism",
      "Strange Americana",
      "Folkloric horror"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781618731180-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "A Peculiar Peril",
    "author": "Jeff VanderMeer",
    "isbn": "9780374308865",
    "genres": [
      "Fantasy",
      "Young adult"
    ],
    "themes": [
      "Quest across worlds",
      "Inheritance and adventure",
      "Whimsical strangeness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374308865-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "A Place for Everything",
    "author": "Judith Flanders",
    "isbn": "9781541675070",
    "genres": [
      "Nonfiction",
      "History"
    ],
    "themes": [
      "The alphabet as ordering principle",
      "Knowledge organization",
      "From medieval to modern"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781541675070-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "A Prayer for the Crown-Shy",
    "author": "Becky Chambers",
    "isbn": "9781250236234",
    "genres": [
      "Science fiction",
      "Novella"
    ],
    "themes": [
      "Monk and robot travel on",
      "What people need from each other",
      "Quiet utopia"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250236234-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "A Psalm for the Wild-Built",
    "author": "Becky Chambers",
    "isbn": "9781250236210",
    "genres": [
      "Science fiction",
      "Novella"
    ],
    "themes": [
      "A tea-monk and a robot",
      "Solarpunk reverie",
      "What humans need",
      "Gentle wisdom"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250236210-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "A Semiotic Theory of Language",
    "author": "Sebastian Shaumyan",
    "isbn": "9780253304728",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Academic"
    ],
    "themes": [
      "Semiotic linguistics",
      "Sign and structure",
      "Theoretical foundations"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253304728-L.jpg?default=false",
    "publicationYear": 1987
  },
  {
    "title": "A Severe Mercy",
    "author": "Sheldon Vanauken",
    "isbn": "9780553129632",
    "genres": [
      "Memoir",
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Grief",
      "Conversion",
      "Romantic love",
      "Loss as gift"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553129632-L.jpg?default=false",
    "publicationYear": 1977
  },
  {
    "title": "A Sign Is Just a Sign",
    "author": "Thomas Sebeok",
    "isbn": "9780253206251",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Academic"
    ],
    "themes": [
      "Foundations of semiotics",
      "Animal communication",
      "Sign-relations"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253206251-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "A Swim in a Pond in the Rain",
    "author": "George Saunders",
    "isbn": "9781984856029",
    "genres": [
      "Nonfiction",
      "Writing",
      "Criticism"
    ],
    "themes": [
      "Russian short fiction",
      "Craft of the story",
      "How writing works"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781984856029-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "A Theory of Semiotics",
    "author": "Umberto Eco",
    "isbn": "9780253202178",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Academic"
    ],
    "themes": [
      "General theory of signs",
      "Codes",
      "Production of meaning"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253202178-L.jpg?default=false",
    "publicationYear": 1979
  },
  {
    "title": "A Voyage to Arcturus",
    "author": "David  Lindsay",
    "isbn": "9780345232083",
    "genres": [
      "Science fiction",
      "Fantasy",
      "Classics"
    ],
    "themes": [
      "Cosmic pilgrimage",
      "Pain and illusion",
      "Gnostic vision",
      "Strange worlds as moral test"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/719hx21w3eL._AC_UF1000,1000_QL80_.jpg",
    "publicationYear": 1968
  },
  {
    "title": "ABC of Relativity",
    "author": "Bertrand Russell",
    "isbn": "9780045210022",
    "genres": [
      "Philosophy",
      "Science",
      "Popular science"
    ],
    "themes": [
      "Einstein for general readers",
      "Space, time, and gravity",
      "Philosophical implications"
    ],
    "publicationYear": 1977
  },
  {
    "title": "Absolution",
    "author": "Jeff VanderMeer",
    "isbn": "9780374616595",
    "genres": [
      "Weird fiction",
      "Science fiction",
      "Eco-horror"
    ],
    "themes": [
      "Area X origins",
      "Southern Reach return",
      "Forbidden coast",
      "Buried beginnings"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780374616595.jpg"
  },
  {
    "title": "Acceptance (Southern Reach, #3)",
    "author": "Jeff VanderMeer",
    "isbn": "9780374104115",
    "genres": [
      "Weird fiction",
      "Science fiction",
      "Eco-horror"
    ],
    "themes": [
      "The unknowable Area X",
      "Origin and dissolution",
      "Posthuman ecology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374104115-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Adobe Type Library Reference Book",
    "author": "Adobe Systems Inc.",
    "isbn": "9780321544728",
    "genres": [
      "Design",
      "Reference",
      "Typography"
    ],
    "themes": [
      "Typeface specimens",
      "Type classification",
      "Design resources"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780321544728-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "African Folk Tales",
    "author": "Charlotte Leslau",
    "additionalAuthors": "Wolf Leslau",
    "isbn": "9781299307513",
    "genres": [
      "Nonfiction",
      "Folklore",
      "Mythology"
    ],
    "themes": [
      "Oral tradition",
      "Animal tales",
      "Pan-African wisdom"
    ],
    "publicationYear": 2010
  },
  {
    "title": "Ahab’s Return",
    "author": "Jeffrey Ford",
    "isbn": "9780062679000",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Ahab after the whale",
      "Penny-press New York",
      "Strange creatures in the city"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780062679000.jpg",
    "publicationYear": 2019
  },
  {
    "title": "Aickman’s Heirs",
    "author": "Simon Strantzas",
    "additionalAuthors": "Brian Evenson, Helen Marshall, Lisa Tuttle, Michael Cisco, Nina Allan, Nadia Bulkin, Richard Gavin, Lynda E. Rucker, John  Langan",
    "isbn": "9780981317793",
    "genres": [
      "Weird fiction",
      "Short stories",
      "Horror"
    ],
    "themes": [
      "Strange stories",
      "Unease",
      "The inexplicable",
      "Aickman’s tradition"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780981317793-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Air Guitar: Essays on Art & Democracy",
    "author": "Dave Hickey",
    "isbn": "9780963726452",
    "genres": [
      "Nonfiction",
      "Essays",
      "Art criticism"
    ],
    "themes": [
      "Beauty in popular culture",
      "Las Vegas",
      "Art beyond the institution",
      "Democratic aesthetics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780963726452-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "All Fires the Fire",
    "author": "Julio Cortázar",
    "isbn": "9780811229456",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Parallel time",
      "Latin American modernism",
      "The everyday cracked open"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811229456-L.jpg?default=false",
    "publicationYear": 1988
  },
  {
    "title": "All That We See or Seem",
    "author": "Ken Liu",
    "isbn": "9781668083178",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Dreams and reality",
      "Identity in the digital age",
      "Technological estrangement"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781668083178-L.jpg?default=false",
    "publicationYear": 2025
  },
  {
    "title": "All the Pretty Horses",
    "author": "Cormac McCarthy",
    "isbn": "9780394574745",
    "genres": [
      "Literary fiction",
      "Western",
      "Coming of age"
    ],
    "themes": [
      "The vanishing West",
      "Honor",
      "Border crossings",
      "Love and loss"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780394574745-L.jpg?default=false",
    "publicationYear": 1992
  },
  {
    "title": "Alphabeasties and Other Amazing Types",
    "author": "Sharon Werner, Sarah Forss",
    "isbn": "9781934706787",
    "genres": [
      "Design",
      "Children’s books",
      "Typography"
    ],
    "themes": [
      "Letter as image",
      "Playful design",
      "Visual learning"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781934706787-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "American Trademark Designs",
    "author": "Barbara Baer Capitman",
    "isbn": "9780486232591",
    "genres": [
      "Design",
      "Reference",
      "History"
    ],
    "themes": [
      "Trademark history",
      "Commercial iconography",
      "American identity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486232591-L.jpg?default=false",
    "publicationYear": 1976
  },
  {
    "title": "American Wood Type: 1828–1900: Notes on the Evolution of Decorated and Large Types",
    "author": "Rob Roy Kelly",
    "additionalAuthors": "David  Shields",
    "isbn": "9780978588175",
    "genres": [
      "Design",
      "Typography",
      "History"
    ],
    "themes": [
      "Wood type",
      "19th-century printing",
      "Decorative letterforms"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780978588175.jpg",
    "publicationYear": 2010
  },
  {
    "title": "Americana",
    "author": "Don DeLillo",
    "isbn": "9782868698223",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Advertising America",
      "Media and self",
      "The road trip as critique",
      "Early DeLillo"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9782868698223-L.jpg?default=false",
    "publicationYear": 1971
  },
  {
    "title": "An Alien Heat (Dancers at the End of Time, #1)",
    "author": "Michael Moorcock",
    "isbn": "9780060130046",
    "genres": [
      "Science fiction",
      "Decadent literature"
    ],
    "themes": [
      "End of history",
      "Artifice",
      "Romantic awakening",
      "Aestheticism"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060130046-L.jpg?default=false",
    "publicationYear": 1987
  },
  {
    "title": "An Essay Concerning Human Understanding",
    "author": "John Locke",
    "isbn": "9780872202160",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Empiricism",
      "The mind as blank slate",
      "Ideas and knowledge",
      "British philosophy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780872202160-L.jpg?default=false",
    "publicationYear": 1996
  },
  {
    "title": "Animal Farm",
    "author": "George Orwell",
    "isbn": "9780452284241",
    "genres": [
      "Classics",
      "Literary fiction",
      "Allegory",
      "Satire"
    ],
    "themes": [
      "Revolution betrayed",
      "Power corrupts",
      "Stalinism allegorized",
      "Equality and its perversion"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780452284241-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "additionalAuthors": "Amy Mandelker, Constance Garnett",
    "isbn": "9781593080273",
    "genres": [
      "Literary fiction",
      "Classics",
      "Russian literature"
    ],
    "themes": [
      "Adultery",
      "Marriage",
      "Social judgment",
      "The search for meaning"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593080273-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "Annihilation (Southern Reach, #1)",
    "author": "Jeff VanderMeer",
    "isbn": "9780374104092",
    "genres": [
      "Weird fiction",
      "Science fiction",
      "Eco-horror"
    ],
    "themes": [
      "The unknowable",
      "Transformation",
      "Self-erasure",
      "Wilderness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374104092-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Anthem",
    "author": "Ayn Rand",
    "isbn": "9781503250703",
    "genres": [
      "Dystopian fiction",
      "Classics",
      "Novella"
    ],
    "themes": [
      "Individualism vs. collectivism",
      "Naming the self",
      "The word ’I’"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781503250703-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Archetypes in Branding: A Toolkit for Creatives and Strategists",
    "author": "Margaret Hartwell",
    "additionalAuthors": "Joshua C. Chen",
    "isbn": "9781440308185",
    "genres": [
      "Design",
      "Business",
      "Reference"
    ],
    "themes": [
      "Archetypal frameworks",
      "Brand identity",
      "Strategic storytelling"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781440308185-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Art and Faith",
    "author": "Makoto Fujimura",
    "isbn": "9780300254143",
    "genres": [
      "Nonfiction",
      "Theology",
      "Art"
    ],
    "themes": [
      "Theology of making",
      "Christian creativity",
      "Nihonga and faith"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780300254143.jpg",
    "publicationYear": 2021
  },
  {
    "title": "Art in Perspective: A Brief History",
    "author": "Henri Dorra",
    "isbn": "9780155034754",
    "genres": [
      "Art history",
      "Design",
      "Reference"
    ],
    "themes": [
      "Perspective",
      "Spatial representation",
      "Art across eras"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780155034754-L.jpg?default=false",
    "publicationYear": 1972
  },
  {
    "title": "Asteroid Made of Dragons",
    "author": "G. Derek Adams",
    "isbn": "9781941758731",
    "genres": [
      "Fantasy",
      "Science fiction",
      "Humor"
    ],
    "themes": [
      "End-of-world quest",
      "Comic fantasy",
      "Unlikely heroes"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781941758731-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "At the Mouth of the River of Bees",
    "author": "Kij Johnson",
    "isbn": "9781931520805",
    "genres": [
      "Fantasy",
      "Short stories",
      "Science fiction"
    ],
    "themes": [
      "Animal companions",
      "Quiet fantasy",
      "Travelers and journeys"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781931520805-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Authority (Southern Reach, #2)",
    "author": "Jeff VanderMeer",
    "isbn": "9780374104108",
    "genres": [
      "Weird fiction",
      "Science fiction",
      "Eco-horror"
    ],
    "themes": [
      "Bureaucratic decay",
      "Inheritance and secrets",
      "The agency that hides the truth"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374104108-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Avoid the Day",
    "author": "Jay Kirk",
    "isbn": "9780062356178",
    "genres": [
      "Memoir",
      "Nonfiction",
      "Travel writing"
    ],
    "themes": [
      "A father dying",
      "Transylvania",
      "Composer's lost score",
      "Wandering grief"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062356178-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Basic Writings of Nietzsche",
    "author": "Friedrich Nietzsche",
    "additionalAuthors": "Walter Kaufmann, Peter Gay",
    "isbn": "9780679783398",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Morality and its critique",
      "Tragedy",
      "The genealogy of values",
      "Beyond good and evil"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679783398-L.jpg?default=false",
    "publicationYear": 2000
  },
  {
    "title": "Basics of Semiotics",
    "author": "John Deely",
    "isbn": "9780253205681",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Academic"
    ],
    "themes": [
      "The nature of signs",
      "Meaning-making",
      "Peircean thought"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253205681-L.jpg?default=false",
    "publicationYear": 1990
  },
  {
    "title": "Baudolino",
    "author": "Umberto Eco",
    "isbn": "9780156029063",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Medieval imagination",
      "The Fourth Crusade",
      "Lying as world-building",
      "Prester John"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780156029063-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Beauty: A Very Short Introduction",
    "author": "Roger Scruton",
    "isbn": "9780199229758",
    "genres": [
      "Philosophy",
      "Aesthetics",
      "Nonfiction"
    ],
    "themes": [
      "What beauty is",
      "Aesthetics and judgment",
      "Defending the beautiful"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780199229758-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Benjamin Franklin",
    "author": "Carl Van Doren",
    "isbn": "9780140152609",
    "genres": [
      "Biography",
      "History"
    ],
    "themes": [
      "American founding",
      "Self-improvement",
      "Diplomacy",
      "Enlightenment polymath"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140152609-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "Bernini in Rome: Gian Lorenzo Bernini and the Baroque in Rome",
    "author": "Paul den Arend",
    "isbn": "9781514708712",
    "genres": [
      "Biography",
      "Art history"
    ],
    "themes": [
      "Roman Baroque",
      "Sculpture and architecture",
      "Patronage and the papacy"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781514708712.jpg"
  },
  {
    "title": "Between The World and Me",
    "author": "At-Nehisi Coates",
    "isbn": "9780812993547",
    "genres": [
      "Nonfiction",
      "Memoir",
      "Essays"
    ],
    "themes": [
      "The Black body in America",
      "Letter to a son",
      "Race and inheritance",
      "The dream and the price"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812993547-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Big Hair and Plastic Grass: A Funky Ride Through Baseball and America in the Swinging '70s",
    "author": "Dan Epstein",
    "isbn": "9781250007247",
    "genres": [
      "Nonfiction",
      "Sports",
      "Cultural history"
    ],
    "themes": [
      "1970s baseball",
      "Hairstyles and Astroturf",
      "America in the disco era"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250007247.jpg",
    "publicationYear": 2012
  },
  {
    "title": "Black Leopard Red Wolf",
    "author": "Marlon James",
    "isbn": "9780735220171",
    "genres": [
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "African mythologies reimagined",
      "Unreliable narrator",
      "Quest across kingdoms",
      "Violence and memory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780735220171-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Black Swan Green",
    "author": "David Mitchell",
    "isbn": "9780812974010",
    "genres": [
      "Literary fiction",
      "Coming of age"
    ],
    "themes": [
      "Adolescence",
      "English village life",
      "Stammering and voice",
      "Belonging"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812974010-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Blink: The Power of Thinking Without Thinking",
    "author": "Malcolm Gladwell",
    "isbn": "9781586217198",
    "genres": [
      "Nonfiction",
      "Psychology",
      "Popular science"
    ],
    "themes": [
      "Intuition",
      "Rapid cognition",
      "Snap judgments"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781586217198-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Blood Meridian, or the Evening Redness in the West",
    "author": "Cormac McCarthy",
    "isbn": "9780679728757",
    "genres": [
      "Literary fiction",
      "Western",
      "Classics"
    ],
    "themes": [
      "Mythic violence",
      "Manifest Destiny’s underside",
      "Evil as cosmos",
      "The frontier"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679728757-L.jpg?default=false",
    "publicationYear": 1992
  },
  {
    "title": "Blow-Up and Other Stories",
    "author": "Julio Cortázar",
    "additionalAuthors": "Paul Blackburn",
    "isbn": "9780394728810",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Perception",
      "Hidden realities",
      "Latin American modernism",
      "The uncanny"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780394728810-L.jpg?default=false",
    "publicationYear": 1974
  },
  {
    "title": "Book of Symbols: Reflections on Archetypal Images",
    "author": "Various Authors",
    "isbn": "9783836514484",
    "genres": [
      "Nonfiction",
      "Reference",
      "Philosophy"
    ],
    "themes": [
      "Archetypal imagery",
      "ARAS collection",
      "Symbolic interpretation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836514484-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "Borne",
    "author": "Jeff VanderMeer",
    "isbn": "9780374537654",
    "genres": [
      "Science fiction",
      "Weird fiction"
    ],
    "themes": [
      "A creature raised in ruins",
      "Biotech apocalypse",
      "Found family",
      "What it means to be a person"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374537654-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Boy in Darkness and Other Stories",
    "author": "Mervyn Peake",
    "additionalAuthors": "Sebastian Peake, Joanne Harris",
    "isbn": "9780720613063",
    "genres": [
      "Fantasy",
      "Short stories",
      "Gothic"
    ],
    "themes": [
      "Childhood and menace",
      "Outsiders",
      "Dreamlike worlds"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/81xtUgB4nYL._SL1500_.jpg",
    "publicationYear": 2007
  },
  {
    "title": "Brand Identity Now!",
    "author": "Julius Wiedemann",
    "isbn": "9783836515849",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Contemporary branding",
      "Identity systems",
      "Global design practice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836515849-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "Brand New: The Shape of Brands to Come",
    "author": "Wally Olins",
    "isbn": "9780500291399",
    "genres": [
      "Design",
      "Philosophy",
      "Business"
    ],
    "themes": [
      "Brand evolution",
      "Globalization and identity",
      "The future of marketing"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780500291399-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Branding: In Five and a Half Steps",
    "author": "Michael Johnson",
    "isbn": "9780500518960",
    "genres": [
      "Design",
      "Business",
      "Reference"
    ],
    "themes": [
      "Brand strategy process",
      "Identity systems",
      "Modern branding practice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780500518960-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "isbn": "9780060809836",
    "genres": [
      "Dystopian fiction",
      "Classics",
      "Science fiction"
    ],
    "themes": [
      "Control",
      "Consumerism",
      "Individuality",
      "Engineered happiness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060809836-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "Bridgman’s Complete Guide to Drawing From Life: Over 1,000 Illustrations",
    "author": "George B. Bridgman",
    "isbn": "9780806930152",
    "genres": [
      "Design",
      "Reference",
      "Art instruction"
    ],
    "themes": [
      "Anatomy",
      "Figure drawing",
      "Constructive form"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780806930152-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "Bug",
    "author": "Giancomo Sartori",
    "additionalAuthors": "Fredericka Randall",
    "isbn": "9781632062741",
    "genres": [
      "Literary fiction",
      "Satire"
    ],
    "themes": [
      "AI in a family",
      "Italian eccentricity",
      "Voice of a machine",
      "Domestic comedy"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781632062741.jpg",
    "publicationYear": 2021
  },
  {
    "title": "Cabinet of Natural Curiosities",
    "author": "Albertus Seba",
    "additionalAuthors": "Rainer Willmann",
    "isbn": "9783836515832",
    "genres": [
      "Design",
      "Natural history",
      "Reference"
    ],
    "themes": [
      "Taxonomic wonder",
      "The Wunderkammer",
      "Pre-Linnaean nature"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836515832-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "CAPS LOCK: How Capitalism Took Hold of Graphic Design, and How to Escape from It",
    "author": "Ruben Pater",
    "isbn": "9789492095817",
    "genres": [
      "Nonfiction",
      "Design"
    ],
    "themes": [
      "Design and capital",
      "History of commercial graphics",
      "Designer agency"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9789492095817-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Caravaggio: Painter of Miracles",
    "author": "Francine Prose",
    "isbn": "9780061768903",
    "genres": [
      "Biography",
      "Art history"
    ],
    "themes": [
      "Genius and violence",
      "Baroque painting",
      "The sacred and the street"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780061768903-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "isbn": "9780099477310",
    "genres": [
      "Literary fiction",
      "Classics",
      "Satire"
    ],
    "themes": [
      "Absurdity of war",
      "Bureaucracy",
      "Sanity and madness",
      "Self-preservation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780099477310-L.jpg?default=false",
    "publicationYear": 1904
  },
  {
    "title": "Chain-Gang All-Stars",
    "author": "Nana Kwame Adjei-Brenyah",
    "isbn": "9780593317334",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Carceral spectacle",
      "Prison labor",
      "Two women fighting",
      "Resistance and love"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593317334-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Child of God",
    "author": "Cormac McCarthy",
    "isbn": "9780679728740",
    "genres": [
      "Literary fiction",
      "Southern Gothic"
    ],
    "themes": [
      "Outsiderhood",
      "Violence and humanity",
      "Appalachian decay"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679728740-L.jpg?default=false",
    "publicationYear": 1993
  },
  {
    "title": "Children of Gebelawi",
    "author": "Naguib Mahfouz",
    "additionalAuthors": "Philip Stewart",
    "isbn": "9780894106546",
    "genres": [
      "Literary fiction",
      "Classics",
      "Allegory"
    ],
    "themes": [
      "Allegory of monotheistic faiths",
      "A Cairo alley as cosmos",
      "Generations and prophets"
    ]
  },
  {
    "title": "Children of Memory",
    "author": "Adrian Tchaikovsky",
    "isbn": "9780316466400",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Failing colony",
      "Memory across generations",
      "What makes a mind"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316466400-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Children of Ruin",
    "author": "Adrian Tchaikovsky",
    "isbn": "9780316452533",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Uplifted octopuses",
      "Strange terraforming",
      "Alien horrors",
      "First contact across kinds"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316452533-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Children of Time",
    "author": "Adrian Tchaikovsky",
    "isbn": "9780316452502",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Uplifted spiders",
      "Generation ship",
      "Two civilizations meeting",
      "Deep evolutionary time"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316452502-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Circe",
    "author": "Madeline Miller",
    "isbn": "9780316556347",
    "genres": [
      "Literary fiction",
      "Mythology",
      "Historical fiction"
    ],
    "themes": [
      "The witch’s perspective",
      "Power and exile",
      "Immortality",
      "Reclaimed myth"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316556347-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "City of Saints and Madmen (Ambergris, #1)",
    "author": "Jeff VanderMeer",
    "isbn": "9781509848157",
    "genres": [
      "Weird fiction",
      "Fantasy",
      "Short stories"
    ],
    "themes": [
      "The mysterious city",
      "Unreliable history",
      "Fungal otherness",
      "Art and madness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781509848157-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "CivilWarLand in Bad Decline: Stories and a Novella",
    "author": "George Saunders",
    "additionalAuthors": "Joshua Ferris",
    "isbn": "9780812987683",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Satire"
    ],
    "themes": [
      "Late-capitalist absurdity",
      "Theme parks of despair",
      "Moral compromise",
      "Empathy under pressure"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812987683-L.jpg?default=false",
    "publicationYear": 1996
  },
  {
    "title": "Cloud Cuckoo Land",
    "author": "Anthony Doerr",
    "isbn": "9781982168445",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A lost manuscript across centuries",
      "Refugees and bookmakers",
      "Library as ark",
      "Hope in catastrophe"
    ],
    "coverUrl": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1618589128i/56783258.jpg",
    "publicationYear": 2021
  },
  {
    "title": "Coffee Drinks",
    "author": "Merlin Jobst",
    "isbn": "9781912983575",
    "genres": [
      "Nonfiction",
      "Coffee",
      "Reference"
    ],
    "themes": [
      "Cafe recipes",
      "Espresso and milk",
      "Modern coffee culture"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781912983575.jpg",
    "publicationYear": 2022
  },
  {
    "title": "Color Harmony 2: A Guide to Creative Color Combinations",
    "author": "Bride M. Whelan",
    "isbn": "9781564960665",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Color theory",
      "Palette design",
      "Visual perception"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781564960665-L.jpg?default=false",
    "publicationYear": 1994
  },
  {
    "title": "Color Psychology and Color Therapy",
    "author": "Faber Birren",
    "isbn": "9780806506531",
    "genres": [
      "Design",
      "Philosophy",
      "Psychology"
    ],
    "themes": [
      "Effects of color on mood",
      "Color in healing",
      "Perception and well-being"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780806506531-L.jpg?default=false",
    "publicationYear": 1950
  },
  {
    "title": "Come, Let Us Adore Him",
    "author": "Paul David Tripp",
    "isbn": "9781433556692",
    "genres": [
      "Theology",
      "Devotional",
      "Christian literature"
    ],
    "themes": [
      "Advent meditations",
      "Incarnation",
      "Daily reflection"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781433556692-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Common Sense, The Rights of Man and Other Essential Writings",
    "author": "Thomas Paine",
    "additionalAuthors": "Sidney Hook, Jack Fruchtman Jr.",
    "isbn": "9780451528896",
    "genres": [
      "Philosophy",
      "Politics",
      "Classics"
    ],
    "themes": [
      "Revolution",
      "Natural rights",
      "Plain-language argument",
      "Democratic foundations"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451528896-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Compass",
    "author": "Mathias Énard",
    "additionalAuthors": "Charlotte Mandell",
    "isbn": "9780811227476",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Orientalism",
      "Insomnia",
      "Unrequited love",
      "Music and scholarship"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811227476-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Concerning the Spiritual in Art",
    "author": "Wassily Kandinsky",
    "additionalAuthors": "Ruth Ahmedzai Kemp",
    "isbn": "9780241384800",
    "genres": [
      "Philosophy",
      "Art theory",
      "Classics"
    ],
    "themes": [
      "Abstraction and the spiritual",
      "Color as inner sound",
      "Modern art's mission"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780241384800.jpg",
    "publicationYear": 2022
  },
  {
    "title": "Confessions",
    "author": "Augustine of Hippo",
    "additionalAuthors": "Mark Vessey, Albert Cook Outler",
    "isbn": "9781593082598",
    "genres": [
      "Philosophy",
      "Theology",
      "Memoir",
      "Classics"
    ],
    "themes": [
      "Conversion",
      "Memory and time",
      "Sin and grace",
      "The restless heart"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593082598-L.jpg?default=false",
    "publicationYear": 1595
  },
  {
    "title": "Contradict: They Can’t All Be True",
    "author": "Andy Wrasman",
    "isbn": "9781490819297",
    "genres": [
      "Theology",
      "Apologetics"
    ],
    "themes": [
      "Comparative religion",
      "Christian apologetics",
      "Truth claims"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781490819297.jpg",
    "publicationYear": 2014
  },
  {
    "title": "Counternarratives",
    "author": "John Keene",
    "isbn": "9780811225526",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Historical fiction"
    ],
    "themes": [
      "Counterhistories of the Americas",
      "Black lives in colonial archives",
      "Formal experimentation"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780811225526.jpg",
    "publicationYear": 2016
  },
  {
    "title": "Course on General Linguistics",
    "author": "Ferdinand de Saussure",
    "isbn": "9780812690231",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Classics"
    ],
    "themes": [
      "Sign, signifier, signified",
      "Structural linguistics",
      "Foundations of semiotics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812690231-L.jpg?default=false",
    "publicationYear": 1931
  },
  {
    "title": "Crackpot Palace: Stories",
    "author": "Jeffrey Ford",
    "isbn": "9780062122599",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Strange Americana",
      "Genre crossing",
      "Fabulist short fiction"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062122599-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Crandolin",
    "author": "Anna Tambour",
    "isbn": "9781907681196",
    "genres": [
      "Literary fiction",
      "Magical realism",
      "Weird fiction"
    ],
    "themes": [
      "The food of legend",
      "Times braided together",
      "Pursuit of a vanished taste"
    ]
  },
  {
    "title": "Crystal Eaters",
    "author": "Shane Jones",
    "isbn": "9781937512187",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "Family",
      "Belief and ritual",
      "The dying world"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781937512187-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Culture and Value",
    "author": "Ludwig Wittgenstein",
    "additionalAuthors": "Peter Winch",
    "isbn": "9780226904351",
    "genres": [
      "Philosophy",
      "Nonfiction"
    ],
    "themes": [
      "Wittgenstein's notebooks",
      "Aphoristic reflection",
      "Religion, music, and culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780226904351-L.jpg?default=false",
    "publicationYear": 1977
  },
  {
    "title": "Culture Making: Recovering Our Creative Calling",
    "author": "Andy Crouch",
    "isbn": "9780830837557",
    "genres": [
      "Theology",
      "Christian literature",
      "Cultural criticism"
    ],
    "themes": [
      "Christian engagement with culture",
      "Making over critiquing",
      "Calling and creativity"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780830837557.jpg",
    "publicationYear": 2008
  },
  {
    "title": "Culture, Language, and Personality",
    "author": "Edward Sapir",
    "isbn": "9780520011168",
    "genres": [
      "Nonfiction",
      "Linguistics",
      "Philosophy"
    ],
    "themes": [
      "Language and worldview",
      "Anthropological linguistics",
      "Sapirian thought"
    ],
    "publicationYear": 1949
  },
  {
    "title": "Damnation Spring",
    "author": "Ash Davidson",
    "isbn": "9781982144401",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A logging family in the redwoods",
      "Environmental sickness",
      "Town divided",
      "Marriage under strain"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781982144401-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Dark Matter",
    "author": "Blake Crouch",
    "isbn": "9781101904220",
    "genres": [
      "Science fiction",
      "Thriller"
    ],
    "themes": [
      "Parallel selves",
      "Quantum reality",
      "The road not taken",
      "Identity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781101904220-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Darkly",
    "author": "Leila Taylor",
    "isbn": "9781912248544",
    "genres": [
      "Nonfiction",
      "Essays",
      "Cultural criticism"
    ],
    "themes": [
      "Black Gothic",
      "Race and the macabre",
      "Aesthetics of mourning"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781912248544-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Deacon King Kong",
    "author": "James McBride",
    "isbn": "9780735216730",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "1969 Brooklyn projects",
      "A shooting and its aftermath",
      "Faith and community",
      "Comedy of survival"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780735216730-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Dead Astronauts",
    "author": "Jeff VanderMeer",
    "isbn": "9780374276805",
    "genres": [
      "Science fiction",
      "Weird fiction"
    ],
    "themes": [
      "Biotech apocalypse",
      "Companion fragments",
      "Cyclical time",
      "Mosaic structure"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374276805-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Dead Souls",
    "author": "Nikolai Gogol",
    "additionalAuthors": "Richard Pevear",
    "isbn": "9780679776444",
    "genres": [
      "Literary fiction",
      "Classics",
      "Russian literature"
    ],
    "themes": [
      "Provincial Russia",
      "Schemes and serfs",
      "Satire of bureaucracy",
      "The grotesque"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679776444-L.jpg?default=false",
    "publicationYear": 1961
  },
  {
    "title": "Death of a Salesman",
    "author": "Arthur Miller",
    "isbn": "9780140481341",
    "genres": [
      "Drama",
      "Classics",
      "Tragedy"
    ],
    "themes": [
      "The American Dream",
      "Fatherhood",
      "Self-deception",
      "Failure"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140481341-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "Deeper Into Pictures: An Essay on Pictorial Representation",
    "author": "Flint Schier",
    "isbn": "9780521109406",
    "genres": [
      "Philosophy",
      "Aesthetics",
      "Academic"
    ],
    "themes": [
      "Depiction",
      "Resemblance",
      "Perception and image"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780521109406.jpg",
    "publicationYear": 2009
  },
  {
    "title": "Demon Copperhead",
    "author": "Barbara Kingsolver",
    "isbn": "9780063251922",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Appalachian opioid crisis",
      "Dickensian retelling",
      "Foster care",
      "Survival in poverty"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780063251922-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Design as Art",
    "author": "Bruno Munari",
    "additionalAuthors": "Patrick Creagh",
    "isbn": "9780141035819",
    "genres": [
      "Design",
      "Philosophy",
      "Essays"
    ],
    "themes": [
      "Design as cultural act",
      "Everyday objects",
      "Visual play"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780141035819-L.jpg?default=false",
    "publicationYear": 1971
  },
  {
    "title": "Design of the 20th Century",
    "author": "Charlotte & Peter Fiell",
    "isbn": "9783836541060",
    "genres": [
      "Design",
      "Reference",
      "History"
    ],
    "themes": [
      "20th-century design survey",
      "Designers and objects",
      "Modern and postmodern"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836541060-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Design: Purpose, Form, and Meaning",
    "author": "John F. Pile",
    "isbn": "9780870232572",
    "genres": [
      "Design",
      "Philosophy",
      "Reference"
    ],
    "themes": [
      "Design fundamentals",
      "Function and form",
      "Meaning in objects"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780870232572-L.jpg?default=false",
    "publicationYear": 1979
  },
  {
    "title": "Designing Type",
    "author": "Karen Cheng",
    "isbn": "9780300111507",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Letterform construction",
      "Type anatomy",
      "Design pedagogy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780300111507-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Devil House",
    "author": "John Darnielle",
    "isbn": "9780374212230",
    "genres": [
      "Literary fiction",
      "Crime"
    ],
    "themes": [
      "True-crime writing and ethics",
      "Suburban California",
      "Stories about stories",
      "Satanic panic"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374212230-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Dictionary Stories: Short Fictions and Other Findings",
    "author": "Jez Burrows",
    "isbn": "9780062652614",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Experimental"
    ],
    "themes": [
      "Found language",
      "Tiny narratives",
      "Dictionary as raw material"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780062652614.jpg",
    "publicationYear": 2018
  },
  {
    "title": "Dieter Rams: As Little Design as Possible",
    "author": "Sophie Lovell",
    "isbn": "9780714849188",
    "genres": [
      "Design",
      "Biography",
      "Monograph"
    ],
    "themes": [
      "Functionalism",
      "Restraint",
      "Industrial design philosophy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780714849188-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Discipline and Punish: The Birth of the Prison",
    "author": "Michel Foucault",
    "additionalAuthors": "Alan Sheridan, Thomas Mathiesen, Walter Seitter, Drago Braco Rotar",
    "isbn": "9780679752554",
    "genres": [
      "Philosophy",
      "History",
      "Sociology"
    ],
    "themes": [
      "Surveillance",
      "Disciplinary power",
      "The panopticon",
      "Modern subject formation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679752554-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "Discourse on Method and The Meditations",
    "author": "René Descartes",
    "additionalAuthors": "F.E. Sutcliffe",
    "isbn": "9780140442069",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Doubt",
      "The self",
      "Reason",
      "The existence of God"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140442069-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "Dissident Gardens",
    "author": "Jonathan Lethem",
    "isbn": "9780385534932",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "American radicalism",
      "Generations of leftism",
      "Mothers and daughters",
      "Brooklyn"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385534932-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "Divided Soul",
    "author": "David Ritz",
    "isbn": "9780306811913",
    "genres": [
      "Nonfiction",
      "Biography",
      "Music"
    ],
    "themes": [
      "Marvin Gaye's life",
      "Soul music",
      "Faith and excess"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780306811913-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Don’t Call it That",
    "author": "Eli Altman",
    "isbn": "9781734248302",
    "genres": [
      "Design",
      "Business"
    ],
    "themes": [
      "Naming",
      "Brand language",
      "Verbal identity"
    ]
  },
  {
    "title": "Don’t Read This Book: Time Management for Creative People",
    "author": "Donald Roos",
    "isbn": "9789063694234",
    "genres": [
      "Design",
      "Productivity",
      "Business"
    ],
    "themes": [
      "Creative process",
      "Time management",
      "Studio practice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9789063694234-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Don’t Waste Your Life",
    "author": "John Piper",
    "isbn": "9781581344981",
    "genres": [
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Purpose",
      "Christian hedonism",
      "Calling"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781581344981-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Down Below",
    "author": "Leonora Carrington",
    "isbn": "9781681370606",
    "genres": [
      "Memoir",
      "Nonfiction"
    ],
    "themes": [
      "Surrealist breakdown",
      "Asylum in Spain",
      "Visionary recovery"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781681370606.jpg",
    "publicationYear": 2017
  },
  {
    "title": "Draplin Design Co.: Pretty Much Everything",
    "author": "Aaron James Draplin",
    "isbn": "9781419720178",
    "genres": [
      "Design",
      "Memoir",
      "Monograph"
    ],
    "themes": [
      "Independent design practice",
      "American vernacular",
      "Working-class craft"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781419720178-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Dubliners",
    "author": "James Joyce",
    "isbn": "9780140042221",
    "genres": [
      "Literary fiction",
      "Classics",
      "Short stories"
    ],
    "themes": [
      "Paralysis",
      "Dublin life",
      "Epiphany",
      "Quiet failure"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140042221-L.jpg?default=false",
    "publicationYear": 1986
  },
  {
    "title": "Eames",
    "author": "Gloria Koenig",
    "additionalAuthors": "Peter Gossel",
    "isbn": "9783836560214",
    "genres": [
      "Biography",
      "Design",
      "Monograph"
    ],
    "themes": [
      "Mid-century design",
      "Husband-and-wife collaboration",
      "Modernism in America"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836560214-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Earwig",
    "author": "Brian Catling",
    "isbn": "9781473687103",
    "genres": [
      "Weird fiction",
      "Literary fiction"
    ],
    "themes": [
      "The strange caretaker",
      "Body and disquiet",
      "Postwar Europe"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/A1hasKGUCML._SY522_.jpg",
    "publicationYear": 2019
  },
  {
    "title": "Elements of Semiology",
    "author": "Roland Barthes",
    "additionalAuthors": "Annette Lavers, Colin Smith",
    "isbn": "9780374521462",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Design"
    ],
    "themes": [
      "Signs and codes",
      "Structuralism",
      "Cultural decoding"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374521462-L.jpg?default=false",
    "publicationYear": 1973
  },
  {
    "title": "Embassytown",
    "author": "China Miéville",
    "isbn": "9780345524492",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Language and reality",
      "Colonial contact",
      "Truth and metaphor",
      "The alien voice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345524492-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Emotional Branding: The New Paradigm for Connecting Brands to People",
    "author": "Marc Gobe",
    "isbn": "9781581156720",
    "genres": [
      "Design",
      "Business",
      "Philosophy"
    ],
    "themes": [
      "Emotional connection",
      "Brand experience",
      "Consumer psychology"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781581156720.jpg",
    "publicationYear": 2009
  },
  {
    "title": "Ender’s Game (Ender’s Saga, #1)",
    "author": "Orson Scott Card",
    "isbn": "9780812550702",
    "genres": [
      "Science fiction",
      "Classics"
    ],
    "themes": [
      "Military training of children",
      "Games and warfare",
      "Empathy and command",
      "Moral cost of victory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812550702-L.jpg?default=false",
    "publicationYear": 1996
  },
  {
    "title": "Enjoying the Bible",
    "author": "Matthew Mullins",
    "isbn": "9781540963932",
    "genres": [
      "Theology",
      "Christian literature",
      "Literary criticism"
    ],
    "themes": [
      "Reading the Bible as literature",
      "Poetry and Scripture",
      "Aesthetic delight"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781540963932-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Entangled Life: How Fungi Make Our Worlds, Change Our Minds & Shape Our Futures",
    "author": "Merlin Sheldrake",
    "isbn": "9780525510321",
    "genres": [
      "Nonfiction",
      "Science",
      "Nature writing"
    ],
    "themes": [
      "Mycelial networks",
      "Symbiosis",
      "Rethinking individuality"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525510321-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "EntreLeadership: 20 Years of Practical Business Wisdom from the Trenches",
    "author": "Dave Ramsey",
    "isbn": "9781451617856",
    "genres": [
      "Nonfiction",
      "Business",
      "Leadership"
    ],
    "themes": [
      "Small business leadership",
      "Personal finance",
      "Hiring and culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781451617856-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Essentialism: The Disciplined Pursuit of Less",
    "author": "Greg McKeown",
    "isbn": "9780753555163",
    "genres": [
      "Nonfiction",
      "Business",
      "Productivity"
    ],
    "themes": [
      "Focus",
      "Saying no",
      "Less but better"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780753555163-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Ethics",
    "author": "Michael Cisco",
    "isbn": "9798808549395",
    "genres": [
      "Weird fiction",
      "Literary fiction"
    ],
    "themes": [
      "Moral disquiet",
      "Strangeness and the everyday",
      "Estranged narration"
    ]
  },
  {
    "title": "Everything But Espresso",
    "author": "Scott Rao",
    "isbn": "9781450708708",
    "genres": [
      "Nonfiction",
      "Coffee",
      "Reference"
    ],
    "themes": [
      "Brewing craft",
      "Extraction science",
      "Specialty coffee"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781450708708-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "Exit West",
    "author": "Mohsin Hamid",
    "isbn": "9780735212206",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Magical doors and migration",
      "Two lovers in flight",
      "Borders and belonging"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780735212206-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Extremely Loud and Incredibly Close",
    "author": "Jonathan Safran Foer",
    "isbn": "9780618711659",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Grief after 9/11",
      "A child’s quest",
      "Family across generations",
      "Letters and silence"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780618711659-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Fat Time",
    "author": "Jeffery Renard Allen",
    "isbn": "9781644452394",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Black history reimagined",
      "Speculative encounters",
      "Music and time"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781644452394.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Father Brown Crime Stories: Twenty Four Short Mysteries",
    "author": "G.K. Chesterton",
    "isbn": "9780517001820",
    "genres": [
      "Mystery",
      "Short stories",
      "Classics"
    ],
    "themes": [
      "Detection by sympathy",
      "Paradox and crime",
      "The priest as investigator"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/71wPd8LtYHL._SY522_.jpg",
    "publicationYear": 1990
  },
  {
    "title": "Fever Dream",
    "author": "Samanta Schweblin",
    "additionalAuthors": "Megan McDowell",
    "isbn": "9780399184604",
    "genres": [
      "Literary fiction",
      "Horror",
      "Novella"
    ],
    "themes": [
      "Maternal dread",
      "Environmental poisoning",
      "The dying conversation",
      "Rural Argentina"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399184604-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Firekeeper’s Daughter",
    "author": "Angeline Boulley",
    "isbn": "9781250766564",
    "genres": [
      "Fiction"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250766564-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Florida",
    "author": "Lauren Groff",
    "isbn": "9781594634512",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Florida as menace and lushness",
      "Motherhood and dread",
      "Heat and weather",
      "Place as character"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781594634512.jpg",
    "publicationYear": 2018
  },
  {
    "title": "Flowers of Mold",
    "author": "Ha Seong-nan",
    "isbn": "9781940953960",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Quiet domestic horror",
      "Surveillance among neighbors",
      "Korean urban unease"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781940953960-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Fortune Smiles",
    "author": "Adam Johnson",
    "isbn": "9780812997477",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "North Korean defectors",
      "Surveillance and intimacy",
      "Strange contemporary lives"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812997477-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Fox 8",
    "author": "George Saunders",
    "isbn": "9781984818027",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Fable"
    ],
    "themes": [
      "Animal narrator",
      "Habitat destruction",
      "Language and innocence"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781984818027-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Fragile Things: Short Fictions and Wonders",
    "author": "Neil Gaiman",
    "isbn": "9780060515232",
    "genres": [
      "Fantasy",
      "Short stories",
      "Horror"
    ],
    "themes": [
      "Folklore and modernity",
      "Gentle weirdness",
      "Fairy-tale logic"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060515232-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "Friday Black",
    "author": "Nana Kwame Adjei-Brenyah",
    "isbn": "9781328911247",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Speculative fiction"
    ],
    "themes": [
      "Race in America",
      "Consumer violence",
      "Satirical horror",
      "Black survival"
    ],
    "coverUrl": "https://i5.walmartimages.com/seo/Friday-Black-Paperback_d2e50fa6-bf2e-4cd0-8166-9cc30d2bd84f.905b5e4c5a5f7e76eab7252f32aed6f7.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
    "publicationYear": 2018
  },
  {
    "title": "Furniture Makeovers: Simple Techniques for Transforming Furniture with Paint, Stains, Paper, Stencils, and More",
    "author": "Barbara Blair",
    "isbn": "9781452104157",
    "genres": [
      "Design",
      "DIY",
      "Reference"
    ],
    "themes": [
      "Furniture restoration",
      "Surface craft",
      "Home transformation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781452104157-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "Galápagos",
    "author": "Kurt Vonnegut",
    "isbn": "9780385333870",
    "genres": [
      "Literary fiction",
      "Satire",
      "Science fiction"
    ],
    "themes": [
      "Evolution",
      "Human folly",
      "Deep time",
      "Survival"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385333870-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "Germs: A Memoir of Childhood",
    "author": "Richard Wollheim",
    "isbn": "9781681374963",
    "genres": [
      "Memoir",
      "Autobiography",
      "Nonfiction"
    ],
    "themes": [
      "English childhood",
      "Philosopher's interior life",
      "Memory and family"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781681374963.jpg",
    "publicationYear": 2021
  },
  {
    "title": "Go Set a Watchman (To Kill a Mockingbird, #2)",
    "author": "Harper Lee",
    "isbn": "9780062409850",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "Disillusionment",
      "Race in the South",
      "Fathers and grown children",
      "Revisiting moral heroes"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062409850-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Go Tell it on the Mountain",
    "author": "James Baldwin",
    "isbn": "9780345806543",
    "genres": [
      "Literary fiction",
      "Classics",
      "Memoir"
    ],
    "themes": [
      "Faith and family",
      "Harlem storefront church",
      "Coming of age",
      "Inherited burdens"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345806543-L.jpg?default=false",
    "publicationYear": 1993
  },
  {
    "title": "God in a Cup: The Obsessive Quest for the Perfect Coffee",
    "author": "Michaele Weissman",
    "isbn": "9780470173589",
    "genres": [
      "Nonfiction",
      "Coffee",
      "Biography"
    ],
    "themes": [
      "Specialty coffee",
      "Sourcing and origin",
      "Obsession and craft"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780470173589-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "Gog",
    "author": "Andrew Sinclair",
    "isbn": "9780340486085",
    "genres": [
      "Literary fiction",
      "Picaresque"
    ],
    "themes": [
      "A wanderer through postwar Britain",
      "Mythic geography",
      "Memory and amnesia"
    ],
    "publicationYear": 1990
  },
  {
    "title": "Gormenghast",
    "author": "Mervyn Peake",
    "isbn": "9780786198009",
    "genres": [
      "Fantasy",
      "Literary fiction",
      "Gothic"
    ],
    "themes": [
      "Ritual vs. ambition",
      "The weight of tradition",
      "Outsider as threat"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780786198009.jpg",
    "publicationYear": 1967
  },
  {
    "title": "Goya",
    "author": "Robert Hughes",
    "isbn": "9780375711282",
    "genres": [
      "Biography",
      "Art history"
    ],
    "themes": [
      "The Spanish disasters",
      "Genius in dark times",
      "Court painter and dissenter"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375711282-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Great Dialogues of Plato",
    "author": "Plato",
    "additionalAuthors": "W.H.D. Rouse, Philip G. Rouse, E.H. Warmington",
    "isbn": "9780451624123",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Justice",
      "The good life",
      "Forms and reality",
      "Socratic inquiry"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451624123-L.jpg?default=false",
    "publicationYear": 1970
  },
  {
    "title": "Greener Pastures",
    "author": "Michael Wehunt",
    "isbn": "9781937009540",
    "genres": [
      "Weird fiction",
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Rural dread",
      "Grief-haunted",
      "Quiet Southern weirdness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781937009540-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Groundwork of the Metaphysic of Morals",
    "author": "Immanuel Kant",
    "additionalAuthors": "Herbert James Paton",
    "isbn": "9780061766312",
    "genres": [
      "Philosophy",
      "Classics",
      "Ethics"
    ],
    "themes": [
      "The categorical imperative",
      "Duty",
      "Moral autonomy",
      "Universal law"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780061766312.jpg",
    "publicationYear": 2014
  },
  {
    "title": "Half Gods",
    "author": "Akil Kumarasamy",
    "isbn": "9780374167677",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Sri Lankan diaspora",
      "Linked stories",
      "Inheritance of war",
      "Family and identity"
    ],
    "publicationYear": 2018
  },
  {
    "title": "Handbook for Preparing Visual Media",
    "author": "Ed Minor",
    "isbn": "9780070424074",
    "genres": [
      "Design",
      "Reference",
      "Instructional"
    ],
    "themes": [
      "Visual communication",
      "Production craft",
      "Media literacy"
    ],
    "publicationYear": 1978
  },
  {
    "title": "Handbook of Semiotics",
    "author": "Winfried Noth",
    "isbn": "9780253209597",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Reference"
    ],
    "themes": [
      "Comprehensive semiotic survey",
      "Sign theories",
      "Field of semiotics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253209597-L.jpg?default=false",
    "publicationYear": 1995
  },
  {
    "title": "Hawaiian Mythologies",
    "author": "Martha Beckwith",
    "isbn": "9780824805142",
    "genres": [
      "Nonfiction",
      "Folklore",
      "Mythology"
    ],
    "themes": [
      "Pacific cosmology",
      "Hawaiian deities",
      "Oral tradition preserved"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780824805142-L.jpg?default=false",
    "publicationYear": 1977
  },
  {
    "title": "Heart of Darkness",
    "author": "Joseph Conrad",
    "isbn": "9781892295491",
    "genres": [
      "Classics",
      "Literary fiction",
      "Novella"
    ],
    "themes": [
      "Colonial Africa",
      "The journey upriver",
      "The horror of empire",
      "Civilization unmasked"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781892295491-L.jpg?default=false",
    "publicationYear": 2002
  },
  {
    "title": "HHhH",
    "author": "Laurent Binet",
    "isbn": "9781250033345",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "The assassination of Heydrich",
      "Writing about WWII",
      "Author intrudes on the story"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250033345-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "Hip-Hop is History",
    "author": "Questlove",
    "additionalAuthors": "Ben Greenman",
    "isbn": "9781250390547",
    "genres": [
      "Nonfiction",
      "Music",
      "History"
    ],
    "themes": [
      "Fifty years of hip-hop",
      "Musical lineage",
      "Cultural memory"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250390547.jpg",
    "publicationYear": 2025
  },
  {
    "title": "Hollow",
    "author": "Brian Catling",
    "isbn": "9780593081150",
    "genres": [
      "Weird fiction",
      "Fantasy"
    ],
    "themes": [
      "Mountain hermitage",
      "Monastic strangeness",
      "Mythic figures"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593081150-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Homage to the Alphabet: Typeface Sourcebook",
    "author": "Rockport Publishers",
    "isbn": "9780935603477",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Typeface specimens",
      "Letterform variety",
      "Design resources"
    ],
    "publicationYear": 1990
  },
  {
    "title": "House of Leaves",
    "author": "Mark Z. Danielewski",
    "isbn": "9780375703768",
    "genres": [
      "Literary fiction",
      "Horror",
      "Experimental"
    ],
    "themes": [
      "The impossible house",
      "Footnotes as labyrinth",
      "Madness and documentation",
      "Layered narration"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375703768-L.jpg?default=false",
    "publicationYear": 2000
  },
  {
    "title": "How to",
    "author": "Michael Bierut",
    "isbn": "9780062413901",
    "genres": [
      "Design",
      "Memoir",
      "Reference"
    ],
    "themes": [
      "Design practice",
      "Working with clients",
      "A designer’s life"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062413901-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "How to Be a Graphic Designer, Without Losing Your Soul",
    "author": "Adrian Shaughnessy",
    "isbn": "9781856697095",
    "genres": [
      "Design",
      "Career",
      "Essays"
    ],
    "themes": [
      "Design ethics",
      "Career navigation",
      "Creative integrity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781856697095-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "How to Live with Objects",
    "author": "Monica Khemsurov",
    "additionalAuthors": "Jill Singer",
    "isbn": "9780593235041",
    "genres": [
      "Design",
      "Nonfiction"
    ],
    "themes": [
      "Living with design",
      "Curation at home",
      "Sight Unseen sensibility"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780593235041.jpg",
    "publicationYear": 2022
  },
  {
    "title": "Hum",
    "author": "Helen Phillips",
    "isbn": "9781668008831",
    "genres": [
      "Fiction"
    ]
  },
  {
    "title": "Hummingbird Salamander",
    "author": "Jeff VanderMeer",
    "isbn": "9780374173548",
    "genres": [
      "Literary fiction",
      "Eco-thriller"
    ],
    "themes": [
      "Eco-terrorism",
      "Vanishing species",
      "Identity and disappearance",
      "Conspiracy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374173548-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "I Heard There Was a Secret Chord: Music as Medicine",
    "author": "Daniel J. Levitin",
    "isbn": "9781324036180",
    "genres": [
      "Nonfiction",
      "Science",
      "Music"
    ],
    "themes": [
      "Music and the brain",
      "Healing through sound",
      "Neuroscience of song"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781324036180-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "I love it. What is it?: The power of instinct in design and branding",
    "author": "Gyles Lingwood",
    "additionalAuthors": "Turner Duckworth",
    "isbn": "9781838666064",
    "genres": [
      "Design",
      "Business"
    ],
    "themes": [
      "Design instinct",
      "Client communication",
      "Branding craft"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781838666064.jpg",
    "publicationYear": 2024
  },
  {
    "title": "I Seem To Be A Verb",
    "author": "R. Buckminster Fuller",
    "additionalAuthors": "Quentin Fiore",
    "isbn": "9781584235958",
    "genres": [
      "Nonfiction",
      "Design",
      "Philosophy"
    ],
    "themes": [
      "Process over object",
      "Visual essays",
      "Earth as system",
      "60s design thinking"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781584235958-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "I, Robot",
    "author": "Isaac Asimov",
    "isbn": "9780345314826",
    "genres": [
      "Science fiction",
      "Short stories",
      "Classics"
    ],
    "themes": [
      "The Three Laws",
      "Robot psychology",
      "Logical paradox"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345314826-L.jpg?default=false",
    "publicationYear": 1983
  },
  {
    "title": "Identify: Basic Principles of Identity Design in the Iconic Trademarks of Chermayeff  Geismar",
    "author": "Ivan Chermayeff, Sagi Haviv, Tom Geismar",
    "isbn": "9781440310324",
    "genres": [
      "Design",
      "Reference",
      "Monograph"
    ],
    "themes": [
      "Logo design",
      "Identity craft",
      "Mid-century modern branding"
    ],
    "publicationYear": 2011
  },
  {
    "title": "Imitation Of Christ",
    "author": "Thomas à Kempis",
    "isbn": "9780802440051",
    "genres": [
      "Theology",
      "Christian literature",
      "Devotional",
      "Classics"
    ],
    "themes": [
      "Discipleship",
      "Humility",
      "Interior life",
      "Following Christ"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802440051-L.jpg?default=false",
    "publicationYear": 1977
  },
  {
    "title": "In Praise of Shadows",
    "author": "Jun'ichirō Tanizaki",
    "additionalAuthors": "Edward G. Seidensticker, Thomas J. Harper, Charles Moore",
    "isbn": "9780918172020",
    "genres": [
      "Philosophy",
      "Design",
      "Essays"
    ],
    "themes": [
      "Japanese aesthetics",
      "Light and shadow",
      "Tradition vs. Western modernity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780918172020-L.jpg?default=false",
    "publicationYear": 1980
  },
  {
    "title": "In the Darkroom",
    "author": "Susan Faludi",
    "isbn": "9781250132697",
    "genres": [
      "Memoir",
      "Biography"
    ],
    "themes": [
      "Gender and identity",
      "Father and daughter",
      "Hungarian history",
      "Self-reinvention"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250132697-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "In the Distance",
    "author": "Hernan Diaz",
    "isbn": "9781566894883",
    "genres": [
      "Literary fiction",
      "Western"
    ],
    "themes": [
      "Solitude",
      "Anti-mythic West",
      "Stranger in a new land",
      "Immigrant journey"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781566894883-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "In The River",
    "author": "Jeremy Robert Johnson",
    "isbn": "9781621052517",
    "genres": [
      "Horror",
      "Bizarro fiction"
    ],
    "themes": [
      "Father and son",
      "Folkloric horror",
      "Grief and water",
      "The fable as nightmare"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781621052517-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "In the Seat of a Stranger’s Car",
    "author": "Beau Flemister",
    "isbn": "9780578428000",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Surf and travel",
      "Hawaiian voice",
      "Encounters with strangers"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780578428000-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Ingrained: The Making of a Craftsman",
    "author": "Callum Robinson",
    "isbn": "9780063350830",
    "genres": [
      "Memoir",
      "Nonfiction",
      "Design"
    ],
    "themes": [
      "Woodworking as vocation",
      "Father and son in the workshop",
      "Slow craft"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780063350830.jpg",
    "publicationYear": 2024
  },
  {
    "title": "Introducing Semiotic: Its History and Doctrine",
    "author": "John Deely",
    "isbn": "9780253202871",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Academic"
    ],
    "themes": [
      "History of semiotics",
      "Sign theory",
      "Latin tradition recovered"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253202871-L.jpg?default=false",
    "publicationYear": 1982
  },
  {
    "title": "Inventing the Renaissance: The Myth of a Golden Age",
    "author": "Ada Palmer",
    "isbn": "9780226837970",
    "genres": [
      "Nonfiction",
      "History"
    ],
    "themes": [
      "The Renaissance reconsidered",
      "How myths of progress form",
      "Florentine reality vs. legend"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780226837970.jpg",
    "publicationYear": 2025
  },
  {
    "title": "Itzá",
    "author": "Rios de la Luz",
    "isbn": "9781940885414",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "Generations of brujas",
      "Chicana voice",
      "Water and memory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781940885414-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "James",
    "author": "Percival Everett",
    "isbn": "9780385550369",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Huck Finn retold from Jim's view",
      "Voice and survival",
      "Slavery and selfhood"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385550369-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "Jay’s Journal of Anomalies",
    "author": "Ricky Jay",
    "isbn": "9781593720001",
    "genres": [
      "Nonfiction",
      "History",
      "Essays"
    ],
    "themes": [
      "Magic and curiosities",
      "Performers of the past",
      "Wonder and deception"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593720001-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Jim Henson: The Biography",
    "author": "Brian Jay Jones",
    "isbn": "9780345526120",
    "genres": [
      "Biography"
    ],
    "themes": [
      "Creative ambition",
      "Puppetry and craft",
      "Wonder",
      "Building a creative life"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345526120-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Jonathan Strange & Mr. Norrell",
    "author": "Susanna Clarke",
    "isbn": "9781635576726",
    "genres": [
      "Fantasy",
      "Historical fiction"
    ],
    "themes": [
      "Magic returns to Regency England",
      "Rivalry and friendship",
      "Faerie",
      "Footnoted mythos"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781635576726.jpg",
    "publicationYear": 2020
  },
  {
    "title": "Journey by Starlight: A Time Traveler’s Guide to Life, the Universe, and Everything",
    "author": "Ian Flitcroft",
    "additionalAuthors": "Britt Spencer",
    "isbn": "9781935548232",
    "genres": [
      "Nonfiction",
      "Science",
      "Illustrated"
    ],
    "themes": [
      "Cosmology",
      "Wonder",
      "Science for general readers"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781935548232-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "Just My Type: A Book About Fonts",
    "author": "Simon Garfield",
    "isbn": "9781592407460",
    "genres": [
      "Design",
      "Typography",
      "Nonfiction"
    ],
    "themes": [
      "History of typefaces",
      "Type personalities",
      "Everyday typography"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781592407460.jpg",
    "publicationYear": 2012
  },
  {
    "title": "Kafka on the Shore",
    "author": "Haruki Murakami",
    "isbn": "9781400079278",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "A boy running away",
      "Talking cats",
      "Oedipal dream-logic",
      "Two intertwined journeys"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400079278-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Kaleidoscope: Modern Homes in Every Colour",
    "author": "Amy Moorea Wong",
    "isbn": "9781784885465",
    "genres": [
      "Design",
      "Nonfiction"
    ],
    "themes": [
      "Color in the home",
      "Modern interiors",
      "Visual courage"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781784885465.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Komodo",
    "author": "Jeff VanderMeer",
    "manualCoverUrl": "https://m.media-amazon.com/images/I/51-7f9OyE1L._SX342_SY445_QL70_FMwebp_.jpg",
    "genres": [
      "Fiction"
    ]
  },
  {
    "title": "Labyrinths: Selected Stories & Other Writings",
    "author": "Jorge Luis Borges",
    "additionalAuthors": "Donald A. Yates, James E. Irby, Willian Gibson",
    "isbn": "9780811216999",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Classics"
    ],
    "themes": [
      "Infinity and labyrinths",
      "Mirrors and doubles",
      "The library of all books",
      "Reality as fiction"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811216999-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "Language and Myth",
    "author": "Ernst Cassirer",
    "additionalAuthors": "Susanne K. Langer",
    "isbn": "9780486200514",
    "genres": [
      "Philosophy",
      "Linguistics"
    ],
    "themes": [
      "Symbolic forms",
      "Mythic thinking",
      "Origins of language"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486200514-L.jpg?default=false",
    "publicationYear": 1953
  },
  {
    "title": "Language, Truth, and Logic",
    "author": "Alfred Jules Ayer",
    "isbn": "9780486200101",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Logical positivism",
      "Verification principle",
      "Meaning and metaphysics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486200101-L.jpg?default=false",
    "publicationYear": 1952
  },
  {
    "title": "Lapidarium: The Secret Lives of Stones",
    "author": "Hettie Judah",
    "isbn": "9780143137412",
    "genres": [
      "Nonfiction",
      "Essays"
    ],
    "themes": [
      "Stones and human history",
      "Geology and meaning",
      "Material culture"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780143137412.jpg",
    "publicationYear": 2022
  },
  {
    "title": "Laughter in the Dark",
    "author": "Vladimir Nabokov",
    "isbn": "9780811216746",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "Cruelty and deception",
      "Obsessive infatuation",
      "Cinema and illusion",
      "Moral blindness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811216746-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Laws of Media: The New Science",
    "author": "Marshall McLuhan",
    "additionalAuthors": "Eric McLuhan",
    "isbn": "9780802077158",
    "genres": [
      "Philosophy",
      "Media theory"
    ],
    "themes": [
      "The tetrad of media effects",
      "Extension and reversal",
      "Media as environments"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802077158-L.jpg?default=false",
    "publicationYear": 1992
  },
  {
    "title": "Learning to Look: A Handbook for the Visual Arts",
    "author": "Joshua C. Taylor",
    "isbn": "9780226791494",
    "genres": [
      "Design",
      "Art instruction",
      "Reference"
    ],
    "themes": [
      "Visual analysis",
      "Form and content",
      "Seeing trained"
    ],
    "publicationYear": 1971
  },
  {
    "title": "Lesser Known Monsters of the 21st Century",
    "author": "Kim Fu",
    "isbn": "9781951142995",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Speculative fiction"
    ],
    "themes": [
      "Body strangeness",
      "Contemporary anxieties",
      "Speculative compassion"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781951142995-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Let the Great World Spin",
    "author": "Colum McCann",
    "isbn": "9780812973990",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Interconnected lives",
      "1970s New York",
      "Grief and grace",
      "Tightrope walker as metaphor"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812973990-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "Letter Fountain",
    "author": "Joep Pohlen",
    "additionalAuthors": "Geert Setola",
    "isbn": "9783836525091",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Typeface anatomy",
      "Type classification",
      "Historical typography"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9783836525091.jpg",
    "publicationYear": 2011
  },
  {
    "title": "Lettering & Type: Creating Letters and Designing Typefaces",
    "author": "Bruce Willen",
    "additionalAuthors": "Nolen Strals",
    "isbn": "9781568987651",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Letter design",
      "Typeface creation",
      "Custom lettering"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781568987651-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "Leviathan",
    "author": "Thomas Hobbes",
    "isbn": "9781619491700",
    "genres": [
      "Philosophy",
      "Politics",
      "Classics"
    ],
    "themes": [
      "The social contract",
      "Sovereign authority",
      "Human nature",
      "Order vs. chaos"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781619491700.jpg",
    "publicationYear": 2013
  },
  {
    "title": "Lexicon",
    "author": "Max Barry",
    "isbn": "9780143125426",
    "genres": [
      "Science fiction",
      "Thriller"
    ],
    "themes": [
      "Language as weapon",
      "Persuasion and control",
      "Secret society of poets"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143125426-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Liberation Day",
    "author": "George Saunders",
    "isbn": "9780525509592",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Engineered servitude",
      "Late-capitalist absurdity",
      "Empathy under pressure"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525509592-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Libra",
    "author": "Don DeLillo",
    "isbn": "9780140156041",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "The JFK assassination",
      "Conspiracy and chance",
      "American paranoia",
      "Identity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140156041-L.jpg?default=false",
    "publicationYear": 1988
  },
  {
    "title": "Life of Pi",
    "author": "Yann Martel",
    "isbn": "9780156027328",
    "genres": [
      "Literary fiction",
      "Adventure",
      "Magical realism"
    ],
    "themes": [
      "Faith",
      "Storytelling vs. truth",
      "Survival",
      "The nature of belief"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780156027328-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Like a Thief in Broad Daylight: Power in the Era of Post-Capitalism",
    "author": "Slovaj Žižek",
    "isbn": "9781609809751",
    "genres": [
      "Philosophy",
      "Politics",
      "Cultural criticism"
    ],
    "themes": [
      "Late capitalism",
      "Power as theft",
      "Žižekian provocation"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781609809751.jpg",
    "publicationYear": 2019
  },
  {
    "title": "Lilith",
    "author": "George MacDonald",
    "additionalAuthors": "C.S. Lewis",
    "isbn": "9780802860613",
    "genres": [
      "Fantasy",
      "Classics",
      "Christian literature"
    ],
    "themes": [
      "Dream-worlds",
      "Death and rebirth",
      "Repentance",
      "Allegorical fantasy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802860613-L.jpg?default=false",
    "publicationYear": 1895
  },
  {
    "title": "Lincoln in the Bardo",
    "author": "George Saunders",
    "isbn": "9780812995343",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Grief and afterlife",
      "Lincoln’s loss",
      "Chorus of the dead",
      "Letting go"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812995343-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Listen",
    "author": "Joseph Kerman",
    "additionalAuthors": "Gary Tomlinson",
    "isbn": "9780312401153",
    "genres": [
      "Music",
      "Reference",
      "Academic"
    ],
    "themes": [
      "Music appreciation",
      "Listening as practice",
      "Western musical tradition"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780312401153-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "Little Book of Lettering",
    "author": "Emily Gregory",
    "isbn": "9781452112022",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Hand lettering",
      "Contemporary letterforms",
      "Letterform craft"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781452112022-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Little Eyes",
    "author": "Samanta Schweblin",
    "additionalAuthors": "Megan McDowell",
    "isbn": "9780525541363",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Connected toy pets",
      "Surveillance and intimacy",
      "Global anonymous bonds"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525541363-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Lives of the Monster Dogs",
    "author": "Kirsten Bakis",
    "isbn": "9780374537142",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Uplifted dogs in Manhattan",
      "Engineered creatures and culture",
      "Wagnerian melancholy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374537142-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "Logo Modernism",
    "author": "Jens Muller",
    "additionalAuthors": "R. Roger Remington",
    "isbn": "9783836545303",
    "genres": [
      "Design",
      "History",
      "Reference"
    ],
    "themes": [
      "Modernist logos",
      "Mid-century design",
      "Visual identity history"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836545303-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "LogoLounge 7",
    "author": "Bill Gardner",
    "additionalAuthors": "Anne Hellman",
    "isbn": "9781592537273",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Identity design",
      "Trends in branding",
      "Logo craft"
    ],
    "publicationYear": 2012
  },
  {
    "title": "LogoLounge 8",
    "author": "Bill Gardner",
    "additionalAuthors": "Anne Hellman",
    "isbn": "9781592538348",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Identity design",
      "Trends in branding",
      "Logo craft"
    ],
    "publicationYear": 2014
  },
  {
    "title": "Logotype",
    "author": "Michael Evamy",
    "isbn": "9781856698948",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Logotype craft",
      "Wordmark design",
      "Brand identity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781856698948-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Logotypes and Letterforms: Handlettered Logotypes and Typographic Considerations",
    "author": "Doyald Young",
    "isbn": "9780830639564",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Hand lettering",
      "Logotype craft",
      "Letterform sensitivity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780830639564-L.jpg?default=false",
    "publicationYear": 1993
  },
  {
    "title": "Longitude",
    "author": "David Sobel",
    "isbn": "9780802715296",
    "genres": [
      "Nonfiction",
      "History",
      "Science"
    ],
    "themes": [
      "John Harrison's clocks",
      "Solving longitude",
      "Maritime navigation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802715296-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Lord of the Flies",
    "author": "William Golding",
    "isbn": "9780399501487",
    "genres": [
      "Literary fiction",
      "Classics",
      "Allegory"
    ],
    "themes": [
      "Civilization vs. savagery",
      "Innocence lost",
      "Group violence"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399501487-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Love in the Time of Cholera",
    "author": "Gabriel García Márquez",
    "additionalAuthors": "Edith Grossman",
    "isbn": "9781400034680",
    "genres": [
      "Literary fiction",
      "Classics",
      "Magical realism"
    ],
    "themes": [
      "Enduring love",
      "Aging",
      "Patience",
      "Latin American modernity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400034680-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "Loving to Know: Covenant Epistemology",
    "author": "Esther Lightcap Meek",
    "isbn": "9781608999286",
    "genres": [
      "Philosophy",
      "Theology",
      "Academic"
    ],
    "themes": [
      "Knowing as relationship",
      "Covenant epistemology",
      "Polanyi and personal knowledge"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781608999286-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Macbeth",
    "author": "William Shakespeare",
    "additionalAuthors": "Robert S. Miola, Janet Adelman, Stephen Orgel, Peter Holland",
    "isbn": "9780393977868",
    "genres": [
      "Drama",
      "Classics",
      "Tragedy"
    ],
    "themes": [
      "Ambition",
      "Guilt",
      "Fate and prophecy",
      "Tyranny"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780393977868-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Macunaíma: The Hero with No Character",
    "author": "Mário de Andrade",
    "isbn": "9780811227025",
    "genres": [
      "Literary fiction",
      "Classics",
      "Magical realism"
    ],
    "themes": [
      "Brazilian modernism",
      "Trickster hero",
      "National myth and mixture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811227025-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Made with FontFont: Type for Independent Minds",
    "author": "Jan Middendorp, Erik Spiekermann",
    "isbn": "9780977985043",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Independent type foundries",
      "Typographic culture",
      "Designer voice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780977985043-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "Magic: A History",
    "author": "Chris Gosden",
    "isbn": "9780374200121",
    "genres": [
      "Nonfiction",
      "History",
      "Anthropology"
    ],
    "themes": [
      "Magic across cultures",
      "Ritual and meaning",
      "Long human history"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374200121-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Major Labels",
    "author": "Kelefa Sanneh",
    "isbn": "9780525559610",
    "genres": [
      "Nonfiction",
      "Music",
      "Criticism"
    ],
    "themes": [
      "Genres as tribes",
      "American music since the 70s",
      "Belonging and taste"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525559610-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Manalive",
    "author": "G.K. Chesterton",
    "isbn": "9780486414058",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "Joy as eccentricity",
      "Defending the ordinary",
      "Marriage",
      "Rediscovery of wonder"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486414058-L.jpg?default=false",
    "publicationYear": 2000
  },
  {
    "title": "Manuals 1: Design & Identity Guidelines",
    "author": "Adrian Shaughnessy",
    "additionalAuthors": "Tony Brook, Sarah Schrauwen",
    "isbn": "9780957511446",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Brand systems",
      "Identity documentation",
      "Design rigor"
    ],
    "publicationYear": 2014
  },
  {
    "title": "Manufacturing Consent: The Political Economy of the Mass Media",
    "author": "Noam Chomsky",
    "additionalAuthors": "Edward S. Herman",
    "isbn": "9780375714498",
    "genres": [
      "Philosophy",
      "Politics",
      "Media theory"
    ],
    "themes": [
      "Media as system",
      "Propaganda model",
      "Power and information",
      "Manufactured consensus"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375714498-L.jpg?default=false",
    "publicationYear": 1988
  },
  {
    "title": "Martha’s Daughter",
    "author": "David Haynes",
    "isbn": "9781963270273",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Black middle-class lives",
      "Mothers and daughters",
      "Midwestern family"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781963270273.jpg"
  },
  {
    "title": "Martyr!",
    "author": "Kaveh Akbar",
    "isbn": "9780593537619",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A poet seeking meaningful death",
      "Iranian-American grief",
      "Addiction and art",
      "Mothers and mythologies"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593537619-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "isbn": "9780486298238",
    "genres": [
      "Philosophy",
      "Classics",
      "Stoicism"
    ],
    "themes": [
      "Self-examination",
      "Stoic discipline",
      "Mortality",
      "Duty"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486298238-L.jpg?default=false",
    "publicationYear": 1635
  },
  {
    "title": "Meet Mr. Product, Vol. 1: The Graphic Art of the Advertising Character",
    "author": "Warren Dotz",
    "additionalAuthors": "Masud Husain",
    "isbn": "9781608873593",
    "genres": [
      "Design",
      "Advertising",
      "History"
    ],
    "themes": [
      "Mascot design",
      "Mid-century advertising",
      "American consumer culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781608873593-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Member",
    "author": "Michael Cisco",
    "isbn": "9781907681233",
    "genres": [
      "Weird fiction",
      "Literary fiction"
    ],
    "themes": [
      "Belonging and inclusion",
      "Estranged perception",
      "Bureaucratic strangeness"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/41U0fF8q3lL._SY445_SX342_FMwebp_.jpg"
  },
  {
    "title": "Mercury Pictures Presents",
    "author": "Anthony Marra",
    "isbn": "9780451495211",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "1940s Hollywood B-studio",
      "Italian-American immigrants",
      "Wartime propaganda",
      "Family and exile"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780451495211.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Mere Christianity",
    "author": "C.S. Lewis",
    "isbn": "9780060652883",
    "genres": [
      "Theology",
      "Philosophy",
      "Christian literature"
    ],
    "themes": [
      "Moral law",
      "Apologetics",
      "Virtue",
      "The common faith"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060652883-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "Metaphors We Live By",
    "author": "George Lakoff and Mark Johnson",
    "isbn": "9780226468013",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Nonfiction"
    ],
    "themes": [
      "Conceptual metaphor",
      "Language and thought",
      "How metaphors structure us"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780226468013-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "Midnight in the Garden of Good and Evil",
    "author": "John Berendt",
    "isbn": "9780679751526",
    "genres": [
      "Nonfiction",
      "True crime",
      "Southern Gothic"
    ],
    "themes": [
      "Savannah eccentricity",
      "Crime and society",
      "Place as character"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679751526-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "Mina’s Matchbook",
    "author": "Yōko Ogawa",
    "isbn": "9780593313411",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A girl with a pygmy hippo",
      "Family eccentricity",
      "Japanese childhood remembered",
      "Matchbook collections"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780593313411.jpg"
  },
  {
    "title": "Moby-Dick or, The Whale",
    "author": "Herman Melville",
    "additionalAuthors": "Andrew Delbanco, Tom Quirk",
    "isbn": "9780142437247",
    "genres": [
      "Classics",
      "Literary fiction",
      "Adventure"
    ],
    "themes": [
      "Obsession",
      "The white whale",
      "Man and the sea",
      "Metaphysical inquiry"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Model Home",
    "author": "Rivers Solomon",
    "isbn": "9780374607135",
    "genres": [
      "Literary fiction",
      "Horror"
    ],
    "themes": [
      "A Black family's haunted suburb",
      "Race and the gated community",
      "Returning home"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374607135-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "Moderan",
    "author": "David R. Bunch",
    "isbn": "9781681372549",
    "genres": [
      "Science fiction",
      "Short stories",
      "Classics"
    ],
    "themes": [
      "Cyborg warlords",
      "Stronghold rivalries",
      "Posthuman bleakness",
      "Ecological ruin"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781681372549.jpg",
    "publicationYear": 2018
  },
  {
    "title": "Monstrilio",
    "author": "Gerard Sámano Córdova",
    "isbn": "9781638931607",
    "genres": [
      "Literary fiction",
      "Horror"
    ],
    "themes": [
      "Grief makes a creature",
      "Mothering the monstrous",
      "Family across borders"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781638931607.jpg",
    "publicationYear": 2024
  },
  {
    "title": "Moon Witch Spider King",
    "author": "Marlon James",
    "isbn": "9780735220201",
    "genres": [
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "A witch's three centuries",
      "African mythologies",
      "Rival narrators",
      "Power and survival"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780735220201-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "More Mr. Product: The Art of the Advertising Character from the 1960s and Beyond",
    "author": "Warren Dotz",
    "additionalAuthors": "Masud Husain",
    "isbn": "9781608873609",
    "genres": [
      "Design",
      "Advertising",
      "History"
    ],
    "themes": [
      "Mascot design",
      "Brand characters",
      "Consumer iconography"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781608873609-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Morphology of the Folktale",
    "author": "Vladímir Propp",
    "isbn": "9780292783768",
    "genres": [
      "Philosophy",
      "Folklore",
      "Academic"
    ],
    "themes": [
      "Narrative functions",
      "Structural folklore",
      "Russian fairy tales"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780292783768-L.jpg?default=false",
    "publicationYear": 1968
  },
  {
    "title": "Mouthful of Birds",
    "author": "Samanta Schweblin",
    "additionalAuthors": "Megan McDowell",
    "isbn": "9780399184628",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Domestic unease",
      "Quiet strangeness",
      "Argentine sensibility"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399184628-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "isbn": "9780671523688",
    "genres": [
      "Mystery",
      "Classics"
    ],
    "themes": [
      "Poirot in a snowdrift",
      "Locked-train puzzle",
      "Vengeance and justice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780671523688-L.jpg?default=false",
    "publicationYear": 1970
  },
  {
    "title": "Music is History",
    "author": "Questlove",
    "isbn": "9781419751431",
    "genres": [
      "Nonfiction",
      "Music",
      "Memoir"
    ],
    "themes": [
      "Half a century of Black music",
      "Personal history through albums",
      "America in song"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781419751431-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "My Name is Memory",
    "author": "Ann Brashares",
    "isbn": "9781594485183",
    "genres": [
      "Literary fiction",
      "Romance",
      "Speculative fiction"
    ],
    "themes": [
      "Reincarnation",
      "Enduring love",
      "Memory across lifetimes"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781594485183-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "My Name is Red",
    "author": "Orhan Pamuk",
    "additionalAuthors": "Erdağ M. Göknar",
    "isbn": "9780375706851",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Ottoman miniaturists",
      "East and West",
      "Art and faith",
      "Murder and craft"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375706851-L.jpg?default=false",
    "publicationYear": 2002
  },
  {
    "title": "Myth and Meaning: Cracking the Code of Culture",
    "author": "Claude Lévi-Strauss",
    "isbn": "9780805210385",
    "genres": [
      "Philosophy",
      "Anthropology"
    ],
    "themes": [
      "Structural anthropology",
      "Myth as system",
      "Decoding culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780805210385-L.jpg?default=false",
    "publicationYear": 1978
  },
  {
    "title": "Mythologies",
    "author": "Roland Barthes",
    "additionalAuthors": "Annette Lavers",
    "isbn": "9780374521509",
    "genres": [
      "Philosophy",
      "Cultural criticism",
      "Essays"
    ],
    "themes": [
      "Modern myth",
      "Semiotics of culture",
      "The everyday decoded"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/51wYiPr-03L._SL1500_.jpg",
    "publicationYear": 1957
  },
  {
    "title": "Mythology: The D.C. Comics Art of Alex Ross",
    "author": "Chip Kidd",
    "additionalAuthors": "Geoff Spear",
    "isbn": "9781840238822",
    "genres": [
      "Design",
      "Comics",
      "Monograph"
    ],
    "themes": [
      "Painterly superhero art",
      "American mythologies",
      "Behind the studio"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781840238822-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Negative Space",
    "author": "B. R. Yeager",
    "isbn": "9781733569453",
    "genres": [
      "Literary fiction",
      "Horror"
    ],
    "themes": [
      "Teen suicide cluster",
      "Small-town dread",
      "Hauntings and drug-edge"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781733569453-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Never Whistle at Night",
    "author": "Shane Hawk",
    "additionalAuthors": "Theodore C. Van Alst Jr",
    "isbn": "9780593468463",
    "genres": [
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Indigenous horror",
      "Anthology",
      "Folklore and modern dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593468463-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "New Morning Mercies: A Daily Gospel Devotional",
    "author": "Paul David Tripp",
    "isbn": "9781433541384",
    "genres": [
      "Theology",
      "Devotional",
      "Christian literature"
    ],
    "themes": [
      "Daily grace",
      "Gospel meditation",
      "Reformed devotion"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781433541384-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "New People",
    "author": "Danzy Senna",
    "isbn": "9780399573149",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Mixed-race identity",
      "1990s Brooklyn",
      "Romantic obsession",
      "Performing authenticity"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780399573149.jpg",
    "publicationYear": 2018
  },
  {
    "title": "Nichomachean Ethics",
    "author": "Aristotle",
    "additionalAuthors": "F.H. Peters, Hye-Kyung Kim",
    "isbn": "9780760752364",
    "genres": [
      "Philosophy",
      "Classics",
      "Ethics"
    ],
    "themes": [
      "Virtue",
      "The good life",
      "Practical wisdom",
      "Happiness as flourishing"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780760752364-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "Night at the Fiestas",
    "author": "Kirstin Valdez Quade",
    "isbn": "9780393352214",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "New Mexico",
      "Faith and family",
      "Latina lives",
      "Sacred and worldly"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780393352214-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Night Theater",
    "author": "Vikram Paralkar",
    "isbn": "9781948226547",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "A rural surgeon",
      "The risen dead",
      "One night's strange work",
      "Faith and craft"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781948226547-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "No Gods, No Monsters",
    "author": "Cadwell Turnbull",
    "isbn": "9781982603724",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Monsters revealing themselves",
      "Quiet apocalypse",
      "Mosaic of lives",
      "Belief and rupture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781982603724-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "No More Dragons: Get Free from Broken Dreams, Lost Hope, Bad Religion, and Other Monsters",
    "author": "Jim Burgen",
    "isbn": "9781400205622",
    "genres": [
      "Memoir",
      "Christian literature"
    ],
    "themes": [
      "Identity in Christ",
      "Personal transformation",
      "Religious baggage"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400205622-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "North Woods",
    "author": "Daniel Mason",
    "isbn": "9780593597040",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A New England house across centuries",
      "Lives that pass through",
      "Nature reclaiming"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593597040-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "Notes from Underground/White Nights/The Dream of a Ridiculous Man/and selections from The House of the Dead",
    "author": "Fyodor Dostoyevsky",
    "additionalAuthors": "Andrew R. MacAndrew",
    "isbn": "9780451520135",
    "genres": [
      "Literary fiction",
      "Classics",
      "Russian literature"
    ],
    "themes": [
      "Spite and self-loathing",
      "Romantic longing",
      "Prison and conscience",
      "Underground man"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451520135-L.jpg?default=false",
    "publicationYear": 2000
  },
  {
    "title": "Notes on the Synthesis of Form",
    "author": "Christopher Alexander",
    "isbn": "9780674627512",
    "genres": [
      "Nonfiction",
      "Design",
      "Philosophy"
    ],
    "themes": [
      "Design method",
      "Form and context",
      "Pattern thinking"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780674627512-L.jpg?default=false",
    "publicationYear": 1971
  },
  {
    "title": "Now Try Something Weirder",
    "author": "Michael Johnson",
    "isbn": "9781786274182",
    "genres": [
      "Design",
      "Nonfiction"
    ],
    "themes": [
      "Breaking design conventions",
      "Pushing creative boundaries",
      "Practice prompts"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781786274182-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Of Grammatology",
    "author": "Jacque Derrida",
    "isbn": "9781421419954",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Classics"
    ],
    "themes": [
      "Deconstruction",
      "Writing vs. speech",
      "The metaphysics of presence"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781421419954-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Of Other Worlds: Essays and Stories",
    "author": "C.S. Lewis",
    "isbn": "9780156027670",
    "genres": [
      "Essays",
      "Short stories",
      "Fiction"
    ],
    "themes": [
      "The craft of fantasy",
      "Children’s literature",
      "Imagination and reality"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780156027670-L.jpg?default=false",
    "publicationYear": 2002
  },
  {
    "title": "On Heroes and Hero Worship and the Heroic in History",
    "author": "Thomas Carlyle",
    "isbn": "9780300148602",
    "genres": [
      "Nonfiction",
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Great man theory",
      "Historical heroism",
      "Victorian moral history"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780300148602-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "On Michael Jackson",
    "author": "Margo Jefferson",
    "isbn": "9780307277657",
    "genres": [
      "Nonfiction",
      "Biography",
      "Criticism"
    ],
    "themes": [
      "Race and fame",
      "The pop genius",
      "Critical reckoning"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780307277657.jpg",
    "publicationYear": 2007
  },
  {
    "title": "On Writing",
    "author": "Jorge Luis Borges",
    "additionalAuthors": "Suzanne Jill Levine",
    "isbn": "9780143105725",
    "genres": [
      "Essays",
      "Writing",
      "Criticism"
    ],
    "themes": [
      "Borges on craft",
      "Translation",
      "Influence and reading"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143105725-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "One Flew Over the Cuckoo’s Nest",
    "author": "Ken Kesey",
    "isbn": "9780451137098",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "Institutional control",
      "Sanity",
      "Rebellion",
      "Conformity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451137098-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "additionalAuthors": "Gregory Rabassa",
    "isbn": "9780060531041",
    "genres": [
      "Literary fiction",
      "Classics",
      "Magical realism"
    ],
    "themes": [
      "The Buendía family",
      "Cyclic history",
      "Macondo",
      "Solitude across generations"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060531041-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "One Man’s Meat",
    "author": "E.B. White",
    "additionalAuthors": "Roger Angell",
    "isbn": "9780884481928",
    "genres": [
      "Memoir",
      "Essays",
      "Biography"
    ],
    "themes": [
      "Rural life",
      "Wartime America",
      "Domestic observation",
      "Writerly voice"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780884481928-L.jpg?default=false",
    "publicationYear": 1997
  },
  {
    "title": "One’s Company",
    "author": "Ashley Hutson",
    "isbn": "9780393866643",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A woman recreates a sitcom set",
      "Trauma and refuge",
      "Three's Company obsession"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/A1oVyfJCd0L._SY522_.jpg",
    "publicationYear": 2022
  },
  {
    "title": "Only the Lowly",
    "author": "Brian Catling",
    "isbn": "9781916041103",
    "genres": [
      "Literary fiction",
      "Weird fiction"
    ],
    "themes": [
      "The marginal and the mythic",
      "Strange figures",
      "Catling’s signature dreamscapes"
    ]
  },
  {
    "title": "Orthodoxy",
    "author": "G.K. Chesterton",
    "isbn": "9781508486220",
    "genres": [
      "Theology",
      "Philosophy",
      "Christian literature"
    ],
    "themes": [
      "Christian apologetics",
      "Paradox as truth",
      "Wonder",
      "The romance of orthodoxy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781508486220-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Othello",
    "author": "William Shakespeare",
    "isbn": "9780743477550",
    "genres": [
      "Drama",
      "Classics",
      "Tragedy"
    ],
    "themes": [
      "Jealousy",
      "Race and otherness",
      "Manipulation",
      "Honor"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780743477550-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness",
    "author": "Peter Godfrey-Smith",
    "isbn": "9780374227760",
    "genres": [
      "Nonfiction",
      "Science",
      "Philosophy"
    ],
    "themes": [
      "Cephalopod intelligence",
      "Evolution of mind",
      "What it is like to be"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374227760-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Otherlands",
    "author": "Thomas Halliday",
    "isbn": "9780593132906",
    "genres": [
      "Nonfiction",
      "Science",
      "Nature writing"
    ],
    "themes": [
      "Deep time",
      "Ancient ecosystems",
      "Earth's many vanished worlds"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593132906-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Out of Body",
    "author": "Jeffrey Ford",
    "isbn": "9781250250155",
    "genres": [
      "Horror",
      "Novella"
    ],
    "themes": [
      "Astral projection",
      "Suburban dread",
      "The hidden under the everyday"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250250155-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Out of the Silent Planet (Space Trilogy, #1)",
    "author": "C.S. Lewis",
    "isbn": "9780007157150",
    "genres": [
      "Science fiction",
      "Christian literature",
      "Allegory"
    ],
    "themes": [
      "Cosmic theology",
      "First contact",
      "Unfallen worlds",
      "Reorientation of the heavens"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780007157150-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Palaces of the Crow",
    "author": "Ray Nayler",
    "isbn": "9780374620752",
    "genres": [
      "Fiction"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780374620752.jpg"
  },
  {
    "title": "Pale Fire",
    "author": "Vladimir Nabokov",
    "isbn": "9780679723424",
    "genres": [
      "Literary fiction",
      "Classics",
      "Experimental"
    ],
    "themes": [
      "Poem and commentary",
      "Unreliable scholar",
      "Imagined kingdoms",
      "Literary trickery"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679723424-L.jpg?default=false",
    "publicationYear": 1989
  },
  {
    "title": "Paul Rand: A Designer’s Art",
    "author": "Paul Rand",
    "additionalAuthors": "Steven Heller",
    "isbn": "9781616894863",
    "genres": [
      "Design",
      "Monograph",
      "Typography"
    ],
    "themes": [
      "Modernist graphic design",
      "Logo philosophy",
      "The designer as author"
    ],
    "publicationYear": 2016
  },
  {
    "title": "Paul Rand: Conversations with Students",
    "author": "Michael Kroeger",
    "isbn": "9781568987255",
    "genres": [
      "Design",
      "Pedagogy",
      "Monograph"
    ],
    "themes": [
      "Design education",
      "Design philosophy",
      "The teacher-student dialogue"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781568987255-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "Perelandra (Space Trilogy, #2)",
    "author": "C.S. Lewis",
    "isbn": "9780007157167",
    "genres": [
      "Science fiction",
      "Christian literature",
      "Allegory"
    ],
    "themes": [
      "Temptation",
      "Unfallen worlds",
      "Embodied evil",
      "Cosmic theology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780007157167-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Perspective(s): A Novel",
    "author": "Laurent Binet",
    "additionalAuthors": "Sam Taylor",
    "isbn": "9780374614607",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "A Renaissance murder mystery told in letters",
      "Florentine art world",
      "Many points of view"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780374614607.jpg"
  },
  {
    "title": "Pest",
    "author": "Michael Cisco",
    "isbn": "9781955904308",
    "genres": [
      "Weird fiction",
      "Literary fiction"
    ],
    "themes": [
      "Plague and protocol",
      "Strange bureaucracies",
      "Estranged perception"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781955904308.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Phantastes",
    "author": "George MacDonald",
    "isbn": "9780802860606",
    "genres": [
      "Fantasy",
      "Classics",
      "Christian literature"
    ],
    "themes": [
      "Fairy land",
      "Spiritual quest",
      "Pre-Tolkien fantasy",
      "Shadow self"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802860606-L.jpg?default=false",
    "publicationYear": 1858
  },
  {
    "title": "Phenomenology of Spirt",
    "author": "Georg Wilhelm Friedrich Hegel",
    "additionalAuthors": "A. V. Miller",
    "isbn": "9780198245971",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Dialectical consciousness",
      "Master and slave",
      "Spirit unfolding"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780198245971-L.jpg?default=false",
    "publicationYear": 1979
  },
  {
    "title": "Photography and Anthropology",
    "author": "Christopher Pinney",
    "isbn": "9781861898043",
    "genres": [
      "Nonfiction",
      "Photography",
      "Academic"
    ],
    "themes": [
      "The colonial gaze",
      "Image and culture",
      "Documentation as power"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781861898043-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Pictos",
    "author": "Index Book",
    "isbn": "9788415308362",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Pictograms",
      "Visual communication",
      "Icon systems"
    ]
  },
  {
    "title": "Piranesi",
    "author": "Susanna Clarke",
    "isbn": "9781635577808",
    "genres": [
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "Isolation",
      "Identity",
      "Knowledge",
      "The labyrinthine house"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781635577808-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Pizza Girl",
    "author": "Jean Kyoung Frazier",
    "isbn": "9781984899002",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A pregnant 18-year-old",
      "Grief and obsession",
      "Suburban Los Angeles",
      "Dad-shaped absence"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781984899002-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Player Piano",
    "author": "Kurt Vonnegut",
    "isbn": "9780385333788",
    "genres": [
      "Science fiction",
      "Dystopian fiction",
      "Classics"
    ],
    "themes": [
      "Automation and obsolescence",
      "Engineers vs. workers",
      "Postwar dystopia"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385333788-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Playground",
    "author": "Richard Powers",
    "isbn": "9781324086031",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "The ocean and AI",
      "A Pacific atoll",
      "Friendship across decades",
      "Underwater futures"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781324086031-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "Point B",
    "author": "Drew Magary",
    "isbn": "9798637737680",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Teleportation society",
      "Boarding school",
      "Coming of age in a changed world"
    ],
    "publicationYear": 2020
  },
  {
    "title": "Popisho",
    "author": "Leone Ross",
    "isbn": "9781250829634",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "A Caribbean-inflected archipelago",
      "Everyone with a magic gift",
      "Politics and longing"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250829634-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Postmodernism in Pieces: Materializing the Social in U.S. Fiction",
    "author": "Matthew Mullins",
    "isbn": "9780190459505",
    "genres": [
      "Philosophy",
      "Literary criticism",
      "Academic"
    ],
    "themes": [
      "Postmodern fiction",
      "Materiality and social form",
      "American literary theory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780190459505-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "additionalAuthors": "Carol Howard, George Stade",
    "isbn": "9781593080204",
    "genres": [
      "Classics",
      "Literary fiction",
      "Romance"
    ],
    "themes": [
      "First impressions",
      "Marriage and class",
      "Wit and self-knowledge",
      "Regency manners"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593080204-L.jpg?default=false",
    "publicationYear": 1853
  },
  {
    "title": "Process and Reality",
    "author": "Alfred North Whitehead",
    "additionalAuthors": "David Ray Griffin, Donald W. Sherburne",
    "isbn": "9780029345702",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Process philosophy",
      "Actual occasions",
      "Speculative cosmology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780029345702-L.jpg?default=false",
    "publicationYear": 1979
  },
  {
    "title": "PROOF: Finding Freedom through the Intoxicating Joy of Irresistible Grace",
    "author": "Daniel Montgomery",
    "additionalAuthors": "Timothy Paul Jones",
    "isbn": "9780310513896",
    "genres": [
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Grace",
      "Reformed theology",
      "Christian freedom"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780310513896-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Pure Scum: The Left-Out, the Right-Brained and the Grace of God",
    "author": "Mike Sares",
    "isbn": "9780830836291",
    "genres": [
      "Theology",
      "Memoir"
    ],
    "themes": [
      "Outsider faith",
      "Grace",
      "Church on the margins"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780830836291-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "Purity of Heart Is To Will One Thing: Spiritual Preparation for the Office of Confession",
    "author": "Søren Kierkegaard",
    "additionalAuthors": "Douglas V. Steere",
    "isbn": "9781603866231",
    "genres": [
      "Philosophy",
      "Theology",
      "Devotional"
    ],
    "themes": [
      "Single-mindedness",
      "Spiritual integrity",
      "Self-examination"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781603866231-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Reading Like a Writer: A Guide for People Who Love Books and for Those Who Want to Write Them",
    "author": "Francine Prose",
    "isbn": "9780060777050",
    "genres": [
      "Nonfiction",
      "Writing",
      "Criticism"
    ],
    "themes": [
      "Close reading",
      "Craft of fiction",
      "Apprenticeship to great writers"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060777050-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "ReadyMade: How to Make [Almost] Everything: A Do-It-Yourself Primer",
    "author": "Shoshana Berger",
    "additionalAuthors": "Jeffery Cross, Grace Hawthorne",
    "isbn": "9781400081073",
    "genres": [
      "Design",
      "DIY",
      "Reference"
    ],
    "themes": [
      "Making with what you have",
      "Domestic invention",
      "Resourcefulness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400081073-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Recursion",
    "author": "Blake Crouch",
    "isbn": "9781524759780",
    "genres": [
      "Science fiction",
      "Thriller"
    ],
    "themes": [
      "Memory and time",
      "False Memory Syndrome",
      "Loops and resets",
      "Loving across timelines"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781524759780-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Red Pill",
    "author": "Hari Kunzru",
    "isbn": "9780451493712",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Online radicalization",
      "A writer's breakdown",
      "Berlin and dark Romanticism",
      "Reactionary thought"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451493712-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Reflections on the Psalms",
    "author": "C.S. Lewis",
    "isbn": "9780156762489",
    "genres": [
      "Theology",
      "Christian literature",
      "Essays"
    ],
    "themes": [
      "Reading the Psalms",
      "Worship and lament",
      "Devotional theology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780156762489-L.jpg?default=false",
    "publicationYear": 1964
  },
  {
    "title": "Reincarnation Blues",
    "author": "Michael Poore",
    "isbn": "9780399178504",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Reincarnation",
      "Death personified",
      "Romance across lifetimes",
      "Cosmic comedy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399178504-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Remarkably Bright Creatures",
    "author": "Shelby Van Pelt",
    "isbn": "9780063204164",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A grieving widow",
      "A friendship with an octopus",
      "Long-buried family secrets",
      "Pacific Northwest aquarium"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780063204164-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Requiem for the American Dream: The 10 Principles of Concentration of Wealth & Power",
    "author": "Noam Chomsky",
    "isbn": "9781609807368",
    "genres": [
      "Philosophy",
      "Politics",
      "Nonfiction"
    ],
    "themes": [
      "Inequality",
      "Power and wealth",
      "Civic decline",
      "Democratic erosion"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781609807368-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Revenge",
    "author": "Yōko Ogawa",
    "additionalAuthors": "Stephen Snyder",
    "isbn": "9781250375988",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Linked stories",
      "Quiet menace",
      "Small cruelties",
      "Japanese miniaturism"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250375988.jpg"
  },
  {
    "title": "Same Bed Different Dreams",
    "author": "Ed Pak",
    "isbn": "9780812998979",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A shadow history of Korea",
      "Korean Provisional Government persisting",
      "Conspiracy and identity",
      "Postmodern braid"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812998979-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Science Fiction: Contemporary Mythology",
    "author": "Patrick Warrick, Martin Harry Greenberg, Joseph Olander",
    "isbn": "0060469439",
    "genres": [
      "Fiction",
      "Collection",
      "Science Fiction"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/0060469439-L.jpg?default=false",
    "publicationYear": 1978
  },
  {
    "title": "Sea of Tranquility",
    "author": "Emily St John Mandel",
    "isbn": "9780593321447",
    "genres": [
      "Literary fiction",
      "Science fiction"
    ],
    "themes": [
      "Time travel",
      "A pandemic novelist",
      "Lunar colonies",
      "Simulation and reality"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593321447-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Seasons of Glass and Iron",
    "author": "Amal El-Mohtar",
    "isbn": "9781250341006",
    "genres": [
      "Fantasy",
      "Short stories"
    ],
    "themes": [
      "Fairy-tale reimaginings",
      "Women's friendship across stories",
      "Glass mountain, iron shoes"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250341006.jpg"
  },
  {
    "title": "Selected Stories",
    "author": "Anton Chekhov",
    "additionalAuthors": "Ann Dunnigan, Ernest J. Simmons",
    "isbn": "9780451525116",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Classics"
    ],
    "themes": [
      "Everyday cruelty",
      "Missed connections",
      "Rural Russia",
      "Ennui"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451525116-L.jpg?default=false",
    "publicationYear": 1960
  },
  {
    "title": "Semiotic Animal: A Postmodern Definition of “Human Being” Transcending Patriarchy and Feminism",
    "author": "John Deely",
    "isbn": "9781587317583",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Academic"
    ],
    "themes": [
      "The human as sign-user",
      "Triadic semiotics",
      "Defining humanity"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781587317583.jpg",
    "publicationYear": 2010
  },
  {
    "title": "Semiotics and Interpretation",
    "author": "Robert Scholes",
    "isbn": "9780300160932",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Literary criticism"
    ],
    "themes": [
      "Reading and signs",
      "Critical practice",
      "Introductory semiotics"
    ],
    "publicationYear": 1959
  },
  {
    "title": "Semiotics and the Philosophy of Language",
    "author": "Umberto Eco",
    "isbn": "9780253203984",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Academic"
    ],
    "themes": [
      "Semiotics and meaning",
      "Encyclopedia and dictionary",
      "Codes and inference"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253203984-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "Semiotics of Visual Language",
    "author": "Fernande Saint-Martin",
    "isbn": "9780253350572",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Academic"
    ],
    "themes": [
      "Visual sign systems",
      "Reading images",
      "Theoretical foundations"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253350572-L.jpg?default=false",
    "publicationYear": 1990
  },
  {
    "title": "Semiotics: The Basics",
    "author": "Daniel Chandler",
    "isbn": "9780415351119",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Design"
    ],
    "themes": [
      "Sign systems",
      "Codes and meaning",
      "Introductory semiotics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780415351119-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "Seven Empty Houses",
    "author": "Samanta Schweblin",
    "additionalAuthors": "Megan McDowell",
    "isbn": "9780525541400",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Domestic strangeness",
      "Empty rooms",
      "Argentine quiet unease"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780525541400.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Seventy-nine Short Essays on Design",
    "author": "Michael Bierut",
    "isbn": "9781616890612",
    "genres": [
      "Design",
      "Essays"
    ],
    "themes": [
      "Design history",
      "Studio life",
      "The designer’s eye"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781616890612.jpg",
    "publicationYear": 2012
  },
  {
    "title": "Shadow & Claw (The Book of the New Sun, #1–2)",
    "author": "Gene Wolfe",
    "isbn": "9780312890179",
    "genres": [
      "Science fantasy",
      "Literary fiction"
    ],
    "themes": [
      "Guilt and atonement",
      "Torture and mercy",
      "The unreliable past"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780312890179-L.jpg?default=false",
    "publicationYear": 1994
  },
  {
    "title": "Shape of Things: A Philosophy of Design",
    "author": "Vilém Flusser",
    "additionalAuthors": "Anthony Mathews",
    "isbn": "9781861890559",
    "genres": [
      "Design",
      "Philosophy",
      "Essays"
    ],
    "themes": [
      "Design as philosophy",
      "Objects and meaning",
      "Technology and culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781861890559-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "Shoe Dog",
    "author": "Phil Knight",
    "isbn": "9781471146725",
    "genres": [
      "Memoir",
      "Nonfiction",
      "Business"
    ],
    "themes": [
      "Building Nike",
      "Entrepreneurial risk",
      "Personal cost of obsession"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781471146725-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Sign, Language, and Behavior",
    "author": "Charles Morris",
    "isbn": "9780807600207",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Nonfiction"
    ],
    "themes": [
      "Behavioral semiotics",
      "Theory of signs",
      "Pragmatist legacy"
    ],
    "publicationYear": 1965
  },
  {
    "title": "Signs",
    "author": "Thomas Sebeok",
    "isbn": "9780802084729",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Nonfiction"
    ],
    "themes": [
      "Introduction to semiotics",
      "Sign-systems across species",
      "Biosemiotics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802084729-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "Simulacra and Simulation",
    "author": "Jean Baudrillard",
    "additionalAuthors": "Sheila Faria Glaser",
    "isbn": "9780472065219",
    "genres": [
      "Philosophy",
      "Cultural criticism"
    ],
    "themes": [
      "The hyperreal",
      "Copies without originals",
      "Media saturation",
      "Symbolic exchange"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780472065219-L.jpg?default=false",
    "publicationYear": 1994
  },
  {
    "title": "Sir Gawain and the Green Knight",
    "author": "",
    "additionalAuthors": "Marie Borroff",
    "isbn": "393097544"
  },
  {
    "title": "Sisters in the Wind",
    "author": "Angeline Boulley",
    "isbn": "9781250328533",
    "genres": [
      "Fiction"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250328533.jpg"
  },
  {
    "title": "Skullcrack City",
    "author": "Jeremy Robert Johnson",
    "isbn": "9781621051718",
    "genres": [
      "Bizarro fiction",
      "Horror",
      "Speculative fiction"
    ],
    "themes": [
      "Conspiracy",
      "Body horror",
      "Addiction",
      "Paranoia"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781621051718-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Slade House",
    "author": "David Mitchell",
    "isbn": "9780812998689",
    "genres": [
      "Literary fiction",
      "Horror",
      "Fantasy"
    ],
    "themes": [
      "The haunted house",
      "Predatory immortals",
      "Cyclical victims",
      "Decades of dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812998689-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "isbn": "9780385333849",
    "genres": [
      "Classics",
      "Literary fiction",
      "Science fiction",
      "Anti-war"
    ],
    "themes": [
      "The bombing of Dresden",
      "Trauma and time",
      "So it goes",
      "Free will"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385333849-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "Snow",
    "author": "Orhan Pamuk",
    "additionalAuthors": "Maureen Freely",
    "isbn": "9780375706868",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Political Islam and secularism",
      "Provincial Turkey",
      "Poetry and politics",
      "Isolation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375706868-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Songs of a Dead Dreamer and Grimscribe",
    "author": "Thomas Ligotti",
    "isbn": "9780143107767",
    "genres": [
      "Weird fiction",
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Cosmic pessimism",
      "The puppet and the dreamer",
      "Anti-natalist dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143107767-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Sorrowland",
    "author": "Rivers Solomon",
    "isbn": "9780374266776",
    "genres": [
      "Literary fiction",
      "Speculative fiction",
      "Horror"
    ],
    "themes": [
      "Cult escape",
      "Bodily transformation",
      "Black motherhood",
      "Wilderness and survival"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374266776-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Speaker and the Hataka",
    "author": "Trenton Anthony",
    "isbn": "9798838393159",
    "genres": [
      "Fantasy",
      "Science fiction"
    ],
    "themes": [
      "Speaker saga continues",
      "Power of language",
      "Adversaries and allies"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/51raU1Lc+dL._SY445_SX342_FMwebp_.jpg"
  },
  {
    "title": "Speaker of Ma’ila",
    "author": "Trenton Anthony",
    "isbn": "9798671945836",
    "genres": [
      "Fantasy",
      "Science fiction"
    ],
    "themes": [
      "World-building",
      "Speech and power",
      "Outsider as hero"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/51C0kyD3BAL._SY445_SX342_FMwebp_.jpg",
    "publicationYear": 2020
  },
  {
    "title": "Speakers of Elor",
    "author": "Trenton Anthony",
    "isbn": "9798507120475",
    "genres": [
      "Fantasy",
      "Science fiction"
    ],
    "themes": [
      "Continuation of Speaker saga",
      "Languages of power",
      "Worldbuilding"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/51yzsmtUkiL._SY445_SX342_FMwebp_.jpg",
    "publicationYear": 2021
  },
  {
    "title": "Spotted Lilly",
    "author": "Anna Tambour",
    "isbn": "9780809544837",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "A pact with the devil",
      "Australia transposed",
      "Strange ambitions"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780809544837-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "Station Eleven",
    "author": "Emily St. John Mandel",
    "isbn": "9780385353304",
    "genres": [
      "Literary fiction",
      "Post-apocalyptic",
      "Speculative fiction"
    ],
    "themes": [
      "Art after collapse",
      "Memory and culture",
      "Survival",
      "Interconnection"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385353304-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "Stephen Florida",
    "author": "Gabe Habash",
    "isbn": "9781566894647",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "College wrestling",
      "Obsession",
      "Loneliness",
      "Inner monologue as madness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781566894647-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Stoner",
    "author": "John Williams",
    "isbn": "9781590171998",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "Unfulfilled life",
      "Academia",
      "Endurance",
      "Quiet dignity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781590171998-L.jpg?default=false",
    "publicationYear": 1965
  },
  {
    "title": "Strange Beasts of China",
    "author": "Yan Ge",
    "additionalAuthors": "Jeremy Tiang",
    "isbn": "9781612199092",
    "genres": [
      "Literary fiction",
      "Fantasy"
    ],
    "themes": [
      "Bestiary of urban creatures",
      "Strange beings among us",
      "Chinese contemporary fabulism"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781612199092-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "Stranger in a Strange Land",
    "author": "Robert A. Heinlein",
    "isbn": "9780441788385",
    "genres": [
      "Science fiction",
      "Classics"
    ],
    "themes": [
      "The outsider as messiah",
      "Counterculture",
      "Human customs viewed anew",
      "Grok"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780441788385-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "Structuralism & Semiotics",
    "author": "Terence Hawkes",
    "isbn": "9780416796209",
    "genres": [
      "Philosophy",
      "Literary criticism"
    ],
    "themes": [
      "Structuralist theory",
      "Saussure to Barthes",
      "Introductory survey"
    ],
    "publicationYear": 1977
  },
  {
    "title": "Swamplandia!",
    "author": "Karen Russell",
    "isbn": "9780307276681",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "A failing alligator park",
      "Adolescent grief",
      "Florida Gothic",
      "Sibling rescue"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/51uzoXjrRlL._SY445_SX342_QL70_FMwebp_.jpg",
    "publicationYear": 2011
  },
  {
    "title": "Sword & Citadel (The Book of the New Sun, #3–4)",
    "author": "Gene Wolfe",
    "isbn": "9780312890186",
    "genres": [
      "Science fantasy",
      "Literary fiction"
    ],
    "themes": [
      "Memory and identity",
      "Messianic destiny",
      "Unreliable narration"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780312890186-L.jpg?default=false",
    "publicationYear": 1994
  },
  {
    "title": "Symbol",
    "author": "Angus Hyland",
    "additionalAuthors": "Steven Bateman",
    "isbn": "9781856697279",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Symbol design",
      "Visual identity",
      "Iconography"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781856697279-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Symbol Sourcebook: An Authoritative Guide to International Graphic Symbols",
    "author": "Henry Dreyfuss",
    "isbn": "9780442218065",
    "genres": [
      "Design",
      "Philosophy",
      "Reference"
    ],
    "themes": [
      "Universal visual language",
      "Wayfinding",
      "Cross-cultural communication"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780442218065-L.jpg?default=false",
    "publicationYear": 1984
  },
  {
    "title": "Symbol, Myth, and Culture",
    "author": "Ernst Cassirer",
    "additionalAuthors": "Donal Philip Verene",
    "isbn": "9780300026665",
    "genres": [
      "Philosophy",
      "Nonfiction"
    ],
    "themes": [
      "Symbolic forms",
      "Late essays",
      "Culture as symbolic"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780300026665-L.jpg?default=false",
    "publicationYear": 1981
  },
  {
    "title": "Symbols, Signs and Signets",
    "author": "Ernst Lehner",
    "isbn": "9780486222417",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Visual language",
      "Iconography",
      "Cultural communication"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486222417-L.jpg?default=false",
    "publicationYear": 1969
  },
  {
    "title": "Symbols: A Handbook for Seeing",
    "author": "Mark Fox, Angie Wang",
    "isbn": "9781580934725",
    "genres": [
      "Design",
      "Philosophy",
      "Reference"
    ],
    "themes": [
      "Visual literacy",
      "Symbol systems",
      "Meaning and form"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781580934725.jpg",
    "publicationYear": 2016
  },
  {
    "title": "Systematic Theology: An Introduction to Biblical Doctrine",
    "author": "Wayne A. Grudem",
    "isbn": "9780310286707",
    "genres": [
      "Theology",
      "Reference",
      "Christian literature"
    ],
    "themes": [
      "Doctrine",
      "Biblical authority",
      "Evangelical theology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780310286707-L.jpg?default=false",
    "publicationYear": 1995
  },
  {
    "title": "Tell Them of Battles, Kings, and Elephants",
    "author": "Mathias Énard",
    "additionalAuthors": "Charlotte Mandell",
    "isbn": "9780811228947",
    "genres": [
      "Literary fiction",
      "Historical fiction",
      "Novella"
    ],
    "themes": [
      "Michelangelo in Constantinople",
      "Cross-cultural encounter",
      "Imagined history"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780811228947.jpg",
    "publicationYear": 2019
  },
  {
    "title": "Tenth of December",
    "author": "George Saunders",
    "isbn": "9780812993806",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Empathy",
      "Class and dignity",
      "Moral struggle",
      "Dark comedy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812993806-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "That Hideous Strength (Space Trilogy, #3)",
    "author": "C.S. Lewis",
    "isbn": "9780743234924",
    "genres": [
      "Science fiction",
      "Christian literature",
      "Dystopian fiction"
    ],
    "themes": [
      "Scientism and totalitarianism",
      "Spiritual warfare",
      "Marriage",
      "Modern technocracy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780743234924-L.jpg?default=false",
    "publicationYear": 1987
  },
  {
    "title": "The 1619 Project: A New Origin Story",
    "author": "Nikole Hannah-Jones",
    "isbn": "9780593230572",
    "genres": [
      "Nonfiction",
      "History",
      "Essays"
    ],
    "themes": [
      "Slavery's legacy",
      "American origins reframed",
      "Race and democracy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593230572-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "The Abolition of Man",
    "author": "C.S. Lewis",
    "isbn": "9780060652944",
    "genres": [
      "Philosophy",
      "Nonfiction",
      "Christian literature"
    ],
    "themes": [
      "Natural law",
      "Critique of subjectivism",
      "Education and virtue"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060652944-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "The Abstainer",
    "author": "Ian McGuire",
    "isbn": "9780593133873",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Victorian Manchester",
      "Irish revolutionary politics",
      "A grieving cop",
      "Vengeance"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780593133873.jpg",
    "publicationYear": 2020
  },
  {
    "title": "The Accusation: Forbidden Stories from Inside North Korea",
    "author": "Bandi",
    "additionalAuthors": "Deborah     Smith",
    "isbn": "9780802126207",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Life under the regime",
      "Forbidden speech",
      "Everyday tyranny",
      "Smuggled testimony"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780802126207.jpg",
    "publicationYear": 2017
  },
  {
    "title": "The Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "isbn": "9780812504224",
    "genres": [
      "Classics",
      "Literary fiction",
      "Coming of age"
    ],
    "themes": [
      "The Mississippi",
      "Friendship across the color line",
      "Conscience vs. society",
      "American vernacular"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812504224-L.jpg?default=false",
    "publicationYear": 1989
  },
  {
    "title": "The Afflictions",
    "author": "Vikram Paralkar",
    "additionalAuthors": "Amanda Thomas",
    "isbn": "9781941360026",
    "genres": [
      "Speculative fiction",
      "Short stories"
    ],
    "themes": [
      "Imaginary maladies",
      "Medical fabulism",
      "Borges-like compendium"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781941360026-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "The African American People",
    "author": "Molefi Kete Asante",
    "isbn": "9780415872553",
    "genres": [
      "Nonfiction",
      "History"
    ],
    "themes": [
      "Global African American history",
      "Diaspora and migration",
      "Cultural identity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780415872553-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "isbn": "9780061122415",
    "genres": [
      "Literary fiction",
      "Allegory",
      "Magical realism"
    ],
    "themes": [
      "Personal legend",
      "Following one’s dream",
      "Spiritual journey"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "The Annual Banquet of Gravediggers’ Guild",
    "author": "Mathias Énard",
    "additionalAuthors": "Frank Wynne",
    "isbn": "9780811231299",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "French rural life",
      "Anthropology of a village",
      "Reincarnation across time",
      "Comic encyclopedism"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811231299-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "The Arrest",
    "author": "Jonathan Lethem",
    "isbn": "9780062938787",
    "genres": [
      "Literary fiction",
      "Post-apocalyptic"
    ],
    "themes": [
      "Tech that stops working",
      "Hollywood survivor",
      "Small-town survival",
      "Hollywood vs. the farm"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062938787-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Art of Letters",
    "author": "Kris Sowersby",
    "additionalAuthors": "Mark Gowing",
    "isbn": "9780648596349",
    "genres": [
      "Design",
      "Typography",
      "Nonfiction"
    ],
    "themes": [
      "Type design practice",
      "Letter craft",
      "Klim foundry"
    ]
  },
  {
    "title": "The Association of Small Bombs",
    "author": "Karan Mahajan",
    "isbn": "9780143109273",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A market bombing and its ripple",
      "Delhi",
      "Terrorism's intimate aftermath",
      "Survivors and perpetrators"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780143109273.jpg",
    "publicationYear": 2016
  },
  {
    "title": "The Attributes of God",
    "author": "A. W. Tozer",
    "isbn": "9781600661297",
    "genres": [
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Divine attributes",
      "Worship",
      "Knowing God"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781600661297-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "The Beauty of Everyday Things",
    "author": "Soetsu Tanagi",
    "isbn": "9780241366356",
    "genres": [
      "Design",
      "Philosophy",
      "Aesthetics"
    ],
    "themes": [
      "Mingei movement",
      "Folk craft",
      "Beauty of the unnoticed",
      "Japanese aesthetics"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780241366356.jpg",
    "publicationYear": 2019
  },
  {
    "title": "The Birth of Theory",
    "author": "Andrew Cole",
    "isbn": "9780226135427",
    "genres": [
      "Philosophy",
      "Academic"
    ],
    "themes": [
      "Medieval roots of theory",
      "Hegel and the dialectic",
      "Continental thought's lineage"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780226135427-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "The Boats of the “Glen Carrig”",
    "author": "William Hope Hodgson",
    "isbn": "9781519623812",
    "genres": [
      "Classics",
      "Weird fiction",
      "Adventure"
    ],
    "themes": [
      "Maritime horror",
      "Strange seas",
      "Castaways",
      "Edwardian weirdness"
    ],
    "publicationYear": 2015
  },
  {
    "title": "The Bone Clocks",
    "author": "David Mitchell",
    "isbn": "9781400065677",
    "genres": [
      "Literary fiction",
      "Fantasy",
      "Speculative fiction"
    ],
    "themes": [
      "Souls across lifetimes",
      "Hidden cosmic war",
      "Late-century collapse",
      "A life across decades"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400065677-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "The Box Man",
    "author": "Kobo Abe",
    "isbn": "9780375726514",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "Wearing a cardboard box",
      "Anonymity in the city",
      "Identity dissolved"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375726514-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "The Brief Wondrous Life of Oscar Wao",
    "author": "Junot Díaz",
    "isbn": "9781594483295",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "The Dominican diaspora",
      "Trujillo’s curse",
      "Geek love",
      "Family and history"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781594483295-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "The Call of Cthulhu and Other Weird Stories",
    "author": "H.P. Lovecraft",
    "additionalAuthors": "S.T. Joshi",
    "isbn": "9780141182346",
    "genres": [
      "Weird fiction",
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Cosmic horror",
      "Ancient knowledge",
      "Human insignificance"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780141182346-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "9780316769174",
    "genres": [
      "Classics",
      "Literary fiction",
      "Coming of age"
    ],
    "themes": [
      "Adolescent alienation",
      "Phoniness",
      "Innocence and its loss",
      "New York wandering"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316769174-L.jpg?default=false",
    "publicationYear": 1945
  },
  {
    "title": "The Caves of Steel (Robot, #1)",
    "author": "Isaac Asimov",
    "isbn": "9780553293401",
    "genres": [
      "Science fiction",
      "Mystery"
    ],
    "themes": [
      "Overcrowded Earth",
      "Robot prejudice",
      "Detective fiction in the future"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553293401-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "The Changeling",
    "author": "Joy Williams",
    "isbn": "9781941040898",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "Wild children",
      "Motherhood and animal life",
      "The island",
      "Disquieting fable"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781941040898-L.jpg?default=false",
    "publicationYear": 1978
  },
  {
    "title": "The Changeling",
    "author": "Victor LaValle",
    "isbn": "9780812985870",
    "genres": [
      "Literary fiction",
      "Horror",
      "Fairy tale"
    ],
    "themes": [
      "Fatherhood",
      "Folkloric horror",
      "New York as enchanted ground",
      "Postpartum dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812985870-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "The Children of Húrin",
    "author": "J.R.R. Tolkien",
    "additionalAuthors": "Christopher Tolkien",
    "isbn": "9780547086057",
    "genres": [
      "High fantasy",
      "Tragedy"
    ],
    "themes": [
      "Doom and fate",
      "Hubris",
      "Family curse",
      "First Age of Middle-earth"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780547086057-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "The Chronicles of Narnia (Chronicles of Narnia, #1–7)",
    "author": "C.S. Lewis",
    "additionalAuthors": "Pauline Baynes",
    "isbn": "9780066238500",
    "genres": [
      "Fantasy",
      "Children’s literature",
      "Classics",
      "Christian literature"
    ],
    "themes": [
      "Good vs. evil",
      "Faith and wonder",
      "Childhood imagination",
      "Allegory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780066238500-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "The Cloven  (The Vorrh Trilogy, #3)",
    "author": "Brian Catling",
    "isbn": "9781101972748",
    "genres": [
      "Weird fiction",
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "Colonialism’s wounds",
      "The mythic forest",
      "Hybrid beings",
      "Endings"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781101972748.jpg",
    "publicationYear": 2018
  },
  {
    "title": "The Complete Dictionary of Symbols",
    "author": "Jack Tresidder",
    "isbn": "9780811847674",
    "genres": [
      "Philosophy",
      "Reference"
    ],
    "themes": [
      "Cross-cultural symbols",
      "Iconographic meaning",
      "Symbolic encyclopedia"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811847674-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "The Complete Sherlock Holmes, Volume I",
    "author": "Arthur Conan Doyle",
    "additionalAuthors": "Kyle Freeman",
    "isbn": "9781593080341",
    "genres": [
      "Mystery",
      "Classics",
      "Short stories"
    ],
    "themes": [
      "Deduction",
      "Victorian London",
      "The consulting detective",
      "Friendship and method"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593080341-L.jpg?default=false",
    "publicationYear": 1930
  },
  {
    "title": "The Complete Sherlock Holmes, Volume II",
    "author": "Arthur Conan Doyle",
    "additionalAuthors": "Kyle Freeman",
    "isbn": "9781593080402",
    "genres": [
      "Mystery",
      "Classics",
      "Short stories"
    ],
    "themes": [
      "Deduction",
      "Late Victorian and Edwardian England",
      "The return of Holmes"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593080402-L.jpg?default=false",
    "publicationYear": 1930
  },
  {
    "title": "The Complete Tales of Edgar Allan Poe",
    "author": "Edgar Allan Poe",
    "isbn": "9780760716212",
    "genres": [
      "Short stories",
      "Classics",
      "Gothic",
      "Horror"
    ],
    "themes": [
      "Madness",
      "Death and the morbid",
      "The uncanny",
      "Guilt"
    ],
    "publicationYear": 1999
  },
  {
    "title": "The Confidence-Man",
    "author": "Herman Melville",
    "isbn": "9780451516985",
    "genres": [
      "Literary fiction",
      "Classics",
      "Satire"
    ],
    "themes": [
      "Trust",
      "American identity",
      "Performance of self",
      "Fraud"
    ],
    "publicationYear": 1964
  },
  {
    "title": "The Creative Act",
    "author": "Rick Rubin",
    "isbn": "9780593652886",
    "genres": [
      "Memoir",
      "Nonfiction",
      "Philosophy"
    ],
    "themes": [
      "Creativity as way of being",
      "Attention and openness",
      "Making without forcing"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593652886-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "The Creative Gift: Essays on Art and the Christian Life",
    "author": "Hans R. Rookmaaker",
    "isbn": "9780891072133",
    "genres": [
      "Theology",
      "Art criticism",
      "Christian literature"
    ],
    "themes": [
      "Vocation of the artist",
      "Creation as gift",
      "Faith and culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780891072133-L.jpg?default=false",
    "publicationYear": 1981
  },
  {
    "title": "The Crossing (The Border Trilogy, #2)",
    "author": "Cormac McCarthy",
    "isbn": "9780679760849",
    "genres": [
      "Literary fiction",
      "Western"
    ],
    "themes": [
      "Quest and return",
      "Wildness",
      "Brotherhood",
      "Stories within stories"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679760849-L.jpg?default=false",
    "publicationYear": 1995
  },
  {
    "title": "The Crucible",
    "author": "Arthur Miller",
    "isbn": "9780140481389",
    "genres": [
      "Drama",
      "Classics",
      "Historical fiction"
    ],
    "themes": [
      "Mass hysteria",
      "Conscience",
      "Authority",
      "Reputation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140481389-L.jpg?default=false",
    "publicationYear": 1982
  },
  {
    "title": "The Dark Tower and Other Stories",
    "author": "C.S. Lewis",
    "additionalAuthors": "Walter Hooper",
    "isbn": "9780156027700",
    "genres": [
      "Science fiction",
      "Short stories"
    ],
    "themes": [
      "Parallel worlds",
      "Speculative theology",
      "The fragmentary imagination"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780156027700-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "The Dawn of Everything: A New History of Humanity",
    "author": "David Wengrow and David Graeber",
    "isbn": "9780374157357",
    "genres": [
      "Nonfiction",
      "History",
      "Anthropology"
    ],
    "themes": [
      "Reframing prehistory",
      "Human freedom and inequality",
      "Against the standard story"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374157357-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "The Day of the Triffids",
    "author": "John Wyndham",
    "isbn": "9780593450086",
    "genres": [
      "Science fiction",
      "Classics",
      "Post-apocalyptic"
    ],
    "themes": [
      "Mass blindness",
      "Predatory plants",
      "Civilization unwound"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593450086-L.jpg?default=false",
    "publicationYear": 1951
  },
  {
    "title": "The Death of Ivan Ilych",
    "author": "Leo Tolstoy",
    "isbn": "9780451514851",
    "genres": [
      "Literary fiction",
      "Classics",
      "Russian literature"
    ],
    "themes": [
      "Mortality",
      "The unexamined life",
      "Bourgeois emptiness",
      "Late awakening"
    ],
    "publicationYear": 1927
  },
  {
    "title": "The Decagon House Murders",
    "author": "Yukito Ayatsuj",
    "isbn": "9781782276340",
    "genres": [
      "Mystery",
      "Classics"
    ],
    "themes": [
      "Locked-room puzzle",
      "Honkaku Japanese mystery",
      "Island isolation",
      "Homage to Christie"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781782276340-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "The Devourers",
    "author": "Indra Das",
    "isbn": "9781101967515",
    "genres": [
      "Literary fiction",
      "Fantasy",
      "Horror"
    ],
    "themes": [
      "Werewolves across Mughal India",
      "Lust and predation",
      "A scholar and a stranger"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/51vzRJuZ+nL._SY445_SX342_FMwebp_.jpg",
    "publicationYear": 2016
  },
  {
    "title": "The Diary of a Young Girl",
    "author": "Anne Frank",
    "additionalAuthors": "Eleanor Roosevelt, B.M. Mooyaart, B.M. Mooyaart-Doubleday",
    "isbn": "9780812415087",
    "genres": [
      "Nonfiction",
      "Biography",
      "Memoir"
    ],
    "themes": [
      "The Holocaust",
      "Adolescence in hiding",
      "Hope amid horror",
      "Inner life"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780812415087.jpg",
    "publicationYear": 1982
  },
  {
    "title": "The Disintegration of Form in the Arts",
    "author": "Erich von Kahler",
    "isbn": "9780807604410",
    "genres": [
      "Philosophy",
      "Art criticism",
      "Aesthetics"
    ],
    "themes": [
      "Form and modernity",
      "Crisis of art",
      "Cultural fragmentation"
    ],
    "publicationYear": 1968
  },
  {
    "title": "The Divine Conspiracy: Rediscovering Our Hidden Life in God",
    "author": "Dallas Willard",
    "additionalAuthors": "Richard J. Foster",
    "isbn": "9780060693336",
    "genres": [
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "The Sermon on the Mount",
      "Spiritual formation",
      "Kingdom of God in everyday life"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060693336-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "The Dog Stars",
    "author": "Peter Heller",
    "isbn": "9780307950475",
    "genres": [
      "Literary fiction",
      "Post-apocalyptic"
    ],
    "themes": [
      "Survival after pandemic",
      "Companionship and dogs",
      "Flying solo",
      "Tender desolation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780307950475-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "The Doloriad",
    "author": "Missouri Williams",
    "isbn": "9780374605087",
    "genres": [
      "Literary fiction",
      "Post-apocalyptic"
    ],
    "themes": [
      "Matriarch and incestuous family",
      "After collapse",
      "Sodden grotesque",
      "Television as oracle"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374605087-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "The Door to Saturn",
    "author": "Clark Ashton Smith",
    "isbn": "9781597808378",
    "genres": [
      "Weird fiction",
      "Short stories",
      "Fantasy"
    ],
    "themes": [
      "Exotic far places",
      "Decadent prose",
      "Cosmic and mythic dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781597808378-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Doré Bible Illustrations",
    "author": "Gustave Doré",
    "isbn": "9780486230047",
    "genres": [
      "Design",
      "Art history",
      "Reference"
    ],
    "themes": [
      "19th-century engraving",
      "Biblical illustration",
      "Romantic-era imagery"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780486230047-L.jpg?default=false",
    "publicationYear": 1974
  },
  {
    "title": "The Drowned Life",
    "author": "Jeffrey Ford",
    "isbn": "9780061435065",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Slipstream fiction",
      "Suburbia and the uncanny",
      "Quiet weirdness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780061435065-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "The Elements of Typographic Style",
    "author": "Robert Bringhurst",
    "isbn": "9780881792065",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Typographic principles",
      "Craft and history",
      "The shape of language on the page"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780881792065-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "The Employees",
    "author": "Olga Ravn",
    "additionalAuthors": "Martin Aitken",
    "isbn": "9780811234825",
    "genres": [
      "Literary fiction",
      "Science fiction"
    ],
    "themes": [
      "A starship crew of humans and humanoids",
      "Workplace reports as form",
      "Strange objects and longing"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780811234825.jpg",
    "publicationYear": 2023
  },
  {
    "title": "The Empusium",
    "author": "Olga Tokarczuk",
    "isbn": "9780593712948",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A pre-WWI mountain sanatorium",
      "Folklore and gender",
      "Strange illness",
      "Reimagining the magic mountain"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593712948-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "The End of All Songs (Dancers at the End of Time, #3)",
    "author": "Michael Moorcock",
    "isbn": "9780060129996",
    "genres": [
      "Science fiction",
      "Decadent literature"
    ],
    "themes": [
      "End of time",
      "Sincerity in artifice",
      "Romantic culmination",
      "The closing of an age"
    ],
    "publicationYear": 1976
  },
  {
    "title": "The Erstwhile (The Vorrh Trilogy, #2)",
    "author": "Brian Catling",
    "isbn": "9781101972724",
    "genres": [
      "Weird fiction",
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "Forgotten angels",
      "Colonial Africa and Edwardian England",
      "Hybrid beings",
      "Reawakening"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781101972724.jpg",
    "publicationYear": 2017
  },
  {
    "title": "The Everlasting Man",
    "author": "G.K. Chesterton",
    "isbn": "9781603865722",
    "genres": [
      "Theology",
      "Philosophy",
      "Christian literature"
    ],
    "themes": [
      "Christian history",
      "Wonder and orthodoxy",
      "Humanity’s strangeness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781603865722-L.jpg?default=false",
    "publicationYear": 1953
  },
  {
    "title": "The Extinction of Irena Rey",
    "author": "Jennifer Croft",
    "isbn": "9781639731701",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Translators in a forest",
      "A vanished author",
      "Polish primeval woods",
      "Linguistic intrigue"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781639731701-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "The Factory",
    "author": "Hiroko Oyomada",
    "isbn": "9780811228855",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "Endless corporate campus",
      "Pointless labor",
      "Drift and disorientation",
      "Workplace strangeness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811228855-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "The Fellowship of the Ring (The Lord of the Rings, #1)",
    "author": "J.R.R. Tolkien",
    "isbn": "9780345339706",
    "genres": [
      "High fantasy",
      "Classics",
      "Epic"
    ],
    "themes": [
      "Temptation of power",
      "Fellowship",
      "Hidden goodness",
      "The long defeat"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345339706-L.jpg?default=false",
    "publicationYear": 1972
  },
  {
    "title": "The Fisherman",
    "author": "John  Langan",
    "isbn": "9781939905215",
    "genres": [
      "Horror",
      "Weird fiction"
    ],
    "themes": [
      "Grief",
      "Fishing as ritual",
      "Cosmic horror",
      "Folklore on the Hudson"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781939905215-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Fortress of Solitude",
    "author": "Jonathan Lethem",
    "isbn": "9780375724886",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "Race and friendship",
      "Brooklyn childhood",
      "Music and identity",
      "Memory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375724886-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "The Framework of Language",
    "author": "Roman Jakobson",
    "isbn": "9780936534008",
    "genres": [
      "Philosophy",
      "Linguistics",
      "Academic"
    ],
    "themes": [
      "Structural linguistics",
      "Communication functions",
      "Poetics and grammar"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780936534008-L.jpg?default=false",
    "publicationYear": 1980
  },
  {
    "title": "The Genius of Birds",
    "author": "Jennifer Ackerman",
    "isbn": "9780399563126",
    "genres": [
      "Nonfiction",
      "Science",
      "Nature writing"
    ],
    "themes": [
      "Bird intelligence",
      "Cognition across species",
      "Avian behavior"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399563126-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "The Glass Hotel",
    "author": "Emily St. John Mandel",
    "isbn": "9780525521143",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A Ponzi scheme",
      "Haunted lives",
      "British Columbia and shipping",
      "Interwoven fates"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525521143-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The God of the Woods",
    "author": "Liz Moore",
    "isbn": "9780593418918",
    "genres": [
      "Literary fiction",
      "Mystery"
    ],
    "themes": [
      "Family secrets",
      "Class divide",
      "Adirondack summer camp",
      "Missing children"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593418918-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "The Golden Legend: Readings on the Saints",
    "author": "Jacobus de Voragine",
    "isbn": "9780691154077",
    "genres": [
      "Theology",
      "Classics",
      "Medieval literature"
    ],
    "themes": [
      "Hagiography",
      "Medieval piety",
      "Lives of the saints"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780691154077.jpg",
    "publicationYear": 2012
  },
  {
    "title": "The Goldfinch",
    "author": "Donna Tartt",
    "isbn": "9780316055437",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A boy and a stolen painting",
      "Grief and survival",
      "Antique furniture and forgery",
      "Coming of age across decades"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316055437-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "The Great Divorce",
    "author": "C.S. Lewis",
    "isbn": "9780060652951",
    "genres": [
      "Christian literature",
      "Allegory",
      "Fiction"
    ],
    "themes": [
      "Heaven and hell",
      "The chosen self",
      "Refusal of grace"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060652951-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "genres": [
      "Classics",
      "Literary fiction"
    ],
    "themes": [
      "The American Dream",
      "Wealth and longing",
      "The green light",
      "Reinvention"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "The Greatest Invention: A History of the World in Nine Mysterious Scripts",
    "author": "Silvia Ferrara",
    "isbn": "9780374601621",
    "genres": [
      "Nonfiction",
      "History",
      "Linguistics"
    ],
    "themes": [
      "Origins of writing",
      "Undeciphered scripts",
      "The miracle of inscription"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374601621-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "The Guide",
    "author": "Peter Heller",
    "isbn": "9780525657767",
    "genres": [
      "Literary fiction",
      "Thriller"
    ],
    "themes": [
      "Fly-fishing retreat",
      "Conspiracy in the woods",
      "Solitude and danger"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525657767-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "The Halloween Tree",
    "author": "Ray Bradbury",
    "isbn": "9780375803017",
    "genres": [
      "Fantasy",
      "Children's literature",
      "Classics"
    ],
    "themes": [
      "Origins of Halloween",
      "A friend in peril",
      "Journey through time and culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375803017-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "The Heaven & Earth Grocery Store",
    "author": "James McBride",
    "isbn": "9780593422946",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "1970s Pottstown",
      "A Jewish, Black, and immigrant neighborhood",
      "A buried secret",
      "Solidarity across difference"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593422946-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "The Hero and the Outlaw: Building Extraordinary Brands Through the Power of Archetypes",
    "author": "Carol Pearson",
    "additionalAuthors": "Margaret Mark",
    "isbn": "9780071364157",
    "genres": [
      "Design",
      "Business",
      "Psychology"
    ],
    "themes": [
      "Brand archetypes",
      "Jungian framework",
      "Storytelling in marketing"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780071364157-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "The Hero with a Thousand Faces",
    "author": "Joseph Campbell",
    "isbn": "9781577315933",
    "genres": [
      "Philosophy",
      "Mythology",
      "Classics"
    ],
    "themes": [
      "The monomyth",
      "Hero’s journey",
      "Comparative mythology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781577315933-L.jpg?default=false",
    "publicationYear": 1949
  },
  {
    "title": "The Hidden Girl and Other Stories",
    "author": "Ken Liu",
    "isbn": "9781982134037",
    "genres": [
      "Science fiction",
      "Short stories"
    ],
    "themes": [
      "Uploaded minds",
      "Family across futures",
      "Storytelling traditions reimagined"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781982134037-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Hidden Histories of Flowers",
    "author": "Maddie & Alice Bailey",
    "isbn": "9781784886745",
    "genres": [
      "Nonfiction",
      "Nature writing"
    ],
    "themes": [
      "Flower lore",
      "Cultural histories",
      "Plant stories"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781784886745.jpg",
    "publicationYear": 2024
  },
  {
    "title": "The Hike",
    "author": "Drew Magary",
    "isbn": "9780399563850",
    "genres": [
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "A man on a quest",
      "The endless path",
      "Dream-logic",
      "Grief and return"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399563850-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The History of Bees",
    "author": "Maja Lunde",
    "additionalAuthors": "Diane Oatley",
    "isbn": "9781501161377",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Ecological collapse",
      "Family across centuries",
      "Bees and human dependence"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781501161377-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "isbn": "9780618260300",
    "genres": [
      "Fantasy",
      "Classics",
      "Children’s literature"
    ],
    "themes": [
      "Adventure and homecoming",
      "Reluctant hero",
      "Dragons and gold",
      "Small folk in great events"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780618260300-L.jpg?default=false",
    "publicationYear": 1938
  },
  {
    "title": "The Hole",
    "author": "Hiroko Oyamada",
    "additionalAuthors": "David Boyd",
    "isbn": "9780811228879",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "A wife in the countryside",
      "Strange creatures",
      "Marriage and stasis",
      "Quiet weirdness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811228879-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Hollow Lands (Dancers at the End of Time, #2)",
    "author": "Michael Moorcock",
    "isbn": "9780060130022",
    "genres": [
      "Science fiction",
      "Decadent literature"
    ],
    "themes": [
      "Decadence",
      "Time travel",
      "Sincerity vs. artifice",
      "Love across eras"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060130022-L.jpg?default=false",
    "publicationYear": 1974
  },
  {
    "title": "The Hour of the Star",
    "author": "Clarice Lispector",
    "isbn": "9780811219495",
    "genres": [
      "Literary fiction",
      "Classics"
    ],
    "themes": [
      "A poor migrant in Rio",
      "The narrator's self-consciousness",
      "Compassion and distance"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811219495-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "The Houseguest",
    "author": "Amparo Dávila",
    "isbn": "9780811228213",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Domestic intrusions",
      "Anxiety and unease",
      "Mexican fabulism"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811228213-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared",
    "author": "Jonas Jonasson",
    "additionalAuthors": "Rod Bradbury",
    "isbn": "9781843913726",
    "genres": [
      "Literary fiction",
      "Humor",
      "Picaresque"
    ],
    "themes": [
      "Improbable life",
      "20th-century history",
      "Reluctant adventure",
      "Old age"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781843913726-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "The Imperfectionists",
    "author": "Tom Rachman",
    "isbn": "9780385343671",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Print journalism’s decline",
      "Workplace lives",
      "Loneliness",
      "Rome"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385343671-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "The Incompletes",
    "author": "Sergio Chejfec",
    "additionalAuthors": "Heather Cleary",
    "isbn": "9781948830034",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A friend’s letters",
      "Moscow as setting",
      "Wandering and waiting",
      "Argentine narration"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781948830034-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "The Inferno (The Divine Comedy, #1)",
    "author": "Dante Alighieri",
    "additionalAuthors": "John Ciardi, Archibald T. MacAllister",
    "isbn": "9780451527981",
    "genres": [
      "Epic poetry",
      "Classics",
      "Christian literature"
    ],
    "themes": [
      "Descent into hell",
      "Sin and justice",
      "The medieval cosmos",
      "Virgil as guide"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451527981-L.jpg?default=false",
    "publicationYear": 1947
  },
  {
    "title": "The Infinite Sadness of Small Appliances",
    "author": "Glenn Dixon",
    "isbn": "9781668097267",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Domestic objects with inner lives",
      "Quiet melancholy",
      "The everyday animated"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781668097267.jpg"
  },
  {
    "title": "The Information: A History, A Theory, A Flood",
    "author": "James Gleick",
    "isbn": "9781400096237",
    "genres": [
      "Nonfiction",
      "Science",
      "History"
    ],
    "themes": [
      "From drums to bits",
      "Shannon and information theory",
      "Knowledge as quantity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400096237-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "The Intentional Father",
    "author": "Jon Tyson",
    "isbn": "9780801018688",
    "genres": [
      "Nonfiction",
      "Christian literature",
      "Parenting"
    ],
    "themes": [
      "Raising sons",
      "Rites of passage",
      "Faith and fatherhood"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780801018688-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "The Interestings",
    "author": "Meg Wolitzer",
    "isbn": "9781594632341",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Friendship across decades",
      "Talent and ambition",
      "Envy",
      "Adulthood vs. adolescence"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781594632341.jpg",
    "publicationYear": 2014
  },
  {
    "title": "The Intuitionist",
    "author": "Colson Whitehead",
    "isbn": "9780385493000",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Elevator inspection as allegory",
      "Race and rising",
      "Verticality",
      "Hidden histories"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385493000-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "The Invention of Nature: Alexander Humboldt’s New World",
    "author": "Andrea Wulf",
    "isbn": "9780345806291",
    "genres": [
      "Biography",
      "Nonfiction",
      "Science"
    ],
    "themes": [
      "Humboldt's expeditions",
      "Founding modern ecology",
      "Romantic science"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345806291-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Irresistible Revolution: Living as an Ordinary Radical",
    "author": "Shane Claiborne",
    "isbn": "9780310266303",
    "genres": [
      "Theology",
      "Christian literature",
      "Memoir"
    ],
    "themes": [
      "Radical discipleship",
      "Community",
      "Justice and the Gospel"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780310266303-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "The King in Yellow",
    "author": "Robert W. Chambers",
    "isbn": "9781537514932",
    "genres": [
      "Weird fiction",
      "Horror",
      "Classics"
    ],
    "themes": [
      "The forbidden play",
      "Madness and aesthetics",
      "Carcosa",
      "Decadent dread"
    ],
    "publicationYear": 2016
  },
  {
    "title": "The Kingdom of Speech",
    "author": "Tom Wolfe",
    "isbn": "9780316404631",
    "genres": [
      "Nonfiction",
      "Linguistics"
    ],
    "themes": [
      "Origins of language",
      "Critique of Chomsky",
      "Speech as human leap"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780316404631.jpg",
    "publicationYear": 2017
  },
  {
    "title": "The Largesse of the Sea Maiden",
    "author": "Denis Johnson",
    "isbn": "9780812988635",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Endings",
      "Regret",
      "Grace among ruins",
      "Late-life clarity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812988635-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "The Left Hand of Darkness",
    "author": "Ursula K. Le Guin",
    "isbn": "9780143111597",
    "genres": [
      "Science fiction",
      "Classics"
    ],
    "themes": [
      "Gender as variable",
      "Envoy on a frozen world",
      "Friendship across difference",
      "Anthropological SF"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143111597-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Lego Story",
    "author": "Jens Andersen",
    "isbn": "9780063258020",
    "genres": [
      "Nonfiction",
      "Biography",
      "Business"
    ],
    "themes": [
      "A Danish family company",
      "Play and design",
      "Brick by brick"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780063258020-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "The Library at Mount Char",
    "author": "Scott  Hawkins",
    "isbn": "9780553418620",
    "genres": [
      "Fantasy",
      "Horror",
      "Literary fiction"
    ],
    "themes": [
      "Inheriting godhood",
      "Brutal upbringing",
      "Hidden library",
      "Cosmic succession"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553418620-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "The Light Eaters: How the Unseen World of Plant Intelligence Offers a New Understanding of Life on Earth",
    "author": "Zöe Schlanger",
    "isbn": "9780063073852",
    "genres": [
      "Nonfiction",
      "Science",
      "Nature writing"
    ],
    "themes": [
      "Plant cognition",
      "Botany's frontier",
      "What plants know"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780063073852-L.jpg?default=false",
    "publicationYear": 2024
  },
  {
    "title": "The Light Is the Darkness",
    "author": "Laird Barron",
    "isbn": "9781935006145",
    "genres": [
      "Weird fiction",
      "Horror"
    ],
    "themes": [
      "Brutal contests",
      "Cosmic conspiracies",
      "Family secrets",
      "Hardboiled cosmic horror"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781935006145-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns",
    "author": "John C. Bogle",
    "isbn": "9780470102107",
    "genres": [
      "Nonfiction",
      "Finance",
      "Business"
    ],
    "themes": [
      "Index investing",
      "Long-term thinking",
      "Fee discipline"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780470102107-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "The Little Prince",
    "author": "Antoine de Saint-Exupéry",
    "additionalAuthors": "Richard Howard, Dom Marcos Barbosa, Melina Karakosta",
    "isbn": "9780156012195",
    "genres": [
      "Classics",
      "Children’s literature",
      "Allegory"
    ],
    "themes": [
      "What is essential is invisible",
      "Childhood wisdom",
      "Love and responsibility",
      "The desert"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg?default=false",
    "publicationYear": 1971
  },
  {
    "title": "The Man Who Mistook His Wife for a Hat and Other Clinical Tales",
    "author": "Oliver Sacks",
    "isbn": "9780684853949",
    "genres": [
      "Nonfiction",
      "Science",
      "Essays"
    ],
    "themes": [
      "Neurological case studies",
      "Identity and the brain",
      "Compassionate observation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780684853949-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "The Man Who Was Thursday",
    "author": "G.K. Chesterton",
    "additionalAuthors": "Bruce F. Murphy",
    "isbn": "9781419171666",
    "genres": [
      "Literary fiction",
      "Classics",
      "Allegory"
    ],
    "themes": [
      "Order and anarchy",
      "Identity unmasked",
      "Theological detective story",
      "Paradox"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781419171666-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "The Maniac",
    "author": "Benjamín Labatut",
    "isbn": "9780593654477",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Von Neumann's mind",
      "Game theory and the bomb",
      "AI and Go",
      "Genius and madness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593654477-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "The Martian Chronicles",
    "author": "Ray Bradbury",
    "isbn": "9780553278224",
    "genres": [
      "Science fiction",
      "Classics",
      "Short stories"
    ],
    "themes": [
      "Colonizing Mars",
      "Loneliness across worlds",
      "American expansion mythologized",
      "Quiet wonder"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553278224-L.jpg?default=false",
    "publicationYear": 1984
  },
  {
    "title": "The Medium is the Massage",
    "author": "Marshall McLuhan",
    "additionalAuthors": "Quentin Fiore, Jerome Agel",
    "isbn": "9781584230700",
    "genres": [
      "Philosophy",
      "Media theory",
      "Design"
    ],
    "themes": [
      "Media as message",
      "Technology and perception",
      "Visual rhetoric"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781584230700-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "The Memory Police",
    "author": "Yoko Ogawa",
    "additionalAuthors": "Stephen Snyder",
    "isbn": "9781101911815",
    "genres": [
      "Literary fiction",
      "Dystopian fiction"
    ],
    "themes": [
      "Disappearing things",
      "An island of forgetting",
      "Resistance through writing",
      "Quiet erasure"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781101911815-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Metamorphosis and Other Stories",
    "author": "Franz Kafka",
    "additionalAuthors": "Jason Baker, Donna Freed",
    "isbn": "9781593080297",
    "genres": [
      "Literary fiction",
      "Classics",
      "Short stories"
    ],
    "themes": [
      "Alienation",
      "Family and burden",
      "The bureaucratic absurd",
      "Transformation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593080297-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "The Moon is Down",
    "author": "John Steinbeck",
    "isbn": "9780140187465",
    "genres": [
      "Literary fiction",
      "Classics",
      "War literature"
    ],
    "themes": [
      "Occupation and resistance",
      "Quiet defiance",
      "Free people vs. herd people"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140187465-L.jpg?default=false",
    "publicationYear": 1942
  },
  {
    "title": "The Mountain in the Sea",
    "author": "Ray Nayler",
    "isbn": "9781250872272",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Octopus intelligence",
      "Posthuman ethics",
      "Corporate AI",
      "First contact on Earth"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250872272-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "The Naked Sun (Robot, #2)",
    "author": "Isaac Asimov",
    "isbn": "9780553293395",
    "genres": [
      "Science fiction",
      "Mystery"
    ],
    "themes": [
      "Agoraphobic societies",
      "Robot ethics",
      "Isolation as culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553293395-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "The Narrator",
    "author": "Michael Cisco",
    "additionalAuthors": "Jeff VanderMeer",
    "isbn": "9781621051855",
    "genres": [
      "Weird fiction",
      "Literary fiction"
    ],
    "themes": [
      "War as dream",
      "Storytelling as survival",
      "Unstable reality"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781621051855-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "The Neverending Story",
    "author": "Michael Ende",
    "additionalAuthors": "Ralph Manheim",
    "isbn": "9780140386332",
    "genres": [
      "Fantasy",
      "Classics",
      "Children's literature"
    ],
    "themes": [
      "A boy in a book",
      "Fantastica",
      "The reader's power",
      "Stories saving worlds"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140386332-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "The New Drawing on the Right Side of the Brain",
    "author": "Betty Edwards",
    "isbn": "9780874774245",
    "genres": [
      "Design",
      "Art instruction",
      "Cognitive science"
    ],
    "themes": [
      "Perception",
      "Drawing as seeing",
      "Right-brain thinking"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780874774245-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "The Noblest Roman",
    "author": "Jerry Kelly and Misha Beletsky",
    "isbn": "9781567925821",
    "genres": [
      "Nonfiction",
      "Typography",
      "Design"
    ],
    "themes": [
      "Trajan-inspired letterforms",
      "Roman capitals",
      "Inscriptional design"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781567925821-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The North Water",
    "author": "Ian McGuire",
    "isbn": "9781250118141",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "19th-century whaling",
      "Violence at sea",
      "Survival",
      "Evil incarnate"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250118141.jpg",
    "publicationYear": 2017
  },
  {
    "title": "The Obscene Bird of Night",
    "author": "José Donoso",
    "isbn": "9780811232227",
    "genres": [
      "Literary fiction",
      "Classics",
      "Magical realism"
    ],
    "themes": [
      "A crumbling Chilean estate",
      "Distorted identities",
      "Latin American Gothic",
      "Madness and shape-shifting"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780811232227.jpg",
    "publicationYear": 2024
  },
  {
    "title": "The Octopus: A Story of California",
    "author": "Frank Norris",
    "additionalAuthors": "Kevin Starr",
    "isbn": "9780140187700",
    "genres": [
      "Literary fiction",
      "Classics",
      "Naturalism"
    ],
    "themes": [
      "Wheat farmers vs. railroads",
      "Forces beyond the individual",
      "American capitalism",
      "Gilded Age struggle"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140187700-L.jpg?default=false",
    "publicationYear": 1914
  },
  {
    "title": "The Odyssey",
    "author": "Homer",
    "additionalAuthors": "E.V. Rieu, Peter Jones, D.C.H. Rieu",
    "isbn": "9780140449112",
    "genres": [
      "Epic poetry",
      "Classics",
      "Mythology"
    ],
    "themes": [
      "Homecoming",
      "Hospitality",
      "Cunning vs. force",
      "Fidelity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140449112-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "The Old Man and The Sea",
    "author": "Ernest Hemingway",
    "isbn": "9780684801223",
    "genres": [
      "Literary fiction",
      "Classics",
      "Novella"
    ],
    "themes": [
      "Endurance",
      "The marlin",
      "Solitary struggle",
      "Dignity in defeat"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780684801223-L.jpg?default=false",
    "publicationYear": 1980
  },
  {
    "title": "The Only Harmless Great Thing",
    "author": "Brooke Bolander",
    "isbn": "9781250169488",
    "genres": [
      "Science fiction",
      "Novella",
      "Alternate history"
    ],
    "themes": [
      "The Radium Girls",
      "Topsy the elephant",
      "Industrial injustice",
      "Interspecies grief"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250169488-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "The Orphan Master’s Son",
    "author": "Adam Johnson",
    "isbn": "9780812982626",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "North Korea",
      "Identity and the state",
      "Propaganda",
      "Survival under tyranny"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812982626-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "The Overstory",
    "author": "Richard Powers",
    "isbn": "9780393356687",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Trees and human lives",
      "Eco-activism",
      "Deep time",
      "Interconnection"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780393356687-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "The Paper Menagerie and Other Stories",
    "author": "Ken Liu",
    "isbn": "9781481424363",
    "genres": [
      "Science fiction",
      "Fantasy",
      "Short stories"
    ],
    "themes": [
      "Chinese diaspora",
      "Memory and translation",
      "Speculative tenderness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781481424363-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Paradiso (The Divine Comedy, #3)",
    "author": "Dante Alighieri",
    "additionalAuthors": "John Ciardi",
    "isbn": "9780451627001",
    "genres": [
      "Epic poetry",
      "Classics",
      "Christian literature"
    ],
    "themes": [
      "Ascent through the heavens",
      "Beatific vision",
      "Love that moves the stars"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451627001-L.jpg?default=false",
    "publicationYear": 1961
  },
  {
    "title": "The Pentagram Papers",
    "author": "Pentagram",
    "additionalAuthors": "Delphine Hirasuna",
    "isbn": "9780811855631",
    "genres": [
      "Design",
      "Reference",
      "Essays"
    ],
    "themes": [
      "Design ephemera",
      "Visual curiosities",
      "Studio culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811855631-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "The People in the Castle",
    "author": "Joan Aiken",
    "isbn": "9781618731449",
    "genres": [
      "Fantasy",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Folkloric strangeness",
      "Quiet enchantment",
      "English countryside"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781618731449-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "The Perennial Philosophy",
    "author": "Aldous Huxley",
    "isbn": "9780061724947",
    "genres": [
      "Philosophy",
      "Religion",
      "Mysticism"
    ],
    "themes": [
      "Mystical experience",
      "Unity across traditions",
      "The divine ground"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780061724947-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "additionalAuthors": "Jeffrey Eugenides",
    "isbn": "9780375751516",
    "genres": [
      "Classics",
      "Literary fiction",
      "Gothic"
    ],
    "themes": [
      "Vanity",
      "The hidden self",
      "Aestheticism",
      "Moral corruption"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375751516-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "The Pilgrim’s Regress",
    "author": "C.S. Lewis",
    "additionalAuthors": "Michael Hague",
    "isbn": "9780802806413",
    "genres": [
      "Allegory",
      "Christian literature",
      "Fiction"
    ],
    "themes": [
      "Spiritual journey",
      "Modern intellectual movements",
      "Conversion"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780802806413-L.jpg?default=false",
    "publicationYear": 1992
  },
  {
    "title": "The Plot Against America",
    "author": "Philip Roth",
    "isbn": "9781400079490",
    "genres": [
      "Literary fiction",
      "Alternate history"
    ],
    "themes": [
      "American fascism",
      "Childhood under threat",
      "Jewish identity",
      "The fragility of democracy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400079490-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "The Power of Babel: A Natural History of Language",
    "author": "John McWhorter",
    "isbn": "9780060520854",
    "genres": [
      "Nonfiction",
      "Linguistics"
    ],
    "themes": [
      "Language evolution",
      "Why languages multiply",
      "Death and survival of tongues"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060520854-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "The Presidency of George Washington (American Presidency)",
    "author": "Forrest McDonald",
    "isbn": "9780393007732",
    "genres": [
      "Biography",
      "History",
      "Politics"
    ],
    "themes": [
      "The early republic",
      "Executive precedent",
      "Founding-era statesmanship"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780393007732-L.jpg?default=false",
    "publicationYear": 1975
  },
  {
    "title": "The Princess and the Goblin",
    "author": "George MacDonald",
    "isbn": "9781516936717",
    "genres": [
      "Fantasy",
      "Classics",
      "Children’s literature"
    ],
    "themes": [
      "Goblins beneath the mountain",
      "Faith and courage",
      "The unseen thread"
    ]
  },
  {
    "title": "The Purgatorio (The Divine Comedy, #2)",
    "author": "Dante Alighieri",
    "additionalAuthors": "John Ciardi",
    "isbn": "9780451627148",
    "genres": [
      "Epic poetry",
      "Classics",
      "Christian literature"
    ],
    "themes": [
      "Repentance",
      "Climbing the mountain",
      "Purification",
      "Hope"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451627148-L.jpg?default=false",
    "publicationYear": 1961
  },
  {
    "title": "The Republic",
    "author": "Plato",
    "additionalAuthors": "Desmond Lee",
    "isbn": "9780140449143",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Justice",
      "The ideal city",
      "The philosopher-king",
      "The allegory of the cave"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140449143-L.jpg?default=false",
    "publicationYear": 1963
  },
  {
    "title": "The Return of the King (The Lord of the Rings, #3)",
    "author": "J.R.R. Tolkien",
    "isbn": "9780345339737",
    "genres": [
      "High fantasy",
      "Classics",
      "Epic"
    ],
    "themes": [
      "Sacrifice",
      "Kingship",
      "Endings and grief",
      "Restoration"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345339737-L.jpg?default=false",
    "publicationYear": 1967
  },
  {
    "title": "The Rings of Saturn",
    "author": "W.G. Sebald",
    "additionalAuthors": "Michael Hulse",
    "isbn": "9780811226158",
    "genres": [
      "Literary fiction",
      "Memoir",
      "Travel writing"
    ],
    "themes": [
      "Memory",
      "Decay",
      "History’s hidden violence",
      "Melancholy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780811226158-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Road",
    "author": "Cormac McCarthy",
    "isbn": "9780307387899",
    "genres": [
      "Literary fiction",
      "Post-apocalyptic"
    ],
    "themes": [
      "Father and son",
      "Survival",
      "Carrying the fire",
      "Love at the end of the world"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780307387899-L.jpg?default=false",
    "publicationYear": 2007
  },
  {
    "title": "The Robots of Dawn (Robot #3)",
    "author": "Isaac Asimov",
    "isbn": "9780553299496",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "The Three Laws",
      "Murder on Aurora",
      "Human-robot ethics",
      "Spacer culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553299496-L.jpg?default=false",
    "publicationYear": 1994
  },
  {
    "title": "The Sarah Book",
    "author": "Scott McClanahan",
    "isbn": "9780988518391",
    "genres": [
      "Literary fiction",
      "Autobiographical fiction"
    ],
    "themes": [
      "Divorce",
      "West Virginia",
      "Wreckage of marriage",
      "Tender despair"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780988518391-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "The Screwtape Letters",
    "author": "C.S. Lewis",
    "isbn": "9781557481429",
    "genres": [
      "Christian literature",
      "Fiction",
      "Satire"
    ],
    "themes": [
      "Temptation",
      "Spiritual warfare",
      "Self-knowledge",
      "Inverted theology"
    ],
    "publicationYear": 1962
  },
  {
    "title": "The Secret Lives of Colour",
    "author": "Kassia St. Clair",
    "isbn": "9780143131144",
    "genres": [
      "Design",
      "History",
      "Nonfiction"
    ],
    "themes": [
      "Pigment history",
      "Material culture",
      "Color as story"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143131144-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "The Secret of Father Brown",
    "author": "G.K. Chesterton",
    "isbn": "9780140038071",
    "genres": [
      "Mystery",
      "Short stories",
      "Classics"
    ],
    "themes": [
      "Moral detection",
      "Empathy as method",
      "Sin and humanity"
    ],
    "publicationYear": 1974
  },
  {
    "title": "The Seep",
    "author": "Chana Porter",
    "isbn": "9781641292153",
    "genres": [
      "Science fiction",
      "Literary fiction"
    ],
    "themes": [
      "A gentle alien invasion",
      "Utopia and grief",
      "Transformation and loss"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781641292153-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Sellout",
    "author": "Paul Beatty",
    "isbn": "9781250083258",
    "genres": [
      "Literary fiction",
      "Satire"
    ],
    "themes": [
      "Race in America",
      "Segregation revisited",
      "Comic provocation",
      "Los Angeles"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250083258-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Seventy Wonders of the Ancient World",
    "author": "Edited by Chris Scarre",
    "isbn": "9780500297070",
    "genres": [
      "Nonfiction",
      "History",
      "Reference"
    ],
    "themes": [
      "Ancient engineering",
      "Lost monuments",
      "Archaeology of wonder"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780500297070.jpg",
    "publicationYear": 2023
  },
  {
    "title": "The Silence",
    "author": "Don DeLillo",
    "isbn": "9781982164553",
    "genres": [
      "Literary fiction",
      "Novella"
    ],
    "themes": [
      "Technology shutting down",
      "Super Bowl Sunday",
      "Late-DeLillo minimalism",
      "What we say when screens go dark"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781982164553-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Silmarillion",
    "author": "J.R.R. Tolkien",
    "additionalAuthors": "Christopher Tolkien",
    "isbn": "9780618126989",
    "genres": [
      "High fantasy",
      "Mythology",
      "Classics"
    ],
    "themes": [
      "Creation myth",
      "Pride and the fall",
      "Sub-creation",
      "Elder days"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780618126989-L.jpg?default=false",
    "publicationYear": 1984
  },
  {
    "title": "The Singer",
    "author": "Calvin Miller",
    "isbn": "9780877846390",
    "genres": [
      "Christian literature",
      "Allegory",
      "Poetry"
    ],
    "themes": [
      "Christ as the Singer",
      "Allegorical retelling",
      "Sacrificial love"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780877846390-L.jpg?default=false",
    "publicationYear": 1975
  },
  {
    "title": "The Sisters Brothers",
    "author": "Patrick deWitt",
    "isbn": "9780062041289",
    "genres": [
      "Literary fiction",
      "Western",
      "Dark comedy"
    ],
    "themes": [
      "Brotherhood",
      "Violence and morality",
      "The picaresque West"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062041289-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "The Solid Form of Language: An Essay on Writing and Meaning",
    "author": "Robert Bringhurst",
    "isbn": "9781894031882",
    "genres": [
      "Design",
      "Philosophy",
      "Linguistics"
    ],
    "themes": [
      "Writing systems",
      "Language as form",
      "The materiality of text"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781894031882-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "additionalAuthors": "Grover Gardner",
    "isbn": "9780739325353",
    "genres": [
      "Literary fiction",
      "Classics",
      "Southern Gothic"
    ],
    "themes": [
      "Decline of a family",
      "Time and memory",
      "The lost South",
      "Consciousness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780739325353-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "The Staircase in the Woods",
    "author": "Chuck Wendig",
    "isbn": "9780593156582",
    "genres": [
      "Horror",
      "Literary fiction"
    ],
    "themes": [
      "A staircase in nowhere",
      "Old friends reunited",
      "What waits at the top",
      "Adolescent loss revisited"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780593156582.jpg"
  },
  {
    "title": "The Story of Language",
    "author": "C. L. Barber",
    "isbn": "9780330330480",
    "genres": [
      "Nonfiction",
      "Linguistics"
    ],
    "themes": [
      "History of English",
      "Language change",
      "How languages grow"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780330330480-L.jpg?default=false",
    "publicationYear": 1972
  },
  {
    "title": "The Story of Philosophy: The Lives and Opinions of the World’s Greatest Philosophers",
    "author": "Will Durant",
    "isbn": "9780671739164",
    "genres": [
      "Philosophy",
      "Biography",
      "History"
    ],
    "themes": [
      "The Western canon",
      "Lives behind ideas",
      "Popular philosophy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780671739164-L.jpg?default=false",
    "publicationYear": 1991
  },
  {
    "title": "The Strange Bird: A Borne Story",
    "author": "Jeff VanderMeer",
    "isbn": "9780374537920",
    "genres": [
      "Science fiction",
      "Weird fiction",
      "Novella"
    ],
    "themes": [
      "Engineered creature",
      "Captivity and flight",
      "Posthuman wilderness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374537920-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "The Stranger",
    "author": "Albert Camus",
    "additionalAuthors": "Matthew    Ward",
    "isbn": "9780679720201",
    "genres": [
      "Literary fiction",
      "Classics",
      "Existentialism"
    ],
    "themes": [
      "The absurd",
      "Detachment",
      "Algerian sun",
      "Moral indifference"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679720201-L.jpg?default=false",
    "publicationYear": 1998
  },
  {
    "title": "The Stranger from Paradise: A Biography of William Blake",
    "author": "G. E. Bentley Jr.",
    "isbn": "9780300100303",
    "genres": [
      "Biography",
      "Art history"
    ],
    "themes": [
      "Blake’s visions",
      "Engraver and poet",
      "Romantic-era London"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780300100303-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "The Strategic Designer: Tools  Techniques for Managing the Design Process",
    "author": "David Holston",
    "isbn": "9781600617997",
    "genres": [
      "Design",
      "Philosophy",
      "Business"
    ],
    "themes": [
      "Design process",
      "Strategy",
      "Client management"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781600617997-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "The System of Objects",
    "author": "Jean Baudrillard",
    "additionalAuthors": "James Benedict",
    "isbn": "9781788738545",
    "genres": [
      "Philosophy",
      "Cultural criticism"
    ],
    "themes": [
      "Objects as signs",
      "Consumer culture",
      "Domestic semiotics"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781788738545.jpg",
    "publicationYear": 2020
  },
  {
    "title": "The Taiga Syndrome",
    "author": "Cristina Rivera Garza",
    "additionalAuthors": "Suzanne Jill Levine, Aviva Kana",
    "isbn": "9780997366679",
    "genres": [
      "Literary fiction",
      "Mystery"
    ],
    "themes": [
      "Detective at the forest’s edge",
      "Fairy tales in noir",
      "Estranged language"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780997366679.jpg",
    "publicationYear": 2018
  },
  {
    "title": "The Terraformers",
    "author": "Annalee Newitz",
    "isbn": "9781250228017",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Terraforming over centuries",
      "Sentient animals and trains",
      "Corporate ecology",
      "Solarpunk politics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250228017-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "The Thing on the Doorstep and Other Weird Stories",
    "author": "H.P. Lovecraft",
    "additionalAuthors": "S.T. Joshi",
    "isbn": "9780142180037",
    "genres": [
      "Weird fiction",
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Cosmic indifference",
      "Forbidden knowledge",
      "New England decay"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780142180037-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "The Thousand Autumns of Jacob de Zoet",
    "author": "David Mitchell",
    "isbn": "9780812976366",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Dutch trading post in Nagasaki",
      "Cross-cultural love",
      "End-of-Edo Japan"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812976366-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "The Traveler, the Tower, and the Worm: The Reader as Metaphor",
    "author": "Alberto Manguel",
    "isbn": "9780812245233",
    "genres": [
      "Philosophy",
      "Nonfiction",
      "Essays"
    ],
    "themes": [
      "Reading as journey",
      "Reader as tower-dweller",
      "Reader as worm",
      "The act of reading"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812245233-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "The Tsar of Love and Techno: Stories",
    "author": "Anthony Marra",
    "isbn": "9780770436452",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Russian and Chechen lives",
      "Memory and art",
      "Interconnected fates",
      "The Soviet aftermath"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780770436452-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Tusks of Extinction",
    "author": "Ray Nayler",
    "isbn": "9781250855527",
    "genres": [
      "Science fiction",
      "Novella"
    ],
    "themes": [
      "Resurrected mammoths",
      "Poaching and conservation",
      "Mind uploaded into beast"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250855527.jpg",
    "publicationYear": 2024
  },
  {
    "title": "The Twilight of Western Thought",
    "author": "Herman Dooyeweerd",
    "isbn": "9780888152176",
    "genres": [
      "Philosophy",
      "Theology",
      "Christian literature"
    ],
    "themes": [
      "Reformational philosophy",
      "Critique of secular reason",
      "Christian worldview"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780888152176-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "The Two Towers (The Lord of the Rings, #2)",
    "author": "J.R.R. Tolkien",
    "isbn": "9780345339713",
    "genres": [
      "High fantasy",
      "Classics",
      "Epic"
    ],
    "themes": [
      "Loyalty",
      "Courage in despair",
      "Corruption",
      "Small acts of mercy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345339713-L.jpg?default=false",
    "publicationYear": 1999
  },
  {
    "title": "The Unreality of Memory",
    "author": "Elisa Gabbert",
    "isbn": "9780374538347",
    "genres": [
      "Essays",
      "Nonfiction"
    ],
    "themes": [
      "Disaster cognition",
      "Pandemic prefiguration",
      "Attention and dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374538347-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "The Vorrh (The Vorrh Trilogy, #1)",
    "author": "Brian Catling",
    "isbn": "9781101873786",
    "genres": [
      "Weird fiction",
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "The mythic forest",
      "Colonialism",
      "Mystery at world’s edge",
      "Hallucinatory geography"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781101873786-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "The Wanderer",
    "author": "Timothy J. Jarvis",
    "isbn": "9781782790693",
    "genres": [
      "Weird fiction",
      "Horror"
    ],
    "themes": [
      "Found manuscripts",
      "Cosmic dread",
      "London and the supernatural"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781782790693-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "The Warren",
    "author": "Brian Evenson",
    "isbn": "9780765393159",
    "genres": [
      "Science fiction",
      "Horror",
      "Novella"
    ],
    "themes": [
      "Posthuman isolation",
      "Stored minds",
      "What remains of a person"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780765393159-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Water Dancer",
    "author": "Ta-Nehisi Coates",
    "isbn": "9780399590597",
    "genres": [
      "Literary fiction",
      "Historical fiction",
      "Magical realism"
    ],
    "themes": [
      "Slavery and the Underground",
      "Memory as power",
      "Conduction and water",
      "Black resistance"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780399590597-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "The Water Knife",
    "author": "Paolo Bacigalupi",
    "isbn": "9780804171533",
    "genres": [
      "Science fiction",
      "Thriller"
    ],
    "themes": [
      "Water scarcity",
      "American Southwest in collapse",
      "Corporate power",
      "Climate noir"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780804171533-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "The Wayfinder",
    "author": "Adam Johnson",
    "isbn": "9780374619572",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Navigation across the Pacific",
      "Father and son",
      "Indigenous knowledge",
      "Loss at sea"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780374619572.jpg",
    "publicationYear": 2025
  },
  {
    "title": "The Weight of Glory",
    "author": "C.S. Lewis",
    "isbn": "9780060653200",
    "genres": [
      "Theology",
      "Philosophy",
      "Essays",
      "Christian literature"
    ],
    "themes": [
      "Longing and joy",
      "The eternal weight of glory",
      "Christian vocation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060653200-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "The Wide, Carnivorous Sky and Other Monstrous Geographies",
    "author": "John Langan",
    "isbn": "9781626412835",
    "genres": [
      "Weird fiction",
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Cosmic monsters",
      "Literary horror",
      "Grief and the uncanny"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781626412835-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "The Will to Power",
    "author": "Friedrich Nietzsche",
    "additionalAuthors": "Walter Kaufmann, R.J. Hollingdale",
    "isbn": "9780394704371",
    "genres": [
      "Philosophy",
      "Classics"
    ],
    "themes": [
      "Power",
      "Nihilism",
      "Revaluation of values",
      "The Übermensch"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780394704371-L.jpg?default=false",
    "publicationYear": 1968
  },
  {
    "title": "The Wind-Up Bird Chronicle",
    "author": "Haruki Murakami",
    "isbn": "9780679775430",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "The well",
      "Disappearance and search",
      "Memory of empire",
      "Tokyo suburbs"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780679775430-L.jpg?default=false",
    "publicationYear": 2005
  },
  {
    "title": "The Wood Beyond the World",
    "author": "William Morris",
    "isbn": "9781404340572",
    "genres": [
      "Fantasy",
      "Classics"
    ],
    "themes": [
      "Pre-Tolkien fantasy",
      "Romance quest",
      "Sorceress and the wanderer"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781404340572-L.jpg?default=false",
    "publicationYear": 1994
  },
  {
    "title": "The World Atlas of Coffee",
    "author": "James Hofffmann",
    "isbn": "9780228100942",
    "genres": [
      "Nonfiction",
      "Coffee",
      "Reference"
    ],
    "themes": [
      "Origins and geography",
      "Brewing methods",
      "Specialty coffee culture"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780228100942.jpg",
    "publicationYear": 2018
  },
  {
    "title": "The World of Vermeer: 1632–1675 (Time-Life Library of Art)",
    "author": "Hans Koningsberger",
    "isbn": "9780809402083",
    "genres": [
      "Biography",
      "Art history",
      "Monograph"
    ],
    "themes": [
      "Dutch Golden Age",
      "Domestic interiors",
      "Light and stillness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780809402083-L.jpg?default=false",
    "publicationYear": 1983
  },
  {
    "title": "The Worm Ouroboros",
    "author": "E.R. Eddison",
    "isbn": "9781539542933",
    "genres": [
      "Fantasy",
      "Classics"
    ],
    "themes": [
      "Heroic combat",
      "Mythic geography",
      "Cyclic time",
      "Pre-Tolkien high fantasy"
    ],
    "publicationYear": 2016
  },
  {
    "title": "The Wounds of the Dead",
    "author": "Vikram Paralkar",
    "isbn": "9789352774371",
    "genres": [
      "Literary fiction",
      "Magical realism"
    ],
    "themes": [
      "Rural medicine",
      "The risen dead",
      "Moral compromise",
      "Faith and craft"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/410PnelqycL._SY445_SX342_FMwebp_.jpg",
    "publicationYear": 2017
  },
  {
    "title": "Theft by Finding: Diaries (1977–2002)",
    "author": "David Sedaris",
    "isbn": "9780316154727",
    "genres": [
      "Memoir",
      "Diaries",
      "Humor"
    ],
    "themes": [
      "The mundane",
      "Observation as craft",
      "Becoming a writer",
      "Everyday absurdity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316154727-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Theft by Finding: Diaries 1977–2002",
    "author": "David Sedaris",
    "isbn": "9780316154727",
    "genres": [
      "Memoir",
      "Diaries",
      "Humor"
    ],
    "themes": [
      "The mundane",
      "Observation as craft",
      "Becoming a writer",
      "Everyday absurdity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316154727-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "Thelonious Monk",
    "author": "Robin G. Kelley",
    "isbn": "9781439190463",
    "genres": [
      "Biography",
      "Nonfiction",
      "Music"
    ],
    "themes": [
      "Jazz genius",
      "Bebop and beyond",
      "A musician's life"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781439190463-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "Theory of Colours",
    "author": "Johann Wolfgang von Goethe",
    "isbn": "9780262570213",
    "genres": [
      "Philosophy",
      "Design",
      "Classics"
    ],
    "themes": [
      "Perception of color",
      "Anti-Newtonian optics",
      "Phenomenology of seeing"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780262570213-L.jpg?default=false",
    "publicationYear": 1970
  },
  {
    "title": "Theory of Type Design",
    "author": "Gerard Unger",
    "isbn": "9789462084407",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Type design principles",
      "Readability",
      "The shape of letters"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9789462084407-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "They Flew: A History of the Impossible",
    "author": "Carlos Eire",
    "isbn": "9780300259803",
    "genres": [
      "Nonfiction",
      "History"
    ],
    "themes": [
      "Levitation and bilocation",
      "Early modern miracles",
      "Belief and the impossible"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780300259803.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Things I Have Learned In My Life So Far",
    "author": "Stefan Sagmeister",
    "additionalAuthors": "Daniel Nettle, Nancy Spector, Steven Heller",
    "isbn": "9780810995291",
    "genres": [
      "Design",
      "Memoir",
      "Monograph"
    ],
    "themes": [
      "Personal aphorisms",
      "Design as life practice",
      "Self-knowledge"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780810995291-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "Thinking With Type",
    "author": "Ellen Lupton",
    "isbn": "9781568989693",
    "genres": [
      "Design",
      "Typography",
      "Reference"
    ],
    "themes": [
      "Typographic principles",
      "Reading and form",
      "Hierarchy"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781568989693-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "This is Not a Pipe",
    "author": "Michel Foucault",
    "additionalAuthors": "James Harkness, René Magritte",
    "isbn": "9780520049161",
    "genres": [
      "Philosophy",
      "Art criticism"
    ],
    "themes": [
      "Image and resemblance",
      "Magritte and representation",
      "The treachery of signs"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780520049161-L.jpg?default=false",
    "publicationYear": 1983
  },
  {
    "title": "This Thing Between Us",
    "author": "Gus Moreno",
    "isbn": "9780374539238",
    "genres": [
      "Horror",
      "Literary fiction"
    ],
    "themes": [
      "Grief and a haunted smart speaker",
      "Suburban dread",
      "Marriage after loss"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780374539238-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "This World is Full of Monsters",
    "author": "Jeff VanderMeer",
    "isbn": "9781250165718",
    "genres": [
      "Weird fiction",
      "Novella",
      "Eco-horror"
    ],
    "themes": [
      "Earth invaded by storyworlds",
      "Posthuman drift",
      "Vegetal transformation"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250165718.jpg",
    "publicationYear": 2017
  },
  {
    "title": "Three Shakes Up",
    "author": "Bo Oxley",
    "isbn": "9798581555309",
    "genres": [
      "Literary fiction",
      "Philosophy"
    ],
    "themes": [
      "Independent fiction",
      "Philosophical narrative"
    ],
    "coverUrl": "https://m.media-amazon.com/images/I/81kFOR4yCAL._SY522_.jpg"
  },
  {
    "title": "Thus Were Their Faces: Selected Stories",
    "author": "Silvina Ocampo",
    "additionalAuthors": "Helen Oyeyemi, Jorge Luis Borges, Daniel Balderston",
    "isbn": "9781590177679",
    "genres": [
      "Literary fiction",
      "Short stories",
      "Magical realism"
    ],
    "themes": [
      "Cruel children",
      "Argentine strangeness",
      "Domestic uncanny"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781590177679-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Till We Have Faces: A Myth Retold",
    "author": "C.S. Lewis",
    "additionalAuthors": "Fritz Eichenberg",
    "isbn": "9780756972226",
    "genres": [
      "Literary fiction",
      "Mythology",
      "Christian literature"
    ],
    "themes": [
      "Cupid and Psyche retold",
      "Self-deception",
      "Possessive love",
      "Encountering the divine"
    ],
    "publicationYear": 1980
  },
  {
    "title": "Time Travel: A History",
    "author": "James Gleick",
    "isbn": "9780307908797",
    "genres": [
      "Nonfiction",
      "Science",
      "Cultural history"
    ],
    "themes": [
      "Time as concept",
      "Science fiction’s influence",
      "Memory and futurity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780307908797-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Titus Alone (Gormenghast, #3)",
    "author": "Mervyn Peake",
    "isbn": "9780345730091",
    "genres": [
      "Fantasy",
      "Literary fiction"
    ],
    "themes": [
      "Exile",
      "Modernity vs. heritage",
      "Loss of identity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345730091-L.jpg?default=false",
    "publicationYear": 1968
  },
  {
    "title": "Titus Groan",
    "author": "Mervyn Peake",
    "isbn": "9780345235183",
    "genres": [
      "Fantasy",
      "Literary fiction",
      "Gothic"
    ],
    "themes": [
      "Ritual and lineage",
      "The castle as world",
      "Birth of an heir",
      "Outsider as threat"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345235183-L.jpg?default=false",
    "publicationYear": 1973
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "9780881030525",
    "genres": [
      "Literary fiction",
      "Classics",
      "Coming of age"
    ],
    "themes": [
      "Racial injustice",
      "Moral inheritance",
      "Childhood and conscience",
      "The Jim Crow South"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780881030525-L.jpg?default=false",
    "publicationYear": 1969
  },
  {
    "title": "To Know As We Are Known",
    "author": "Parker Palmer",
    "isbn": "9780060664510",
    "genres": [
      "Philosophy",
      "Nonfiction",
      "Education"
    ],
    "themes": [
      "Education as spiritual journey",
      "Truth and community",
      "Contemplative teaching"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780060664510-L.jpg?default=false",
    "publicationYear": 1983
  },
  {
    "title": "To Rouse Leviathan",
    "author": "Matt Cardin",
    "additionalAuthors": "Mark McLaughlin",
    "isbn": "9781614982708",
    "genres": [
      "Weird fiction",
      "Horror",
      "Short stories"
    ],
    "themes": [
      "Theological horror",
      "Divine indifference",
      "Ligottian dread"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781614982708-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Toad",
    "author": "Katherine Dunn",
    "isbn": "9781250872296",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A reclusive narrator looks back",
      "Late-60s college days",
      "Outsiderhood",
      "Posthumously published"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250872296-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Tokyo Express",
    "author": "Seichō Matsumoto",
    "additionalAuthors": "Jesse Kirkwood",
    "isbn": "9780593979044",
    "genres": [
      "Fiction"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780593979044.jpg",
    "publicationYear": 2025
  },
  {
    "title": "Tokyo Ueno Station",
    "author": "Yu Miri",
    "isbn": "9780593088029",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A homeless ghost",
      "Tokyo's invisible lives",
      "Imperial Japan's shadow",
      "Class and grief"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593088029-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Tolkien: A Look Behind the Lord of the Rings",
    "author": "Lin Carter",
    "isbn": "9780345245205",
    "genres": [
      "Nonfiction",
      "Literary criticism"
    ],
    "themes": [
      "Sources of Middle-earth",
      "Mythic precedents",
      "Early Tolkien scholarship"
    ],
    "publicationYear": 1975
  },
  {
    "title": "Translucid",
    "author": "Claudio Sánchez",
    "additionalAuthors": "Chondra Echert, Daniel Bayliss",
    "isbn": "9781608864973",
    "genres": [
      "Comics",
      "Science fiction"
    ],
    "themes": [
      "Heroes and villains",
      "Identity",
      "Dreams and memory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781608864973-L.jpg?default=false",
    "publicationYear": 2015
  },
  {
    "title": "Tremendous Trifles",
    "author": "G. K. Chesterton",
    "isbn": "9781507864326",
    "genres": [
      "Essays",
      "Nonfiction"
    ],
    "themes": [
      "Wonder in the ordinary",
      "Defending common things",
      "Chesterton’s eye"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781507864326.jpg",
    "publicationYear": 2015
  },
  {
    "title": "Trust",
    "author": "Hernan Diaz",
    "isbn": "9780593420324",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A financier's biography in four versions",
      "Wealth and narrative",
      "Gilded Age and modernism",
      "Whose story counts"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593420324-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Type: A Visual History of Typefaces and Graphic Styles (Volume 1, 1628–1900)",
    "author": "Cees W. de Jong",
    "additionalAuthors": "Alston W. Purvis, Jan Tholenaar",
    "isbn": "9783836511018",
    "genres": [
      "Design",
      "Typography",
      "History"
    ],
    "themes": [
      "Specimen history",
      "Letterpress era",
      "Typographic evolution"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836511018-L.jpg?default=false",
    "publicationYear": 2009
  },
  {
    "title": "Type: A Visual History of Typefaces and Graphic Styles (Volume 2, 1901–1938)",
    "author": "Cees W. de Jong",
    "additionalAuthors": "Alston W. Purvis, Jan Tholenaar",
    "isbn": "9783836515146",
    "genres": [
      "Design",
      "Typography",
      "History"
    ],
    "themes": [
      "Modernist typography",
      "Specimen history",
      "Industrial print culture"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9783836515146-L.jpg?default=false",
    "publicationYear": 2010
  },
  {
    "title": "Under the Sea",
    "author": "Mark Leidner",
    "isbn": "9780991360888",
    "genres": [
      "Literary fiction",
      "Short stories"
    ],
    "themes": [
      "Twin novellas",
      "Late-millennial unease",
      "Compressed lives"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780991360888.jpg",
    "publicationYear": 2018
  },
  {
    "title": "Underland: A Deep Time Journey",
    "author": "Robert Macfarlane",
    "isbn": "9780393358094",
    "genres": [
      "Nonfiction",
      "Nature writing",
      "Travel writing"
    ],
    "themes": [
      "Subterranean worlds",
      "Deep time",
      "Caves and burial",
      "Human traces"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780393358094-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Universal Harvester",
    "author": "John Darnielle",
    "isbn": "9781250159991",
    "genres": [
      "Literary fiction",
      "Mystery"
    ],
    "themes": [
      "Rural Iowa",
      "VHS tapes and dread",
      "Maternal absence",
      "The quietly uncanny"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250159991-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Universal Principles of Branding: 100 Key Concepts for Defining, Building, and Delivering Brands",
    "author": "Mark Kingsley",
    "isbn": "9780760378205",
    "genres": [
      "Design",
      "Business",
      "Reference"
    ],
    "themes": [
      "Brand concepts",
      "Strategic frameworks",
      "Reference for branders"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780760378205.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Universe of the Mind: A Semiotic Theory of Culture",
    "author": "Yuri M. Lotman",
    "isbn": "9780253214058",
    "genres": [
      "Philosophy",
      "Semiotics",
      "Academic"
    ],
    "themes": [
      "Semiosphere",
      "Culture as text",
      "Russian semiotics"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780253214058-L.jpg?default=false",
    "publicationYear": 2001
  },
  {
    "title": "Unlanguage",
    "author": "Michael Cisco",
    "isbn": "9781621052661",
    "genres": [
      "Weird fiction",
      "Literary fiction"
    ],
    "themes": [
      "Language broken open",
      "Reading as estrangement",
      "Experimental form"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781621052661-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Upgrade",
    "author": "Blake Crouch",
    "isbn": "9780593157534",
    "genres": [
      "Science fiction",
      "Thriller"
    ],
    "themes": [
      "Genetic enhancement",
      "Family inheritance",
      "Where progress turns dangerous"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593157534-L.jpg?default=false",
    "publicationYear": 2022
  },
  {
    "title": "Upstream: Selected Essays",
    "author": "Mary Oliver",
    "isbn": "9780143130086",
    "genres": [
      "Essays",
      "Nature writing",
      "Memoir"
    ],
    "themes": [
      "Attention",
      "The natural world",
      "Writers who shaped her",
      "Poetry’s source"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143130086-L.jpg?default=false",
    "publicationYear": 2019
  },
  {
    "title": "Utopia",
    "author": "Thomas More",
    "isbn": "9781784787608",
    "genres": [
      "Classics",
      "Philosophy",
      "Allegory"
    ],
    "themes": [
      "The ideal society",
      "Property and equality",
      "Renaissance political imagination"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781784787608-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "Utopia Avenue",
    "author": "David Mitchell",
    "isbn": "9780812997439",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "A 1960s band",
      "Music and ambition",
      "London scene",
      "Mitchell's connected cosmos"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812997439-L.jpg?default=false",
    "publicationYear": 2020
  },
  {
    "title": "Vigil",
    "author": "George Saunders",
    "isbn": "9780525509622",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "A long watch",
      "Empathy under strain",
      "Saunders' moral imagination"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525509622-L.jpg?default=false",
    "publicationYear": 2026
  },
  {
    "title": "Visual Grammar",
    "author": "Christian Leborg",
    "isbn": "9781568985817",
    "genres": [
      "Design",
      "Reference"
    ],
    "themes": [
      "Visual language",
      "Composition",
      "Design fundamentals"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781568985817-L.jpg?default=false",
    "publicationYear": 2006
  },
  {
    "title": "Wabi-Sabi for Artists, Designers, Poets & Philosophers",
    "author": "Leonard Koren",
    "isbn": "9780981484600",
    "genres": [
      "Design",
      "Philosophy",
      "Aesthetics"
    ],
    "themes": [
      "Imperfection",
      "Impermanence",
      "Japanese aesthetics",
      "Beauty in decay"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780981484600-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "Walden",
    "author": "Henry David Thoreau",
    "isbn": "9780691096124",
    "genres": [
      "Memoir",
      "Classics",
      "Nature writing"
    ],
    "themes": [
      "Simplicity",
      "Solitude",
      "Self-reliance",
      "Living deliberately"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780691096124-L.jpg?default=false",
    "publicationYear": 2004
  },
  {
    "title": "Walking Practice",
    "author": "Dolki Min",
    "isbn": "9780063258617",
    "genres": [
      "Literary fiction",
      "Science fiction"
    ],
    "themes": [
      "A shape-shifting alien",
      "Dating apps as hunt",
      "Body horror and loneliness"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780063258617-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Ward No. 6 and Other Stories",
    "author": "Anton Chekhov",
    "additionalAuthors": "David Plante, Constance Garnett",
    "isbn": "9781593080037",
    "genres": [
      "Literary fiction",
      "Classics",
      "Short stories"
    ],
    "themes": [
      "Provincial decay",
      "Madness and reason",
      "Russian medicine",
      "Quiet despair"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781593080037-L.jpg?default=false",
    "publicationYear": 2003
  },
  {
    "title": "Warrior Girl Unearthed",
    "author": "Angeline Boulley",
    "isbn": "9781250766588",
    "genres": [
      "Fiction"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781250766588-L.jpg?default=false",
    "publicationYear": 2023
  },
  {
    "title": "Washington: The Indispensable Man",
    "author": "James Thomas Flexner",
    "isbn": "9780316286169",
    "genres": [
      "Biography",
      "History"
    ],
    "themes": [
      "Founding-era leadership",
      "Character and command",
      "The first presidency"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316286169-L.jpg?default=false",
    "publicationYear": 1974
  },
  {
    "title": "Wave",
    "author": "Sonali Deraniyagala",
    "isbn": "9780345804310",
    "genres": [
      "Memoir"
    ],
    "themes": [
      "Grief",
      "The 2004 tsunami",
      "Surviving the unsurvivable",
      "Memory"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345804310-L.jpg?default=false",
    "publicationYear": 2013
  },
  {
    "title": "Ways of Seeing",
    "author": "John Berger",
    "isbn": "9780140135152",
    "genres": [
      "Philosophy",
      "Art criticism",
      "Design"
    ],
    "themes": [
      "The reproduced image",
      "The nude and the gaze",
      "Advertising and oil painting",
      "Seeing as ideology"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780140135152-L.jpg?default=false",
    "publicationYear": 1972
  },
  {
    "title": "Welcome as a Way of Life",
    "author": "Benjamin Wall",
    "isbn": "9781498225687",
    "genres": [
      "Theology",
      "Philosophy",
      "Christian literature"
    ],
    "themes": [
      "Hospitality",
      "Vanier and L’Arche",
      "Welcoming the stranger"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781498225687.jpg",
    "publicationYear": 2016
  },
  {
    "title": "What the Heck is EOS?",
    "author": "Gino Wickman",
    "additionalAuthors": "Thomas J. Bouwer",
    "isbn": "9781944648817",
    "genres": [
      "Nonfiction",
      "Business"
    ],
    "themes": [
      "Entrepreneurial operating system",
      "Small-business management",
      "Team accountability"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781944648817-L.jpg?default=false",
    "publicationYear": 2017
  },
  {
    "title": "What’s Best Next: How the Gospel Transforms the Way You Get Things Done",
    "author": "Matt Perman",
    "additionalAuthors": "John Piper",
    "isbn": "9780310494225",
    "genres": [
      "Theology",
      "Productivity",
      "Christian literature"
    ],
    "themes": [
      "Gospel and work",
      "Stewardship of time",
      "Christian productivity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780310494225-L.jpg?default=false",
    "publicationYear": 2014
  },
  {
    "title": "When Breath Becomes Air",
    "author": "Paul Kalanithi",
    "additionalAuthors": "Abraham Verghese",
    "isbn": "9780812988406",
    "genres": [
      "Memoir",
      "Biography"
    ],
    "themes": [
      "Mortality",
      "Medicine and meaning",
      "Vocation",
      "Facing death"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780812988406-L.jpg?default=false",
    "publicationYear": 2016
  },
  {
    "title": "When Trees Testify",
    "author": "Beronda L. Montgomery",
    "isbn": "9781250335166",
    "genres": [
      "Nonfiction",
      "Nature writing",
      "Essays"
    ],
    "themes": [
      "Plants as teachers",
      "Botany and human life",
      "Lessons from trees"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781250335166.jpg"
  },
  {
    "title": "When We Cease to Understand the World",
    "author": "Benjamín Labatut",
    "additionalAuthors": "Adrian Nathan West",
    "isbn": "9781681375663",
    "genres": [
      "Literary fiction",
      "Historical fiction"
    ],
    "themes": [
      "Scientists at the edge",
      "Quantum strangeness",
      "Mathematics and madness",
      "Fact woven with fiction"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781681375663-L.jpg?default=false",
    "publicationYear": 2021
  },
  {
    "title": "When You Are Engulfed in Flames",
    "author": "David Sedaris",
    "isbn": "9780316143479",
    "genres": [
      "Memoir",
      "Essays",
      "Humor"
    ],
    "themes": [
      "Misanthropy and warmth",
      "Quitting smoking",
      "Expat life",
      "Aging into eccentricity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316143479-L.jpg?default=false",
    "publicationYear": 2008
  },
  {
    "title": "Where the Axe is Buried",
    "author": "Ray Nayler",
    "isbn": "9780374615369",
    "genres": [
      "Science fiction"
    ],
    "themes": [
      "Authoritarian futures",
      "AI governance",
      "Resistance and surveillance"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9780374615369.jpg"
  },
  {
    "title": "White Noise",
    "author": "Don DeLillo",
    "isbn": "9780143129554",
    "genres": [
      "Literary fiction",
      "Classics",
      "Satire"
    ],
    "themes": [
      "Fear of death",
      "Consumer culture",
      "Toxic event",
      "Family in the supermarket age"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780143129554-L.jpg?default=false",
    "publicationYear": 1985
  },
  {
    "title": "White Tears",
    "author": "Hari Kunzru",
    "isbn": "9781101973219",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Race and music",
      "Cultural appropriation",
      "Haunting",
      "Authenticity"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781101973219-L.jpg?default=false",
    "publicationYear": 2018
  },
  {
    "title": "Wild at Heart: Discovering the Secret of a Man’s Soul",
    "author": "John Eldredge",
    "isbn": "9781400200399",
    "genres": [
      "Nonfiction",
      "Christian literature"
    ],
    "themes": [
      "Masculine identity",
      "Adventure and faith",
      "Spiritual formation"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400200399-L.jpg?default=false",
    "publicationYear": 2011
  },
  {
    "title": "Witches",
    "author": "Brenda Lozano",
    "additionalAuthors": "Heather Cleary",
    "isbn": "9781646221998",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Curandera tradition",
      "Two women's lives intersecting",
      "Mexican rural healing",
      "Language and lineage"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781646221998.jpg",
    "publicationYear": 2023
  },
  {
    "title": "Wolf in White Van",
    "author": "John Darnielle",
    "isbn": "9781250081223",
    "genres": [
      "Literary fiction"
    ],
    "themes": [
      "Disfigurement and isolation",
      "Play-by-mail games",
      "Cause and consequence",
      "Inner worlds"
    ]
  },
  {
    "title": "Wonder",
    "author": "R.J. Palacio",
    "isbn": "9780375869020",
    "genres": [
      "Children’s literature",
      "Coming of age"
    ],
    "themes": [
      "Kindness",
      "Difference",
      "School and belonging",
      "Family"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375869020-L.jpg?default=false",
    "publicationYear": 2012
  },
  {
    "title": "Works of Charles Sanders Peirce",
    "author": "Charles Sanders Peirce",
    "genres": [
      "Philosophy"
    ]
  },
  {
    "title": "Writings on Media: History of the Present",
    "author": "Stuart Hall",
    "additionalAuthors": "Charlotte Brunsdon",
    "isbn": "9781478014713",
    "genres": [
      "Nonfiction",
      "Philosophy",
      "Media theory"
    ],
    "themes": [
      "Cultural studies",
      "Media and ideology",
      "Race, identity, representation"
    ],
    "coverUrl": "https://images-us.bookshop.org/ingram/9781478014713.jpg",
    "publicationYear": 2021
  },
  {
    "title": "Zen and the Art of Motorcycle Maintenance",
    "author": "Robert M. Pirsig",
    "isbn": "9780553277470",
    "genres": [
      "Philosophy",
      "Autobiographical fiction"
    ],
    "themes": [
      "Quality",
      "The romantic vs. the classical",
      "Sanity and breakdown",
      "Father and son"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553277470-L.jpg?default=false",
    "publicationYear": 2000
  },
  {
    "title": "Zero K",
    "author": "Don DeLillo",
    "isbn": "9781501135392",
    "genres": [
      "Literary fiction",
      "Speculative fiction"
    ],
    "themes": [
      "Cryonics and immortality",
      "Father and son",
      "Faith in technology",
      "Endings"
    ],
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781501135392-L.jpg?default=false",
    "publicationYear": 2016
  }
];
