## ASDDC (Automated Stimulus Display and Data Collection)
This is the work-in-progress of an application that will be used in experimental research for a doctoral dissertation studying human behavior, learning, and complex problem solving. When it comes to learning, the automation of stimulus delivery and performance calculations can help improve learning by increasing the speed of delivery of information, calculation of performance, and decision making to move a learner along based on their in-the-moment performance. In research, the accuracy of calculations is improved, maintains consistency across participants, and collects data immediately as behavior occurs. 

## Link to the Front-End
## Link to Back-End

## Motivation
I believe that research in Behavior Analysis can greatly benefit from taking advantage of the technology that is available for use in research. Not only does it increase the speed an accuracy of the research itself, but it also informs us of how technology can be use to improve the everyday lives of those being studied. The thing about creating software for a study is that if you don't know how to do it yourself, you have to be able to communicate your needs to a web developer and so so clearly--hoping nothing gets lost in translation (and that what you measure is actually correct). I was and am motivated to learn about the key requirements in communicating effectively and the details of what is really required to build an application. With that knowledge I can go on to create apps for future research and help others bridge the gap between researchers and developers.

## Technologies Used
React
SqlAlchemy
Flask
HTML
Javascript
CSS

##### Screenshot(s) 
![Home](ASDDC-frontend/screenshots/01-home.png)
![developer](ASDDC-frontend/screenshots/02-developer.png)
![researcher](ASDDC-frontend/screenshots/03-researcher.png)
![urlconstructor](ASDDC-frontend/screenshots/04-urlconstructor.png)
![createparticipant](ASDDC-frontend/screenshots/05-createparticipant.png)
![allparticipants](ASDDC-frontend/screenshots/06-allparticipants.png)
![editparticipant](ASDDC-frontend/screenshots/07-editparticipant.png)

![welcome](ASDDC-frontend/screenshots/08-welcome.png)
![instructions](ASDDC-frontend/screenshots/09-instructions.png)
![samplestimulus](ASDDC-frontend/screenshots/10-samplestimulus.png)
![dct trial](ASDDC-frontend/screenshots/11-dcttrial.png)
![namsttrial](ASDDC-frontend/screenshots/12-namtstrial.png)
![tsftrial](ASDDC-frontend/screenshots/13-tsftrial.png)
![spsample](ASDDC-frontend/screenshots/14-spsample.png)
![sptrial](ASDDC-frontend/screenshots/15-sptrial.png)
## ERD, Wireframe, & User Stories
Researcher
•	As a user, I will be able to create new participants.
•	As a user, I will be able to use a URL constructor to generate a URL pattern to provide each participant (containing pertinent participant information). 
•	As a user, I will be able to change a participant’s status from active to inactive.
•	As a user, I will view a dashboard that summarizes all the experimental groups and their associated modules.
•	As a user I will see on the dashboard a description next to each module and an active link to that module page. 
•	As a user I will be able to access and test all modules as participant 1.
•	As a user I want to search for raw data for a specific participant, dyad pair, experimental group and view the search results on a table.
STRETCH: As a used I would like to export search results to an excel spreadsheet.

Participant
•	As a user I will access ASSDC via a URL provided to me. 
•	As a user I will be led through a module sequence based on my assigned experimental group and task performance. 
•	As a user, during each module I will be presented with instructions and task trails.
•	As a user, on each trial, I will observe visible stimuli and respond by clicking on stimuli or typing a response into the input field. 
•	As a user, on trials that include feedback I will see either a black screen following incorrect responses or a firework display. 
•	As a user, on trials the exclude feedback I will see a gray screen.


![ERD](ASDDC-frontend/screenshots/p4-erd.png)
![Wireframe](ASDDC-frontend/screenshots/p4-wireframe-researcher.png)
![Wireframe](ASDDC-frontend/screenshots/p4-wireframe-participant1.png)
![Wireframe](ASDDC-frontend/screenshots/p4-wireframe-participant2.png)


## Future Development
Future iterations will include differential feedback, sound recording, sound stimulus presentation, and stimulus delivery and data collection for all other phases of this study.
