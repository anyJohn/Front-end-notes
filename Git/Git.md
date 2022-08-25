# Git

## git rebase 变基

### 合并分支

rebase，变基，顾名思义是改变分支的基底。

![before git rebase](./img/git%20rebase%201.PNG)

比如我们从当前个人的开发分支 `dev_john` ，执行 `git rebase master` 命令，就会把 `master` 分支拉取下来，替换掉个人分支之前的提交，然后把个人分支的 commit 接到 `master` 分支的最近提交之后。

![after git rebase](./img//git%20rebase%202.PNG)

所以我们可以用 `git rebase`,`git pull -r`,`git pull --rebase` ,来拉取公共分支的代码到个人分支，这样就不会出现 提交历史中不会出现 `merge` 记录。需要注意的是，**一定不要使用 `rebase` 向公共分支合并代码，这会造成公共分支的历史丢失**。

以`dev_john rebase master` 为例 rebase 的，它的过程是这样的：

- git 取消 dev_john 分支中的每一个 commit
- 把以上操作临时保存为 patch 文件，储存在.git/patch 目录
- dev_john 分支更新到最新的 master 分支
- 将上面保存的 patch 文件应用到 dev_john 分支

### 合并提交记录

在发起 merge-request 时，我们往往需要其他开发人员审阅我们的代码，把同一需求或者 bug 修复的 commit 合并到一起，方便 code-review。或者单纯的觉得大量的碎片化的 commit 不美观。这时候用 git-rebase 就可以搞定。

1. 获取 commit-id，使用`git log`命令，在日志中找到相应的 Hash 值
2. `git rebase -i commit-id`，这条命令会打开一个编辑器页面比如 vim，在这里我们可以看到变基页面的命令。可以使用命令的头字母来代替命令。
   - `pick`，意味着包含提交，重新安排`pick`命令顺序会更改提交的顺序，选择不包括提交应该删除整行。
   - `reword`，与`pick`相似，但是使用后，后续设置可以修改提交信息。
   - `edit`，修改提交，可以更改或者添加提交。
   - `squash`，多个提交合并成一个提交，提交被压缩到上方的提交，后续操作可以修改新的提交信息。
   - `fixup`：类似于`squash`，但是被合并的提交的信息会丢弃，应用较早的提交信息。
   - `exec`：可以提交运行任意的 shell 命令。
3. 合并可以选择`squash`或者`fixup`，如果是把`pick`改成`s`，git 会弹出一个新的编辑页面，在这个页面可以修改合并的这几次的 commit message。
4. 强制推送到远端`git push -f`或者`git push --force`，**请注意，请确保本地分支一定是最新、可用的，而且你了解 rebase 修改了什么，因为强制推送会覆盖远程分支**。

### 清除敏感信息

使用 rebase 修改提交记录，把敏感信息出现的地方抹除

### 修改邮箱、提交人等信息

把别人代码偷过来~

### 清理提交记录

比如切换分支时没有 stash ，产生的多次的 commit 信息
