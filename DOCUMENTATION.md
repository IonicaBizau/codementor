## Documentation
You can see below the API reference of this module.

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

