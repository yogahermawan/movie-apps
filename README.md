# Movies ~ Apps
I made this movie-apps application, using single-page application (SPA) and ```API``` from TMDb movie, `API` from TMDb is very complete and can be used according to individual tastes.
API : https://developer.themoviedb.org/reference/intro/getting-started

1. List View:
   - there is a film trending menu and a film list, which can be grouped or filtered by genre
3. Detail View:
   - detail view show the detail from movie with click trigger
   - show the detail movie with data provided by TMDB
5. User Interaction:
   - if mouse hover on list view, card can be scale to 1
   - Here you can also add and list your favorite films by clicking the add favorite button
6. State Management:
   - here i use Recoil for state management, i use for get part of data for display to list view
7. Responsiveness & Styling:
   - here i use bootstrap and custom css only, I prefer basic styling using CSS

For deployment I use Vercel with auto CI/CD, you can access it here : 
https://movie-apps-three.vercel.app/ 
