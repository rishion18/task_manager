Deployed app - https://task-manager-alpha-coral.vercel.app/

Please use
{
  "email": "john@mail.com",
  "password": "changeme"
} 
// as username and password as I have used https://fakeapi.platzi.com/en/rest/auth-jwt for authentication demo

How the app works - 
when you sign in access and refresh tokens are generated and erased on logout from local storage.
once you log in and close the app , and open it again , it will log you in automatically using refresh token generating both tokens again , and navigate you to Dashboard
On DashBoard you can add a task to to-do or in-progress list only , and by clicking on the task name you can add subtasks to a task 
once you mark all the subtasks of a task to completed - it will automatically appear in completed list - you can click n all Events to navigate to Dashboard anytime
By clicking on trash bin you can delete a task
By clicking on three dots of any task ...you can move the task to another list.
On clicking Logout , Both tokens are erased and you have to sign in again.
