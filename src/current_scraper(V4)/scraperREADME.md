# Python Course Data Scraper Readme
Just inserting a readme into this folder to explain what it is and why its here, as well as answer any potential questions.
There is also a changelog of these files at the bottom. 


# What is this?
This is a scraper script that pulls course data from UD Course Search 


# Why do this?
The idea of this is to use accurate and real UD course data available online to show off the capabilities and potential of our site


# How is this folder layed out?
This folder contains the most updated script and data at the top level. There is an archive folder with 
versions of each scraper script and one or more of the files it produced 


# What is the scraper written in?
The scraper is written in the language Python 3.9. The code is block commented out so that it plays nice with the linter and IDE


# Why does this not use the same language and systems as the rest of the code?
This is for a couple reasons. 
 -  One, Python is very good at handling large data sets. 
 -  Two, Python is good for making web scrapers and also has a lot of useful frameworks and utilities for these scrapers. 
 -  Three, Python is a backend language, and can more easily create and edit files than whats allowed with the limitations of
        JavaScript, TypeScript, and React.


# How is this data used?
This data is being formatted in a way to be able to be almost directly plugged into our prewritten course database 
code. It means that our website could potentially be updated each semester with the courses being added and removed.


# Why use CSV files to store the data from the scraper?
The benefit of using CSV files is based on a couple reasons. 
 -  First, it is easy to push the data to and edit. 
 -  Second, it makes it easier to debug as it's simple to read each category under the header.
 -  Third, it is a fast and simple file format which is crucial for large amounts of data

# Why not use use a JSON file when the website uses JSON to take in the course information?
The CSV data is evenually converted into a JSON file for use with the live site. The 


# Recommend to get an extension to read CSV files if you want to look them over
A small extension makes it much easier to read the data in the CSV files while using VSCode. Personally, I used CSVLint
which color codes the data each category, as well as the corresponding header text.


# Why this folder in this format
This took a lot of time and effort in the last week to get our accurate course data feature running. I wanted to make 
sure that the work and effort beind this feature was apperent. It could not have been written in VSCode and pushed to the
same github repository. 


# Why wasn't this code written in VSCode?
There are VSCode extensions that allow you to code in python. I tried using a couple but then decided against it for few
of reasons. 
 -  One, I was struggling to make the extension work properly with the linter
 -  Two, I did not want to make the rest of my team spend time on installing and getting the extension to work properly
 -  Three, I was having issues with version discrepensies of the python interpreter and module installation. It seemed
        not worth it to try and resolve these issues when the other two points above were already concerns


# Where is the git history for these changes?
The code does not have a git history for the individual changes in this repository, only the big ones when files are added or
removed. This is due to the code being written in a seperate IDE for the reasons stated above in other questions. Again, this
took a lot of time and effort so I still wanted these changes to be seen and noted. As a less ideal replacement, I included a 
section directly below this that shows the features of each version and a Change Log

# History, Features, Problems, and Pseudo-Changelog
### V0: 
This version did not run and is not shown in the archive folder. This was a testing file to see if I could properly scrape
course data from the UD Course Search site here: https://udapps.nss.udel.edu/CoursesSearch/ . I was worried about a few things.
  -  1: Potentially needing to log in to access the data with my UD account. Luckily, the course information was not behind a log in page
  -  2: Making sure that UD's website policy did not state that a scraper is not allowed. I couldn't find anything on their site
        that prohibited this
This version mostly just went through the html tags on the link provided above and got the course information for the first course


### V1:
Now that I figured out that it would be possible to scrape the courses from the website, I had a couple of problems to solve:
 -  1: I needed to make the V0 single course scrape more accurate and iteratable. In the V0 state, it could only get the course information
        for the manually entered Course ID and it was not always accurate.
Once it acurrately got all of the course info off of one page of the website, I found a second problem:
 -  2: I needed to figure out how to get data off the next webpage. Each page only shows a limited amount of courses.
        The issue was that the next webpage's URL was based on the first course on that second page. The scraper didn't have access to the correct course data without me manually clicking on the button. 
I solved it by finding the <a> html element for the "next page" button and turned it into a string. I trimmed the data and used the href='' to get the next URL. I looped it and it successfully went through every page.

I collected the following and turned them into a raw CSV file for each semester in the format shown below:
 -  [Class ID, Class Type, Class Title, Campus, Credits, Days, Time, Date, Instructor]


### V2:
V2 had a few important problems. 
 -  1: One of my team members pointed out that the data was missing prereq requirements. This is important for some core functionality
        of our site. 
 -  2: The code was a little messy and disorganized. The first page of courses was in a different section than the loop for every other
        page of courses.
 -  3: The code was not layed out in a way that would properly handle the section of the website that had the Prereq courses listed.
        This section was problematic for two reasons. First, this prereq data was not on the main course page. It was on a different link
        that had to be clicked for each course. Second, the data was not in its own section. It was in a section that was in the middle of a paragraph of text. This make the data unpredictable and hard to work with. A lot of errors that were unique to specific classes came up. 
I'm not even sure if this file would run at all now, and it definetly would not run correctly. Integrating prereqs was extremely problematic. I've included a file with this .py script to show what a semi-complete CSV file printed out would show. The data for every section besides the prereqs was mostly accurate, but the prereqs data itself was far from it. I began restructing the code to fix the loop problem (number 2 above) and tried to account for as many of the prereq data handling issues that I could. 


### V3:
V3 was very similar to V2 with a lot of the same problems, but I realized another issue with the prereqs.
 -  1: The prereq data was in list format [coursePrereq1, coursePrereq2]. The problem is that our JSON data uses key value pairs to show
        if the course is added to the semester and if the prereq requirements for it are filled. {coursePrereq1 : "false", 
        coursePrereq2 : "false"}. 
 -  2: Another issue with the list format is that some courses have conditional values. Like a course could have its prereqs met by
        courseA OR courseB
 -  3: Due to the prereqs section being added on after without thought put into the intial layout of the script, I realized it had a
        huge problem. For every time the page looped, it called the prereqs checking function 50 times (the number of courses on a page). This meant that for each page of 50 courses, the prereqs were checked for 2500 courses. This was multiplied by about 45 times more to account for each page of the 50 courses that this was run to scrape through per semester. So much data was being lost or handled incorrectly that it did not make much sense to try and even reformat this code at this point. I could not figure out a way to structure it in this state to not run into this problem or other large and difficult ones.  
We decided it would be easier to have this data passed correctly from the script rather than trying to convert it in TypeScript afterwards
Because of that, and the huge inefficency/ data loss problem, and the other problems from V2 and V3 that were mostly unresolved and stacking up, so I decided to do a near full rewrite of the code with the new information I had learned. The code was just too messy and did not have the date scrubbed and checked for data errors enough. 

Also of note, if you look in the CSV files in the V2 and V3 folders, you will see the course format switch from lists[] to dictionaries{:}


### V4: 
in V4, I kept the base design of a few functions and structures. The entire prereqs section is rewritten and redesigned to be integrated
with the rest of the course scraping. 





 
 
