# provider 401(k) Finder

### Intro
<p> The goal of this crawler is to submit 401(k) provider sign up form using Puppeteer</p>
<p>
Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.
</p>

<p>This application exposes an endpoint, receiving incoming data 
to be submitted on the provider websites sign up form.
</p>

### Concepts

The scraper receives a list of providers to scrape
from along with an object called the `instructor`.
An `instructor` is a mapping of field and action specification
that the scraper will follow.

The idea behind `instructor`s is to provide a reusable and manageable structure for our scraper.
The `instructor` defines what fields need to filled, how, and when. This provides a layer of abstraction
where updates on the scraper's instructions happens at the `instructor` level
and not in your scraper script.

### TODO

`instructors` are opinionated, further documentation will be provided.



