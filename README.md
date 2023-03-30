## Toy URL

## Introduction

Toy Url is a simple Url Shortening service that takes users URL inputs and returns a short URL that can be used go to the original link they provided. Toy Url eases the stress and difficulties users experience in handling long urls with multiple parameters.

## Overview

This app allows users do the following

- Shorten their lengthy URLS.
- Go to the original link provided via the shortened link.
- Share the shortened Url to various social media platforms.
- Download or share a QR code for the shortened URL

## Tech Stack (Dependencies)

### 1. Backend Dependencies

Our tech stack will include the following:

- **virtualenv** as a tool to create isolated Python environments
- **SQLAlchemy ORM** to be our ORM library of choice
- **SQLite** as our database of choice
- **Python3** and **Flask** as our server language and server framework
  You can download and install the dependencies mentioned above using `pip` as:

```
pip install virtualenv
pip install SQLAlchemy
pip install postgres
pip install Flask
```

> **Note** - If we do not mention the specific version of a package, then the default latest stable package will be installed.

### 2. Frontend Dependencies

You must have the [React JS](https://reactjs.org/) with [TailwindCSS](https://tailwindcss.com/) for the website's frontend. Tailwind can be installed with the Node Package Manager (NPM). Therefore, if not already, download and install [Node.js](https://nodejs.org/en/download/). Windows users must run the executable as an Administrator, and restart the computer after installation. After successfully installing the Node, verify the installation as shown below.

```
node -v
npm -v
```

Install all frontend dependencies with the following command:

```
npm init -y
npm install
```

## Main Files: Project Structure

```sh
├── README.md
├── .gitignore
├── Backend
|   ├── venv
|   ├── requirements.txt *** The dependencies we need to install with "pip3 install -r requirements.txt"
|   └── src
|        ├── app.py *** the main driver of the app.
|        ├── __init.py__
|        └── database
|            ├── models.py *** Includes the SQLAlchemy models.
|            ├── database.db *** The SQLite database.
|            └── __init__.py
|
├── Frontend
│   ├── public
│   └── src
│       ├── tailwind.config.js
│       ├── .env
│       ├── .gitignore
│       ├── postcss.config.js
│       ├── README.md
|       ├── Components
|       ├── Context
|       ├── Pages
|       ├── App.css
|       ├── App.js
|       ├── index.css
|       ├── index.js
|       └── Assets
|           └── SVG

```
