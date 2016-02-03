# WebLabs
##Let's get lost in the Internet

How to merge:
* 1 Synchronize master with origin master (repository)
```
     [master] $ git pull master
```
* 2 Go on the branch you want to merge
```
     [master] $ git checkout
```
* 3 Merge master
```
     [branch] $ git merge master
```
* 4 Resolve conflicts, test and commit
```
    [branch] $ git commit -m "conflicts informations"
```
* 5 Push branch on origin branch
```
    [branch] $ git push origin branch
```
* 6 Pull-request on GitHub
* 7 Peer review and authorize merge
      If not authorize rework on the branch and re-merge later.
