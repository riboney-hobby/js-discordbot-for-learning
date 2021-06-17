# Contributing

## How to participate
1. Assign yourself to an open git issue
    * To suggest a new feature or bugfix:
      *  Check it does not already exist first! If it doesn't then:
      *  Open github issue
      *  Label it accordingly
      *  Discuss with project members on discord or through github 
2. Create a branch with `<issue-number>-<branch-descriptor>` naming scheme [ *(see article)*](https://deepsource.io/blog/git-branch-naming-conventions/)
3. Work on assigned issue
    * Try not to go outside the scope of the git issue
      - discuss with project members if you end up having to implement new features outside of the original scope
4. Sync branch with dev
5. Create remote branch and push to that branch
6. Start the [pull request process](#pull-request=process)

## Git workflow: Issue branch workflow
- Branches are created from issues/ tasks 
- Branches have the same name of its issue id#
- One Branch per issue and one issue per branch
- see [article](https://medium.com/flexisaf/git-workflow-for-your-project-3d9dbdc5f8e2)

## Coding Style & Info
* Module System: CommonJS (require & module.exports)
* Syntax: ES6 
* *TODO - describe app structure*

## Testing
*todo*

## Pull Request Process
1. Create branch with correct naming scheme (see [section](#how-to-participate))
2. Ensure code is working properly and passed all tests (see [section](#testing))
3. Open PR (against dev branch)
4. Code review must be completed by running the code and tests, and ensuring code meets our coding standards (see [section](#coding-style))   
    * *review is not necessary if PR is related to documentation or project maintenance*
5. Upon approving PR:
    * Close the github issue that the PR for
    * Delete PR branch
    * Merge PR into `dev` branch (*just merge PR to main if its related to documenation or project maintenance*)

## Deployment
1. Create PR from `dev` branch to `main`
2. Wait for github action deployment job to be finished
3. Check discord if bot is running successfully

## Code of Conduct

*See [Contributors Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.txt)*

## Join us
We are discussing this project on [discord](https://discord.gg/UbryCeN3U8)

