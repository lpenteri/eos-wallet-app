# Contributing

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

Please take the time to read everything below.

## Discussions

All discussion takes place on our [Slack channel](https://tandemly.slack.com).

* Use the `dev-eos-wallet` channel to discuss all concerns around this project
* The `project-eos-wallet` channel is to monitor project updates, please refrain from posting here
* Generally any decisions about the design of the project will be documented in conversation, check Trello or look for pinned items in the Slack channel
* If there's any concerns or questions, reach out to the committer directly on Slack or post on the `dev-eos-wallet` channel

## Reporting Bugs

We are deprecating the use of Github issues in favor of Trello. If you find an issue, post it to the [board](https://trello.com/c/X4P2y40U/12-api-layer).

## Documentation

...is a work in progress. We are still in the process of developing the API. Any new developments may have accompanying documentation.

## Your first contribution

Every contribution to the project starts with a Trello card that's on the board. __Any discussion around an issue or enhancement must be itemized in the form of Trello cards before any work takes place. Not every card will be available to work on, also check to ensure the card does not have an owner before starting a task.__

*Please keep in mind:*

* Please request at least one reviewer on your PR before merging
* All dependencies and techniques demonstrated in this demo app should remain uniquely familiar and simple to a broad audience
* If you take ownership of a Trello card, please be sure to reference the associated PR
* You are responsible for your PR, that means all conflicts, feedback, etc., must be resolved by the PR's before merging
* Due to CI not yet being set up, tests will not catch git artifacts, etc., ensure your code is properly running before merging.
* If you are working on an item, be sure your branch and ongoing work is visible (`git push` your new branches)
* Again, we are not using Github issues

### Tests

For every feature and nearly every file, there should be an accompanying test, at the very least to check if it runs without issue. As logic and new requirements are added, please be sure to update tests as well. Some features of this app do not concern business logic, however they do impact the performance and experience of using the app, for this reason, it is recommended to choose a wise workflow, TDD is not dictated but recommended. :smile:

The file structure of all tests should resemble the line(s) below:

`component/Navbar/Navbar.test.js`

### Communicating breaking changes

Please refer to the [Discussions](#discussions) section.

## Releases :point_left: !important

:warning: Make sure you base your branch from develop! We only merge develop into master when we are doing releases.

![](https://user-images.githubusercontent.com/1743355/29464834-cf9a291c-83fc-11e7-9d98-0434fb1aab27.png)

**NOTE** CI is not set up yet, so we do not deploy to a particular location, nor enforce passing tests before running.

## JavaScript style

Our JavaScript is formatted in the [AirBnB JS style](https://github.com/airbnb/javascript).

## CSS style

Our CSS style is in [AirBnB CSS styleguide](https://github.com/airbnb/css).

