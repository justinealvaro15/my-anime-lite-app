# MyAnimeLite

This project uses the official public [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2).

The app is made in React for the client and NodeJS/Express for the server.
It uses Material UI for its main UI Library and Redux Toolkit for state handling.

## Getting Started

* First, clone this repository to your local machine.

### Server
* Go to the **server** directory and run `npm install` to install the project dependencies.
* Run `npm run dev` to start the development server.

### Client
* Open another terminal and go to the **client** directory. Run `npm install` to install the project dependencies.
* Add an `.env` file inside **client** directory and add `REACT_APP_MAL_CLIENT_ID=<your key goes here>`
    * You can get your MAL Client ID by [registering](https://myanimelist.net/apiconfig) in the official MAL website or by following [this guide](https://myanimelist.net/blog.php?eid=835707).
    * **[NOTE]** This .env file is important as you won't be able to access the app without it.
* Run `npm start` to start the client.
* Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Screens

### Home Screen

Displays a dashboard with a list of new, upcoming, and top-rated anime from MAL.

![image](https://github.com/justinealvaro15/my-anime-lite-app/assets/38565369/e16233fc-0049-4af0-a769-ec31bb96c2d4)

### Anime List Screen

Displays a list of anime with their synopsis, ratings, genres, etc.

![image](https://github.com/justinealvaro15/my-anime-lite-app/assets/38565369/f29d0f57-ba3c-431a-9b3d-98bf9c405c14)


### Anime Details Screen

Displays a more detailed view of the selected anime.

![image](https://github.com/justinealvaro15/my-anime-lite-app/assets/38565369/b4e7e4fa-45cb-4275-970c-e5ffcc60b45e)

### Profile Screen

Displays the registered user's info and statistics.

![image](https://github.com/justinealvaro15/my-anime-lite-app/assets/38565369/5316f262-9cc1-4213-8723-ce48015211ea)

