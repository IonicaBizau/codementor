<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# codementor

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/codementor.svg)](https://www.npmjs.com/package/codementor) [![Downloads](https://img.shields.io/npm/dt/codementor.svg)](https://www.npmjs.com/package/codementor) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> A scraper for codementor.io.






> :bulb: **Hey!** If you need help with JavaScript/CSS/HTML/Git & GitHub, [ping me on CodeMentor](https://www.codementor.io/johnnyb).













## :cloud: Installation

```sh
# Using npm
npm install --save codementor

# Using yarn
yarn add codementor
```













## :clipboard: Example



```js
const CodeMentor = require("codementor");

CodeMentor.mentorProfile("johnnyb", (err, { data }) => {
    console.log(JSON.stringify(data, null, 4));
    // =>
    // {
    //     "reviews": [
    //         {
    //             "avatar": "https://www.gravatar.com/avatar/a4ad...",
    //             "content": "Fantastic Mentor. Highly recommend",
    //             "name": "Tony",
    //             "date": "May 12, 2016"
    //         },
    //         ...
    //     ],
    //     "description": "Full Stack Developer (Node.js & JavaScript)",
    //     "timezone": "Bucharest (+03:00 DST)",
    //     "languages": [
    //         "Romanian",
    //         "English"
    //     ],
    //     "skills": [
    //         "JavaScript",
    //         "HTML/CSS",
    //         "Node.js",
    //         "jQuery",
    //         "Git",
    //         "MongoDB",
    //         "Html",
    //         "CSS",
    //         "Security",
    //         "Shell",
    //         "Vim",
    //         "Command line",
    //         "SVG",
    //         "Google api",
    //         "Cobol"
    //     ],
    //     "ratings": {
    //         "five": 333,
    //         "four": 0,
    //         "three": 0,
    //         "two": 0,
    //         "one": 0
    //     },
    //     "name": "Ionică Bizău (Johnny B.)",
    //     "about": "Hi! My name is Ionică Bizău. If ...",
    //     "rate": 15,
    //     "hourRate": 60,
    //     "averateRating": 5,
    //     "sessionCount": 359,
    //     "signUpDate": "2015-10-15T21:00:00.000Z",
    //     "responseTime": "within an hour",
    //     "likehoodOfReply": "100%",
    //     "expertise": [
    //         {
    //             "name": "JavaScript",
    //             "years_experience": 4,
    //             "description": "I write everyday lot of JS code. ...",
    //             "tags": [
    //                 "jQuery",
    //                 "jQuery UI",
    //                 "jQuery Ajax",
    //                 "Jquery plugins",
    //                 "Javascript plugins"
    //             ]
    //         },
    //         ...
    //     ]
    // }
});
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation


### `userUrl(user)`
Returns the user profile url.

#### Params

- **String** `user`: The CodeMentor username.

#### Return
- **String** The user profile url.

### `mentorProfile(user, cb)`
Scrapes the mentor profile.

#### Params

- **String** `user`: The CodeMentor username.
- **Function** `cb`: The callback function.

#### Return
- **Promise** A promise object.

### `mentorReviews(user, cb)`
Gets the mentor reviews.

#### Params

- **String** `user`: The CodeMentor username.
- **Function** `cb`: The callback function.

#### Return
- **Promise** A promise object.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `codescriptwiz`
 - `devprogrammer`
 - `scriptcodesavvy`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
