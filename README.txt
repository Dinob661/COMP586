Creator: Dino Biel
Class: Comp586
Project Name: BringPi

Hello and welcome to my projects GitHub! This document is designed to help you navigate my project to find the specific
elements we are being graded on. so with that lets get right in to it!
---------------
1) MVC
---------------
a) In BringPiBackend folder you will find my ASP.NET Core 2.0 backend this contains
 - Models Folder
 - Controllers Folder
 
 b) In frontend you will find my Angular 2 portion which handles all the Views for my project
 
---------------
2) SPA
---------------
- This project is a Single Page Application which uses Routes to switch between different views in Angular 2. The bulk of
my routing is handled in "frontend/src/app/nav.component.ts" although there are some other routes handled in different ts files.

------------------------------------
3) Two Tables with FK Relationship
------------------------------------
This can be found in: "BringPiBackend/BringPi/Models"
- In this folder you will fine 3 files: "Messages.cs", "Users.cs" "ApiContext.cs"

The Messages and Users files are used to create the "Messages" and "User" tables in my DB
- The Foriegn key relationship is established between OwnerId (from Messages) and Id (from Users)
- You can see the creation of this relationship in the "ApiContext.cs" file

------------------------------------
4) ORM
------------------------------------
Conviently enough, if you have the Models file open from #3 you will also see ORM in action here as I use EntityFrameWork Core for ORM


------------------------------------
5) Authentication and Authorization
------------------------------------
Authentication:
You can find examples of my Authentication in: "BringPiBackend/BringPi/Controllers/AuthController.cs" and BringPiBackend/BringPi/Startup.cs"

Authorization:
You can find examples of my Authorization in: "frontend/src/app/nav.component.ts" where I don't let the users do specific actions unless they
have successfully logged in. Also I do not let people access the ability to post messages or even see the tab unless they are logged in.

------------------------------------
6) Unit Testing
------------------------------------
Backend:
Backend unit testing can be found: "BringPiBackend\xUnitBringPiTesting" where I have 1 file that does 2 Unit Tests:
- Mocks my post function (simulates post to a inMemoryDB and then checks to see if messages was posted)
- Mocks my Get function  (Uses seeded data to InMemoryDB and checks to see if it successfully returns message from DB)

Frontend:
Frontend unit testing can be found: "frontend/src/app/login.component.spec.ts" where I have 1 unit test:
- I test my login.component which has dependency injection (required)

------------------------------------
7) Solid Principles
------------------------------------
This one is not so easy to point out as it is spread out through my project however I can make the following assertions:

S - I do have Single Responsibility principle throughout my project
O - My project is open for extension and closed for modification
L - Liskov substitution principle I still don't quite understand and followed this to the best of my ability
I - I did not do any interfacing in this project so I cannot assert this.
D - This can be found throughout my front end and a good example of this can be found here: "frontend/src/app/new-message.component.ts"

------------------------------------
8) CRUD
------------------------------------
This was not a requirement per-se, but users have the ability to:
Create - Messages and accounts
Read - Users have the ability to retrieve and view their own messages or any other users message (by clicking on the users name in a message)
Update - Users have the ability to update email, password, and first and last name
Delete - Users have the ability to delete their accounts

------------------------------------
9) Other Notes
------------------------------------
I believe I touched on all the requirements. If I have missed anything feel free to check my project for those attributes as well.
I hope this document was helpful, and thank you for a great semester Felix I definitely learned a lot. 