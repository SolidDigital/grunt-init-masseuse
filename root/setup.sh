#!/bin/sh
function projectSpecificInitialization(){
    echo "Running Project Specific init"
    echo "add precommit hook"
    if [ -e hooks/pre-commit.sh ]
    then
        cp hooks/pre-commit.sh .git/hooks/pre-commit
        chmod +x .git/hooks/pre-commit
    fi
}


projectSpecificInitialization
exit $?
