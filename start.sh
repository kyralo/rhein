#!/bin/sh

rm -f tpid

nohup yarn start > stak.log 2>&1 &

echo Start Success!
