#!/bin/bash
export NODE_DEBUG=HTTP,STREAM,MODULE,NET
node --trace `pwd`/helloWorld.js 1>helloWorld.log 2>&1