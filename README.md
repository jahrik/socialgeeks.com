# SocialGeeks Website
## Tools Used
`gem install jekyll jekyll-s3`

 * jekyll
 * jekyll-s3
 * jekyll-bootstrap #this repository
 * jekyll-bootstrap 'twitter' theme

## Documentation Resources
###Markdown syntax
<http://en.wikipedia.org/wiki/Markdown>

###Jekyll Bootstrap
<http://jekyllbootstrap.com>

###Jekyll rake boilerplate
<http://ellengummesson.com/blog/2012/12/26/jekyll-rake-boilerplate/>

## Workflow
### Get latest site files
`https://github.com/SocialGeeks/socialgeeks.com.git`

''OR'' if you already have repository  

`git checkout master`  
`git pull`

### Create a working branch
`git checkout -b yourbranch`  

### Get jekyll running
This will get jekyll running on the site files so that it automatically generates a new site as you change files.
The --server option puts them up on http://localhost:4000 so you can monitor the changes as you work.  

`cd website`  
`jekyll --safe --server`  

### Working with GIT
Once you have the site to where you are ready to commit add your changes into the repository.  

`git add .`  
`git commit -m 'Your message goes here'`  

If you are NOT ready to merge with master you can push your branch up to GitHub for safe keeping.  

`git push origin yourbranch`  

If you are really sure of what you've done then merge them in with master.  

`git checkout master`  
`git pull`  

If master has changed then you need to rebase your branch off of that.  

	Don't be that guy that forces up a rebase on a branch you are working on with others. Use this for your personal branches.  

`git checkout yourbranch`  
`git rebase master`  

Then merge the changes into master  

`git checkout master`  
`git merge yourbranch`  

And push the changes up to GitHub  

`git push origin master`  

### jekyll-s3 to push up to live site
#### Setup credentials file
You will need to create a file in the website directory named _jekyll_s3.yml with the following contents.  Replace
s3_id and s3_secret with your credentials.  This file is part of the .gitignore so it won't be checked in with your changes.  

	s3_id: ASLKDFJYOURS3IDLKSJDFLKJ  
	s3_secret: ASDdasajYOURS3SECRETlkjasdfASDHJN  
	s3_bucket: socialgeeks.com  

Then from the website directory run jekyll-s3  

`jekyll-s3` 
 
