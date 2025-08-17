A few months ago as I was going through my youtube feed, I came across a video by Traversy media. It was about a new Headless CMS. Having used a few already, I wasn't excited too much. Usually, Headless CMSs are very limited in their functionality and very particular about the stuff they provide and even so, many of these are paid. But as I watched this video, I was more intrigued. It was about Strapi. a Headless CMS based on NodeJS. Strapi had tackled many of the problems inherent in other CMS's pretty well. It provided a solid API, had good documentation and was open-sourced. More than enough to get me started.

![getting ready](https://res.cloudinary.com/pratiek/image/upload/v1603210911/tenor_a2cde7efca.gif)

## Installation

You can install the app using a simple command on your cli. Just execute one of the following depending on your preference:

##### If you prefer npm

```bash
npx create-strapi-app my-strapi-project --quickstart
```

##### If you prefer yarn

```bash
yarn create strapi-app my-strapi-project --quickstart
```

Strapi will install your app. The process will take a while and once it's complete, strapi will greet you with the following message:

![strapi installation complete](https://res.cloudinary.com/pratiek/image/upload/v1603556609/strapi_870d82a1fb.png)

## Registration

Once Installation is complete, strapi also opens up your browser to the page `http://localhost:1337/admin`. You'll see a registration page there. You can use the form to create your first admin user. This user will have all the permissions in your CMS.

![strapi registration page](https://res.cloudinary.com/pratiek/image/upload/v1603557740/strapi_registration_46c8827e9a.png)

Fill up the forms with your desired credentials here and click on the "Let's Start" button.

## Finishing up

After user registration, you should get the admin section on your screen like the one seen below.

![strapi: admin section, welcome page](https://res.cloudinary.com/pratiek/image/upload/v1603560667/strapi_admin_d899b98c1a.png)

##### This admin user interface gives you access to all Strapi components & functionalities. E.g.:

- Use the Content-Types Builder to create new content types which are the prerequisite for managing your data
- Create user, roles and assign permission
- Manage static assets by using the Media Library
- Accessing the Plugins Marketplace to extend Strapi's functionality by adding further plugins

By this point, you have successfully installed strapi, registered an admin user, and logged in to the Admin dashboard. Awesome!

![Great job](https://res.cloudinary.com/pratiek/image/upload/c_scale,q_50:420,w_360/v1603561685/giphy_n5ufvh.gif)

Next, let's check out the Content-Types Builder section. I will be uploading a second part for that. See you there.
