#!/bin/bash

ulimit -n 8192
SESSIONNAME="web"
tmux has-session -t $SESSIONNAME &> /dev/null

echo $?

if [[ $? == 0 ]]; then
        tmux new -s $SESSIONNAME -n script -d
        tmux send-keys -t $SESSIONNAME "/usr/local/bin/caddy" Enter C-b d
fi