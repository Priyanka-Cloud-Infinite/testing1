#!/bin/bash

c=$(ls -l /var/www/testing1/ | wc -l)

if [ $c -gt 0 ]
then
  cd /var/www/testing1
 
  rm -fr *
  rm -fr .git*
else
  echo "Empty"
fi
