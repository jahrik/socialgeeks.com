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
`jekyll -w server`  

### jekyll-s3 to push up to live site
#### Setup credentials file
You will need to create a file in the website directory named _jekyll_s3.yml with the following contents.  Replace
s3_id and s3_secret with your credentials.  This file is part of the .gitignore so it won't be checked in with your changes.  

	s3_id: ASLKDFJYOURS3IDLKSJDFLKJ  
	s3_secret: ASDdasajYOURS3SECRETlkjasdfASDHJN  
	s3_bucket: socialgeeks.com  

Then from the website directory run jekyll-s3  

`jekyll-s3` 
 
