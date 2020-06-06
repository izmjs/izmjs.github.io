<p align="center">
  <a href="https://github.com/izmjs/izmjs">
    <img alt="izmjs" src="https://github.com/izmjs/izmjs.github.io/blob/master/static/izm.png" width="200" />
  </a>
</p>
<h1 align="center">izmjs docs</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ce1882e9-e428-41b4-9ef0-8151f3125e09/deploy-status)](https://app.netlify.com/sites/izmjs/deploys)

#### 🚀 Quick start

[Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and clone the project:

```shell
git clone git@github.com:<your-username>/izmjs.github.io.git
```

#### Start developing.

Navigate into your new site’s directory and start it up.

```shell
cd izmjs.github.io/
npm install # Install dependencies
npm start # Start developing
```

Open the source code and start editing!

Your site is now running at http://localhost:8000

Note: You'll also see a second link: http://localhost:8000/___graphql.

> This is a tool you can use to experiment with querying your data. Learn more about using this tool in the Gatsby tutorial.

#### 🧐 Want to contribute ?

The docs are separated into sections and subsections

If you want to create a new section add a new folder under `izmjs.github.io/src/docs` and make sure the name of your folder is snake-cased afterwards you can go to that section and create a new `mdx` file (also snake-cased) with title of the feature you want to cover.

If your feature you're covering is a bit long, make sure to divide it up with subtitles for example: `## feature` so that the Table of contents can pick it up and display it

When you're done go to the `/config` folder you'll find `sidebar.yml` where you can link your newly added features and so they can show up on the site's navigation.

```yaml
- label: "Section"
  link: "/section"
  items:
    - label: "Sub Section"
      link: "section/sub-section"
    - label: "Sub Section"
      link: "section/sub-section"
    - label: "Sub Section"
      link: "section/sub-section"
```
