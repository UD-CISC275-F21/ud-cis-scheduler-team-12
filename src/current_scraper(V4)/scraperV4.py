'''
import requests
from bs4 import BeautifulSoup
import csv


def getCourseInfo(passDoc, passCourseLog, caseCheck):
    iterativeClassInfo = []

    numCourses = len(list(passDoc.find_all('tr'))) - 1
    index = 0
    while index < numCourses:
        classInfo = []
        currentCourse = passCourseLog[index]

        # Class ID
        classInfo.insert(0, currentCourse.find(class_='coursenum').get_text().strip().split('\n')[0])
        ##print('!!!!!: ', currentCourse.find(class_='coursenum').get_text().strip().split('\n')[0])

        # Class Type
        classInfo.insert(1, currentCourse.find(class_='coursetype').get_text().strip().split('\n')[0])

        # Class Title
        classInfo.insert(2, currentCourse.find_all('td')[1].get_text().strip().split('\n')[0])

        # Campus
        classInfo.insert(3, currentCourse.find(class_='campus').get_text().strip().split('\n')[0])

        # Credits
        classInfo.insert(4, currentCourse.find_all('td')[4].get_text().strip().split('\n')[0])

        # Days
        classInfo.insert(5, currentCourse.find(class_='day').get_text().strip().split('\n')[0])

        # Time
        classInfo.insert(6, currentCourse.find(class_='time').get_text().strip().split('\n')[0])

        # Date
        classInfo.insert(7, currentCourse.find(class_='mtgdate').get_text().strip().split('\n')[0])

        # Instructor
        classInfo.insert(9, currentCourse.find_all('td')[9].get_text().strip().split('\n')[0].split(';')[0])

        # Prereqs
        prereqPre = prereqCheck(passDoc, passCourseLog, index, numCourses)
        prereqPost = processString(prereqPre, caseCheck)
        prereqFinal = makeDictionaries(prereqPost)
        classInfo.insert(10, prereqFinal)

        iterativeClassInfo.insert(index, classInfo)
        index += 1

    ####printiterativeClassInfo)
    ####print'list length:', len(iterativeClassInfo))
    return iterativeClassInfo


def writeClassToCSV(fileNameToSave, passDoc, passCourseLog, caseCheck):

    courseInfo = getCourseInfo(passDoc, passCourseLog, caseCheck)

    with open(fileNameToSave, 'a', encoding='UTF8', newline='') as csvfile2:
        writer2 = csv.writer(csvfile2)
        writer2.writerows(courseInfo)


def prereqCheck(passDoc, passCourseLog, index, numCourses):
    prereqSearchList = []
    prereqsFinal = ''
    currentCourse = passCourseLog[index]
    prereqLink = str(currentCourse.find(class_='coursenum'))
    prereqLink = prereqLink[27:111].replace(';', '').replace('amp', '').replace("'", '').replace('§', '&sect').replace(
        '"', '').replace('>', '')
    # #print('2: ', prereqLink)
    prereqLink = 'https://udapps.nss.udel.edu/CoursesSearch/' + prereqLink

    prereqPage = requests.get(prereqLink)
    prereqDoc = BeautifulSoup(prereqPage.content, 'html.parser')
    prereqSearch = list(prereqDoc.findAll('p'))
    prereqSearchString = str(prereqSearch[1])

    #After new prereq link is fetched:
    if 'PREREQ:' in prereqSearchString:
        indexNum = prereqSearchString.index('PREREQ:')
        trimmedPrereqString = prereqSearchString[indexNum:]
        colonNum = trimmedPrereqString.index(':')

        #remove front text after "PREREQ:"   also AND uncapitalization here so it doesnt trigger capitalList Check below
        retrimmedPrereqString = (trimmedPrereqString[colonNum + 1:]).strip().replace(' ', '').replace('AND', 'and')

        capitalList = [idx for idx in range(len(retrimmedPrereqString)) if
                       retrimmedPrereqString[idx].isupper() and retrimmedPrereqString[idx + 1].isupper()]
        ##print('string check1: ', retrimmedPrereqString)
        ##print('retrimmedCheck: ', retrimmedPrereqString)
        ##print('captialListCheck: ', capitalList)
        if capitalList:
            frontTextRemoved = retrimmedPrereqString[capitalList[0]:]
            ##print('string check2: ', frontTextRemoved)
        else:
            frontTextRemoved = retrimmedPrereqString
            ##print('string check3: ', frontTextRemoved)
        # semicolon case, means AND for all relevant coures
        extraTextRemoved = frontTextRemoved.replace(';', 'and').replace('andand', 'and').replace('and ', '')
        extraTextRemoved = extraTextRemoved.replace(' ', '').replace('inplaceof', 'or')

        # remove "extra text" after all course data. Lots of cases
        if 'COREQ' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('COREQ')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'RESTRICTIONS' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('RESTRICTIONS')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'Restrictions' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('Restrictions')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if '.' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('.')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if '(.)' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('(')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orequivalent' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orequivalent')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orpermissionofinstructor' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orpermissionofinstructor')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if '<' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('<')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orbypermissionofinstructor' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orbypermissionofinstructor')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orcomparableundergraduateaccountingcourse' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orcomparableundergraduateaccountingcourse')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orbypermissionofInstructor' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orbypermissionofInstructor')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'andtwosemestersofchemistry' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('andtwosemestersofchemistry')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'andadmissiontoB' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('andadmissiontoB')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orhigher' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orhigher')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        #make sure nothing else exclude because UD may be common adjacent capital letters
        if 'UDcoursecredits' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('UDcoursecredits')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'recommended-cantakeconcurrentlywith' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('recommended-cantakeconcurrentlywith')
            extraTextRemoved = extraTextRemoved[:coreqIndex + 8]
            if 'recomme' in extraTextRemoved:
                coreqIndex = extraTextRemoved.index('recomme')
                extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'andallBHAN,HLPRandNTDTmajorrequirementsmustbecompletedbeforeBHAN464(9creditInternship)hourscanbeinitiated' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('andallBHAN,HLPRandNTDTmajorrequirementsmustbecompletedbeforeBHAN464(9creditInternship)hourscanbeinitiated')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'recommended,canalsotakeitconcurrentlywithBHAN490' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('recommended,canalsotakeitconcurrentlywithBHAN490')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'andonesemesteroforganicchemistry' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('andonesemesteroforganicchemistry')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if ',orforenvironmentalengineeringmajors,inCIEG305' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index(',orforenvironmentalengineeringmajors,inCIEG305')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if '(' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('(')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'andCHEM322orCHEM332recommended' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('andCHEM322orCHEM332recommended')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'andoneother200-levelFRENcoursetaughtinFrench' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('andoneother200-levelFRENcoursetaughtinFrench')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if ',plusoneother3XX' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index(',plusoneother3XX')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'orone200-levelGermancourse' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('orone200-levelGermancourse')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        if 'forECEmajorsonly' in extraTextRemoved:
            coreqIndex = extraTextRemoved.index('forECEmajorsonly')
            extraTextRemoved = extraTextRemoved[:coreqIndex]
        ##print('string check4: ', extraTextRemoved)

        # random fixes section

        #these ones are mostly emptying completely bad strings instead of only removing irrelevant parts like above
        extraTextRemoved = extraTextRemoved.replace('either', '').replace('CMGorEOBconcentration', '')
        extraTextRemoved = extraTextRemoved.replace('recommended,cantakeconcurrentlywithBHAN311', '')
        extraTextRemoved = extraTextRemoved.replace('Knowledgeof basicbiology, generalchemistry, andcalculus', '')
        extraTextRemoved = extraTextRemoved.replace('withaminimumgradeofC -', '')
        extraTextRemoved = extraTextRemoved.replace('CHIN300-level', '')
        extraTextRemoved = extraTextRemoved.replace('andC -', '')
        extraTextRemoved = extraTextRemoved.replace('Knowledgeof basicbiology, generalchemistry, andcalculus', '')
        extraTextRemoved = extraTextRemoved.replace('Onesemesterofcomputerscienceresearchexperiencewithanadvisorandacurrentresearchproject', '')
        extraTextRemoved = extraTextRemoved.replace('JuniororSeniorstanding,', '')
        extraTextRemoved = extraTextRemoved.replace('DISAPhDstudent', '')
        extraTextRemoved = extraTextRemoved.replace('Requirespermissionofinstructor', '')
        extraTextRemoved = extraTextRemoved.replace('orpermissionbyinstructor', '')
        extraTextRemoved = extraTextRemoved.replace('IIforcontentareamayberequiredinsomeprograms', '')
        extraTextRemoved = extraTextRemoved.replace('Admissiontodoctoralprogram', '')
        extraTextRemoved = extraTextRemoved.replace('Undergraduatecourseinprobability', '')
        extraTextRemoved = extraTextRemoved.replace('Mustbeagraduateofanaccreditedundergraduateengineeringprogram', '')
        extraTextRemoved = extraTextRemoved.replace('Undergraduatecourseinprobability, signalsandlinearsystems', '')
        extraTextRemoved = extraTextRemoved.replace('andsixENGLcreditsatthe300 - level', '')
        extraTextRemoved = extraTextRemoved.replace('ENTRandENTRorrequirespermissionofinstructor', '')
        extraTextRemoved = extraTextRemoved.replace('ENTR654recommended', '')
        extraTextRemoved = extraTextRemoved.replace('ENTR420recommended', '')
        extraTextRemoved = extraTextRemoved.replace('Seniorstatus', '')
        extraTextRemoved = extraTextRemoved.replace('Any200 - levelcoursetaughtintheFrenchlanguage', '')
        extraTextRemoved = extraTextRemoved.replace('Two300-levelcoursestaughtinFrench', '')
        extraTextRemoved = extraTextRemoved.replace('Seniorgeologymajorsonly,within30creditsofgraduation', '')
        extraTextRemoved = extraTextRemoved.replace('Anytwo200-levelGermancourses', '')
        extraTextRemoved = extraTextRemoved.replace('AnytwoGermancoursesatthe200-level', '')
        extraTextRemoved = extraTextRemoved.replace('MAST427recommended', '')
        extraTextRemoved = extraTextRemoved.replace('GraduateStudentsonlyorpermissionfrominstructor', '')
        extraTextRemoved = extraTextRemoved.replace('Successfulcompletionofpre-practicumAppliedMolecularBiologyandBiotechnologycoursework', '')
        extraTextRemoved = extraTextRemoved.replace('&amp', '')
        extraTextRemoved = extraTextRemoved.replace(',orothergraduateaduatemanagementcourse', '')
        extraTextRemoved = extraTextRemoved.replace('NTDT321recommended,cantakeconcurrentlywithNTDT326', '')
        extraTextRemoved = extraTextRemoved.replace('orsimilarundergraduatestatisticscourse', '')
        extraTextRemoved = extraTextRemoved.replace('Courseinmacronutrients', '')
        extraTextRemoved = extraTextRemoved.replace('IntroductiontoNutritioncourse', '')
        extraTextRemoved = extraTextRemoved.replace('COREQ:NURS330andNURS365', '')
        extraTextRemoved = extraTextRemoved.replace('COREQ:TraditionalandAcceleratedBSNNursingMajorsonly-at leastoneseniorlevelclinicalpracticum', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:SeniorNursingmajorsonly', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS: Opentophysicaltherapygraduatestudentsonly', '')
        extraTextRemoved = extraTextRemoved.replace('PTcourses', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:OpentophysicaltherapygraduatestudentsandothersmayenrollonlywithpermissionofcourseinstructorandDPTProgramDirector', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:Opentophysicaltherapygraduatestudentsonly', '')
        extraTextRemoved = extraTextRemoved.replace('Any300-levelSpanishcourse,orgraduatestatusinSpanish,orbeingaHeritagespeakerofSpanish', '')
        extraTextRemoved = extraTextRemoved.replace('GPAof3', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:Mayberepeatedforcreditwhentopicsvary', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:TaughtabroadandinSpanish', '')
        extraTextRemoved = extraTextRemoved.replace('SPAN2xxcoursestaughtinSpanish', '')
        extraTextRemoved = extraTextRemoved.replace('SPAN3xxses', '')
        extraTextRemoved = extraTextRemoved.replace('SPANcourse', '')
        extraTextRemoved = extraTextRemoved.replace('One300-levelSpanishcourse', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:Taughtabroadonly', '')
        extraTextRemoved = extraTextRemoved.replace('-levelsurveyofliteraturecourse', '')
        extraTextRemoved = extraTextRemoved.replace('RESTRICTIONS:Senior-levelSpanishStudiesandLatinAmerican&ampandIberianStudiesmajorsonly3', '')
        extraTextRemoved = extraTextRemoved.replace("Any200-levelWomen'sStudiescourse", '')
        extraTextRemoved = extraTextRemoved.replace('WOMScourse', '')
        extraTextRemoved = extraTextRemoved.replace('Previouscourseworkindifferentialequations,vectors,andmatrices,', '')
        extraTextRemoved = extraTextRemoved.replace(', orothergraduateaduatemanagementcourse', '')
        extraTextRemoved = extraTextRemoved.replace('orsubstitutes', '')
        extraTextRemoved = extraTextRemoved.replace('ENTRandENTRORrequirespermissionofinstructor', '')


        #"andoneofthefollowing" fixes, special case fixes since they use a key value "and" and have formatting that would throw off the logic if let through
        extraTextRemoved = extraTextRemoved.replace('BUAD100oratleastoneofACCT483,BUAD386,ECON340,orFINC415',                                         'BUAD100,BUAD386orECON340orFINC415')
        extraTextRemoved = extraTextRemoved.replace('BISC207,CHEM321andoneofthefollowing:BISC401,CHEM527orCHEM642', 'BISC207,CHEM321,BISC401orCHEM527orCHEM642')
        extraTextRemoved = extraTextRemoved.replace('BUAD621andoneofthefollowing:MISY631orACCT604orBUAD622orMISY830','BUAD621andMISY631orACCT604orBUAD622orMISY830')
        extraTextRemoved = extraTextRemoved.replace('withaminimumgradeofC -', '')
        extraTextRemoved = extraTextRemoved.replace('DANC202,DANC203,DANC204,DANC302,DANC303,DANC304,orpermissionifinstructor', 'DANC202orDANC203orDANC204orDANC302orDANC303orDANC304')
        extraTextRemoved = extraTextRemoved.replace('DANC202,DANC203,DANC204,DANC302,DANC303,DANC304', 'DANC202orDANC203orDANC204orDANC302orDANC303orDANC304')
        extraTextRemoved = extraTextRemoved.replace('ECON101 andoneofthefollowing:MATH221,MATH222,MATH232,MATH241,MATH242 orMATH243', 'ECON101,MATH221orMATH222orMATH232orMATH241orMATH242orMATH243')
        extraTextRemoved = extraTextRemoved.replace('ECON103andoneofECON251, ECON255, ECON300orECON301and', 'ECON103,ECON251orECON255orECON300orECON301')
        extraTextRemoved = extraTextRemoved.replace('EDUC618, EDU663, EDUC817andEDUC744C814', 'EDUC618, EDU663, EDUC817andEDUC744orEDUC814')
        extraTextRemoved = extraTextRemoved.replace('EDUC827,EDUC665,', 'EDUC827,EDUC665,EDUC846,EDUC850')
        extraTextRemoved = extraTextRemoved.replace('EDUC864(880)', ' EDUC864orEDUC880')
        extraTextRemoved = extraTextRemoved.replace('aC - orbetterin', '')
        extraTextRemoved = extraTextRemoved.replace('ENTR156or ENTR157or ENTR350', 'ENTR156orENTR157orENTR350')
        extraTextRemoved = extraTextRemoved.replace('ENTR156orENTRpriortotakingthiscourseisrecommended,butnotrequired', 'ENTR156orBUAD350')
        extraTextRemoved = extraTextRemoved.replace('ENWC325andFREC408orSTAT200andtwocoursesfromENWC318, ENWC418, ENWC424, orENWC425', 'ENWC325andFREC408orSTAT200andENWC418orENWC424orENWC425')
        extraTextRemoved = extraTextRemoved.replace('STAT200 and FINC311', 'STAT200andFINC311')
        extraTextRemoved = extraTextRemoved.replace('andagradeC-orbetterrequiredinFINC311', 'FINC311')
        extraTextRemoved = extraTextRemoved.replace('FINC670 and ECON803', 'FINC670andECON803')
        extraTextRemoved = extraTextRemoved.replace('FREN200withaminimumgradeofC', 'FREN200')
        extraTextRemoved = extraTextRemoved.replace('FREN107withaminimumgradeofC', 'FREN107')
        extraTextRemoved = extraTextRemoved.replace('ONEof:FREN301,302,or303', 'FREN301orFREN302orFREN303')
        extraTextRemoved = extraTextRemoved.replace('HLPR809HLPR630HLPR631HLPR605NURS615', 'HLPR809,HLPR630,HLPR631,HLPR605,NURS615')
        extraTextRemoved = extraTextRemoved.replace('JAPN202,205,3XX', 'JAPN202,JAPN205')
        extraTextRemoved = extraTextRemoved.replace('KAAP221 orKAAP310 orBISC276 orBISC306', 'KAAP221orKAAP310orBISC276orBISC306')
        extraTextRemoved = extraTextRemoved.replace('KAAP447withatleastaC-', 'KAAP447')
        extraTextRemoved = extraTextRemoved.replace('MATH010orstudentsmustachieveanacceptablescoreontheMathPlacementExaminaccordancewithcurrentstandardsdeterminedbytheDepartmentofMathematicalSciences', 'MATH010')
        extraTextRemoved = extraTextRemoved.replace('MATH115,orMATH117oranacceptablescore(determinedbytheDepartmentofMathematicalSciences)ontheMathPlacementExam', 'MATH115,orMATH117')
        extraTextRemoved = extraTextRemoved.replace('MATH117oracceptablescoreontheMathPlacementExaminaccordancewithcurrentstandardsdeterminedbytheDepartmentofMathematicalSciences', 'MATH117')
        extraTextRemoved = extraTextRemoved.replace('oranequivalentcourseinprobability', 'MATH350')
        extraTextRemoved = extraTextRemoved.replace('MATH350), Multivariablecalculus(e', 'MATH350')
        extraTextRemoved = extraTextRemoved.replace('MATH617andknowledgeofanalyticfunctiontheory', 'MATH617')
        extraTextRemoved = extraTextRemoved.replace('MEEG210 orCIEG211 ', 'MEEG210orCIEG211')
        extraTextRemoved = extraTextRemoved.replace('MEEG331,orCIEG305inplaceofMEEG331,andMEEG241andMEEG342', 'MEEG331orCIEG305,andMEEG241andMEEG342')
        extraTextRemoved = extraTextRemoved.replace('MMSC491orBISC403withaminimumgradeofaBandMMSC210', 'MMSC491orBISC403,MMSC210')
        extraTextRemoved = extraTextRemoved.replace('MUED179withagradeofC-', 'MUED179')
        extraTextRemoved = extraTextRemoved.replace('MUED377andMUSC335withagradeofC-orbetter', 'MUED377andMUSC335')
        extraTextRemoved = extraTextRemoved.replace('MUSC151withagradeofC-orbetter', 'MUSC151')
        #note: this one is not misplaced. Meant to be at end even though the replacement is empty
        extraTextRemoved = extraTextRemoved.replace('withagradeofC-orbetter', '')
        extraTextRemoved = extraTextRemoved.replace('NTDT200andacourseinbiology', 'NTDT200')
        extraTextRemoved = extraTextRemoved.replace('NTDT250,NTDT305,andSTAT200orsimilarundergraduatestatisticscourseRESTRICTIONS:NutritionandDietetics,NutritionandMedicalSciences,andNutritionmajorsandminors', 'NTDT250,NTDT305,andSTAT200')
        extraTextRemoved = extraTextRemoved.replace('NTDT400andacourseinstatistics', 'NTDT400')
        extraTextRemoved = extraTextRemoved.replace('BSNNursingMajorsonly-PrereqsincludeNURS120,NURS243,andNURS263', 'NURS120,NURS243,andNURS263')
        extraTextRemoved = extraTextRemoved.replace('POSC815orpermissionoftheinstructor', 'POSC815')
        extraTextRemoved = extraTextRemoved.replace('PSYC100orNSCI100andonecourseinbasiccollegemathematics', 'PSYC100orNSCI100')
        extraTextRemoved = extraTextRemoved.replace('PSYC207andPSYC209oritssubstitutes', 'PSYC207andPSYC209')
        extraTextRemoved = extraTextRemoved.replace('PSYC207andinPSYC209orsubstitutes', 'PSYC207andinPSYC209')
        extraTextRemoved = extraTextRemoved.replace('PSYC100,PSYC207,PSYC209,andatleastonecourseinPSYCorNSCIatthe300levelorabove', 'PSYC100,PSYC207,PSYC209')
        extraTextRemoved = extraTextRemoved.replace('PSYC100,PSYC207,andPSYC209oritssubstitutions', 'PSYC100,PSYC207,andPSYC209')
        extraTextRemoved = extraTextRemoved.replace('PSYC836RESTRICTIONS:', 'PSYC836')
        extraTextRemoved = extraTextRemoved.replace('RUSS105RESTRICTIONS:TwotothreeyearsofhighschoolRussianacceptableinlieuofprerequisite', 'RUSS105')
        extraTextRemoved = extraTextRemoved.replace('SOCI201andcompletionoftheCollegeofArtsandSciencesmathrequirement', 'SOCI201')
        extraTextRemoved = extraTextRemoved.replace('SPAN105RESTRICTIONS:TwotothreeyearsofhighschoolSpanishacceptableinlieuofprerequisite', 'SPAN105')
        extraTextRemoved = extraTextRemoved.replace('SPAN301, SPAN302, SPAN303, SPAN304, SPAN307, SPAN308, SPAN325, SPAN326, orSPAN355', 'SPAN301orSPAN302orSPAN303orSPAN304orSPAN307orSPAN308orSPAN325orSPAN326orSPAN355')
        extraTextRemoved = extraTextRemoved.replace('SPAN301,SPAN302,SPAN303,SPAN304,SPAN307,SPAN308,SPAN325,SPAN326,orSPAN355', 'SPAN301orSPAN302orSPAN303orSPAN304orSPAN307orSPAN308orSPAN325orSPAN326orSPAN355')
        extraTextRemoved = extraTextRemoved.replace('SPAN301,302,303,304, SPAN307, SPAN308, SPAN325, SPAN326,orSPAN355', 'SPAN301orSPAN302orSPAN303orSPAN304orSPAN307orSPAN308orSPAN325orSPAN326orSPAN355')
        extraTextRemoved = extraTextRemoved.replace('SPAN301,302,303,304,SPAN307,SPAN308,SPAN325,SPAN326,orSPAN355', 'SPAN301orSPAN302orSPAN303orSPAN304orSPAN307orSPAN308orSPAN325orSPAN326orSPAN355')
        extraTextRemoved = extraTextRemoved.replace('ENWC325andFREC408orSTAT200andtwocoursesfromENWC318, ENWC418, ENWC424, orENWC425', 'ENWC325,FREC408orSTAT200,ENWC418orENWC424orENWC425')
        extraTextRemoved = extraTextRemoved.replace('MATH115,orMATH117oranacceptablescore', 'MATH115orMATH117')
        extraTextRemoved = extraTextRemoved.replace('PSYC836RESTRICTIONS:', 'PSYC836')
        extraTextRemoved = extraTextRemoved.replace('BISC205,BISC207orBISC208andCHEM101,CHEM103,CHEM105,orCHEM111', 'BISC205,BISC207orBISC208andCHEM101orCHEM131,CHEM103orCHEM105orCHEM111')
        extraTextRemoved = extraTextRemoved.replace('CHEM102,CHEM104,CHEM105,orCHEM112', 'CHEM102orCHEM104orCHEM105orCHEM112')
        extraTextRemoved = extraTextRemoved.replace('ECON103,ECON301andMATH221,MATH232,orMATH241', 'ECON103,ECON301,MATH221,MATH232orMATH241')
        extraTextRemoved = extraTextRemoved.replace('ECON251,ECON255,orECON300,orECON301andECON306orMATH202andMATH221,MATH232,MATH241,MATH242,orMATH243', 'ECON251orECON255orECON300orECON301andECON306orMATH202andMATH221orMATH232orMATH241orMATH242orMATH243')
        extraTextRemoved = extraTextRemoved.replace('ECON251,ECON255,ECON300orECON301andMATH222,MATH242,orMATH243', 'ECON251,ECON255,ECON300orECON301andMATH222,MATH242,orMATH243')
        extraTextRemoved = extraTextRemoved.replace('ECON101andoneofthefollowing:MATH221,MATH222,MATH232,MATH241,MATH242orMATH243', 'ECON101andMATH221orMATH222orMATH232orMATH241orMATH242orMATH243')
        extraTextRemoved = extraTextRemoved.replace('ECON103andoneofECON251,ECON255,ECON300orECON301and', 'ECON103andECON251orECON255orECON300orECON301')
        extraTextRemoved = extraTextRemoved.replace('ENWC325andFREC408orSTAT200andtwocoursesfromENWC318,ENWC418,ENWC424,orENWC425', 'ENWC325andFREC408orSTAT200andENWC318orENWC418orENWC424orENWC425')
        extraTextRemoved = extraTextRemoved.replace('ONEofFREN301,302,or303', 'FREN301orFREN302orFREN303')
        extraTextRemoved = extraTextRemoved.replace('MAST341,MAST382,orMAST402', 'MAST341orMAST382orMAST402')
        extraTextRemoved = extraTextRemoved.replace('MEDT631,orothergraduateaduatemanagementcourse', 'MEDT631')
        extraTextRemoved = extraTextRemoved.replace('ECON103,ECON301,andMATH221,MATH232,orMATH241', 'ECON103,ECON301andMATH221orMATH232orMATH241')
        extraTextRemoved = extraTextRemoved.replace('ECON251,ECON255,ECON300orECON301&MATH222,MATH242,orMATH243', 'ECON251,ECON255,ECON300orECON301&MATH222orMATH242orMATH243')
        extraTextRemoved = extraTextRemoved.replace('ECON301,andMATH221,MATH232,MATH241,MATH242,orMATH243', 'ECON301,andMATH221orMATH232orMATH241orMATH242orMATH243')
        extraTextRemoved = extraTextRemoved.replace('MEEG331,orCIEG305orMEEG331,andMATH352', 'CIEG305orMEEG331,andMATH352')
        extraTextRemoved = extraTextRemoved.replace('MEEG331,orCIEG305orMEEG331,andMEEG241andMEEG342', 'CIEG305orMEEG331,andMEEG241andMEEG342')
        extraTextRemoved = extraTextRemoved.replace('MEDT631,orothergraduateaduatemanagementcourse', 'MEDT631')
        extraTextRemoved = extraTextRemoved.replace(',orothergraduateaduatemanagementcourse', '')
        extraTextRemoved = extraTextRemoved.replace(' ENTR156orENTRpriortotakingthiscourseisrecommended, butnotrequired', 'ENTR156')



#, or case !!!!! CHEM105, or CHEM111       in BISC276070


#This will be function to fetch prereq string and process it

        ##print('string check5: ', extraTextRemoved)

        #removing redundant repeated prereqs that make life harder for no reason
        removeTextRedundancies = extraTextRemoved
        while '/' in removeTextRedundancies:
            if '/' in removeTextRedundancies:
                slashIndex = removeTextRedundancies.index('/')
                if removeTextRedundancies[slashIndex - 11:slashIndex - 10]:
                    removeTextRedundancies = removeTextRedundancies[:slashIndex] + removeTextRedundancies[slashIndex + 8:]

        prereqsFinal = removeTextRedundancies
    return prereqsFinal

#next funtion will be a priority system
#possible signs: 'and', 'or', ','


def processString(prereqsString, caseList):
    andReq = ',and'
    orReq = ',or'
    andString = 'and'
    orString = 'or'
    commaString = ','

    ##print('first: ', prereqsString)
    if andReq in prereqsString:
        prereqsString = prereqsString.replace(andReq, ',')
        ##print('1: ', prereqsString)

    if andString in prereqsString:
        prereqsString = prereqsString.replace('and', '&')
        ##print('2: ', prereqsString)
        ##print(prereqsString)

    if orReq in prereqsString:
        prereqsString = prereqsString.replace(',or', 'or')
        caseList.append(prereqsString)
        ##print('3: ', prereqsString)

    if orString in prereqsString:
        prereqsString = prereqsString.replace(orString, '|')
        ##print('4: ', prereqsString)

    if commaString in prereqsString:
        prereqsString = prereqsString.replace(commaString, '&')
        ##print('5: ', prereqsString)

    prereqsString.replace('CISC220withaminimumgradeofC-&CISC304', 'CISC220&CISC304')
    prereqsString.replace('MATH210&aminimumgradeofC-inCISC220', 'MATH210&CISC220')
    prereqsString.replace('CIEG305|CHEG341|MEEG331&C-', 'CIEG305|CHEG341|MEEG331')
    prereqsString.replace('Knowledgeofbasicbiology&generalchemistry&calculus', '')
    return prereqsString


def makeDictionaries(prereqPost):
    mainDict = {}
    requirements = {}
    option1 = {}
    option2 = {}
    option3 = {}
    option4 = {}
    option5 = {}
    option6 = {}
    option7 = {}
    option8 = {}

    #'MATH241&MATH242&CHEM104|CHEM112&PHYS201|PHYS207'

    
    #print("prereqPost: ", prereqPost)
    andCount = prereqPost.count('&')
    orCount = prereqPost.count('|')
    totalCount = andCount + orCount
    #print("and ", andCount)
    #print("or ", orCount)
    #print("total ", totalCount)

    if totalCount == 0 and prereqPost:
        classCount = 1
    elif totalCount:
        classCount = totalCount + 1
    else:
        classCount = 0

    #print("classCount", classCount)

    #if there is only 1 required course, total conditional count is 0 and it exists
    if totalCount == 0 and prereqPost:
        requirements = {
            prereqPost: "false"
        }
    elif andCount == 0 and orCount == 0 and not prereqPost:
        requirements = {}
    #if and = 1 , or = 0
    elif andCount == 1 and orCount == 0:
        prereqPost = prereqPost.split('&')

        requirements = {
            prereqPost[0]: "false",
            prereqPost[1]: "false"
        }

    #if and = 0 , or = 1
    elif andCount == 0 and orCount == 1:
        prereqPost = prereqPost.split('|')

        requirements = {
        }
        option1 = {
            prereqPost[0]: "false",
            prereqPost[1]: "false"
        }

    #if and = 1, or = 1
    elif andCount == 1 and orCount == 1:
        andIndex = prereqPost.index('&')
        orIndex = prereqPost.index('|')

        # orIndex is later
        if andIndex < orIndex:
            prereqAnd = prereqPost.split('&')

            requirements = {
                prereqAnd[0]: "false"
            }
            prereqOr = prereqAnd[1].split('|')
            option1 = {
                prereqOr[0]: "false",
                prereqOr[1]: "false"
            }
        else:
            prereqAnd = prereqPost.split('&')
            requirements = {
                prereqAnd[1]: "false"
            }
            prereqOr = prereqAnd[0].split('|')
            option1 = {
                prereqOr[0]: "false",
                prereqOr[1]: "false"
            }

    #just ands
    elif andCount > 0 and orCount == 0:
        loopFor = classCount
        andSplit = prereqPost.split('&')

        while loopFor > 0:
            requirements.update({andSplit[loopFor - 1]: "false", })
            loopFor -= 1

    # just ors
    elif andCount == 0 and orCount > 0:
        loopFor = classCount
        orSplit = prereqPost.split('|')

        while loopFor > 0:
            option1.update({orSplit[loopFor - 1]: "false", })
            loopFor -= 1

        # def checkOption(x):
        #     if x == 8:
        #         return option8
        #     elif x == 7:
        #         return option7
        #     elif x == 7:
        #         return option7
        #     elif x == 6:
        #         return option6
        #     elif x == 5:
        #         return option5
        #     elif x == 4:
        #         return option4
        #     elif x == 3:
        #         return option3
        #     elif x == 2:
        #         return option2
        #     elif x == 1:
        #         return option1
        #
        # while loopFor > 0:
        #     loopFor
        #     correctOption = checkOption(loopFor)
        #     loopFor -= 1
        #     #print(orSplit)
        #     correctOption.update({orSplit[loopFor - 1]: "false", })



        # for i in orSplit:
        # option1 = {
        #     i: "false",
        #     i: "false"
        # }



    # else:
    #     andIndex = prereqPost.index('&')
    #     orIndex = prereqPost.index('|')
    #
    #     #if andIndex comes first
    #     while andIndex < orIndex:
    #         andIndex = prereqPost.index('&')
    #         orIndex = prereqPost.index('|')


    mainDict.update({"required": requirements})
    if option1:
        mainDict.update({"optional1": option1})
    if option2:
        mainDict.update({"optional2": option2})
    if option3:
        mainDict.update({"optional3": option3})
    if option4:
        mainDict.update({"optional4": option4})
    if option5:
        mainDict.update({"optional5": option5})
    if option6:
        mainDict.update({"optional6": option6})
    if option7:
        mainDict.update({"optional7": option7})
    if option8:
        mainDict.update({"optional8": option8})
    
    return mainDict



def main(fileNameToSave, firstPageLink):
    caseCheck = []
    # creates a CSV file with these values as header
    # order of CourseInfo list: [Class ID, Class Type (Lecture, Lab, etc), Class Title, Campus, Credits, Days, Time, Date, Instructor]
    with open(fileNameToSave, 'w', encoding='UTF8', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(
            ['Class ID', 'Class Type', 'Class Title', 'Campus', 'Credits', 'Days', 'Time', 'Date', 'Instructor', 'PreReqs'])
    ##print(firstPageLink)
    newLink = firstPageLink
    ##print(newLink)

    while True:
        # gets first course page from firstPageLink
        page = requests.get(newLink)
        doc = BeautifulSoup(page.content, 'html.parser')
        preCourseLog = list(doc.find('tbody'))
        courseLog = preCourseLog[1::2]

        writeClassToCSV(fileNameToSave, doc, courseLog, caseCheck)

        newLink = str(doc.find(id='searchNxtBtn'))
        newLink = newLink[84:228].replace(';', '').replace('amp', '').replace("'", '')
        newLink = 'https://udapps.nss.udel.edu/CoursesSearch/' + newLink
        ##print(newLink)

        if newLink == 'https://udapps.nss.udel.edu/CoursesSearch/':
            #print(caseCheck)
            break
'''

#main('TestingNamingChangesFinal.csv', 'https://udapps.nss.udel.edu/CoursesSearch/search-results?term=2223&search_type=A&course_sec=&session=All&course_title=&instr_name=&text_info=All&campus=&instrtn_mode=All&time_start_hh=&time_start_ampm=&credit=Any&keyword=&geneduc=&subj_area_code=&college=')
#https://udapps.nss.udel.edu/CoursesSearch/search-results?term=2223&search_type=A&course_sec=&session=All&course_title=&instr_name=&text_info=All&campus=&instrtn_mode=All&time_start_hh=&time_start_ampm=&credit=Any&keyword=&geneduc=&subj_area_code=&college=


#makeDictionaries('bruh')