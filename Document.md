# Git Notes
If accidentally push submodule with .git: 
https://stackoverflow.com/questions/47403358/fatal-in-unpopulated-submodule

If pushing a submodule repository inside existing git repository.
Go to each sub repository folder 
- ls al
- delete .gitignore and .gitattributes rm -rf .gitignore .gitattributes
- delete .git directory rm -rd .git 
- cd main_repository_project 
- git rm -r --cached sub-repository-name/
- git add .
- git commit -m "message"
- git push 
