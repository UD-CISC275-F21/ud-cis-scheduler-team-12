# import requests
# from bs4 import BeautifulSoup
# import csv


# def getCourseInfo(passDoc, passCourseLog):
#     index = 0
#     iterativeClassInfo = []
    
#     numCourses = len(list(passDoc.find_all('tr'))) - 1 
    
#     while(index < numCourses):
#         classInfo = []
#         currentCourse = passCourseLog[index]
        
#         #Class ID
#         classInfo.insert(0, currentCourse.find(class_='coursenum').get_text().strip().split('\n')[0])
        
#         #Class Type
#         classInfo.insert(1, currentCourse.find(class_='coursetype').get_text().strip().split('\n')[0])
        
#         #Class Title
#         classInfo.insert(2, currentCourse.find_all('td')[1].get_text().strip().split('\n')[0])
        
#         #Campus
#         classInfo.insert(3, currentCourse.find(class_='campus').get_text().strip().split('\n')[0])
        
#         #Credits
#         classInfo.insert(4, currentCourse.find_all('td')[4].get_text().strip().split('\n')[0])
        
#         #Days
#         classInfo.insert(5, currentCourse.find(class_='day').get_text().strip().split('\n')[0])
        
#         #Time
#         classInfo.insert(6, currentCourse.find(class_='time').get_text().strip().split('\n')[0])
        
#         #Date
#         classInfo.insert(7, currentCourse.find(class_='mtgdate').get_text().strip().split('\n')[0])
        
#         #Instructor
#         classInfo.insert(9, currentCourse.find_all('td')[9].get_text().strip().split('\n')[0].split(';')[0])
    
#         iterativeClassInfo.insert(index, classInfo)
#         index += 1
        
#     #print(iterativeClassInfo)
#     #print('list length:', len(iterativeClassInfo))
#     return iterativeClassInfo


# def writeClassToCSV(fileNameToSave, passDoc, passCourseLog):
    
#     courseInfo = getCourseInfo(passDoc, passCourseLog)
    
#     with open(fileNameToSave, 'a', encoding='UTF8', newline='') as csvfile2:
#         writer2 = csv.writer(csvfile2)
    
#         writer2.writerows(courseInfo)


# def main(fileNameToSave, firstPageLink):
    
#     #order of CourseInfo list: [Class ID, Class Type (Lecture, Lab, etc), Class Title, Campus, Credits, Days, Time, Date, Instructor]
#     with open(fileNameToSave, 'w', encoding='UTF8', newline='') as csvfile:
#         writer = csv.writer(csvfile)
#         writer.writerow(['Class ID', 'Class Type', 'Class Title', 'Campus', 'Credits', 'Days', 'Time', 'Date', 'Instructor'])
    
    
#     page = requests.get(firstPageLink)
#     doc = BeautifulSoup(page.content, 'html.parser')
#     newLink = str(doc.find(id='searchNxtBtn'))
#     preCourseLog = list(doc.find('tbody'))
#     courseLog= preCourseLog[1::2]

#     writeClassToCSV(fileNameToSave, doc,courseLog)

#     while (True):
#         newLink = newLink[84:228].replace(';','').replace('amp','').replace("'",'')
#         newLink = 'https://udapps.nss.udel.edu/CoursesSearch/' + newLink
#         print(newLink)
        
#         if (newLink == 'https://udapps.nss.udel.edu/CoursesSearch/'):
#             break
        
        
        
#         #gets next link to scrape courses from
#         newPage = requests.get(newLink)
#         newDoc = BeautifulSoup(newPage.content, 'html.parser')
#         newLink = str(newDoc.find(id='searchNxtBtn'))
        
        
#         newPreCourseLog = list(newDoc.find('tbody'))
#         newCourseLog = newPreCourseLog[1::2]
#         #print("newCourseLog:", newCourseLog)
        
#         writeClassToCSV(fileNameToSave, newDoc, newCourseLog)

        

# # Main declaration is Main(fileNameToSave, firstPageLink) -- Both variables should be strings
# #   fileNameToSave is the name of the file that you want the data to be sent to
# #   firstPageLink is the URL of the first relevant page in UD Course Search. The Page can be sorted
# #   and filtered by whatever and it should work fine
# #   finally, the whole file is commented out so that VSCode and ESLint don't complain
# main('Spring2022CoursesDatabase.csv','https://udapps.nss.udel.edu/CoursesSearch/search-results?term=2223&search_type=A&course_sec=&session=All&course_title=&instr_name=&text_info=All&campus=&instrtn_mode=All&time_start_hh=&time_start_ampm=&credit=Any&keyword=&geneduc=&subj_area_code=&college=')
