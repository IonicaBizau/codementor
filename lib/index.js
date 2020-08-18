"use strict";

const scrape = require("scrape-it")
    , match = require("match-it")
    , splitByComma = require("split-by-comma")
    ;

const CODEMENTOR_HOST = "https://www.codementor.io/"

module.exports = class CodeMentor {
    /**
     * userUrl
     * Returns the user profile url.
     *
     * @name userUrl
     * @function
     * @param {String} user The CodeMentor username.
     * @returns {String} The user profile url.
     */
    static userUrl (user) {
        return CODEMENTOR_HOST + "@" +user;
    }

    /**
     * mentorProfile
     * Scrapes the mentor profile.
     *
     * @name mentorProfile
     * @function
     * @param {String} user The CodeMentor username.
     * @param {Function} cb The callback function.
     * @returns {Promise} A promise object.
     */
    static mentorProfile (user, cb) {
        return scrape(CodeMentor.userUrl(user), {
            reviews: {
                listItem: "[class^='Review__StyledReview']"
              , data: {
                   avatar: {
                       selector: ".cui-avatar-image > img"
                     , attr: "src"
                   }
                 , content: ".content"
                 , name: {
                       selector: ".name"
                     , eq: 0
                   }
                 , date: ".time"
                }
            }
          , description: ".headline"
          , timezone: {
                selector: ".timezone"
              , how: "text"
            }
          , languages: {
                selector: ".additional-info .languages > span:nth-child(2n)"
              , convert: splitByComma
            }
          , skills: {
                listItem: ".badge.customizeBadge"
            }
          , ratings: {
                selector: ".review-stats .span8 .distribution-row .span3.muted"
              , data: {
                    five: {
                        eq: 0
                      , convert: Number
                    }
                  , four: {
                        eq: 1
                      , convert: Number
                    }
                  , three: {
                        eq: 2
                      , convert: Number
                    }
                  , two: {
                        eq: 3
                      , convert: Number
                    }
                  , one: {
                        eq: 4
                      , convert: Number
                    }
                }
            }
          , name: ".pageTitle"
          , about: ".about"
          , rate: {
                selector: ".topCard > .price > strong"
              , convert: x => parseFloat(x.substring(1))
            }
          , hourRate: {
                selector: ".topCard > .price > strong"
              , convert: x => parseFloat(x.substring(1)) * 4
            }
          , averateRating: {
                selector: ".topCard > strong"
              , convert: Number
            }
          , sessionCount: {
                selector: ".sessionGiven"
              , convert: x => +match(x, /([0-9]+) sessions given/)[1]
            }
          , signUpDate: {
                selector: ".sessionGiven"
              , convert: x => new Date(match(x, /since (.*)/)[1])
            }
          , responseTime: ".mentor-response .avg-time .good.num"
          , likehoodOfReply: ".mentor-response .rate .good.num"
          , expertise: {
                listItem: ".skillModule"
              , data: {
                    name: ".skillName"
                  , years_experience: {
                        selector: ".skillYear"
                      , convert: x => +match(x, /(\d+)/)[1]
                    }
                  , description: ".description"
                  , tags: {
                        listItem: ".tags"
                      , how: "text"
                    }
                }
            }
        }, cb);
    }

    /**
     * mentorReviews
     * Gets the mentor reviews.
     *
     * @name mentorReviews
     * @function
     * @param {String} user The CodeMentor username.
     * @param {Function} cb The callback function.
     * @returns {Promise} A promise object.
     */
    static mentorReviews (user, cb) {
        return CodeMentor.mentorProfile(user, (err, data) => cb(err, data && data.reviews));
    }
};
