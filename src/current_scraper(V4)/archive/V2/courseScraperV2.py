'''
import requests
from bs4 import BeautifulSoup
import csv
import time


def getCourseInfo(passDoc, passCourseLog):
    index = 0
    iterativeClassInfo = []
    
    numCourses = len(list(passDoc.find_all('tr'))) - 1 
#     numCourses = 25;
#     index=22
    while(index < numCourses):
        classInfo = []
        currentCourse = passCourseLog[index]
        #Class ID
        classInfo.insert(0, currentCourse.find(class_='coursenum').get_text().strip().split('\n')[0])
        
        #Class Type
        classInfo.insert(1, currentCourse.find(class_='coursetype').get_text().strip().split('\n')[0])
        
        #Class Title
        classInfo.insert(2, currentCourse.find_all('td')[1].get_text().strip().split('\n')[0])
        
        #Campus
        classInfo.insert(3, currentCourse.find(class_='campus').get_text().strip().split('\n')[0])
        
        #Credits
        classInfo.insert(4, currentCourse.find_all('td')[4].get_text().strip().split('\n')[0])
        
        #Days
        classInfo.insert(5, currentCourse.find(class_='day').get_text().strip().split('\n')[0])
        
        #Time
        classInfo.insert(6, currentCourse.find(class_='time').get_text().strip().split('\n')[0])
        
        #Date
        classInfo.insert(7, currentCourse.find(class_='mtgdate').get_text().strip().split('\n')[0])
        
        #Instructor
        classInfo.insert(9, currentCourse.find_all('td')[9].get_text().strip().split('\n')[0].split(';')[0])
        
        #PreReqs
        
        returnPrereqs = prereqCheck(passDoc,currentCourse)
        classInfo.insert(10, returnPrereqs)
        
        iterativeClassInfo.insert(index, classInfo)
        index+=1
        
    ####printiterativeClassInfo)
    ####print'list length:', len(iterativeClassInfo))
    return iterativeClassInfo


def writeClassToCSV(fileNameToSave, passDoc, passCourseLog):
    
    courseInfo = getCourseInfo(passDoc, passCourseLog)
    
    with open(fileNameToSave, 'a', encoding='UTF8', newline='') as csvfile2:
        writer2 = csv.writer(csvfile2)
    
        writer2.writerows(courseInfo)


      


def prereqCheck(pageDoc, currentCourse):
    
    index = 0
    doc = pageDoc
    prereqsFinal=[]
    #gets prereqLink
    
    prereqLink = str(currentCourse.find(class_='coursenum'))
    
    ##print(prereqLink)
    
    prereqLink = prereqLink[27:111].replace(';','').replace('amp','').replace("'",'').replace('§','&sect').replace('"','').replace('>','')
    prereqLink = 'https://udapps.nss.udel.edu/CoursesSearch/' + prereqLink
    ##print(prereqLink)


       
    prereqPage = requests.get(prereqLink)
    prereqDoc = BeautifulSoup(prereqPage.content, 'html.parser')
    prereqSearch = list(prereqDoc.findAll('p'))
    prereqSearchString = str(prereqSearch[1])
    ###print(prereqSearchString)
    
    if 'PREREQ:' in prereqSearchString:            
        indexNum = prereqSearchString.index('PREREQ:')
        
        
        
        trimmedPrereqString = prereqSearchString[indexNum:]

        ###print'trimmedPrereqString: ',trimmedPrereqString,'\n')

       
        colonNum = trimmedPrereqString.index(':')
        
        while ('/' in trimmedPrereqString):
            if( '/' in trimmedPrereqString):
                slashIndex = trimmedPrereqString.index('/')
                if (trimmedPrereqString[slashIndex-11:slashIndex-10]):
                    trimmedPrereqString = trimmedPrereqString[:slashIndex] + trimmedPrereqString[slashIndex+8:]
                    
        ###print('***this&&&: ',retrimmedPrereqString)            
                    
                    
        retrimmedPrereqString = (trimmedPrereqString[colonNum + 1:]).strip().replace(' ', '')
        
        ###print'retrimmedPrereqString: ',retrimmedPrereqString,'\n')
        
        #retrimmedPrereqString= 'ART111orART207,ART541,MATH241orMATH232.COREQ:MATH242,PHYS228.<,p>'
        
       
        
        if 'and' in retrimmedPrereqString:
            andCount = retrimmedPrereqString.count('and')
            while(andCount > 0):
                retrimmedPrereqString.replace('and','|')
                andIndex = retrimmedPrereqString.index('and')
                retrimmedPrereqString = retrimmedPrereqString[:andIndex] + ',' + retrimmedPrereqString[andIndex+3:]
                andCount-=1
        
        
        
        ##print('ughhhhhh', retrimmedPrereqString)
        firstLetter = 0
        secondLetter = 1
        #Check that theres not extra text before classes after "PREREQ:"
        while(True):
            if (len(retrimmedPrereqString) < firstLetter):
                prereqsFinal =[]
                return prereqsFinal
            if (retrimmedPrereqString[firstLetter].isupper() == False or retrimmedPrereqString[secondLetter].isupper() == False):
                firstLetter +=1
                secondLetter +=1
                    
            elif(retrimmedPrereqString[firstLetter].isupper() == True and retrimmedPrereqString[secondLetter].isupper() == True):
                indexStart = firstLetter
                retrimmedPrereqString = retrimmedPrereqString[indexStart:]
                break
       
            

                
                
        ##print('retrimmedPrereqString: ',retrimmedPrereqString)
        
        ##print('capsCheck ',retrimmedPrereqString)
            
        coursesString =''
        count =1
        
        retrimmedPrereqString = retrimmedPrereqString + 'empty'
        
        while((retrimmedPrereqString[0].isupper() and retrimmedPrereqString[4].isdigit())):
            #print('retrimmedPrereqString in while loop',count,': ',retrimmedPrereqString,'\n')
            count+=1
            #MATH111orART222,
            #ART333orART444,
            #print('this',retrimmedPrereqString[9])
            if (retrimmedPrereqString[7:12] == 'orART'):
                coursesString += retrimmedPrereqString[0:13]
                retrimmedPrereqString = retrimmedPrereqString[13:]
                #print('coursesString1: ', coursesString)
                
            elif (retrimmedPrereqString[6:11] == 'orART'):
                coursesString += retrimmedPrereqString[0:15]
                retrimmedPrereqString = retrimmedPrereqString[15:]
                #print('coursesString2: ', coursesString)  
            elif (retrimmedPrereqString[7:9] == 'or'):
                if (retrimmedPrereqString[9].isupper() == False):
                    coursesString += retrimmedPrereqString[0:8]
                    retrimmedPrereqString = retrimmedPrereqString[8:]
                    #print('coursesString3: ', coursesString)
                else:
                    coursesString += retrimmedPrereqString[0:17]
                    retrimmedPrereqString = retrimmedPrereqString[17:]
                    #print('coursesString4: ', coursesString)
                    
            elif (retrimmedPrereqString[8:10] == 'or'):
                if (retrimmedPrereqString[10].isupper() == False):
                    coursesString += retrimmedPrereqString[0:9]
                    retrimmedPrereqString = retrimmedPrereqString[9:]
                    #print('coursesString3: ', coursesString)    
            elif (retrimmedPrereqString[0:3] == 'ART'):
                coursesString += retrimmedPrereqString[0:7]
                retrimmedPrereqString = retrimmedPrereqString[7:]
                #print('coursesString5: ', coursesString)
            else:
                coursesString += retrimmedPrereqString[0:8]
                retrimmedPrereqString = retrimmedPrereqString[8:]
                #print('coursesString6: ', coursesString)
                
        if(coursesString != ''):
            coursesString = coursesString.rstrip(coursesString[-1])
        #print('coursesString Final: ', coursesString)
          
          

        if 'or' in coursesString:
            orCount = coursesString.count('or')
            laterOrCount = orCount
            while(orCount > 0):
                coursesString.replace('or','|')
                orIndex = coursesString.index('or')
                coursesString = coursesString[:orIndex] + '|' + coursesString[orIndex+2:]
                orCount-=1

            
        ####print"bruh2:", retrimmedPrereqString)
        
        coursesString = coursesString.replace('/',',').split(',')
        
        ####print'retrimmedPrereqString: ',retrimmedPrereqString)
        
        count=0
 
        orList=[]
        requiredList=[]
        orList=[]
        lengthCoursesString = len(coursesString) 
        while(count < lengthCoursesString):
            ####print'entered while loop')
            #orCount = count
            lst = [0] * (2 * lengthCoursesString)
            
            if (len(coursesString[count]) == 7 or len(coursesString[count]) == 6):
                ####printretrimmedPrereqString[count], " is valid")
                requiredList.append([coursesString[count]])
                ####print"requiredList: ", requiredList)
            else:
                
                ####printretrimmedPrereqString[count], " is not valid")
                orCase = coursesString[count]
                orCase = orCase.split('|')
                
                
                
                orList.append(orCase[count])
            count +=1
                
     
        
        prereqsFinal.append([requiredList])
        prereqsFinal.append([orList])

        index +=1
    ##print("prereqsFinal: ", prereqsFinal)
    return prereqsFinal




def main(fileNameToSave, firstPageLink):
    
    #creates a CSV file with these values as header
    #order of CourseInfo list: [Class ID, Class Type (Lecture, Lab, etc), Class Title, Campus, Credits, Days, Time, Date, Instructor]
    with open(fileNameToSave, 'w', encoding='UTF8', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Class ID', 'Class Type', 'Class Title', 'Campus', 'Credits', 'Days', 'Time', 'Date', 'Instructor', 'PreReqs'])
    
    
    #gets first course page from firstPageLink
    page = requests.get(firstPageLink)
    doc = BeautifulSoup(page.content, 'html.parser')
    newLink = str(doc.find(id='searchNxtBtn'))
    preCourseLog = list(doc.find('tbody'))
    courseLog= preCourseLog[1::2]
    
    
    
    writeClassToCSV(fileNameToSave,doc,courseLog)

    while (True):
        newLink = newLink[84:228].replace(';','').replace('amp','').replace("'",'')
        newLink = 'https://udapps.nss.udel.edu/CoursesSearch/' + newLink
        print(newLink)
        
        if (newLink == 'https://udapps.nss.udel.edu/CoursesSearch/'):
            break
        
        
            
        #gets next link to scrape courses from
        newPage = requests.get(newLink)
        newDoc = BeautifulSoup(newPage.content, 'html.parser')
        newLink = str(newDoc.find(id='searchNxtBtn'))
            
    
        
        newPreCourseLog = list(newDoc.find('tbody'))
        newCourseLog = newPreCourseLog[1::2]
        ####print"newCourseLog:", newCourseLog)
        
        writeClassToCSV(fileNameToSave, newDoc, newCourseLog)








'''

#main('CourseScrapeV2.csv','https://udapps.nss.udel.edu/CoursesSearch/search-results?&term=2223&search_type=A&text_info=All&credit=Any&session=All&instrtn_mode=All&startat=2223CHEM326034')
#https://udapps.nss.udel.edu/CoursesSearch/search-results?term=2223&search_type=A&course_sec=&session=All&course_title=&instr_name=&text_info=All&campus=&instrtn_mode=All&time_start_hh=&time_start_ampm=&credit=Any&keyword=&geneduc=&subj_area_code=&college=
