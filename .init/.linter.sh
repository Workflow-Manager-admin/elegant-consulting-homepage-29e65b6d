#!/bin/bash
cd /home/kavia/workspace/code-generation/elegant-consulting-homepage-29e65b6d/frontend_consulting_homepage
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

