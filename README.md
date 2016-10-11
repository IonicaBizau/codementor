
# codementor

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/codementor.svg)](https://www.npmjs.com/package/codementor) [![Downloads](https://img.shields.io/npm/dt/codementor.svg)](https://www.npmjs.com/package/codementor) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A scraper for codementor.io.

> :bulb: **Hey!** If you need help with JavaScript/CSS/HTML/Git & GitHub, [ping me on CodeMentor](https://www.codementor.io/johnnyb).


## :cloud: Installation

```sh
$ npm i --save codementor
```


## :clipboard: Example



```js
const CodeMentor = require("codementor");

CodeMentor.mentorProfile("johnnyb", (err, data) => {
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


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
