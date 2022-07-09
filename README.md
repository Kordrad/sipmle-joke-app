# Simple Jokes APP

This application was created for presentation purposes. However, it is prepared to connect with the API.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Kordrad/sipmly-joke-app.git
```

Go to the project directory

```bash
  cd sipmly-joke-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:web
```

or start the demo server

```bash
  npm run start:web:demo
```

## API Reference

#### Add new joke

```http
  POST *API_URL*/joke
```

| Parameter  | Type     | Description                                |
| :--------- | :------- | :----------------------------------------- |
| `category` | `GUID`   | **Required**. GUID of existing category    |
| `content`  | `string` | **Required** Your funny joke. Be creative! |

#### Get Jokes list

```http
  GET *API_URL*/jokes
```

#### Get Random Joke

```http
  GET *API_URL*/joke/random
```

#### Delete joke

```http
  DELETE *API_URL*/joke/:id
```

| Parameter | Type   | Description                         |
| :-------- | :----- | :---------------------------------- |
| `id`      | `GUID` | **Required**. GUID of existing joke |

#### Get Categories list

```http
  GET *API_URL*/categories
```
