# ci-sandbox
[![Jest Status](https://img.shields.io/github/actions/workflow/status/aaronzshey/ci-sandbox/node.js.yml?style=for-the-badge&logo=jest&label=%20&labelColor=%2398435c)](https://github.com/aaronzshey/ci-sandbox/actions/workflows/node.js.yml)[![Chromatic UI Tests Status](https://img.shields.io/github/actions/workflow/status/aaronzshey/ci-sandbox/chromatic.yml?style=for-the-badge&logo=chromatic&label=%20&labelColor=white)](https://github.com/aaronzshey/ci-sandbox/actions/workflows/chromatic.yml)

[![Storybook Permalink](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://main--66a816d0f2be509deaac4861.chromatic.com)

### What is Continuous Integration?

Imagine you're the head honcho of a big company that makes, say, cars, or washing machines.  You probably follow
the waterfall model of management:
  - Salespeople sell your product
  - Store managers get feedback about your product
  - Regional managers condense information from multiple stores and send it to you
  - About once an year, you make sweeping changes to your product and ship a new version.

Information moves slowly - which is good, because it's expensive to make changes to your product (telling manufacturers
to change outputs, could involve many different contractors).  You don't want your valuable time polluted with useless information,
so layers of management make sure you only hear what's important.

While this works great for expensive appliances or machines, it's not so good for software development.
If your app crashes, it needs to be fixed NOW - not an year from now.  Consumers also expect programs to move faster
than traditional appliances (that's why semver exists).

While updates can be pushed easily and quickly, and production builds can change constantly, we can't guarantee
build quality without wasting time inspecting all the changes.  This creates a bottleneck, as ALL the code has to pass
through quality control or testing - which can be slow.

With continuous integration, testing is automated, so any code that reaches production is guaranteed to work.
This smooths out pipelines, so both minor changes and big updates can occur quickly, with changes shipping as soon as
automated tests complete - no need for testing to wake up from last night's big night out and wade through all your code.

# How does it work?

In this project, the main branch is protected by a variety of [actions](https://github.com/aaronzshey/ci-sandbox/actions).
Right now, there are two: Jest tests the code, and Chromatic/Storybook makes sure the UI hasn't changed significantly.

To make edits, you need to make a new branch, make your changes, then open a pull request.  This will trigger the tests,
and if they pass, they're ready for me to merge.  If any tests fail, the pull request won't be allowed to merge.  That's it!
