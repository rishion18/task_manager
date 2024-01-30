Deployed app - https://task-manager-alpha-coral.vercel.app/

1. To Log Out -  Click on Profile picture

2. Dropdowns in app - all dropdowns in app are toggled - you have to click on it again 

Please use
{
  "email": "john@mail.com",
  "password": "changeme"
} 
// as username and password as I have used https://fakeapi.platzi.com/en/rest/auth-jwt for authentication demo

How the app works - 
1. when you sign in access and refresh tokens are generated and erased on logout from local storage.
2. once you log in and close the app , and open it again , it will log you in automatically using refresh token generating both tokens again , and navigate you to Dashboard
3. On DashBoard you can add a task to to-do or in-progress list only , and by clicking on the task name you can add subtasks to a task 
4. once you mark all the subtasks of a task to completed - it will automatically appear in completed list - you can click n all Events to navigate to Dashboard anytime
5. By clicking on trash bin you can delete a task
6. By clicking on three dots of any task ...you can move the task to another list.
7. On clicking Logout , Both tokens are erased and you have to sign in again.
