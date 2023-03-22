#!/bin/bash
script_pwd=$(cd "$(dirname "$0")"; pwd)
BRANCH=master
REPO=git@bitbucket.org:takemycode/nocode.git
# название папки куда будет пулиться репо
REPO_DIR=/tmp/nocode
last_commit=$(git -C $REPO_DIR rev-parse --short HEAD)
echo $last_commit
git -C $REPO_DIR checkout $BRANCH && git -C $REPO_DIR pull -f || git clone $REPO $REPO_DIR -b $BRANCH
echo $(git -C $REPO_DIR rev-parse --short HEAD)
# Если обновилось запускаем скрипт
if [ "$last_commit" != $(git -C $REPO_DIR rev-parse --short HEAD) ]; then
    node $script_pwd/ci.js $REPO_DIR $script_pwd/../docs
fi