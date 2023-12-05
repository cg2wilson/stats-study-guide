var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  This work includes materials used under license from the following works:   OpenIntro Statistics, 4\/e by Dietz     "
},
{
  "id": "statistics-terminology",
  "level": "1",
  "url": "statistics-terminology.html",
  "type": "Section",
  "number": "1.1",
  "title": "Statistics Terminology",
  "body": " Statistics Terminology   This section corresponds to Section 1.2 in Dietz    Population  Population   A population is a collection of individuals (not necessarily people) that share one or more common characteristics. In statistics this is the entire group of individuals for which information is being gathered or studied. Information that describes the population is called descriptive statistics.     Individual  Individual   An individual is a member of a particular population     Sample  Sample   A sample is a subset of the population. In statistics, it is often not feasible or desirable to gather information about the whole population so information is gathered on part of the population being studied. Inferential Statistics is when the information gathered about the sample is used to say something about the entire population.     Variable  Variable   A variable is a quantity or quality of the population that varies among individuals. A variable can be either quantitative or qualitative (categorical). A quantitative variable can be measured and can often be used in the calculation of an average. Quantitative variables have numerical values. Categorical variables are often a verbal description of the population but they can sometimes be numerical if they are used to categorize individuals in the population. Examples of this are zip codes, phone numbers, and instances when numbers are substituted for a particular quality such as letting 0 represent Males and 1 Females.     Parameter  Parameter   A parameter is a value found by looking at the entire population. Information you see about small populations is often parameters because it is not too hard to gather information about each individual in the population.     (Parameter)   10% of US Senators voted for a particular measure. There are only 100 US Senators, you can count how every single one of them voted.     (Parameter)   40% of 1,211 students at a particular elementary school got below a 3 on a standardized test. You know this because you have each and every student's test score.    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "statistics-terminology.html#remark-1",
  "type": "Remark",
  "number": "1.1.1",
  "title": "",
  "body": " This section corresponds to Section 1.2 in Dietz  "
},
{
  "id": "def-population",
  "level": "2",
  "url": "statistics-terminology.html#def-population",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Population.",
  "body": " Population  Population   A population is a collection of individuals (not necessarily people) that share one or more common characteristics. In statistics this is the entire group of individuals for which information is being gathered or studied. Information that describes the population is called descriptive statistics.   "
},
{
  "id": "def-individual",
  "level": "2",
  "url": "statistics-terminology.html#def-individual",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Individual.",
  "body": " Individual  Individual   An individual is a member of a particular population   "
},
{
  "id": "def-sample",
  "level": "2",
  "url": "statistics-terminology.html#def-sample",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Sample.",
  "body": " Sample  Sample   A sample is a subset of the population. In statistics, it is often not feasible or desirable to gather information about the whole population so information is gathered on part of the population being studied. Inferential Statistics is when the information gathered about the sample is used to say something about the entire population.   "
},
{
  "id": "def-variable",
  "level": "2",
  "url": "statistics-terminology.html#def-variable",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Variable.",
  "body": " Variable  Variable   A variable is a quantity or quality of the population that varies among individuals. A variable can be either quantitative or qualitative (categorical). A quantitative variable can be measured and can often be used in the calculation of an average. Quantitative variables have numerical values. Categorical variables are often a verbal description of the population but they can sometimes be numerical if they are used to categorize individuals in the population. Examples of this are zip codes, phone numbers, and instances when numbers are substituted for a particular quality such as letting 0 represent Males and 1 Females.   "
},
{
  "id": "def-parameter",
  "level": "2",
  "url": "statistics-terminology.html#def-parameter",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Parameter.",
  "body": " Parameter  Parameter   A parameter is a value found by looking at the entire population. Information you see about small populations is often parameters because it is not too hard to gather information about each individual in the population.   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "statistics-terminology.html#example-1",
  "type": "Example",
  "number": "1.1.7",
  "title": "(Parameter).",
  "body": " (Parameter)   10% of US Senators voted for a particular measure. There are only 100 US Senators, you can count how every single one of them voted.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "statistics-terminology.html#example-2",
  "type": "Example",
  "number": "1.1.8",
  "title": "(Parameter).",
  "body": " (Parameter)   40% of 1,211 students at a particular elementary school got below a 3 on a standardized test. You know this because you have each and every student's test score.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
