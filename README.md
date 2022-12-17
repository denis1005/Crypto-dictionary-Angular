<p align="center">

  ![Home](https://user-images.githubusercontent.com/19151979/208242678-b31aba2f-0cea-4bbd-9686-6a9d560b941d.PNG)
</p>

<h3 align="center">Crypto dictionary</h3>



<p align="center"> 
This is my angular project for softuni defense for the Angular  course: 
https://softuni.bg/trainings/3856/angular-november-2022
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Contributing](../CONTRIBUTING.md)
- [Usage](#usage)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
The project is amateur in which you can see a collection of crypto-currencies, the price of which is monitored, as well as each crypto-currency has detailed information about it in a separate page when clicked. I have a collection of memes which, depending on whether the user is a gues or a registered user, has access to different actions. There is a news section where you can see 15 popular news on the topic. There is a shop section where there are various items that the logged in user can take advantage of.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.


### Installing
A step by step series of examples that tell you how to get a development env running.

Open the server folder  in integrated terminal 
and type:

```bash
 node server.js
```

Open the project folder in integrated terminal 
and type:

```bash
 npm i
```

nstalls a package and any packages that it depends on


```bash
 ng s -o
```


To start the angular project in localhost:4200

## 🎈 Usage <a name="usage"></a>

The application have:

  -	public part (accessible without authentication)- (Home, Login, Register, News, Memes, Store, StoreItemDetails, CryptoDetails, MemeDetails)
  -	private part (available for registered users)- (Profile, ProfileMemeCollection, AddMeme, Orders, Logout, Card)

If a user tries to access something they don't have access to. If he needs to be logged in, it will forward him to the login page, if he does not have the right to edit/delte/create, he will forward him to the 404 page.


Each form has a validation date. 
It will not show the user the necessary information if the data is entered incorrectly. Here is an example.

![validation](https://user-images.githubusercontent.com/19151979/208244998-dad4561d-b00b-4b30-9c74-9b4a609993d7.PNG)

If the error comes from the server it will show the error message to the user


![logingeerr](https://user-images.githubusercontent.com/19151979/208245058-652cb5bb-2ced-4831-9b61-bd0d4c885dc6.PNG)


If the user tries to go to a page that it is non existent, it will redirect him to 404

![404](https://user-images.githubusercontent.com/19151979/208245148-41913403-3765-48b3-b306-21de51894f07.PNG)



## 🚀 Deployment <a name = "deployment"></a>

You can also open live the site at:

https://crypto-dictionary-angular.web.app/

## ⛏️ Built Using <a name = "built_using"></a>
- [Angular](https://vuejs.org/) - Web Framework
- [NodeJs](https://github.com/softuni-practice-server/softuni-practice-server) - Server Environment


## ✍️ Author <a name = "authors"></a>
- [@denis1005](https://github.com/denis1005) 

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- https://codepen.io/
- https://softuni.bg/
- https://render.com/
- https://firebase.google.com/ 


